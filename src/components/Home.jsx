import Navbar from './Navbar'
import Hero from './Hero'
import SocietiesMarquee from './SocietiesMarquee'
import ProblemSolution from './ProblemSolution'
import FeaturesSection from './FeaturesSection'
import FlowsSection from './FlowsSection'
import GateJourney from './GateJourney'
import DayInLife from './DayInLife'
import CourtyardScene from './CourtyardScene'
import RolesSection from './RolesSection'
import StepsSection from './StepsSection'
import IncludedSection from './IncludedSection'
import AppShowcase from './AppShowcase'
import ComparisonTable from './ComparisonTable'
import ImpactSection from './ImpactSection'
import TrustSection from './TrustSection'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import DemoForm from './DemoForm'
import Footer from './Footer'
import SEO from './SEO'
import { FAQS } from '../data/site'

function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aanganone.com/' }],
  }

  return (
    <div className="min-h-screen bg-paper">
      <SEO
        title="AanganOne — Smart Society, Apartment & Community Management App"
        description="AanganOne digitises society management end to end: QR visitor entry, maintenance billing with UPI payments, complaints, notices, staff and parking — one app for residents, admins, committees and guards."
        keywords="society management app, apartment management software, community management platform India, QR visitor entry, maintenance billing app, RWA software, gated community app"
        url="https://aanganone.com/"
        schema={[faqSchema, breadcrumbSchema]}
      />

      <Navbar />

      <main id="main">
        <Hero />
        <SocietiesMarquee />
        <ProblemSolution />
        <FeaturesSection />
        <GateJourney n="03" />
        <FlowsSection n="04" />
        <DayInLife n="05" />
        <CourtyardScene />
        <RolesSection n="06" />
        <StepsSection n="07" />
        <IncludedSection n="08" />
        <AppShowcase n="09" />
        <ComparisonTable n="10" />
        <ImpactSection n="11" />
        <TrustSection n="12" />
        <Testimonials n="13" />
        <FAQ n="14" />
        <DemoForm n="15" />
      </main>

      <Footer />
    </div>
  )
}

export default Home
