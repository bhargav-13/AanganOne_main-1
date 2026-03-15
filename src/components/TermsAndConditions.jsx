import Navbar from './Navbar';
import FadeIn from './FadeIn';
import { Link } from 'react-router-dom';
import './TermsAndConditions.css';
import SEO from './SEO';

function TermsAndConditions() {
    return (
        <div className="privacy-policy-page">
            <SEO
                title="Terms and Conditions - AanganOne"
                description="Read the Terms and Conditions for using the AanganOne platform. Understand your rights and responsibilities as a user."
                url="https://aanganone.com/terms-and-conditions"
            />
            <Navbar simple={true} />

            <div className="privacy-policy-content-wrapper">
                <section className="privacy-policy">
                    <div className="container">
                        <div className="privacy-label">
                            <div className="privacy-label-icon">
                                <img src="/images/twemoji_house.svg" alt="House" className="badge-icon-img" />
                            </div>
                            <span>Terms & Conditions</span>
                        </div>
                        <h1 className="section-title">Terms and Conditions</h1>
                        <p className="section-subtitle">These Terms and Conditions (“Terms”) govern your access to and use of the AanganOne website (<a href="https://www.aanganone.com/" target="_blank" rel="noopener noreferrer">https://www.aanganone.com/</a>), mobile application, software, and related services (collectively, the “Platform”).</p>

                        <div className="privacy-content">
                            <div className="privacy-section">
                                <p>By accessing, registering on, or using AanganOne, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not access or use the Platform. This structure is consistent with standard platform terms used by comparable property/community platforms.</p>
                                <p>For these Terms, “AanganOne”, “Company”, “we”, “our”, or “us” means <strong>AanganOne Space Private Limited</strong>, a company incorporated under applicable law, having its registered office at <strong>Rajkot, Gujarat, India</strong>.</p>
                                <p>“User, “you, or “your” means any person or entity who accesses or uses the Platform, including but not limited to residents, owners, tenants, family members, committee members, association representatives, security personnel, facility managers, staff members, merchants, service providers, and website visitors.</p>
                            </div>

                            <div className="privacy-section">
                                <h2>1. Acceptance of Terms</h2>
                                <div className="privacy-item">
                                    <p>By using the Platform, you confirm that you have read, understood, and agreed to these Terms and the Privacy Policy. If you are using AanganOne on behalf of a housing society, apartment association, resident welfare association, management committee, company, or any other legal entity, you represent that you are authorized to bind such entity to these Terms.</p>
                                    <p>If you are under the age of 18, you may use the Platform only through or under the supervision of a parent, legal guardian, or authorized adult.</p>
                                    <p>We may update these Terms from time to time. Continued use of the Platform after any update constitutes your acceptance of the revised Terms.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>2. About AanganOne</h2>
                                <div className="privacy-item">
                                    <p>AanganOne is a digital society and community management platform that may provide one or more of the following services:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>resident and unit management</li>
                                        <li>visitor entry and approval workflows</li>
                                        <li>gate/security assistance tools</li>
                                        <li>community announcements and notices</li>
                                        <li>complaint, ticket, or helpdesk management</li>
                                        <li>amenity booking</li>
                                        <li>maintenance billing and records</li>
                                        <li>staff attendance or staff access management</li>
                                        <li>delivery and visitor logs</li>
                                        <li>communication and engagement tools</li>
                                        <li>digital records and society operations support</li>
                                        <li>integrations with third-party communication, payment, analytics, or infrastructure services</li>
                                        <li>any additional features introduced by AanganOne from time to time</li>
                                    </ul>
                                    <p>Some features may not be available in all communities, subscriptions, plans, app versions, or geographies.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>3. Eligibility and Account Registration</h2>
                                <div className="privacy-item">
                                    <p>To use certain features of the Platform, you may need to create an account or be added to the Platform by your society, committee, administrator, or authorized representative.</p>
                                    <p>You agree that:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>all registration information provided by you is true, accurate, current, and complete</li>
                                        <li>you will promptly update your information if it changes</li>
                                        <li>you will maintain the confidentiality of your login credentials</li>
                                        <li>you are responsible for all activities carried out through your account</li>
                                        <li>you will immediately notify us if you suspect unauthorized use of your account</li>
                                    </ul>
                                    <p>We reserve the right to verify your identity, unit details, residency status, mobile number, email address, or relationship to a particular property or community.</p>
                                    <p>We may refuse registration, suspend access, or deactivate an account if we believe information provided is false, misleading, incomplete, unauthorized, or creates legal, operational, or security risks.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>4. Types of Users</h2>
                                <div className="privacy-item">
                                    <p>The Platform may support different categories of users, and different rights may apply to each category. These may include:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>property owners</li>
                                        <li>tenants</li>
                                        <li>residents or family members</li>
                                        <li>association or committee members</li>
                                        <li>admins or super-admins</li>
                                        <li>security guards or gate staff</li>
                                        <li>maintenance or facility staff</li>
                                        <li>service vendors</li>
                                        <li>guests, invitees, or temporary access users</li>
                                    </ul>
                                    <p>Your rights on the Platform depend on the role assigned to you by AanganOne, your community, or an authorized administrator.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>5. Society / Association / Enterprise Accounts</h2>
                                <div className="privacy-item">
                                    <p>If a housing society, apartment association, resident welfare association, builder, property manager, or other entity signs up for AanganOne, such entity is responsible for:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>ensuring it has the authority to onboard the community and share relevant data with AanganOne</li>
                                        <li>obtaining any resident, owner, tenant, or staff approvals required under applicable law or internal policies</li>
                                        <li>assigning authorized admins and managing their permissions</li>
                                        <li>ensuring notices, workflows, invoices, and other records shared on the Platform are accurate and lawful</li>
                                        <li>using the Platform in accordance with applicable laws, housing by-laws, and local regulations</li>
                                    </ul>
                                    <p>AanganOne acts as a technology service provider unless expressly agreed otherwise in writing. We do not become the managing committee, legal representative, employer, security agency, debt collector, or statutory authority of any community merely by providing the Platform.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>6. User Responsibilities</h2>
                                <div className="privacy-item">
                                    <p>You agree to use the Platform responsibly and lawfully. You shall not:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>impersonate another person or entity</li>
                                        <li>use false identity, false residency, or false contact details</li>
                                        <li>share misleading visitor, delivery, or staff information</li>
                                        <li>upload illegal, obscene, defamatory, harassing, hateful, or infringing content</li>
                                        <li>use the Platform to threaten, abuse, stalk, or harm any person</li>
                                        <li>interfere with security operations, access logs, or gate processes</li>
                                        <li>disrupt community operations or misuse admin privileges</li>
                                        <li>attempt to access accounts, data, or systems without authorization</li>
                                        <li>reverse engineer, copy, scrape, or exploit the Platform</li>
                                        <li>spread malware, spam, phishing links, or malicious code</li>
                                        <li>use bots, scripts, or automated tools without our prior written consent</li>
                                        <li>use the Platform in violation of applicable law</li>
                                    </ul>
                                    <p>You are solely responsible for the content, approvals, instructions, and requests initiated from your account.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>7. Visitor, Staff, and Access Features</h2>
                                <div className="privacy-item">
                                    <p>AanganOne may allow users to create visitor invitations, grant or deny access, maintain visitor logs, manage gate approvals, record delivery entries, or support staff attendance and access control.</p>
                                    <p>You understand and agree that:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>visitor access decisions are based on information entered by users, residents, admins, guards, or community operators</li>
                                        <li>AanganOne does not physically verify the identity, conduct, criminal history, or reliability of any visitor, resident, worker, vendor, or staff member unless explicitly stated otherwise</li>
                                        <li>digital records, OTP-based approvals, QR codes, passcodes, and access flags are technology aids and not guarantees of safety</li>
                                        <li>the final responsibility for physical entry permissions and on-ground verification remains with the resident, community, society, building staff, and/or authorized personnel</li>
                                    </ul>
                                    <p>AanganOne is not a substitute for on-ground security judgment, law enforcement, emergency response, or mandatory identity verification practices.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>8. Community Notices, Communication, and User Content</h2>
                                <div className="privacy-item">
                                    <p>The Platform may allow users or admins to post notices, updates, chats, announcements, polls, complaints, responses, comments, attachments, or other content (“User Content”).</p>
                                    <p>You retain ownership of User Content created by you, but by posting or uploading it to the Platform, you grant AanganOne a non-exclusive, worldwide, royalty-free, limited license to host, store, reproduce, transmit, display, and process such content solely for the purposes of operating, improving, securing, and supporting the Platform.</p>
                                    <p>You represent that:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>you own the rights in the content you upload, or have lawful permission to use it</li>
                                        <li>your content does not violate any law or third-party rights</li>
                                        <li>your content is accurate to the best of your knowledge</li>
                                        <li>your content does not contain viruses, malware, or unlawful material</li>
                                    </ul>
                                    <p>We may remove, restrict, or review any User Content that violates these Terms or poses risks to the Platform, users, or third parties.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>9. Billing, Maintenance, Payments, and Financial Features</h2>
                                <div className="privacy-item">
                                    <p>If AanganOne provides billing, invoicing, maintenance tracking, collection support, wallet, payment links, or payment gateway integrations, the following shall apply:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>payment features may be enabled directly by AanganOne or through third-party payment providers</li>
                                        <li>all amounts displayed on the Platform are subject to verification and may include or exclude taxes as stated</li>
                                        <li>users are responsible for reviewing payment details before making payment</li>
                                        <li>a society, association, or billing authority is responsible for the correctness of maintenance dues, invoices, penalties, due dates, and calculations entered by it</li>
                                        <li>AanganOne is not responsible for errors in billing data supplied by a society, association, admin, or third party</li>
                                        <li>refunds, reversals, chargebacks, settlement delays, failed transactions, and banking issues may be subject to the terms of the applicable payment provider and internal refund policy</li>
                                        <li>transaction records shown on the Platform may be subject to reconciliation and bank confirmation</li>
                                    </ul>
                                    <p>Where payment services are used, additional payment-related terms may apply.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>10. Fees and Subscription</h2>
                                <div className="privacy-item">
                                    <p>AanganOne may offer free, paid, subscription-based, enterprise, or custom plans. We may also charge for implementation, onboarding, support, hardware-linked services, premium modules, or optional integrations.</p>
                                    <p>You agree that:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>fees, if applicable, must be paid in accordance with the agreed plan, invoice, order form, or subscription schedule</li>
                                        <li>all fees are non-refundable unless otherwise stated in writing or required by law</li>
                                        <li>taxes, duties, levies, or government charges may apply in addition to listed prices</li>
                                        <li>delayed payments may result in suspension, restricted access, service interruption, or additional charges where legally permissible</li>
                                    </ul>
                                    <p>We may revise pricing for future billing periods by providing notice where required.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>11. Third-Party Services and Integrations</h2>
                                <div className="privacy-item">
                                    <p>The Platform may integrate with third-party tools and services, including but not limited to payment gateways, SMS providers, email services, analytics tools, maps, cloud hosting providers, customer support systems, telecom services, hardware vendors, or identity/notification services.</p>
                                    <p>Your use of such services may be subject to separate third-party terms and privacy policies. AanganOne is not responsible for the availability, functionality, security, delays, acts, omissions, or policies of third-party providers except to the extent expressly required by applicable law.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>12. Privacy and Data Protection</h2>
                                <div className="privacy-item">
                                    <p>Your use of the Platform is also governed by our Privacy Policy, which explains how we collect, use, store, process, and share personal data.</p>
                                    <p>By using the Platform, you acknowledge that:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>we may process personal data necessary to provide the Platform</li>
                                        <li>data may include profile details, property details, visitor information, support requests, communication logs, device information, and usage data</li>
                                        <li>a community administrator or authorized association may upload or manage data relating to users connected with that community</li>
                                        <li>we may use service providers to help operate the Platform</li>
                                        <li>we may disclose information where required by law, legal process, law enforcement request, or legitimate security need</li>
                                    </ul>
                                    <p>You must ensure that any personal data you upload or share through the Platform is shared lawfully and with necessary permissions.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>13. Data Accuracy and User Verification</h2>
                                <div className="privacy-item">
                                    <p>AanganOne relies on data submitted by users, communities, residents, guards, and administrators. We do not guarantee that all information on the Platform is complete, current, accurate, or verified at all times.</p>
                                    <p>This includes but is not limited to:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>resident names and occupancy status</li>
                                        <li>flat or unit details</li>
                                        <li>visitor identities</li>
                                        <li>staff details</li>
                                        <li>maintenance dues</li>
                                        <li>notices and records created by admins</li>
                                        <li>vendor details</li>
                                        <li>emergency contact information</li>
                                    </ul>
                                    <p>Users and communities are responsible for reviewing and correcting information relevant to them.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>14. Security of the Platform</h2>
                                <div className="privacy-item">
                                    <p>We take reasonable measures to protect the Platform and associated data. However, no digital system can be guaranteed to be completely secure or error-free.</p>
                                    <p>You acknowledge that:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>internet-based services may experience outages, delays, security incidents, or unauthorized attempts</li>
                                        <li>AanganOne does not warrant uninterrupted or completely secure access at all times</li>
                                        <li>you are responsible for safeguarding your devices, passwords, OTPs, and account access</li>
                                        <li>you must not share your credentials with unauthorized persons</li>
                                    </ul>
                                    <p>We may suspend access temporarily for maintenance, upgrades, audits, legal compliance, or security reasons.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>15. Intellectual Property</h2>
                                <div className="privacy-item">
                                    <p>All rights, title, and interest in and to the Platform, including its software, design, text, graphics, databases, interfaces, trademarks, service marks, logos, workflows, and underlying technology, are owned by or licensed to AanganOne.</p>
                                    <p>Except for the limited right to use the Platform in accordance with these Terms, nothing grants you any ownership or license to the intellectual property of AanganOne.</p>
                                    <p>You may not:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>copy, reproduce, republish, modify, distribute, sell, lease, or exploit the Platform</li>
                                        <li>create derivative works based on the Platform</li>
                                        <li>remove proprietary notices</li>
                                        <li>use our trademarks, logos, or branding without prior written consent</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>16. Feedback and Suggestions</h2>
                                <div className="privacy-item">
                                    <p>If you provide feedback, ideas, suggestions, or enhancement requests to AanganOne, you agree that we may use, adapt, and implement them without restriction or compensation to you, unless otherwise agreed in writing.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>17. Suspension, Restriction, and Termination</h2>
                                <div className="privacy-item">
                                    <p>We may suspend, restrict, or terminate your access to the Platform, with or without prior notice, if:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>you violate these Terms</li>
                                        <li>your actions create legal, operational, security, or reputational risk</li>
                                        <li>you misuse community or admin privileges</li>
                                        <li>payment obligations remain unpaid</li>
                                        <li>your account information is false or unverifiable</li>
                                        <li>your community’s subscription ends or is terminated</li>
                                        <li>we are required to do so by law or competent authority</li>
                                    </ul>
                                    <p>A society, admin, or authorized entity may also request deactivation of a user’s account within its community where such user no longer resides there, no longer has access rights, or violates community rules.</p>
                                    <p>Upon termination, your right to use the Platform ceases immediately, but provisions that by nature survive termination shall continue, including provisions on liability, intellectual property, indemnity, dispute resolution, and payment dues.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>18. Consequences of Termination</h2>
                                <div className="privacy-item">
                                    <p>On termination or suspension:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>your access may be disabled</li>
                                        <li>your content or records may become inaccessible to you</li>
                                        <li>we may retain data for backup, legal, audit, fraud-prevention, contractual, or compliance purposes</li>
                                        <li>community-level data may remain available to the relevant association/admin subject to rights and applicable law</li>
                                    </ul>
                                    <p>You are advised to maintain your own lawful records where required.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>19. Prohibited Uses</h2>
                                <div className="privacy-item">
                                    <p>Without limiting other restrictions, you shall not use the Platform:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>for unlawful surveillance</li>
                                        <li>for unauthorized commercial solicitation</li>
                                        <li>to discriminate against users unlawfully</li>
                                        <li>to upload sensitive personal information without legal basis</li>
                                        <li>to fake approvals, visitor entries, or community records</li>
                                        <li>to create panic, misinformation, or defamatory statements in a community</li>
                                        <li>to bypass safety procedures</li>
                                        <li>to benchmark, scrape, copy, or replicate the Platform to build a competing service</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>20. Disclaimers</h2>
                                <div className="privacy-item">
                                    <p>The Platform is provided on an “as is” and “as available” basis, to the maximum extent permitted by law.</p>
                                    <p>AanganOne does not warrant that:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>the Platform will always be uninterrupted, timely, secure, or error-free</li>
                                        <li>all bugs or defects will be corrected immediately</li>
                                        <li>the Platform will meet every requirement of every community or user</li>
                                        <li>records created on the Platform will be accepted as conclusive proof by every authority or third party</li>
                                        <li>access control tools, alerts, visitor approvals, or logs will prevent every unauthorized entry, dispute, loss, theft, or security incident</li>
                                    </ul>
                                    <p>AanganOne is a technology platform. Unless expressly agreed in writing, we do not provide legal advice, policing, physical security services, financial advisory, guaranteed recovery, or statutory compliance certification.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>21. Limitation of Liability</h2>
                                <div className="privacy-item">
                                    <p>To the fullest extent permitted by law, AanganOne, its founders, directors, employees, affiliates, licensors, service providers, and partners shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including loss of profits, goodwill, data, reputation, opportunity, or business interruption arising out of or related to:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>use of or inability to use the Platform</li>
                                        <li>unauthorized access to your account or data</li>
                                        <li>actions or omissions of residents, visitors, staff, vendors, societies, or third parties</li>
                                        <li>inaccurate data entered by users or admins</li>
                                        <li>payment failures caused by third parties</li>
                                        <li>security breaches not caused by our willful misconduct</li>
                                        <li>app downtime, server outages, or telecom failures</li>
                                        <li>review or enforcement actions taken in good faith under these Terms</li>
                                    </ul>
                                    <p>To the extent permitted by law, our aggregate liability for claims arising from the Platform shall not exceed the amount paid by you to AanganOne for the relevant service during the 12 months immediately preceding the event giving rise to the claim, or INR 10,000, whichever is lower, unless otherwise required by law.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>22. Indemnity</h2>
                                <div className="privacy-item">
                                    <p>You agree to defend, indemnify, and hold harmless AanganOne and its affiliates, officers, employees, agents, and partners from and against any claims, losses, damages, liabilities, costs, and expenses, including reasonable legal fees, arising out of or related to:</p>
                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#6b7280', margin: '15px 0' }}>
                                        <li>your use or misuse of the Platform</li>
                                        <li>your violation of these Terms</li>
                                        <li>your infringement of any third-party right</li>
                                        <li>false data, unauthorized uploads, or unlawful processing of personal data by you</li>
                                        <li>disputes between residents, owners, tenants, staff, associations, vendors, or third parties connected to your actions on the Platform</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>23. Compliance with Law</h2>
                                <div className="privacy-item">
                                    <p>You agree to comply with all applicable laws, rules, regulations, circulars, housing by-laws, and governmental directions relevant to your use of the Platform.</p>
                                    <p>Where your use involves resident databases, visitor records, staff details, maintenance accounting, or communication features, you are responsible for ensuring lawful use of such data and features.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>24. Force Majeure</h2>
                                <div className="privacy-item">
                                    <p>AanganOne shall not be liable for any delay or failure in performance caused by events beyond its reasonable control, including acts of God, flood, fire, pandemic, war, civil disturbance, governmental action, internet failure, telecom outage, cyberattack, labor disruption, cloud provider outage, or failure of utility services.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>25. Governing Law and Jurisdiction</h2>
                                <div className="privacy-item">
                                    <p>These Terms shall be governed by and construed in accordance with the laws of India.</p>
                                    <p>Subject to applicable law and any mandatory consumer forum rights, the courts at <strong>Rajkot, Gujarat</strong> shall have exclusive jurisdiction over disputes arising out of or relating to these Terms and the Platform.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>26. Dispute Resolution</h2>
                                <div className="privacy-item">
                                    <p>Before initiating formal legal proceedings, you agree to first contact AanganOne with a written description of the dispute and attempt to resolve the matter in good faith within 30 days.</p>
                                    <p>If the dispute is not resolved amicably, either party may pursue legal remedies before the competent courts having jurisdiction as stated above, unless an alternate dispute resolution clause is inserted here by your lawyer.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>27. Notices</h2>
                                <div className="privacy-item">
                                    <p>Any notices to AanganOne under these Terms should be sent to:</p>
                                    <div className="contact-info-card">
                                        <div className="contact-detail">
                                            <strong>AanganOne Space Private Limited</strong>
                                        </div>
                                        <div className="contact-detail">
                                            Rajkot, Gujarat, India
                                        </div>
                                        <div className="contact-detail">
                                            <strong>Support Email:</strong> <a href="mailto:info@aanganone.com">info@aanganone.com</a>
                                        </div>
                                    </div>
                                    <p style={{ marginTop: '15px' }}>We may send notices to you via app notification, registered email, SMS, or other contact details associated with your account.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>28. Entire Agreement</h2>
                                <div className="privacy-item">
                                    <p>These Terms, together with the Privacy Policy and any additional product-specific terms, order forms, service schedules, or payment terms, constitute the entire agreement between you and AanganOne regarding the Platform, and supersede prior communications relating to the same subject matter.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>29. Severability</h2>
                                <div className="privacy-item">
                                    <p>If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>30. Waiver</h2>
                                <div className="privacy-item">
                                    <p>Failure by AanganOne to enforce any provision of these Terms shall not constitute a waiver of that provision or any other right.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>31. Assignment</h2>
                                <div className="privacy-item">
                                    <p>You may not assign or transfer your rights or obligations under these Terms without our prior written consent. AanganOne may assign its rights or obligations to an affiliate, successor, purchaser, or in connection with a merger, restructuring, or asset transfer.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>32. Contact Us</h2>
                                <div className="privacy-item">
                                    <p>For support or questions about these Terms, please contact:</p>
                                    <div className="contact-info-card">
                                        <div className="contact-detail">
                                            <strong>AanganOne Space Private Limited</strong>
                                        </div>
                                        <div className="contact-detail">
                                            <strong>Email:</strong> <a href="mailto:info@aanganone.com">info@aanganone.com</a>
                                        </div>
                                        <div className="contact-detail">
                                            <strong>Website:</strong> <a href="https://www.aanganone.com/" target="_blank" rel="noopener noreferrer">https://www.aanganone.com/</a>
                                        </div>
                                        <div className="contact-detail">
                                            <strong>Phone:</strong> <a href="tel:+918866448967">+91 8866448967</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-left-section">
                            <div className="footer-brand">
                                <h3>AANGANONE SPACE PRIVATE LIMITED</h3>
                            </div>
                            <div className="footer-socials">
                                <h4>SOCIALS</h4>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/company/aanganone" target="_blank" rel="noopener noreferrer">Linkedin</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-divider-vertical"></div>
                        <div className="footer-right-section">
                            <div className="footer-about">
                                <h4>ABOUT</h4>
                                <p>Aanganone: Outsmarting Traditional Society Management. Securing Tomorrow At Aanganone, We Don't Just Defend We Outsmart</p>
                            </div>
                            <div className="footer-navigation">
                                <h4>NAVIGATION</h4>
                                <div className="footer-nav">
                                    <Link to="/">Home</Link>
                                    <span className="bullet">•</span>
                                    <Link to="/about">About</Link>
                                    <span className="bullet">•</span>
                                    <Link to="/features">Features</Link>
                                    <span className="bullet">•</span>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                    <span className="bullet">•</span>
                                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                                    <span className="bullet">•</span>
                                    <Link to="/contact">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-divider-horizontal"></div>
                    <div className="footer-bottom">
                        <p>Copyright 2026 - Aanganone space All rights reserved</p>
                        <p>Powered by <a href="https://www.codelixitsolutions.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#473F52', textDecoration: 'none' }}>Codelix IT Solutions Pvt. Ltd.</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default TermsAndConditions;
