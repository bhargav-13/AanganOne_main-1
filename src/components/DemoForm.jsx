import { useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import { SITE } from '../data/site'

const EMPTY = {
  societyName: '',
  contactPersonName: '',
  email: '',
  contactNumber: '',
  city: '',
  societySize: '',
  message: '',
  company: '', // honeypot — real people never see or fill this
}

/* Set VITE_LEAD_ENDPOINT to a form endpoint (Formspree, Web3Forms, your own API)
   and enquiries post there. Without it, the form falls back to the visitor's
   mail client so a lead is never silently lost. */
const ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT

const RULES = {
  societyName: (v) => (v.trim().length < 2 ? 'Please enter the society name.' : ''),
  contactPersonName: (v) => (v.trim().length < 2 ? 'Please enter a contact name.' : ''),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email address.'),
  contactNumber: (v) =>
    v.replace(/\D/g, '').length < 10 ? 'Enter a phone number with at least 10 digits.' : '',
  city: (v) => (v.trim().length < 2 ? 'Please enter your city.' : ''),
  societySize: (v) => (v ? '' : 'Please choose a society size.'),
}

/** Label + control + inline error, wired up for screen readers. */
function Field({ id, label, as = 'input', type = 'text', error, children, ...rest }) {
  const Control = as
  const errorId = `${id}-error`

  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label} *
      </label>

      <Control
        id={id}
        name={id}
        type={as === 'input' ? type : undefined}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`field ${error ? 'border-terracotta-500 focus:border-terracotta-500' : ''}`}
        {...rest}
      >
        {children}
      </Control>

      {error && (
        <p id={errorId} className="mt-2 text-[13px] leading-snug text-terracotta-600">
          {error}
        </p>
      )}
    </div>
  )
}

function DemoForm({ id = 'demo', n = '09' }) {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | mailto | sent | error

  const validate = (values) =>
    Object.entries(RULES).reduce((acc, [field, rule]) => {
      const msg = rule(values[field] ?? '')
      if (msg) acc[field] = msg
      return acc
    }, {})

  const update = (e) => {
    const { name, value } = e.target
    const next = { ...form, [name]: value }
    setForm(next)
    // Once a field has been flagged, correct the message as they type.
    if (touched[name]) setErrors(validate(next))
  }

  const onBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate({ ...form }))
  }

  const buildBody = () =>
    [
      `Society name: ${form.societyName}`,
      `Contact person: ${form.contactPersonName}`,
      `Email: ${form.email}`,
      `Phone: ${form.contactNumber}`,
      `City: ${form.city}`,
      `Society size: ${form.societySize}`,
      '',
      form.message,
    ].join('\n')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Bot filled the hidden field — pretend success and drop it.
    if (form.company) {
      setStatus('sent')
      return
    }

    const found = validate(form)
    setErrors(found)
    setTouched(Object.keys(RULES).reduce((a, k) => ({ ...a, [k]: true }), {}))

    if (Object.keys(found).length > 0) {
      document.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus()
      return
    }

    if (ENDPOINT) {
      setStatus('sending')
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...form, company: undefined, _subject: `Demo request — ${form.societyName}` }),
        })
        if (!res.ok) throw new Error(String(res.status))
        setStatus('sent')
        setForm(EMPTY)
        return
      } catch {
        setStatus('error')
        return
      }
    }

    // No endpoint configured — hand the enquiry to the visitor's mail client.
    window.location.href = `mailto:${SITE.sales}?subject=${encodeURIComponent(
      `Demo request — ${form.societyName}`,
    )}&body=${encodeURIComponent(buildBody())}`

    setStatus('mailto')
    setForm(EMPTY)
  }

  const sent = status === 'sent' || status === 'mailto'

  return (
    <section id={id} className="band bg-sand-50">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          {/* Left — the ask */}
          <div>
            <div className="rule-strong" />
            <div className="flex items-baseline gap-3 pt-6">
              <span className="font-mono text-[11px] text-ink-300">{n}</span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-wider2 text-terracotta-500">
                Get started
              </span>
            </div>

            <h2 className="display-l mt-6 max-w-[13ch]">
              Bring your society <span className="serif-italic text-indigo-600">in</span>.
            </h2>

            <p className="lede mt-6 max-w-[42ch]">
              Tell us about the place and we'll walk your committee through it — the gate flow, the
              billing cycle and the resident app — on a call that fits your schedule.
            </p>

            <div className="mt-10 space-y-0">
              <div className="rule" />
              {[
                { label: 'Call', value: SITE.phonePrimary, href: SITE.phonePrimaryHref },
                { label: 'Email', value: SITE.sales, href: `mailto:${SITE.sales}` },
                { label: 'Coverage', value: 'Societies across India', href: null },
              ].map((c) => (
                <div key={c.label} className="flex items-baseline justify-between gap-4 border-b border-[color:var(--rule-soft)] py-4">
                  <span className="index-label">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} className="link-rule text-[15px]">
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-[15px] font-medium text-ink-900">{c.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — the form */}
          <Reveal delay={100}>
            <div className="rounded-card bg-white p-8 shadow-paper sm:p-12">
              {sent ? (
                <div className="flex min-h-[440px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-pill bg-indigo-50 text-indigo-600">
                    <Icon name="check" className="h-7 w-7" strokeWidth={2} />
                  </span>

                  {status === 'sent' ? (
                    <>
                      <h3 className="display-m mt-7">Enquiry received</h3>
                      <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-ink-500">
                        Thank you — we have your society's details and will get back to you within
                        one business day. If it is urgent, call {SITE.phonePrimary}.
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="display-m mt-7">Almost there</h3>
                      <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-ink-500">
                        Your mail app should have opened with the enquiry ready to send. If it
                        didn't, write to{' '}
                        <a href={`mailto:${SITE.sales}`} className="link-rule">
                          {SITE.sales}
                        </a>{' '}
                        or call {SITE.phonePrimary}.
                      </p>
                    </>
                  )}

                  <button type="button" onClick={() => setStatus('idle')} className="btn-line mt-9">
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                  {/* honeypot — hidden from people, catches bots */}
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={update}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  />

                  <div className="grid gap-7 sm:grid-cols-2">
                    <Field id="societyName" label="Society name" value={form.societyName} error={errors.societyName} onChange={update} onBlur={onBlur} placeholder="Shaligram Residency" autoComplete="organization" />
                    <Field id="contactPersonName" label="Contact person" value={form.contactPersonName} error={errors.contactPersonName} onChange={update} onBlur={onBlur} placeholder="Committee secretary" autoComplete="name" />
                  </div>

                  <div className="grid gap-7 sm:grid-cols-2">
                    <Field id="email" type="email" label="Email" value={form.email} error={errors.email} onChange={update} onBlur={onBlur} placeholder="you@society.com" autoComplete="email" />
                    <Field id="contactNumber" type="tel" label="Phone" value={form.contactNumber} error={errors.contactNumber} onChange={update} onBlur={onBlur} placeholder="+91 00000 00000" autoComplete="tel" />
                  </div>

                  <div className="grid gap-7 sm:grid-cols-2">
                    <Field id="city" label="City" value={form.city} error={errors.city} onChange={update} onBlur={onBlur} placeholder="Ahmedabad" autoComplete="address-level2" />

                    <Field
                      id="societySize"
                      label="Society size"
                      as="select"
                      value={form.societySize}
                      error={errors.societySize}
                      onChange={update}
                      onBlur={onBlur}
                    >
                      <option value="">Select units</option>
                      <option>Under 50 units</option>
                      <option>50 – 150 units</option>
                      <option>150 – 500 units</option>
                      <option>500+ units / multi-tower</option>
                    </Field>
                  </div>

                  <div>
                    <label className="field-label" htmlFor="message">Anything specific? (optional)</label>
                    <textarea id="message" name="message" rows="3" value={form.message} onChange={update} className="field resize-none" placeholder="What is your committee struggling with today?" />
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="rounded-[10px] bg-terracotta-100 px-4 py-3 text-[14px] leading-snug text-terracotta-700">
                      That didn't go through. Please try again, or email{' '}
                      <a href={`mailto:${SITE.sales}`} className="font-semibold underline">
                        {SITE.sales}
                      </a>
                      .
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="max-w-[26ch] font-mono text-[10.5px] uppercase tracking-wider2 text-ink-400">
                      No obligation · reply within a business day
                    </p>
                    <button type="submit" className="btn-ink" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending…' : 'Request my demo'}
                      <Icon name="arrow" className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default DemoForm
