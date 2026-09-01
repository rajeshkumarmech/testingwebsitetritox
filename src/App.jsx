import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "The Tritox Advantage", path: "/tritox-advantage" },
  { label: "Resource", path: "/quote-team-impact" },
  { label: "Pricing", path: "/pricing" },
  {label:"SuccessStory", path: "/success-stories"},
  // {
  //   label:"OnboardingPage",
  //   path: "/onboarding"
  // },
  // { label: "About", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="brand">
                  <img
    src="/tritox_logo.png"
    
    className="brand-logo"
  />
          <span>Tritox Technologies</span>
        </Link>

        <nav className="nav-links">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SuccessStoryPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const testimonials = [
    {
      rating: "5.0",
      quote:
        "Tritox has provided the additional quoting capacity we needed as our lead volume increased. Their team helps keep quotes moving efficiently, allowing our producers to respond to opportunities faster without taking on the same administrative workload.",
      name: "Aaron Budnick",
      role: "Agency Owner",
      location: "Michigan",
      recognition: "President’s Council",
      service: "Quote Preparation",
    },
    {
      rating: "4.9",
      quote:
        "As our quoting workload increased, Tritox provided the additional support capacity needed to manage the higher volume consistently. This has helped our agency handle more opportunities while keeping our producers focused on customers and new business.",
      name: "Andrew Castaneda",
      role: "Agency Owner",
      location: "Michigan",
      recognition: "",
      service: "Quote Preparation",
    },
    {
      rating: "5.0",
      quote:
        "Having dedicated quote support has made a noticeable difference in how our producers use their time. Our team can stay focused on customer conversations, follow-ups, and closing new business while Tritox manages the backend quoting workload.",
      name: "Robert Duvall",
      role: "Agency Owner",
      location: "Arizona",
      recognition: "",
      service: "Quote Preparation",
    },
  ];

  const faqs = [
    {
      id: 1,
      question:
        "What is the process for onboarding the Tritox team with my agency?",
      answers: [
        "Tritox team members may already hold existing Farmers Dashboard IDs and have completed the required background verification checks.",
        "To link Tritox with your agency using an existing Farmers Dashboard ID held by one of our team members, you can initiate the appropriate access setup through Farmers APEX → MASS (My Agent Self Service). The required documentation, system access, and Cloud PC configuration are then completed before Tritox aligns with your agency’s workflow and begins support.",
      ],
    },
    {
      id: 2,
      question:
        "How does Tritox safeguard my agency’s systems and customer data?",
      answers: [
        "Tritox operates through agency-authorized, individual system access using a Farmers-approved Microsoft Windows 365 Cloud PC environment.",
        "Each team member is granted access only to the systems and information required for their assigned responsibilities, helping maintain clear access control, confidentiality, and secure handling of agency and customer data.",
      ],
    },
    {
      id: 3,
      question: "How does Tritox maintain quality and accuracy?",
      answers: [
        "Tritox maintains quality through your agency’s defined quoting standards, structured review procedures, and our proprietary quality-check tool used after quote preparation.",
        "Each completed quote is reviewed for data accuracy, coverage alignment, and documentation completeness before the lead advances to the next CRM stage.",
      ],
    },
    {
      id: 4,
      question:
        "If my agency has a lower quote volume, how can Tritox still add value?",
      answers: [
        "Even at lower quote volumes, Tritox can take on backend quoting workload so producers spend less time on preparation, respond to customers more quickly, and focus more on prospect engagement and follow-up.",
        "As producer capacity improves, the agency can pursue higher lead volume with greater confidence, knowing dedicated quote support is available to manage the increased workload.",
      ],
    },
    {
      id: 5,
      question:
        "Will I need to change my existing systems or workflow to work with Tritox?",
      answers: [
        "No. Tritox is designed to work within your existing systems, quoting standards, and operating procedures.",
        "Our pre-trained team aligns with your CRM, Farmers APEX, ALTA, PolicyCenter, documentation requirements, and internal workflow so support can be integrated without disrupting the way your agency already operates.",
      ],
    },
    {
      id: 6,
      question:
        "Will Tritox support my existing team, or is it intended to replace in-house staff?",
      answers: [
        "Tritox is designed to complement and extend your existing team, not replace in-house staff.",
        "Our support helps free producer time from backend responsibilities so they can remain focused on customers, relationships, follow-ups, and new business.",
      ],
    },
    {
      id: 7,
      question:
        "Does Farmers Insurance allow agencies to outsource quoting support to teams in other countries?",
      answers: [
        "Farmers allows approved international staff to support applicable non-licensed, non-appointed activities through authorized system access. Tritox operates from India, which is one of the countries approved by Farmers for international staff access.",
        "Farmers’ approved countries currently include Argentina, Brazil, Colombia, India, Mexico, and the Philippines.",
      ],
    },
    {
      id: 8,
      question: "Do you offer a service agreement?",
      answers: [
        "If your agency requires a contract or NDA, Tritox can provide or sign the required agreement before support begins.",
      ],
    },
    {
      id: 9,
      question:
        "What happens if my agency’s quote volume increases or changes?",
      answers: [
        "As your quote volume changes, Tritox adjusts trained, dedicated support capacity to match your agency’s demand.",
        "This helps maintain rapid quote preparation, consistent workflow execution, and service continuity without placing additional administrative workload on your producers.",
      ],
    },
    {
      id: 10,
      question:
        "Can Tritox align support with my agency’s preferred business hours and time zone?",
      answers: [
        "Yes. Tritox can coordinate support around your agency’s preferred business hours and time zone, helping maintain consistent availability and workflow continuity within your established operating schedule.",
      ],
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq((currentFaq) => (currentFaq === index ? null : index));
  };

  return (
    <main className="success-page">
      <PageBanner
        eyebrow="Success Stories"
        title="Supporting Agency Growth Through Dedicated Quote Preparation"
        description="See how dedicated backend quote support can help agencies expand capacity, manage higher lead volume, and keep producers focused on customers and new business."
      />

      {/* Success Story */}
      <section className="success-story-section">
        <div className="container">
          <div className="success-story-heading">
            <div>
              <p className="eyebrow"style={{ fontSize: "18px" }}>Success Story</p>

              <h2 >Supporting a Michigan President’s Council Agency Owner</h2>
            </div>

            <p>
              Tritox introduced a dedicated quote preparation support model to
              help separate backend quoting responsibilities from producer
              activities and create additional operational capacity for the
              agency.
            </p>
          </div>

          <div className="success-story-grid">
            <div className="success-story-content">
              <div className="story-content-block">
                <span className="story-block-number">01</span>

                <div>
                  <h3>Expanding Capacity as Lead Volume Increased</h3>

                  <p>
                    Before engaging Tritox, the agency’s producers were
                    managing quote preparation alongside their sales and
                    customer-facing responsibilities. As the business grew,
                    this created additional administrative demands and reduced
                    the time producers could dedicate to customer engagement,
                    follow-up, and new-business activity.
                  </p>

                  <p>
                    During the engagement, the agency’s lead volume increased
                    from <strong>10,000+ to 20,000+ leads.</strong> Tritox
                    supported this growth by providing dedicated, trained team
                    members to help manage the increased workload.
                  </p>
                </div>
              </div>

              <div className="story-content-block">
                <span className="story-block-number">02</span>

                <div>
                  <h3>More Capacity for Customer-Facing Work</h3>

                  <p>
                    This additional backend capacity helped the agency manage a
                    larger volume of opportunities while allowing producers to
                    remain focused on customer conversations, timely
                    follow-ups, and closing new business.
                  </p>

                  <div className="story-benefit-points">
                    <span>
                      <i>✓</i>
                      Dedicated quote preparation capacity
                    </span>

                    <span>
                      <i>✓</i>
                      Increased lead-handling capacity
                    </span>

                    <span>
                      <i>✓</i>
                      More producer focus on sales activity
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <aside className="performance-card">
              <div className="performance-card-top">
                <span>PERFORMANCE PROGRESSION</span>
                <i>↗</i>
              </div>

              <div className="performance-rank-line">
                <div className="performance-rank rank-four">
                  <strong>4th</strong>
                  <span>Before Tritox Support</span>
                </div>

                <span className="rank-arrow">→</span>

                <div className="performance-rank rank-two">
                  <strong>2nd</strong>
                  <span>After Two Months</span>
                </div>

                <span className="rank-arrow">→</span>

                <div className="performance-rank rank-one">
                  <strong>1st</strong>
                  <span>By the Third Month</span>
                </div>
              </div>

              <div className="performance-progress-bar">
                <span className="progress-start">4th</span>

                <div className="progress-track">
                  <span className="progress-fill" />
                </div>

                <span className="progress-end">1st</span>
              </div>

              <div className="performance-card-summary">
                <span>✓</span>

                <p>
                  During the same period, the agency also experienced a
                  significant improvement in sales performance.
                </p>
              </div>
            </aside>
          </div>

          <div className="success-story-summary">
            <span className="success-summary-icon">✓</span>

            <div>
              <strong>Dedicated support that enables scalable growth.</strong>

              <p>
                The agency’s progress reflects the combined efforts of its
                leadership, producers, sales strategy, and internal team.
                Tritox is proud to have supported this period of growth by
                providing the additional quote preparation capacity needed to
                manage increasing lead volume while allowing producers to focus
                on customers and new-business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-heading">
            <div>
              <p className="eyebrow"style={{ fontSize: "18px" }}>Testimonials</p>

              <h2>Recommended by the best in the business.</h2>
            </div>

            <p>
              Direct feedback from agencies supported by Tritox through
              dedicated quote preparation and backend operational assistance.
            </p>
          </div>

          <div className="testimonials-layout">
            <aside className="rating-summary-card">
              <p className="rating-summary-label">OVERALL CLIENT RATING</p>

              <div className="rating-summary-score">
                <strong>5.0</strong>
                <span>/ 5</span>
              </div>

              <div className="rating-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>

              <p className="rating-summary-text">
                Based on client feedback from agencies we support.
              </p>

              <div className="rating-summary-divider" />

              <div className="rating-summary-service">
                <span>✓</span>
                Quote Preparation Support
              </div>
            </aside>

            <div className="testimonial-card-grid">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="testimonial-card">
                  <div className="testimonial-card-top">
                    <div className="testimonial-rating">
                      <span className="small-stars">★★★★★</span>
                      <strong>{testimonial.rating}</strong>
                    </div>

                    <span className="quote-mark">“</span>
                  </div>

                  <p className="testimonial-quote">
                    “{testimonial.quote}”
                  </p>

                  <div className="testimonial-footer">
                    <div className="testimonial-avatar">
                      {testimonial.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>

                    <div className="testimonial-client">
                      <strong>{testimonial.name}</strong>

                      <span>
                        {testimonial.role} | {testimonial.location}
                      </span>

                      {testimonial.recognition && (
                        <small>{testimonial.recognition}</small>
                      )}
                    </div>
                  </div>

                  <div className="testimonial-service">
                    <span>Service:</span>
                    {testimonial.service}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* First CTA */}
      <section className="success-final-cta">
        <div className="container success-final-cta-content">
          <div>
            <p className="success-light-eyebrow"style={{ fontSize: "18px" }}>Build More Capacity</p>

            <h2>
              Give your producers more time to focus on customers and growth.
            </h2>

            <p>
              Tritox helps agencies expand quote preparation capacity while
              maintaining structured, consistent, and scalable workflows.
            </p>
          </div>

          <div className="success-final-actions">
            <Link to="/contact" className="success-trial-button">
              Start Your Free Trial →
            </Link>

            <Link to="/services" className="success-services-button">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-heading">
            <div>
              <p className="eyebrow"style={{ fontSize: "18px" }}>Frequently Asked Questions</p>

              <h2>Clear Answers About How Tritox Supports Your Agency</h2>
            </div>

            <p>
              Learn more about onboarding, systems access, quote preparation
              support, data handling, quality procedures, pricing flexibility,
              and agency workflow alignment.
            </p>
          </div>

          <div className="faq-layout">
            <aside className="faq-side-card">
              <span className="faq-side-card-label">TRITOX SUPPORT</span>

              <h3>Have questions about your agency workflow?</h3>

              <p>
                Our team can help you understand how Tritox can align with your
                quote preparation, CRM, and operational support requirements.
              </p>

              <div className="faq-side-card-points">
                <span>
                  <i>✓</i>
                  Agency workflow alignment
                </span>

                <span>
                  <i>✓</i>
                  Dedicated support capacity
                </span>

                <span>
                  <i>✓</i>
                  Flexible operational support
                </span>
              </div>

              <Link to="/contact" className="faq-contact-button">
                Contact Our Team →
              </Link>
            </aside>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    key={faq.id}
                    className={`faq-item ${isOpen ? "faq-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-number">
                        {String(faq.id).padStart(2, "0")}
                      </span>

                      <span className="faq-question-text">
                        {faq.question}
                      </span>

                      <span className="faq-toggle-icon">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div className="faq-answer">
                      <div className="faq-answer-inner">
                        {faq.answers.map((answer, answerIndex) => (
                          <p key={answerIndex}>{answer}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="contact-final-cta">
        <div className="container contact-final-content">
          <div>
            <p className="contact-light-eyebrow"style={{ fontSize: "18px" }}>Ready to Get Started?</p>

            <h2>
              Build a more efficient quote preparation workflow for your
              agency.
            </h2>

            <p>
              Start your free trial and discover how Tritox can help your
              agency expand backend capacity while keeping producers focused on
              customers and new business.
            </p>
          </div>

          <Link to="/contact" className="contact-final-button">
            Start Your Free Trial →
          </Link>
        </div>
      </section>
    </main>
  );
}

function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-circle hero-circle-top" />
        <div className="hero-circle hero-circle-bottom" />

        <div className="container hero-grid">
          <div className="hero-content">
            

            <h1>
             Farmers Insurance Quote Preparation support Less Than $1 per Quote
              
            </h1>

            <p className="hero-description">
              Tritox Technologies provides specialized quote preparation and
              operational support for Auto, Home, and Bundle quotes, helping
              Farmers Insurance agencies streamline quoting workflows and
              strengthen day-to-day operational efficiency.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="start-trial-button">
                Start Your Free Trial
                <span>→</span>
              </Link>

              <Link to="/pricing" className="view-pricing-button">
                View Pricing
                <span>→</span>
              </Link>
            </div>

            <div className="hero-benefits">
              <div className="hero-benefit">
                <span className="benefit-icon yellow-benefit">✓</span>

                <div>
                  <strong>Auto, Home & Bundle</strong>
                  <small>Quote preparation support</small>
                </div>
              </div>

              <div className="hero-benefit">
                <span className="benefit-icon green-benefit">✓</span>

                <div>
                  <strong>Efficient operations</strong>
                  <small>Support built for agencies</small>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-logo-side">
            <div className="logo-badge">
              <span>✓</span>

              <div>
                <strong>Agency Support</strong>
                <small>Built for efficiency</small>
              </div>
            </div>

            <div className="logo-card">
              <div className="logo-card-line" />

              <img
                src="/farmer_img.png"
                
                className="hero-logo"
              />

              
            </div>

            <div className="logo-caption">
              <span className="caption-line" />

              <p>
                Enhancing Agency Efficiency Through
                <strong> Specialized Quote Preparation Support.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section white-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow" style={{ fontSize: "18px" }}>Why Tritox</p>

            <h2>Support your agency with a better quote workflow.</h2>

            <p>
              Our specialized operational support helps your agency team
              reduce repetitive preparation work and spend more time serving
              customers.
            </p>
          </div>

          <div className="feature-grid">
            <FeatureCard
              number="01"
              title="Quote Preparation"
              description="Structured support for Auto, Home, and Bundle quote preparation workflows."
              type="blue"
            />

            <FeatureCard
              number="02"
              title="Agency Efficiency"
              description="Help your internal team focus on customer relationships, service, and sales."
              type="green"
            />

            <FeatureCard
              number="03"
              title="Simple Pricing"
              description="Receive specialized quote preparation support at less than $1 per quote."
              type="yellow"
            />
          </div>
        </div>
      </section>

      <section className="section home-cta-section">
        <div className="container home-cta-content">
          <div>
            <p className="eyebrow light-eyebrow"style={{ fontSize: "18px" }}>Start Today</p>

            <h2>Ready to improve your quote preparation workflow?</h2>
          </div>

          <Link to="/contact" className="cta-yellow-button">
            Start Your Free Trial →
          </Link>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ number, title, description, type }) {
  return (
    <article className={`feature-card ${type}-feature-card`}>
      <span className="feature-number">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function PageBanner({ eyebrow, title, description }) {
  return (
    <section className="page-banner">
      <div className="page-banner-circle-one" />
      <div className="page-banner-circle-two" />

      <div className="container page-banner-content">
        <p className="eyebrow page-eyebrow"style={{ fontSize: "18px" }}>{eyebrow}</p>

        <h1>{title}</h1>

        <p>{description}</p>
      </div>
    </section>
  );
}

// function ContentPage({ eyebrow, title, description, cards }) {
//   return (
//     <main>
//       <PageBanner
//         eyebrow={eyebrow}
//         title={title}
//         description={description}
//       />

//       <section className="section white-section">
//         <div className="container">
//           <div className="page-card-grid">
//             {cards.map((card) => (
//               <article
//                 key={card.number}
//                 className={`page-card ${card.type}-page-card`}
//               >
//                 <span className="page-card-number">{card.number}</span>

//                 <h2>{card.title}</h2>

//                 <p>{card.description}</p>

//                 <Link to="/contact" className="card-link">
//                   Talk to our team →
//                 </Link>
//               </article>
//             ))}
//           </div>

//           <div className="page-cta-box">
//             <div>
//               <p className="eyebrow">Tritox Technologies</p>
//               <h2>Let’s make your agency workflow more efficient.</h2>
//             </div>

//             <Link to="/contact" className="primary-button">
//               Start Your Free Trial
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

function ServicesPage() {
  const crmPlatforms = [
    {
      shortName: "AZ",
      name: "AgencyZoom",
      className: "agencyzoom-logo",
      logo: "/images/crm/Agency_Zoom.png",
    },
    {
      shortName: "LG",
      name: "Little Giant",
      className: "little-giant-logo",
      logo: "/images/crm/Little_Giant.png",
    },
    {
      shortName: "AM",
      name: "Agency MVP",
      className: "agency-mvp-logo",
      logo: "/images/crm/Agency_MVP.png",
    },
    {
      shortName: "EZ",
      name: "EZLynx",
      className: "ezlynx-logo",
      logo: "/images/crm/EZLynx.png",
    },
    {
      shortName: "AC",
      name: "Agent CRM",
      className: "agent-crm-logo",
      logo: "/images/crm/Agent_CRM.png",
    },
    {
      shortName: "AMS",
      name: "AMS360",
      className: "ams-logo",
      logo: "/images/crm/AMS_360.png",
    },
    
  ];

  return (
    <main>
      <PageBanner
        eyebrow="Our Services"
        title="Integrated Operational, CRM, and Quote Preparation Support for Farmers Agencies"
        description="Tritox provides structured backend support that helps Farmers agencies maintain efficient quote workflows, organized CRM activity, and reliable day-to-day operations."
      />

      {/* Quote Preparation Section */}
      <section className="section white-section service-intro-section">
        <div className="container">
          <div className="service-heading-layout">
            <div>
              <p className="eyebrow"style={{ fontSize: "18px" }}>Quote Preparation Services</p>

              <h2>
                Complete quote preparation support for Auto, Home, and Bundle
                opportunities.
              </h2>
            </div>

            <p className="service-heading-description">
              Tritox provides specialized backend quote preparation support for
              Auto, Home, and Bundle opportunities, aligned with each Farmers
              agency’s established coverage standards, quoting criteria, and
              operational requirements.
            </p>
          </div>

          <div className="quote-service-grid">
            <article className="quote-service-card auto-service-card">
              <div className="service-card-icon auto-icon">A</div>

              <span className="service-card-number">01</span>

              <h3>Auto Quote Preparation</h3>

              <p>
                Comprehensive support covering customer and prior-insurance
                information validation, driver and vehicle data review, coverage
                entry based on agency standards, and premium option comparison.
              </p>

              <div className="service-tag-list">
                <span>Customer data review</span>
                <span>Driver validation</span>
                <span>Vehicle information</span>
                <span>Coverage entry</span>
              </div>

              <p className="service-card-note">
                Support for Farmers and Bristol West quote comparisons in
                accordance with agency-defined quoting criteria.
              </p>
            </article>

            <article className="quote-service-card home-service-card">
              <div className="service-card-icon home-icon">H</div>

              <span className="service-card-number">02</span>

              <h3>Home Quote Preparation</h3>

              <p>
                Structured support covering property address validation, home
                characteristics and feature review, and applicable coverage
                entry aligned with the agency’s established Home quoting
                standards.
              </p>

              <div className="service-tag-list">
                <span>Address validation</span>
                <span>Property review</span>
                <span>Home features</span>
                <span>Coverage details</span>
              </div>

              <p className="service-card-note">
                Consistent preparation support designed around your agency’s
                Home quoting workflow.
              </p>
            </article>

            <article className="quote-service-card bundle-service-card">
              <div className="service-card-icon bundle-icon">B</div>

              <span className="service-card-number">03</span>

              <h3>Bundle Quote Preparation</h3>

              <p>
                Coordinated preparation of Auto and Home opportunities,
                covering customer, vehicle, property, and coverage information
                across both lines.
              </p>

              <div className="service-tag-list">
                <span>Auto + Home data</span>
                <span>Coverage alignment</span>
                <span>Complete records</span>
                <span>Bundle consistency</span>
              </div>

              <p className="service-card-note">
                Maintain complete, accurate, and consistent quote data within
                bundled opportunities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CRM Management Section */}
      <section className="section crm-management-section">
        <div className="container">
          <div className="crm-header">
            <div>
              <p className="eyebrow crm-eyebrow"style={{ fontSize: "18px" }}>CRM Management</p>

              <h2>
                Accurate CRM data. Clear pipeline visibility. Better sales
                operations.
              </h2>
            </div>

            <p>
              Tritox provides structured CRM management support across leading
              insurance agency platforms, helping Farmers agencies maintain
              accurate, organized, and actionable lead and opportunity data
              throughout the quoting lifecycle.
            </p>
          </div>

          <div className="crm-platform-grid">
            {crmPlatforms.map((platform) => (
              <article
                key={platform.name}
                className={`crm-platform-card ${platform.className}`}
              >
                <div className="crm-platform-logo-wrapper">
                  {platform.logo ? (
                    <img
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      className="crm-platform-logo-image"
                    />
                  ) : (
                    <span className="crm-platform-mark">
                      {platform.shortName}
                    </span>
                  )}
                </div>

                <strong>{platform.name}</strong>
              </article>
            ))}
          </div>

          <div className="crm-details-grid">
            <article className="crm-detail-card">
              <span className="crm-detail-icon">01</span>

              <h3>Lead Information Management</h3>

              <p>
                Maintain organized lead records with accurate customer
                information and consistent data handling across the CRM
                lifecycle.
              </p>
            </article>

            <article className="crm-detail-card">
              <span className="crm-detail-icon">02</span>

              <h3>Pipeline and Opportunity Updates</h3>

              <p>
                Keep pipeline stages, opportunities, and sales activity updated
                so agency teams have a clearer view of active business.
              </p>
            </article>

            <article className="crm-detail-card">
              <span className="crm-detail-icon">03</span>

              <h3>Quote Documentation Support</h3>

              <p>
                Help maintain quote notes, supporting documentation, and
                record details for more organized follow-up workflows.
              </p>
            </article>

            <article className="crm-detail-card">
              <span className="crm-detail-icon">04</span>

              <h3>Record Accuracy</h3>

              <p>
                Support cleaner CRM records to help reduce missing information,
                improve visibility, and strengthen day-to-day sales operations.
              </p>
            </article>
          </div>

          <div className="crm-summary-box">
            <span className="summary-check">✓</span>

            <p>
              Our team manages lead information, pipeline updates, quote
              documentation, and record accuracy—giving agency teams clear
              visibility into active opportunities and supporting consistent
              day-to-day sales operations.
            </p>
          </div>
        </div>
      </section>

      {/* Operational Support Section */}
      <section className="section white-section operational-section">
        <div className="container operational-grid">
          <div className="operational-visual">
            <div className="operation-panel operation-panel-main">
              <span className="operation-panel-label"style={{ fontSize: "18px" }}>
                TRITOX OPERATIONS
              </span>

              <div className="operation-bar">
                <span className="bar-label">Documentation</span>

                <div className="bar-track">
                  <span className="bar-fill green-fill" />
                </div>
              </div>

              <div className="operation-bar">
                <span className="bar-label">Process execution</span>

                <div className="bar-track">
                  <span className="bar-fill yellow-fill" />
                </div>
              </div>

              <div className="operation-bar">
                <span className="bar-label">Daily consistency</span>

                <div className="bar-track">
                  <span className="bar-fill blue-fill" />
                </div>
              </div>
            </div>

            <div className="operation-floating-card">
              <span>✓</span>

              <div>
                <strong>Reliable Support</strong>
                <small>Built for agency operations</small>
              </div>
            </div>
          </div>

          <div className="operational-content">
            <p className="eyebrow"style={{ fontSize: "18px" }}>Operational Support</p>

            <h2>
              Disciplined backend support for reliable day-to-day agency
              performance.
            </h2>

            <p>
              Tritox delivers disciplined operational support that helps
              Farmers agencies maintain continuity across essential backend
              functions and day-to-day business activities.
            </p>

            <p>
              Our support spans agency operations, documentation, and process
              execution, helping agencies strengthen internal capacity,
              maintain operational consistency, and support reliable
              day-to-day performance.
            </p>

            <ul className="operational-list">
              <li>Agency operations support</li>
              <li>Documentation management</li>
              <li>Process execution assistance</li>
              <li>Consistent backend workflow support</li>
            </ul>

            <Link to="/contact" className="primary-button">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="services-bottom-cta">
        <div className="container services-bottom-cta-content">
          <div>
            <p className="eyebrow light-eyebrow"style={{ fontSize: "18px" }}>Work With Tritox</p>

            <h2>
              Strengthen your quote process, CRM workflow, and daily
              operations.
            </h2>
          </div>

          <Link to="/contact" className="cta-yellow-button">
            Request Free Trial →
          </Link>
        </div>
      </section>
    </main>
  );
}
function AdvantagePage() {
  const benefits = [
    {
      metric: "Up to 70%",
      label: "Lower Support Cost",
      title: "Reduce Support Costs by Up to 70%",
      description:
        "Expand backend capacity at up to 70% lower support cost compared with adding an equivalent in-house W-2 resource.",
      details: [
        "Reduced recruitment burden",
        "No additional payroll overhead",
        "No benefits administration",
        "Trained support team already in place",
      ],
      type: "cost-benefit-card",
      icon: "$",
    },
    {
      metric: "More Time",
      label: "For Producers",
      title: "Maximize Producer Productivity",
      description:
        "Keep producer time focused on customer engagement, relationship management, follow-ups, opportunity conversion, new business, and retention.",
      details: [
        "More customer conversations",
        "More follow-up capacity",
        "More time for closing business",
        "Reduced administrative demand",
      ],
      type: "productivity-benefit-card",
      icon: "↗",
    },
    {
      metric: "Flexible",
      label: "Scalable Capacity",
      title: "Rapid Capacity That Scales With Demand",
      description:
        "Align support with your agency’s actual quote volume instead of carrying unnecessary fixed staffing costs.",
      details: [
        "Scale support up or down",
        "Support peak lead periods",
        "Maintain fast quote completion",
        "Flexible workflow capacity",
      ],
      type: "scale-benefit-card",
      icon: "↔",
    },
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Authorized Farmers APEX Access & CRM",
      description:
        "The workflow begins with authorized access to the Farmers APEX dashboard using a Farmers-issued ID linked to the corresponding agency.",
      points: [
        "Authorized Farmers APEX access",
        "CRM lead review",
        "Customer information validation",
        " AgencyZoom, Little Giant, Agency MVP, EZLynx, Agent CRM, AMS360, and HawkSoft"
      ],
      systems: [
        "AgencyZoom",
        "Little Giant",
        "Agency MVP",
        "EZLynx",
        "Agent CRM",
        "AMS360",
        "HawkSoft",
      ],
      color: "blue-workflow-card",
    },
    {
      number: "02",
      title: "Auto Quote Preparation",
      description:
        "The appropriate quote type is selected before transitioning into ALTA for structured Auto quote preparation.",
      points: [
        "Date of birth validation",
        "Prior-insurance review",
        "Driver and vehicle validation",
        "Coverage selection",
        "Farmers and Bristol West premium review",
      ],
      systems: ["Farmers APEX", "ALTA", "Bristol West"],
      color: "green-workflow-card",
    },
    {
      number: "03",
      title: "Home Quote Preparation",
      description:
        "Where the agency’s standards require a Bundle, the workflow continues with Home quote preparation after the Auto coverage process.",
      points: [
        "Property address validation",
        "Dwelling characteristics review",
        "Home feature verification",
        "360Value assessment",
        "Coverage guideline alignment",
      ],
      systems: ["Farmers APEX", "360Value", "Home Guidelines"],
      color: "yellow-workflow-card",
    },
    {
      number: "04",
      title: "Guidewire PolicyCenter Review & Quote Generation",
      description:
        "The prepared quote is reviewed within Guidewire PolicyCenter to complete applicable validation before final quote generation.",
      points: [
        "Risk analysis review",
        "Policy validation",
        "Multi-policy discount verification",
        "Quote generation",
        "Document download",
      ],
      systems: ["Guidewire", "PolicyCenter", "Quote Documents"],
      color: "blue-workflow-card",
    },
    {
      number: "05",
      title: "CRM Documentation & Workflow Completion",
      description:
        "Completed quote documents are uploaded to the corresponding CRM record and reviewed alongside lead information.",
      points: [
        "Document upload",
        "Lead record review",
        "CRM communication support",
        "Pipeline stage update",
        "Workflow completion",
      ],
      systems: ["CRM Record", "Lead Pipeline", "Customer Email"],
      color: "green-workflow-card",
    },
  ];

  return (
    <main className="advantage-page">
      <PageBanner
        eyebrow="Benefits · The Tritox Advantage"
        title="Built for Agency Growth"
        description="Smarter costs. Greater producer capacity. Flexible support built around your business."
      />

      {/* Benefits Section */}
      <section className="section advantage-benefits-section">
        <div className="advantage-shape advantage-shape-one" />
        <div className="advantage-shape advantage-shape-two" />

        <div className="container advantage-benefits-container">
          <div className="advantage-section-heading">
            <div>
              <p className="eyebrow"style={{ fontSize: "18px" }}>The Tritox Advantage</p>

              <h2>
                Smarter costs. Greater producer capacity. Flexible support
                built around your business.
              </h2>
            </div>

            <p>
              Tritox helps Farmers agencies expand backend capacity without
              adding unnecessary fixed staffing costs, administrative burden,
              or operational complexity.
            </p>
          </div>

          <div className="advantage-benefit-grid">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className={`advantage-benefit-card ${benefit.type}`}
              >
                <div className="benefit-card-top">
                  <span className="benefit-icon">{benefit.icon}</span>

                  <span className="benefit-label">{benefit.label}</span>
                </div>

                <strong className="benefit-metric">{benefit.metric}</strong>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

                <div className="benefit-divider" />

                <div className="benefit-detail-list">
                  {benefit.details.map((detail) => (
                    <span key={detail}>
                      <i>✓</i>
                      {detail}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="advantage-highlight-banner">
            <div className="highlight-banner-icon">✓</div>

            <div>
              <strong>Built to support agency growth</strong>

              <p>
                Tritox manages structured quote preparation and backend
                workflows, allowing producers to focus on high-value,
                client-facing, and revenue-generating responsibilities.
              </p>
            </div>

            <Link to="/contact" className="highlight-banner-button">
              Start Free Trial →
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
     <section className="workflow-section">
  <div className="workflow-grid-pattern" />
  <div className="workflow-circle workflow-circle-one" />
  <div className="workflow-circle workflow-circle-two" />

  <div className="container workflow-container">
    <div className="workflow-heading">
      <p className="eyebrow workflow-eyebrow"style={{ fontSize: "18px" }}>Workflow</p>

      <h2>
        A Structured Quote Preparation Process Integrated With Your Agency’s
        Existing Systems
      </h2>

      <p>
        Our workflow integrates with your agency’s existing systems,
        supporting the quoting lifecycle from CRM lead access through quote
        generation, documentation, and workflow completion.
      </p>
    </div>

    <div className="workflow-timeline">
      {workflowSteps.map((step, index) => (
        <article
          key={step.number}
          className={`workflow-card ${step.color}`}
        >
          <div className="workflow-card-top">
            <span className="workflow-number">{step.number}</span>

            <span className="workflow-status">
              {index === workflowSteps.length - 1
                ? "Complete"
                : "Workflow Step"}
            </span>
          </div>

          <h3>{step.title}</h3>

          <p className="workflow-description">{step.description}</p>

          <div className="workflow-point-list">
            {step.points.map((point) => (
              <span key={point}>
                <i>✓</i>
                {point}
              </span>
            ))}
          </div>

          {/* <div className="workflow-system-list">
            {step.systems.map((system) => (
              <span key={system}>{system}</span>
            ))}
          </div> */}
        </article>
      ))}
      
    </div>
          <div className="workflow-bottom-card">
            <div className="workflow-bottom-left">
              <span className="workflow-complete-icon">✓</span>

              <div>
                <p>Complete workflow visibility</p>
                <strong>
                  From CRM lead access to quote documentation and next-stage
                  follow-up.
                </strong>
              </div>
            </div>

            <Link to="/contact" className="workflow-button">
              Discuss Your Workflow →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="advantage-final-cta">
        <div className="container advantage-final-cta-content">
          <div>
            <p className="eyebrow advantage-light-eyebrow"style={{ fontSize: "18px" }}>
              Ready to Scale Smarter?
            </p>

            <h2>
              Get flexible quote preparation support built around your agency.
            </h2>

            <p>
              Strengthen your backend capacity, improve producer productivity,
              and maintain a consistent workflow as your agency grows.
            </p>
          </div>

          <div className="advantage-final-actions">
            <Link to="/contact" className="advantage-trial-button">
              Start Your Free Trial
            </Link>

            <Link to="/services" className="advantage-services-button">
              View Our Services →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ImpactPage() {
  const quoteTeamTasks = [
    "Customer information validation",
    "Risk-data review",
    "Auto quote preparation",
    "Home quote preparation",
    "Bundle quote preparation",
    "Agency-standard coverage entry",
    "Premium option review",
    "Quote documentation",
    "CRM updates and lead progression",
  ];

  const leadToCloseSteps = [
    "Lead Acquisition",
    "CRM Intake",
    "Eligibility & Data Review",
    "Quote Preparation",
    "Quote Ready",
    "Producer Engagement",
    "Follow-Up",
    "Business Close",
  ];
    const approvedCountries = [
    "Argentina",
    "Brazil",
    "Colombia",
    "India",
    "Mexico",
    "Philippines",
  ];

  const onboardingSteps = [
    {
      number: "01",
      title: "Confirm Eligibility & Compliance",
      description:
        "The international team member must reside in an approved country. The agency is responsible for confirming work eligibility, completing applicable background checks, and ensuring assigned duties remain within permitted non-licensed activities.",
      details: [
        "Approved-country eligibility",
        "Work authorization confirmation",
        "Background verification",
        "Non-licensed duty alignment",
      ],
      type: "onboarding-blue-step",
    },
    {
      number: "02",
      title: "Link Your Agency to an Existing Farmers ID",
      description:
        "If an existing international staff member requires dual-code system access, the agent or district manager can submit the request through MASS (My Agent Self Service).",
      details: [
        "MASS request submission",
        "DocuSign link received by email",
        "Required information completed",
        "Farmers review and approval",
      ],
      type: "onboarding-green-step",
    },
    {
      number: "03",
      title: "Add a New International Staff Member",
      description:
        "Using MASS (My Agent Self Service), the agency can add a new international staff member and begin the required access and onboarding process.",
      details: [
        "New staff request initiated",
        "Background review completed",
        "DocuSign documents completed",
        "Farmers review and approval",
      ],
      type: "onboarding-yellow-step",
    },
    {
      number: "04",
      title: "Configure the Farmers Access Environment",
      description:
        "Approved staff access Farmers systems through a U.S.-provisioned Microsoft Windows 365 Cloud PC with the required cyber protection in place.",
      details: [
        "Windows 365 Cloud PC",
        "Authorized access environment",
        "Required cyber protection",
        "Active Farmers workflow access",
      ],
      type: "onboarding-blue-step",
    },
    {
      number: "05",
      title: "Create Agency CRM Access",
      description:
        "Once Farmers system setup is complete, the agency creates a dedicated CRM account for the assigned Tritox team member.",
      details: [
        "Dedicated CRM account",
        "Agency-defined access level",
        "Role-based responsibilities",
        "CRM workflow alignment",
      ],
      type: "onboarding-green-step",
    },
    {
      number: "06",
      title: "Establish the Payment Method",
      description:
        "The agency can establish the preferred payment method before ongoing production support begins.",
      details: [
        "Gusto",
        "Wise",
        "Wire transfer",
        "Rippling or agreed payment option",
      ],
      type: "onboarding-yellow-step",
    },
  ];


  const growthSteps = [
    {
      number: "01",
      title: "Higher Lead Volume",
      description:
        "Bring more qualified opportunities into the agency pipeline.",
      type: "growth-blue-card",
    },
    {
      number: "02",
      title: "CRM Intake & Qualification",
      description:
        "Review, organize, and identify eligible leads for quoting.",
      type: "growth-green-card",
    },
    {
      number: "03",
      title: "Rapid Quote Preparation",
      description:
        "Tritox prepares eligible quotes quickly and consistently, reducing delays between lead intake and quote readiness.",
      type: "growth-yellow-card",
    },
    {
      number: "04",
      title: "Faster Producer Follow-Up",
      description:
        "Once a quote is ready, producers can contact the customer sooner while the opportunity is still active.",
      type: "growth-blue-card",
    },
    {
      number: "05",
      title: "Stronger Conversion Opportunity",
      description:
        "Faster response times and consistent follow-up can improve the likelihood of converting qualified leads into new customers.",
      type: "growth-green-card",
    },
  ];

  return (
    <main className="impact-page">
      <PageBanner
        eyebrow="Quote Team Impact"
        title="How a Quote Team Impacts the Agency"
        description="A focused quote team structure helps agencies separate backend quote preparation from producer responsibilities, creating clear ownership across the new-business lifecycle."
      />

      {/* Focused Team Structure */}
      <section className="section impact-intro-section">
        <div className="impact-intro-shape impact-intro-shape-one" />
        <div className="impact-intro-shape impact-intro-shape-two" />

        <div className="container impact-intro-container">
          <div className="impact-team-grid">
            <div className="impact-team-content">
              <p className="eyebrow"style={{ fontSize: "18px" }}>Focused Team Structure</p>

              <h2>
                A dedicated quote team keeps producers focused on customers and
                closing business.
              </h2>

              <p>
                Separating quote preparation from producer responsibilities
                creates clear ownership across the new-business lifecycle.
                Quoting teams manage structured backend preparation while
                producers remain focused on customers, opportunities, and
                closing new business.
              </p>

              <div className="impact-key-points">
                <div>
                  <span>✓</span>
                  <p>Clear ownership across the quoting lifecycle</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Less backend work competing with producer time</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>More capacity for customer-facing activity</p>
                </div>
              </div>
            </div>

            <div className="team-structure-card">
              <div className="team-structure-top">
                <span style={{ fontSize: "18px" }}>NEW-BUSINESS OPERATING MODEL</span>
                <i>✓</i>
              </div>

              <div className="team-role-row quote-team-role">
                <div className="team-role-icon">Q</div>

                <div>
                  <strong>Dedicated Quote Team</strong>
                  <small>Backend quote preparation and CRM workflow</small>
                </div>

                <span className="team-role-status">Focused</span>
              </div>

              <div className="team-connection-line">
                <span />
                <i>→</i>
                <span />
              </div>

              <div className="team-role-row producer-team-role">
                <div className="team-role-icon">P</div>

                <div>
                  <strong>Producer Team</strong>
                  <small>Customer engagement, follow-up, and closing</small>
                </div>

                <span className="team-role-status">Client-facing</span>
              </div>

              <div className="team-structure-footer">
                <span>✓</span>
                Clear ownership. Better focus. Stronger workflow.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Quote Team */}
      <section className="section dedicated-team-section">
        <div className="container">
          <div className="dedicated-team-heading">
            <div>
              <p className="eyebrow dedicated-team-eyebrow"style={{ fontSize: "18px" }}>
                Dedicated Quoting Team
              </p>

              <h2>
                Structured backend support that moves eligible leads toward
                completed quotes.
              </h2>
            </div>

            <p>
              The quoting team manages the operational work required to move an
              eligible lead toward a completed quote while maintaining the
              agency’s established standards and workflows.
            </p>
          </div>

          <div className="quote-team-task-layout">
            <div className="quote-team-task-panel">
              <div className="task-panel-title">
                <span className="task-panel-icon">✓</span>

                <div>
                  <small>QUOTE TEAM RESPONSIBILITIES</small>
                  <h3>Operational work managed by the quote team</h3>
                </div>
              </div>

              <div className="task-list">
                {quoteTeamTasks.map((task, index) => (
                  <div key={task} className="task-list-item">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{task}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="agency-benefit-card">
              <div className="agency-benefit-icon">↗</div>

              <p className="agency-benefit-label">AGENCY BENEFIT</p>

              <h3>More quoting capacity without competing with producer time.</h3>

              <p>
                Creates dedicated quoting capacity, supports rapid quote
                preparation, maintains process consistency, and prevents
                backend workload from competing with producer time.
              </p>

              <div className="agency-benefit-stats">
                <div>
                  <strong>Rapid</strong>
                  <span>Quote preparation</span>
                </div>

                <div>
                  <strong>Clear</strong>
                  <span>Role ownership</span>
                </div>

                <div>
                  <strong>Consistent</strong>
                  <span>Process execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead to close workflow */}
      <section className="lead-to-close-section">
        <div className="impact-grid-pattern" />
        <div className="impact-workflow-circle impact-workflow-circle-one" />
        <div className="impact-workflow-circle impact-workflow-circle-two" />

        <div className="container lead-to-close-container">
          <div className="lead-to-close-heading">
            <p className="eyebrow impact-light-eyebrow"style={{ fontSize: "18px" }}>
              A Connected Lead-to-Close Operating Model
            </p>

            <h2>Every opportunity moves forward with clear ownership.</h2>

            <p>
              Clear separation between quoting and production reduces workflow
              interruptions and allows multiple opportunities to move through
              the agency simultaneously.
            </p>
          </div>

          <div className="lead-flow-grid">
            {leadToCloseSteps.map((step, index) => (
              <article key={step} className="lead-flow-card">
                <span className="lead-flow-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="lead-flow-dot" />

                <h3>{step}</h3>

                {index !== leadToCloseSteps.length - 1 && (
                  <span className="lead-flow-arrow">→</span>
                )}
              </article>
            ))}
          </div>

          <div className="lead-flow-summary">
            <span className="lead-summary-icon">✓</span>

            <p>
              A dedicated quote team can support rapid quote preparation,
              consistent process execution, and higher lead volumes while
              producers continue managing customer and sales activity.
            </p>
          </div>
        </div>
      </section>

      {/* Scale section */}
      <section className="section scale-section">
        <div className="container scale-grid">
          <div className="scale-visual">
            <div className="scale-main-panel">
              <div className="scale-panel-header">
                <span style={{ fontSize: "18px" }}>SCALABLE QUOTE CAPACITY</span>
                <i>↗</i>
              </div>

              <div className="scale-chart">
                <div className="scale-chart-column">
                  <span className="scale-bar scale-bar-one" />
                  <small>Lead Volume</small>
                </div>

                <div className="scale-chart-column">
                  <span className="scale-bar scale-bar-two" />
                  <small>Quote Capacity</small>
                </div>

                <div className="scale-chart-column">
                  <span className="scale-bar scale-bar-three" />
                  <small>Producer Focus</small>
                </div>
              </div>

              <div className="scale-chart-footer">
                <span className="green-indicator" />
                Capacity grows as agency demand increases
              </div>
            </div>

            <div className="scale-floating-card">
              <strong>Parallel</strong>
              <span>More opportunities prepared at the same time</span>
            </div>
          </div>

          <div className="scale-content">
            <p className="eyebrow"style={{ fontSize: "18px" }}>A Structure Built to Scale</p>

            <h2>Expand quote capacity as lead volume grows.</h2>

            <p>
              As lead volume increases, dedicated quoting capacity allows more
              opportunities to be prepared in parallel while producers continue
              managing customer conversations and active sales opportunities.
            </p>

            <p>
              This creates a scalable structure in which quoting capacity can
              expand with demand without placing a proportional increase in
              administrative workload on the producer team.
            </p>

            <div className="scale-benefit-list">
              <span>✓ More opportunities prepared in parallel</span>
              <span>✓ Producer time remains customer-focused</span>
              <span>✓ Support capacity adjusts with demand</span>
            </div>

            <Link to="/contact" className="primary-button">
              Explore Your Support Options
            </Link>
          </div>
        </div>
      </section>

      {/* Growth model */}
      <section className="section growth-model-section">
        <div className="container">
          <div className="growth-model-heading">
            <div>
              <p className="eyebrow"style={{ fontSize: "18px" }}>Growth-Focused Agency Model</p>

              <h2>How growth-focused agencies are scaling their growth.</h2>
            </div>

            <p>
              Growth-focused agencies improve efficiency by separating quote
              preparation from producer responsibilities, allowing each team to
              focus on the work that creates the most value.
            </p>
          </div>

          <div className="growth-process-line">
            <span>More Leads</span>
            <i>→</i>
            <span>Rapid Quote Preparation</span>
            <i>→</i>
            <span>Faster Producer Follow-Up</span>
            <i>→</i>
            <span>Better Conversion Opportunity</span>
            <i>→</i>
            <span>Customer Growth</span>
          </div>

          <div className="growth-card-grid">
            {growthSteps.map((step) => (
              <article
                key={step.number}
                className={`growth-card ${step.type}`}
              >
                <span className="growth-card-number">{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className="growth-summary-card">
            <span className="growth-summary-check">✓</span>

            <div>
              <strong>More opportunities. More producer focus. More room to grow.</strong>

              <p>
                This model helps agencies handle a larger volume of
                opportunities while allowing producers to stay focused on
                customer engagement, follow-up, closing new business, and
                expanding the agency’s customer base.
              </p>
            </div>
          </div>
        </div>
      </section>
        <PageBanner
        eyebrow="International Staff Onboarding"
        title="Authorized International Staff Setup for Farmers Agency Support"
        description="A structured onboarding process for approved international staff supporting Farmers agency operations through authorized access and defined responsibilities."
      />

      {/* Onboarding introduction */}
      <section className="section onboarding-intro-section">
        <div className="onboarding-intro-shape onboarding-intro-shape-one" />
        <div className="onboarding-intro-shape onboarding-intro-shape-two" />

        <div className="container onboarding-intro-container">
          <div className="onboarding-intro-grid">
            <div className="onboarding-intro-content">
              <p className="eyebrow"style={{ fontSize: "18px" }}>International Staff Setup</p>

              <h2>
                A clear process for authorized international agency support.
              </h2>

              <p>
                Farmers allows approved international staff to access its
                systems and support agency operations as non-licensed staff,
                once the required onboarding and access steps are completed.
              </p>

              <p>
                Team members may already hold existing Farmers Dashboard IDs
                and have completed required background verification checks.
                Depending on the agency’s requirement, you can either link
                your agency to an existing staff member’s Farmers ID or add a
                new international staff member.
              </p>
            </div>

            <div className="onboarding-status-card">
              <div className="onboarding-status-header">
                <span>ONBOARDING OVERVIEW</span>
                <i>✓</i>
              </div>

              <div className="onboarding-status-item">
                <span className="status-item-number">01</span>

                <div>
                  <strong>Eligibility & Compliance</strong>
                  <small>Agency confirms eligibility and assigned duties</small>
                </div>
              </div>

              <div className="onboarding-status-item">
                <span className="status-item-number">02</span>

                <div>
                  <strong>Farmers System Access</strong>
                  <small>Existing ID link or new staff request process</small>
                </div>
              </div>

              <div className="onboarding-status-item">
                <span className="status-item-number">03</span>

                <div>
                  <strong>CRM & Production Setup</strong>
                  <small>Dedicated CRM access and support readiness</small>
                </div>
              </div>

              <div className="onboarding-status-footer">
                <span>✓</span>
                Structured agency-led onboarding process
              </div>
            </div>
          </div>

          <div className="approved-countries-card">
            <div className="approved-countries-icon">✓</div>

            <div>
              <span className="countries-label">APPROVED COUNTRY ELIGIBILITY</span>

              <h3>International team members must reside in an approved country.</h3>

              <div className="country-list">
                {approvedCountries.map((country) => (
                  <span key={country}>{country}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose onboarding path */}
      <section className="section onboarding-path-section">
        <div className="container">
          <div className="onboarding-path-heading">
            <div>
              <p className="eyebrow"style={{ fontSize: "18px" }}>Choose the Appropriate Setup Path</p>

              <h2>
                Link an existing Farmers ID or add a new international staff
                member.
              </h2>
            </div>

            <p>
              The onboarding process depends on whether the assigned team
              member already has an existing Farmers Dashboard ID or requires
              new access setup.
            </p>
          </div>

          <div className="onboarding-path-grid">
            <article className="onboarding-path-card existing-id-card">
              <div className="path-card-top">
                <span className="path-icon">ID</span>
                <span className="path-label">EXISTING STAFF MEMBER</span>
              </div>

              <h3>Link Your Agency to an Existing Farmers ID</h3>

              <p>
                If an existing international staff member requires dual-code
                system access, the agent or district manager can submit the
                request through MASS (My Agent Self Service).
              </p>

              <div className="path-step-list">
                <div>
                  <span>01</span>
                  Submit the dual-code access request through MASS
                </div>

                <div>
                  <span>02</span>
                  Staff member receives a DocuSign link by email
                </div>

                <div>
                  <span>03</span>
                  Required information is completed and submitted
                </div>

                <div>
                  <span>04</span>
                  Farmers reviews and approves system access
                </div>
              </div>
            </article>

            <article className="onboarding-path-card new-staff-card">
              <div className="path-card-top">
                <span className="path-icon">+</span>
                <span className="path-label">NEW INTERNATIONAL STAFF</span>
              </div>

              <h3>Add a New International Staff Member</h3>

              <p>
                Using the same MASS (My Agent Self Service) portal, the agency
                can add a new international staff member and begin the required
                access and onboarding process.
              </p>

              <div className="path-step-list">
                <div>
                  <span>01</span>
                  New staff request is initiated through MASS
                </div>

                <div>
                  <span>02</span>
                  Required background review is completed
                </div>

                <div>
                  <span>03</span>
                  Staff member receives DocuSign documents by email
                </div>

                <div>
                  <span>04</span>
                  Documents are submitted for review and approval
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Full onboarding process */}
      <section className="onboarding-workflow-section">
        <div className="onboarding-workflow-pattern" />
        <div className="onboarding-workflow-circle onboarding-circle-one" />
        <div className="onboarding-workflow-circle onboarding-circle-two" />

        <div className="container onboarding-workflow-container">
          <div className="onboarding-workflow-heading">
            <p className="onboarding-light-eyebrow"style={{ fontSize: "18px" }}>
              Onboarding Workflow
            </p>

            <h2>
              Six structured steps from eligibility review to production-ready
              support.
            </h2>

            <p>
              This process helps agencies create the required setup,
              authorized access, CRM responsibilities, and payment arrangements
              before ongoing support begins.
            </p>
          </div>

          <div className="onboarding-steps-grid">
            {onboardingSteps.map((step) => (
              <article
                key={step.number}
                className={`onboarding-step-card ${step.type}`}
              >
                <div className="onboarding-step-top">
                  <span className="onboarding-step-number">{step.number}</span>

                  <span className="step-status">Setup Step</span>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <div className="onboarding-detail-list">
                  {step.details.map((detail) => (
                    <span key={detail}>
                      <i>✓</i>
                      {detail}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Access environment and CRM */}
      <section className="section access-environment-section">
        <div className="container access-environment-grid">
          <div className="access-visual">
            <div className="cloud-access-card">
              <div className="cloud-card-header">
                <span style={{ fontSize: "18px" }}>AUTHORIZED ACCESS ENVIRONMENT</span>
                <i>✓</i>
              </div>

              <div className="cloud-computer-icon">
                <div className="cloud-icon">☁</div>
                <div className="computer-icon">▣</div>
              </div>

              <strong>Windows 365 Cloud PC</strong>

              <p>
                U.S.-provisioned environment configured for authorized Farmers
                workflow access.
              </p>

              <div className="cloud-access-list">
                <div>
                  <span>✓</span>
                  Secure connectivity
                </div>

                <div>
                  <span>✓</span>
                  Defined access responsibilities
                </div>

                <div>
                  <span>✓</span>
                  Controlled workflow environment
                </div>
              </div>
            </div>

            <div className="crm-access-floating-card">
              <span>CRM</span>

              <div>
                <strong>Dedicated CRM Access</strong>
                <small>Role-aligned account setup</small>
              </div>
            </div>
          </div>

          <div className="access-environment-content">
            <p className="eyebrow"style={{ fontSize: "18px" }}>Access & CRM Configuration</p>

            <h2>
              Configure the working environment before production support
              begins.
            </h2>

            <p>
              Approved staff access Farmers systems through a U.S.-provisioned
              Microsoft Windows 365 Cloud PC with the required cyber protection
              in place.
            </p>

            <p>
              Once the environment is configured and access is active, the team
              member can begin working within the authorized Farmers workflow.
              The agency then creates a dedicated CRM account with access
              aligned to the assigned Tritox team member’s approved
              responsibilities.
            </p>

            <div className="access-check-list">
              <span>
                <i>✓</i>
                Authorized Farmers access environment
              </span>

              <span>
                <i>✓</i>
                Dedicated agency CRM account
              </span>

              <span>
                <i>✓</i>
                Role-based system permissions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="section onboarding-payment-section">
        <div className="container payment-grid">
          <div className="payment-content">
            <p className="eyebrow"style={{ fontSize: "18px" }}>Payment Setup</p>

            <h2>Establish the preferred payment method before support begins.</h2>

            <p>
              The agency can establish the preferred payment method before
              ongoing production support begins. Payment arrangements are
              confirmed as part of the onboarding process.
            </p>
          </div>

          <div className="payment-method-card">
            <p className="payment-card-label"style={{ fontSize: "18px" }}>PAYMENT OPTIONS</p>

            <div className="payment-method-list">
              <span>Gusto</span>
              <span>Wise</span>
              <span>Wire Transfer</span>
              <span>Rippling</span>
              <span>Mutually Agreed Option</span>
            </div>

            <div className="payment-card-footer">
              <span>✓</span>
              Payment arrangement confirmed before ongoing support.
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="impact-final-cta">
        <div className="container impact-final-cta-content">
          <div>
            <p className="eyebrow impact-light-eyebrow"style={{ fontSize: "18px" }}>
              Build a Stronger Workflow
            </p>

            <h2>
              Give your producers more time to engage customers and close
              business.
            </h2>

            <p>
              Tritox helps agencies create structured quote preparation support
              that improves workflow consistency and expands backend capacity.
            </p>
          </div>

          <div className="impact-final-actions">
            <Link to="/contact" className="impact-trial-button">
              Start Your Free Trial →
            </Link>

            <Link to="/services" className="impact-services-button">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function PricingPage() {
  const pricingFactors = [
    {
      number: "01",
      title: "Workflow Requirements",
      description:
        "Pricing reflects the systems, documentation standards, CRM activities, and operational steps required within your agency’s established quoting process.",
      icon: "⚙",
      type: "workflow-factor-card",
    },
    {
      number: "02",
      title: "Quote Complexity",
      description:
        "Rates may vary based on the level of work involved in Auto, Home, and Bundle opportunities, including validation, coverage preparation, and supporting documentation.",
      icon: "✓",
      type: "complexity-factor-card",
    },
    {
      number: "03",
      title: "Quote Volume",
      description:
        "Higher and more consistent quote volumes may qualify for lower per-quote pricing, helping your agency benefit from a more efficient cost structure as activity increases.",
      icon: "↗",
      type: "volume-factor-card",
    },
  ];

  const costRows = [
    {
      consideration: "Base Compensation",
      inHouse: "~$45,000 annually",
      tritox: "Volume-aligned pricing",
    },
    {
      consideration: "Employer Payroll Taxes",
      inHouse: "~7.65% FICA",
      tritox: "No agency payroll tax obligation",
    },
    {
      consideration: "Benefits & PTO",
      inHouse: "~$8,000+ annually",
      tritox: "No employee benefit obligation",
    },
    {
      consideration: "Recruitment & Onboarding",
      inHouse: "Managed and funded internally",
      tritox: "Trained support resources",
    },
    {
      consideration: "Training",
      inHouse: "Ongoing agency responsibility",
      tritox: "Team aligned to defined agency workflows",
    },
    {
      consideration: "Equipment & Workspace",
      inHouse: "Additional agency expense",
      tritox: "No additional internal workstation requirement",
    },
    {
      consideration: "Cost Structure",
      inHouse: "Predominantly fixed",
      tritox: "Variable and demand-aligned",
    },
    {
      consideration: "Estimated Annual Cost",
      inHouse: "$60,000–$70,000+",
      tritox: "Potential support-cost reduction of up to 70%*",
    },
  ];

  return (
    <main className="pricing-page">
      <PageBanner
        eyebrow="Pricing"
        title="Simple, Volume-Aligned Pricing"
        description="Reduce backend support costs by up to 70% compared with an equivalent in-house W-2 resource."
      />

      {/* Main pricing information */}
      <section className="section pricing-main-section">
        <div className="pricing-background-shape pricing-shape-one" />
        <div className="pricing-background-shape pricing-shape-two" />

        <div className="container pricing-main-container">
          <div className="pricing-intro-grid">
            <div className="pricing-intro-content">
              <p className="eyebrow"style={{ fontSize: "18px" }}>Quote Preparation Pricing</p>

              <h2>
                Quote Preparation Starting at
                <span> Less Than $1</span>
              </h2>

              <p>
                Tritox offers quote preparation starting at less than $1 per
                completed eligible quote, providing agencies with a cost
                structure directly aligned with actual quoting volume.
              </p>

              <div className="pricing-intro-points">
                <div>
                  <span>✓</span>
                  <p>Volume-aligned support pricing</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>Pay only for completed eligible quotes</p>
                </div>

                <div>
                  <span>✓</span>
                  <p>No upfront fee to begin your free trial</p>
                </div>
              </div>
            </div>

            <div className="main-price-card">
              <div className="price-card-top-line" />

              <span className="price-card-label"style={{ fontSize: "18px" }}>QUOTE PREPARATION SUPPORT</span>

              <strong className="price-card-price">
                &lt; <span>$1</span>
              </strong>

              <p className="price-card-subtitle">Starting per completed eligible quote</p>

              <div className="price-card-divider" />

              <div className="price-card-row">
                <span className="price-row-icon">✓</span>
                <p>Free trial available</p>
              </div>

              <div className="price-card-row">
                <span className="price-row-icon">✓</span>
                <p>Monthly billing</p>
              </div>

              <div className="price-card-row">
                <span className="price-row-icon">✓</span>
                <p>Volume-aligned costs</p>
              </div>

              <Link to="/contact" className="price-card-button">
                Start Your Free Trial →
              </Link>
            </div>
          </div>

          <div className="eligible-quote-box">
            <div className="eligible-icon">✓</div>

            <div>
              <span style={{ fontSize: "18px" }}>PAY FOR COMPLETED ELIGIBLE QUOTES</span>

              <h3>Costs stay aligned with your actual quote volume.</h3>

              <p>
                Your agency pays based on the eligible quotes we complete,
                rather than paying for fixed staff regardless of workload.
                Ineligible leads that cannot proceed through the quoting
                process are not billed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing factors */}
      <section className="section pricing-factors-section">
        <div className="container">
          <div className="pricing-factors-heading">
            <div>
              <p className="eyebrow"style={{ fontSize: "18px" }}>Pricing Built Around Your Agency</p>

              <h2>Pricing Aligned to Your Agency’s Requirements</h2>
            </div>

            <p>
              Final pricing is structured around the workflow requirements,
              quote complexity, and quote volume unique to your agency.
            </p>
          </div>

          <div className="pricing-factor-grid">
            {pricingFactors.map((factor) => (
              <article
                key={factor.number}
                className={`pricing-factor-card ${factor.type}`}
              >
                <div className="factor-card-top">
                  <span className="factor-icon">{factor.icon}</span>

                  <span className="factor-number">{factor.number}</span>
                </div>

                <h3>{factor.title}</h3>

                <p>{factor.description}</p>

                <span className="factor-bottom-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly billing */}
      <section className="section monthly-billing-section">
        <div className="container monthly-billing-grid">
          <div className="monthly-billing-visual">
            <div className="billing-card">
              <div className="billing-card-header">
                <span style={{ fontSize: "18px" }}>TRITOX MONTHLY BILLING</span>
                <i>✓</i>
              </div>

              <div className="billing-card-line">
                <span>Eligible quotes completed</span>
                <strong>Volume-based</strong>
              </div>

              <div className="billing-card-line">
                <span>Upfront cost</span>
                <strong className="green-text">No upfront fees</strong>
              </div>

              <div className="billing-card-line">
                <span>Billing cycle</span>
                <strong>Monthly</strong>
              </div>

              <div className="billing-card-total">
                <span>Cost structure</span>
                <strong>Simple & transparent</strong>
              </div>
            </div>

            <div className="billing-floating-note">
              <span>✓</span>
              <p>Billing begins after your free trial period.</p>
            </div>
          </div>

          <div className="monthly-billing-content">
            <p className="eyebrow" style={{ fontSize: "18px" }}>Simple Monthly Billing</p>

            <h2>A transparent cost structure designed for your workflow.</h2>

            <p>
              There are no upfront fees to begin working with Tritox. Billing
              starts only after the free trial period is completed and is
              processed on a monthly basis.
            </p>

            <p>
              Each monthly invoice is based on the eligible quotes completed
              during that billing period, giving your agency a clear and
              transparent cost structure.
            </p>

            <Link to="/contact" className="primary-button">
              Request Your Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="cost-comparison-section">
        <div className="comparison-grid-pattern" />
        <div className="comparison-circle comparison-circle-one" />
        <div className="comparison-circle comparison-circle-two" />

        <div className="container comparison-container">
          <div className="comparison-heading">
            <p className="eyebrow comparison-eyebrow"style={{ fontSize: "18px" }}>
              Cost Structure & Operational Efficiency
            </p>

            <h2>A More Flexible Approach to Expanding Backend Capacity</h2>

            <p>
              Expanding an in-house team creates a long-term fixed cost
              commitment that extends beyond base compensation. Payroll taxes,
              benefits, recruitment, onboarding, training, equipment, and
              ongoing employment overhead all contribute to the total cost of
              additional internal capacity.
            </p>

            <p>
              Tritox provides a variable support model that allows agencies to
              expand backend capacity while maintaining greater control over
              staffing-related costs.
            </p>
          </div>

          <div className="pricing-comparison-card">
            <div className="comparison-card-header">
              <div>
                <span className="comparison-small-label"style={{ fontSize: "18px" }}>
                  COST COMPARISON
                </span>

                <h3>In-House Resource vs Tritox Support</h3>
              </div>

              <span className="comparison-savings-badge">
                Up to 70% Lower Cost
              </span>
            </div>

            <div className="pricing-table-scroll">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Cost Consideration</th>
                    <th>In-House W-2 Resource</th>
                    <th>Tritox Support Model</th>
                  </tr>
                </thead>

                <tbody>
                  {costRows.map((row) => (
                    <tr key={row.consideration}>
                      <td>{row.consideration}</td>
                      <td>{row.inHouse}</td>
                      <td>
                        <span className="table-check">✓</span>
                        {row.tritox}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="comparison-disclaimer">
              *Actual cost differences depend on compensation levels, staffing
              structure, workflow requirements, quote complexity, and quote
              volume.
            </p>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="pricing-final-cta">
        <div className="container pricing-final-cta-content">
          <div>
            <p className="eyebrow pricing-light-eyebrow"style={{ fontSize: "18px" }}>
              Start With a Free Trial
            </p>

            <h2>Explore a more flexible way to support your agency.</h2>

            <p>
              Get quote preparation support aligned with your actual workflow,
              quote volume, and operational requirements.
            </p>
          </div>

          <div className="pricing-final-buttons">
            <Link to="/contact" className="pricing-trial-button">
              Start Your Free Trial →
            </Link>

            <Link to="/services" className="pricing-services-button">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// function AboutPage() {
//   const values = [
//     {
//       number: "01",
//       title: "Professional Discipline",
//       description:
//         "We operate through defined processes, clear accountability, consistent communication, and disciplined execution. Every engagement is managed with a strong focus on operational accuracy, reliability, and adherence to client-specific requirements.",
//       icon: "✓",
//     },
//     {
//       number: "02",
//       title: "Insurance Workflow Knowledge",
//       description:
//         "Our teams are trained in the systems, terminology, quoting requirements, and operational workflows associated with Farmers Insurance agency operations. This enables Tritox to work effectively within established agency environments with minimal disruption to existing processes.",
//       icon: "◈",
//     },
//     {
//       number: "03",
//       title: "Confidentiality & Responsible Access",
//       description:
//         "Agency and customer information is handled through authorized, role-based access controls and defined confidentiality procedures. Team members are provided only the access required to perform their assigned responsibilities.",
//       icon: "⌁",
//     },
//     {
//       number: "04",
//       title: "Long-Term Operational Alignment",
//       description:
//         "Tritox works to align with each client’s systems, standards, and operating model rather than introducing a separate process. This creates stronger continuity between our support functions and the client’s internal operations over time.",
//       icon: "↗",
//     },
//   ];

//   return (
//     <main className="about-page">
//       {/* About Hero */}
//       <section className="about-hero">
//         <div className="about-hero-grid-pattern" />
//         <div className="about-hero-circle about-hero-circle-one" />
//         <div className="about-hero-circle about-hero-circle-two" />

//         <div className="container about-hero-content">
//           <p className="about-eyebrow">About Tritox Technologies</p>

//           <h1>
//             Structured Operations.
//             <span>Reliable Backend Support.</span>
//           </h1>

//           <p>
//             Tritox Technologies Private Limited is a specialized business
//             operations and backend support company serving clients worldwide.
//           </p>
//         </div>
//       </section>

//       {/* Company introduction */}
//       <section className="section about-introduction-section">
//         <div className="container about-introduction-grid">
//           <div className="about-introduction-content">
//             <p className="eyebrow">Who We Are</p>

//             <h2>
//               A dependable operations partner built around disciplined
//               execution.
//             </h2>

//             <p>
//               Tritox Technologies Private Limited provides specialized business
//               operations and backend support services for organizations that
//               need structured, reliable, and scalable operational assistance.
//             </p>

//             <p>
//               Our capabilities include Farmers Insurance Quote Preparation
//               Support, Real Estate Backend Support, Broker Price Opinions
//               (BPO), and Data Entry Services—delivered through structured
//               processes aligned with each client’s operational requirements.
//             </p>

//             <Link to="/contact" className="about-primary-button">
//               Speak With Our Team →
//             </Link>
//           </div>

//           <div className="about-company-card">
//             <div className="company-card-header">
//               <span>TRITOX TECHNOLOGIES</span>
//               <i>●</i>
//             </div>

//             <div className="company-card-main">
//               <div className="company-monogram">T</div>

//               <div>
//                 <h3>Tritox Technologies Private Limited</h3>
//                 <p>Business Operations & Backend Support</p>
//               </div>
//             </div>

//             <div className="company-info-grid">
//               <div>
//                 <small>Founded</small>
//                 <strong>2023</strong>
//               </div>

//               <div>
//                 <small>Headquartered</small>
//                 <strong>Tamil Nadu, India</strong>
//               </div>

//               <div>
//                 <small>Structure</small>
//                 <strong>Private Limited Company</strong>
//               </div>

//               <div>
//                 <small>Service Model</small>
//                 <strong>Global Client Support</strong>
//               </div>
//             </div>

//             <div className="company-card-footer">
//               <span>✓</span>
//               Structured processes aligned with client operations.
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Operating model */}
//       <section className="about-operating-section">
//         <div className="container about-operating-grid">
//           <div className="operating-visual-card">
//             <div className="operating-card-top">
//               <span>TRITOX OPERATING MODEL</span>
//               <i>✓</i>
//             </div>

//             <div className="operating-flow">
//               <div className="operating-flow-item">
//                 <span>01</span>
//                 <p>Defined Process</p>
//               </div>

//               <i className="operating-flow-line" />

//               <div className="operating-flow-item">
//                 <span>02</span>
//                 <p>Responsible Access</p>
//               </div>

//               <i className="operating-flow-line" />

//               <div className="operating-flow-item">
//                 <span>03</span>
//                 <p>Consistent Execution</p>
//               </div>
//             </div>

//             <div className="operating-card-bottom">
//               <div>
//                 <strong>Client-Aligned</strong>
//                 <small>Built around established workflows</small>
//               </div>

//               <span>→</span>
//             </div>
//           </div>

//           <div className="about-operating-content">
//             <p className="about-light-eyebrow">Built for Consistency</p>

//             <h2>
//               A practical operating model aligned with client systems and
//               standards.
//             </h2>

//             <p>
//               Founded in 2023 in Tamil Nadu, India, Tritox has built its
//               operating model around disciplined execution, domain expertise,
//               secure information handling, and consistent process alignment.
//             </p>

//             <p>
//               As a registered Private Limited Company, we operate with a strong
//               emphasis on corporate accountability, confidentiality,
//               operational consistency, and responsible business practices.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* What we stand for */}
//       <section className="section values-section">
//         <div className="container">
//           <div className="values-heading">
//             <div>
//               <p className="eyebrow">What We Stand For</p>

//               <h2>
//                 Professional support delivered through clarity, discipline, and
//                 responsible execution.
//               </h2>
//             </div>

//             <p>
//               Our approach is built to support long-term operational alignment
//               and reliable day-to-day collaboration with every client.
//             </p>
//           </div>

//           <div className="values-grid">
//             {values.map((value) => (
//               <article key={value.number} className="value-card">
//                 <div className="value-card-top">
//                   <span className="value-icon">{value.icon}</span>
//                   <span className="value-number">{value.number}</span>
//                 </div>

//                 <h3>{value.title}</h3>

//                 <p>{value.description}</p>

//                 <span className="value-card-line" />
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Security section */}
//       <section className="section security-section">
//         <div className="container security-grid">
//           <div className="security-content">
//             <p className="eyebrow">Security & Infrastructure</p>

//             <h2>Secure Access. Controlled Operations. Responsible Data Handling.</h2>

//             <p>
//               Tritox maintains a structured operating environment designed to
//               support secure, controlled, and consistent client operations.
//             </p>

//             <p>
//               Our teams work through authorized system access, secure
//               connectivity, defined access responsibilities, and controlled
//               data-handling practices to help safeguard agency and customer
//               information throughout day-to-day operations.
//             </p>

//             <div className="security-list">
//               <span>
//                 <i>✓</i>
//                 Authorized system access
//               </span>

//               <span>
//                 <i>✓</i>
//                 Role-based responsibilities
//               </span>

//               <span>
//                 <i>✓</i>
//                 Controlled data handling practices
//               </span>

//               <span>
//                 <i>✓</i>
//                 Consistent operational processes
//               </span>
//             </div>
//           </div>

//           <div className="security-visual">
//             <div className="security-panel">
//               <div className="security-panel-header">
//                 <span>SECURE OPERATIONS</span>
//                 <i>●</i>
//               </div>

//               <div className="security-lock">
//                 <div className="lock-shackle" />
//                 <div className="lock-body">✓</div>
//               </div>

//               <strong>Controlled Client Access</strong>

//               <p>
//                 Access responsibilities aligned with assigned operational
//                 requirements.
//               </p>

//               <div className="security-status-list">
//                 <div>
//                   <span />
//                   Authorized Access
//                 </div>

//                 <div>
//                   <span />
//                   Defined Responsibilities
//                 </div>

//                 <div>
//                   <span />
//                   Controlled Operations
//                 </div>
//               </div>
//             </div>

//             <div className="security-floating-label">
//               <span>✓</span>
//               Confidentiality-focused operations
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final call to action */}
//       <section className="about-final-cta">
//         <div className="container about-final-cta-content">
//           <div>
//             <p className="about-light-eyebrow">Work With Tritox</p>

//             <h2>
//               Build a more structured and reliable backend support model.
//             </h2>

//             <p>
//               Discover how Tritox can align with your existing workflows and
//               support your operational requirements.
//             </p>
//           </div>

//           <div className="about-final-buttons">
//             <Link to="/contact" className="about-cta-main-button">
//               Contact Our Team →
//             </Link>

//             <Link to="/services" className="about-cta-secondary-button">
//               Explore Services
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

function ContactPage() {
  
  const values = [
    {
      number: "01",
      title: "Professional Discipline",
      description:
        "We operate through defined processes, clear accountability, consistent communication, and disciplined execution. Every engagement is managed with a strong focus on operational accuracy, reliability, and adherence to client-specific requirements.",
      icon: "✓",
    },
    {
      number: "02",
      title: "Insurance Workflow Knowledge",
      description:
        "Our teams are trained in the systems, terminology, quoting requirements, and operational workflows associated with Farmers Insurance agency operations. This enables Tritox to work effectively within established agency environments with minimal disruption to existing processes.",
      icon: "◈",
    },
    {
      number: "03",
      title: "Confidentiality & Responsible Access",
      description:
        "Agency and customer information is handled through authorized, role-based access controls and defined confidentiality procedures. Team members are provided only the access required to perform their assigned responsibilities.",
      icon: "⌁",
    },
    {
      number: "04",
      title: "Long-Term Operational Alignment",
      description:
        "Tritox works to align with each client’s systems, standards, and operating model rather than introducing a separate process. This creates stronger continuity between our support functions and the client’s internal operations over time.",
      icon: "↗",
    },
  ];

  
  return (
    <main>
      <PageBanner
        eyebrow="Contact Us"
        title="Start Your Free Trial"
        description="Tell us about your agency and quote preparation requirements. Our team will help you understand the next steps."
      />

      {/* Contact form section */}
      <section className="section white-section">
        <div className="container contact-grid">
          <div className="contact-information">
            <p className="eyebrow"style={{ fontSize: "18px" }}>Get Started</p>

            <h2>Ready to strengthen your agency workflow?</h2>

            <p>
              Request a free trial to learn how Tritox can support your Auto,
              Home, and Bundle quote preparation process.
            </p>

            <div className="contact-list">
              <div>
                <span>✓</span>
                Auto quote preparation support
              </div>

              <div>
                <span>✓</span>
                Home quote preparation support
              </div>

              <div>
                <span>✓</span>
                Bundle quote preparation support
              </div>
            </div>

            <div className="contact-info-note">
              <span>✓</span>

              <p>
                Tritox works within your existing agency workflow, quoting
                standards, CRM process, and operational requirements.
              </p>
            </div>
            
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thank you. Your free trial request has been submitted.");
            }}
          >
            <div className="contact-form-heading">
              <p style={{ fontSize: "18px" }}>REQUEST YOUR FREE TRIAL</p>
              <h3>Tell us about your agency.</h3>
            </div>
           {/* MAINTENANCE MESSAGE */}
<div
  style={{
    marginTop: "20px",
    textAlign: "center",
  }}
>
  <p
    style={{
      fontSize: "18px",
      fontWeight: "700",
      color: "#0d47a1",
      marginBottom: "10px",
    }}
  >
    Website Under Maintenance
  </p>

  <p
    style={{
      fontSize: "15px",
      color: "#555",
      marginBottom: "15px",
    }}
  >
    We are currently updating our website. Please contact us directly for
    more information.
  </p>

  <a
    href="mailto:Info@tritoxtechnologies.com"
    style={{
      color: "#0d47a1",
      fontSize: "16px",
      fontWeight: "700",
      textDecoration: "none",
    }}
  >
    Email Us: Info@tritoxtechnologies.com
  </a>
</div>

            {/* <label>
              Full Name
              <input type="text" placeholder="Enter your name" required />
            </label>

            <label>
              Agency Name
              <input type="text" placeholder="Enter agency name" required />
            </label>

            <label>
              Email Address
              <input
                type="email"
                placeholder="Enter your email address"
                required
              />
            </label>

            <label>
              Quote Support Required
              <select defaultValue="" required>
                <option value="" disabled>
                  Select quote support
                </option>

                <option value="auto">Auto Quote Support</option>
                <option value="home">Home Quote Support</option>
                <option value="bundle">Bundle Quote Support</option>
                <option value="crm">CRM Management Support</option>
                <option value="all">All Services</option>
              </select>
            </label>

            <label>
              Message
              <textarea
                rows="5"
                placeholder="Tell us about your agency requirements"
              />
            </label>

            <button type="submit" className="primary-button submit-button">
              Request Free Trial →
            </button> */}
          </form>
        </div>
      </section>


      {/* Final CTA */}
      {/* <section className="contact-final-cta">
        <div className="container contact-final-content">
          <div>
            <p className="contact-light-eyebrow">
              Ready to Get Started?
            </p>

            <h2>
              Build a more efficient quote preparation workflow for your
              agency.
            </h2>

            <p>
              Start your free trial and discover how Tritox can help your
              agency expand backend capacity while keeping producers focused on
              customers and new business.
            </p>
          </div>

          <Link to="/contact" className="contact-final-button">
            Start Your Free Trial →
          </Link>
        </div>
      </section> */}
       {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-grid-pattern" />
        <div className="about-hero-circle about-hero-circle-one" />
        <div className="about-hero-circle about-hero-circle-two" />

        <div className="container about-hero-content">
          <p className="about-eyebrow"style={{ fontSize: "18px" }}>About Tritox Technologies</p>

          <h1>
            Structured Operations.
            <span>Reliable Backend Support.</span>
          </h1>

          <p>
            Tritox Technologies Private Limited is a specialized business
            operations and backend support company serving clients worldwide.
          </p>
        </div>
      </section>

      {/* Company introduction */}
      <section className="section about-introduction-section">
        <div className="container about-introduction-grid">
          <div className="about-introduction-content">
            <p className="eyebrow"style={{ fontSize: "18px" }}>Who We Are</p>

            <h2>
              A dependable operations partner built around disciplined
              execution.
            </h2>

            <p>
              Tritox Technologies Private Limited provides specialized business
              operations and backend support services for organizations that
              need structured, reliable, and scalable operational assistance.
            </p>

            <p>
              Our capabilities include Farmers Insurance Quote Preparation
              Support, Real Estate Backend Support, Broker Price Opinions
              (BPO), and Data Entry Services—delivered through structured
              processes aligned with each client’s operational requirements.
            </p>

            <Link to="/contact" className="about-primary-button">
              Speak With Our Team →
            </Link>
          </div>

          <div className="about-company-card">
            <div className="company-card-header">
              <span style={{ fontSize: "18px" }}>TRITOX TECHNOLOGIES</span>
              <i>●</i>
            </div>

            <div className="company-card-main">
              <div className="company-monogram">T</div>

              <div>
                <h3>Tritox Technologies Private Limited</h3>
                <p>Business Operations & Backend Support</p>
              </div>
            </div>

            <div className="company-info-grid">
              <div>
                <small>Founded</small>
                <strong>2023</strong>
              </div>

              <div>
                <small>Headquartered</small>
                <strong>Tamil Nadu, India</strong>
              </div>

              <div>
                <small>Structure</small>
                <strong>Private Limited Company</strong>
              </div>

              <div>
                <small>Service Model</small>
                <strong>Global Client Support</strong>
              </div>
            </div>

            <div className="company-card-footer">
              <span>✓</span>
              Structured processes aligned with client operations.
            </div>
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section className="about-operating-section">
        <div className="container about-operating-grid">
          <div className="operating-visual-card">
            <div className="operating-card-top">
              <span style={{ fontSize: "18px" }}>TRITOX OPERATING MODEL</span>
              <i>✓</i>
            </div>

            <div className="operating-flow">
              <div className="operating-flow-item">
                <span>01</span>
                <p>Defined Process</p>
              </div>

              <i className="operating-flow-line" />

              <div className="operating-flow-item">
                <span>02</span>
                <p>Responsible Access</p>
              </div>

              <i className="operating-flow-line" />

              <div className="operating-flow-item">
                <span>03</span>
                <p>Consistent Execution</p>
              </div>
            </div>

            <div className="operating-card-bottom">
              <div>
                <strong>Client-Aligned</strong>
                <small>Built around established workflows</small>
              </div>

              <span>→</span>
            </div>
          </div>

          <div className="about-operating-content">
            <p className="about-light-eyebrow"style={{ fontSize: "18px" }}>Built for Consistency</p>

            <h2>
              A practical operating model aligned with client systems and
              standards.
            </h2>

            <p>
              Founded in 2023 in Tamil Nadu, India, Tritox has built its
              operating model around disciplined execution, domain expertise,
              secure information handling, and consistent process alignment.
            </p>

            <p>
              As a registered Private Limited Company, we operate with a strong
              emphasis on corporate accountability, confidentiality,
              operational consistency, and responsible business practices.
            </p>
          </div>
        </div>
      </section>

      {/* What we stand for */}
      <section className="section values-section">
        <div className="container">
          <div className="values-heading">
            <div>
              <p className="eyebrow"style={{ fontSize: "18px" }}>What We Stand For</p>

              <h2>
                Professional support delivered through clarity, discipline, and
                responsible execution.
              </h2>
            </div>

            <p>
              Our approach is built to support long-term operational alignment
              and reliable day-to-day collaboration with every client.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <article key={value.number} className="value-card">
                <div className="value-card-top">
                  <span className="value-icon">{value.icon}</span>
                  <span className="value-number">{value.number}</span>
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

                <span className="value-card-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Security section */}
      <section className="section security-section">
        <div className="container security-grid">
          <div className="security-content">
            <p className="eyebrow"style={{ fontSize: "18px" }}>Security & Infrastructure</p>

            <h2>Secure Access. Controlled Operations. Responsible Data Handling.</h2>

            <p>
              Tritox maintains a structured operating environment designed to
              support secure, controlled, and consistent client operations.
            </p>

            <p>
              Our teams work through authorized system access, secure
              connectivity, defined access responsibilities, and controlled
              data-handling practices to help safeguard agency and customer
              information throughout day-to-day operations.
            </p>

            <div className="security-list">
              <span>
                <i>✓</i>
                Authorized system access
              </span>

              <span>
                <i>✓</i>
                Role-based responsibilities
              </span>

              <span>
                <i>✓</i>
                Controlled data handling practices
              </span>

              <span>
                <i>✓</i>
                Consistent operational processes
              </span>
            </div>
          </div>

          <div className="security-visual">
            <div className="security-panel">
              <div className="security-panel-header">
                <span>SECURE OPERATIONS</span>
                <i>●</i>
              </div>

              <div className="security-lock">
                <div className="lock-shackle" />
                <div className="lock-body">✓</div>
              </div>

              <strong>Controlled Client Access</strong>

              <p>
                Access responsibilities aligned with assigned operational
                requirements.
              </p>

              <div className="security-status-list">
                <div>
                  <span />
                  Authorized Access
                </div>

                <div>
                  <span />
                  Defined Responsibilities
                </div>

                <div>
                  <span />
                  Controlled Operations
                </div>
              </div>
            </div>

            <div className="security-floating-label">
              <span>✓</span>
              Confidentiality-focused operations
            </div>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="about-final-cta">
        <div className="container about-final-cta-content">
          <div>
            <p className="about-light-eyebrow"style={{ fontSize: "18px" }}>Work With Tritox</p>

            <h2>
              Build a more structured and reliable backend support model.
            </h2>

            <p>
              Discover how Tritox can align with your existing workflows and
              support your operational requirements.
            </p>
          </div>

          <div className="about-final-buttons">
            <Link to="/contact" className="about-cta-main-button">
              Contact Our Team →
            </Link>

            <Link to="/services" className="about-cta-secondary-button">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="container">
        <p className="eyebrow">404 Error</p>
        <h1>Page Not Found</h1>
        <p>The page you requested does not exist.</p>

        <Link to="/" className="primary-button">
          Return Home
        </Link>
      </div>
    </main>
  );
}


// function OnboardingPage() {
//   const approvedCountries = [
//     "Argentina",
//     "Brazil",
//     "Colombia",
//     "India",
//     "Mexico",
//     "Philippines",
//   ];

//   const onboardingSteps = [
//     {
//       number: "01",
//       title: "Confirm Eligibility & Compliance",
//       description:
//         "The international team member must reside in an approved country. The agency is responsible for confirming work eligibility, completing applicable background checks, and ensuring assigned duties remain within permitted non-licensed activities.",
//       details: [
//         "Approved-country eligibility",
//         "Work authorization confirmation",
//         "Background verification",
//         "Non-licensed duty alignment",
//       ],
//       type: "onboarding-blue-step",
//     },
//     {
//       number: "02",
//       title: "Link Your Agency to an Existing Farmers ID",
//       description:
//         "If an existing international staff member requires dual-code system access, the agent or district manager can submit the request through MASS (My Agent Self Service).",
//       details: [
//         "MASS request submission",
//         "DocuSign link received by email",
//         "Required information completed",
//         "Farmers review and approval",
//       ],
//       type: "onboarding-green-step",
//     },
//     {
//       number: "03",
//       title: "Add a New International Staff Member",
//       description:
//         "Using MASS (My Agent Self Service), the agency can add a new international staff member and begin the required access and onboarding process.",
//       details: [
//         "New staff request initiated",
//         "Background review completed",
//         "DocuSign documents completed",
//         "Farmers review and approval",
//       ],
//       type: "onboarding-yellow-step",
//     },
//     {
//       number: "04",
//       title: "Configure the Farmers Access Environment",
//       description:
//         "Approved staff access Farmers systems through a U.S.-provisioned Microsoft Windows 365 Cloud PC with the required cyber protection in place.",
//       details: [
//         "Windows 365 Cloud PC",
//         "Authorized access environment",
//         "Required cyber protection",
//         "Active Farmers workflow access",
//       ],
//       type: "onboarding-blue-step",
//     },
//     {
//       number: "05",
//       title: "Create Agency CRM Access",
//       description:
//         "Once Farmers system setup is complete, the agency creates a dedicated CRM account for the assigned Tritox team member.",
//       details: [
//         "Dedicated CRM account",
//         "Agency-defined access level",
//         "Role-based responsibilities",
//         "CRM workflow alignment",
//       ],
//       type: "onboarding-green-step",
//     },
//     {
//       number: "06",
//       title: "Establish the Payment Method",
//       description:
//         "The agency can establish the preferred payment method before ongoing production support begins.",
//       details: [
//         "Gusto",
//         "Wise",
//         "Wire transfer",
//         "Rippling or agreed payment option",
//       ],
//       type: "onboarding-yellow-step",
//     },
//   ];

//   return (
//     <main className="onboarding-page">
//       <PageBanner
//         eyebrow="International Staff Onboarding"
//         title="Authorized International Staff Setup for Farmers Agency Support"
//         description="A structured onboarding process for approved international staff supporting Farmers agency operations through authorized access and defined responsibilities."
//       />

//       {/* Onboarding introduction */}
//       <section className="section onboarding-intro-section">
//         <div className="onboarding-intro-shape onboarding-intro-shape-one" />
//         <div className="onboarding-intro-shape onboarding-intro-shape-two" />

//         <div className="container onboarding-intro-container">
//           <div className="onboarding-intro-grid">
//             <div className="onboarding-intro-content">
//               <p className="eyebrow">International Staff Setup</p>

//               <h2>
//                 A clear process for authorized international agency support.
//               </h2>

//               <p>
//                 Farmers allows approved international staff to access its
//                 systems and support agency operations as non-licensed staff,
//                 once the required onboarding and access steps are completed.
//               </p>

//               <p>
//                 Team members may already hold existing Farmers Dashboard IDs
//                 and have completed required background verification checks.
//                 Depending on the agency’s requirement, you can either link
//                 your agency to an existing staff member’s Farmers ID or add a
//                 new international staff member.
//               </p>
//             </div>

//             <div className="onboarding-status-card">
//               <div className="onboarding-status-header">
//                 <span>ONBOARDING OVERVIEW</span>
//                 <i>✓</i>
//               </div>

//               <div className="onboarding-status-item">
//                 <span className="status-item-number">01</span>

//                 <div>
//                   <strong>Eligibility & Compliance</strong>
//                   <small>Agency confirms eligibility and assigned duties</small>
//                 </div>
//               </div>

//               <div className="onboarding-status-item">
//                 <span className="status-item-number">02</span>

//                 <div>
//                   <strong>Farmers System Access</strong>
//                   <small>Existing ID link or new staff request process</small>
//                 </div>
//               </div>

//               <div className="onboarding-status-item">
//                 <span className="status-item-number">03</span>

//                 <div>
//                   <strong>CRM & Production Setup</strong>
//                   <small>Dedicated CRM access and support readiness</small>
//                 </div>
//               </div>

//               <div className="onboarding-status-footer">
//                 <span>✓</span>
//                 Structured agency-led onboarding process
//               </div>
//             </div>
//           </div>

//           <div className="approved-countries-card">
//             <div className="approved-countries-icon">✓</div>

//             <div>
//               <span className="countries-label">APPROVED COUNTRY ELIGIBILITY</span>

//               <h3>International team members must reside in an approved country.</h3>

//               <div className="country-list">
//                 {approvedCountries.map((country) => (
//                   <span key={country}>{country}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Choose onboarding path */}
//       <section className="section onboarding-path-section">
//         <div className="container">
//           <div className="onboarding-path-heading">
//             <div>
//               <p className="eyebrow">Choose the Appropriate Setup Path</p>

//               <h2>
//                 Link an existing Farmers ID or add a new international staff
//                 member.
//               </h2>
//             </div>

//             <p>
//               The onboarding process depends on whether the assigned team
//               member already has an existing Farmers Dashboard ID or requires
//               new access setup.
//             </p>
//           </div>

//           <div className="onboarding-path-grid">
//             <article className="onboarding-path-card existing-id-card">
//               <div className="path-card-top">
//                 <span className="path-icon">ID</span>
//                 <span className="path-label">EXISTING STAFF MEMBER</span>
//               </div>

//               <h3>Link Your Agency to an Existing Farmers ID</h3>

//               <p>
//                 If an existing international staff member requires dual-code
//                 system access, the agent or district manager can submit the
//                 request through MASS (My Agent Self Service).
//               </p>

//               <div className="path-step-list">
//                 <div>
//                   <span>01</span>
//                   Submit the dual-code access request through MASS
//                 </div>

//                 <div>
//                   <span>02</span>
//                   Staff member receives a DocuSign link by email
//                 </div>

//                 <div>
//                   <span>03</span>
//                   Required information is completed and submitted
//                 </div>

//                 <div>
//                   <span>04</span>
//                   Farmers reviews and approves system access
//                 </div>
//               </div>
//             </article>

//             <article className="onboarding-path-card new-staff-card">
//               <div className="path-card-top">
//                 <span className="path-icon">+</span>
//                 <span className="path-label">NEW INTERNATIONAL STAFF</span>
//               </div>

//               <h3>Add a New International Staff Member</h3>

//               <p>
//                 Using the same MASS (My Agent Self Service) portal, the agency
//                 can add a new international staff member and begin the required
//                 access and onboarding process.
//               </p>

//               <div className="path-step-list">
//                 <div>
//                   <span>01</span>
//                   New staff request is initiated through MASS
//                 </div>

//                 <div>
//                   <span>02</span>
//                   Required background review is completed
//                 </div>

//                 <div>
//                   <span>03</span>
//                   Staff member receives DocuSign documents by email
//                 </div>

//                 <div>
//                   <span>04</span>
//                   Documents are submitted for review and approval
//                 </div>
//               </div>
//             </article>
//           </div>
//         </div>
//       </section>

//       {/* Full onboarding process */}
//       <section className="onboarding-workflow-section">
//         <div className="onboarding-workflow-pattern" />
//         <div className="onboarding-workflow-circle onboarding-circle-one" />
//         <div className="onboarding-workflow-circle onboarding-circle-two" />

//         <div className="container onboarding-workflow-container">
//           <div className="onboarding-workflow-heading">
//             <p className="onboarding-light-eyebrow">
//               Onboarding Workflow
//             </p>

//             <h2>
//               Six structured steps from eligibility review to production-ready
//               support.
//             </h2>

//             <p>
//               This process helps agencies create the required setup,
//               authorized access, CRM responsibilities, and payment arrangements
//               before ongoing support begins.
//             </p>
//           </div>

//           <div className="onboarding-steps-grid">
//             {onboardingSteps.map((step) => (
//               <article
//                 key={step.number}
//                 className={`onboarding-step-card ${step.type}`}
//               >
//                 <div className="onboarding-step-top">
//                   <span className="onboarding-step-number">{step.number}</span>

//                   <span className="step-status">Setup Step</span>
//                 </div>

//                 <h3>{step.title}</h3>

//                 <p>{step.description}</p>

//                 <div className="onboarding-detail-list">
//                   {step.details.map((detail) => (
//                     <span key={detail}>
//                       <i>✓</i>
//                       {detail}
//                     </span>
//                   ))}
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Access environment and CRM */}
//       <section className="section access-environment-section">
//         <div className="container access-environment-grid">
//           <div className="access-visual">
//             <div className="cloud-access-card">
//               <div className="cloud-card-header">
//                 <span>AUTHORIZED ACCESS ENVIRONMENT</span>
//                 <i>✓</i>
//               </div>

//               <div className="cloud-computer-icon">
//                 <div className="cloud-icon">☁</div>
//                 <div className="computer-icon">▣</div>
//               </div>

//               <strong>Windows 365 Cloud PC</strong>

//               <p>
//                 U.S.-provisioned environment configured for authorized Farmers
//                 workflow access.
//               </p>

//               <div className="cloud-access-list">
//                 <div>
//                   <span>✓</span>
//                   Secure connectivity
//                 </div>

//                 <div>
//                   <span>✓</span>
//                   Defined access responsibilities
//                 </div>

//                 <div>
//                   <span>✓</span>
//                   Controlled workflow environment
//                 </div>
//               </div>
//             </div>

//             <div className="crm-access-floating-card">
//               <span>CRM</span>

//               <div>
//                 <strong>Dedicated CRM Access</strong>
//                 <small>Role-aligned account setup</small>
//               </div>
//             </div>
//           </div>

//           <div className="access-environment-content">
//             <p className="eyebrow">Access & CRM Configuration</p>

//             <h2>
//               Configure the working environment before production support
//               begins.
//             </h2>

//             <p>
//               Approved staff access Farmers systems through a U.S.-provisioned
//               Microsoft Windows 365 Cloud PC with the required cyber protection
//               in place.
//             </p>

//             <p>
//               Once the environment is configured and access is active, the team
//               member can begin working within the authorized Farmers workflow.
//               The agency then creates a dedicated CRM account with access
//               aligned to the assigned Tritox team member’s approved
//               responsibilities.
//             </p>

//             <div className="access-check-list">
//               <span>
//                 <i>✓</i>
//                 Authorized Farmers access environment
//               </span>

//               <span>
//                 <i>✓</i>
//                 Dedicated agency CRM account
//               </span>

//               <span>
//                 <i>✓</i>
//                 Role-based system permissions
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Payment */}
//       <section className="section onboarding-payment-section">
//         <div className="container payment-grid">
//           <div className="payment-content">
//             <p className="eyebrow">Payment Setup</p>

//             <h2>Establish the preferred payment method before support begins.</h2>

//             <p>
//               The agency can establish the preferred payment method before
//               ongoing production support begins. Payment arrangements are
//               confirmed as part of the onboarding process.
//             </p>
//           </div>

//           <div className="payment-method-card">
//             <p className="payment-card-label">PAYMENT OPTIONS</p>

//             <div className="payment-method-list">
//               <span>Gusto</span>
//               <span>Wise</span>
//               <span>Wire Transfer</span>
//               <span>Rippling</span>
//               <span>Mutually Agreed Option</span>
//             </div>

//             <div className="payment-card-footer">
//               <span>✓</span>
//               Payment arrangement confirmed before ongoing support.
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="onboarding-final-cta">
//         <div className="container onboarding-final-content">
//           <div>
//             <p className="onboarding-light-eyebrow">
//               Ready to Begin?
//             </p>

//             <h2>
//               Start the onboarding process for dedicated agency support.
//             </h2>

//             <p>
//               Contact Tritox to discuss your agency’s quote preparation,
//               onboarding, CRM access, and operational support requirements.
//             </p>
//           </div>

//           <div className="onboarding-final-actions">
//             <Link to="/contact" className="onboarding-contact-button">
//               Contact Our Team →
//             </Link>

//             <Link to="/services" className="onboarding-services-button">
//               View Our Services
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <Link to="/" className="footer-brand">
              <img
    src="/tritox_logo.png"
    
    className="brand-logo"
  />
            Tritox Technologies
          </Link>

          <p>
            Specialized quote preparation and operational support for insurance
            agencies.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/success-stories">Success Stories</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        © 2026 Tritox Technologies. All rights reserved.
      </div>
    </footer>
  );
}




function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/tritox-advantage" element={<AdvantagePage />} />
        <Route path="/quote-team-impact" element={<ImpactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/success-stories" element={<SuccessStoryPage />} />
        {/* <Route path="/onboarding" element={<OnboardingPage />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;