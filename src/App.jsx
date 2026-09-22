import { Link, NavLink, Route, Routes } from "react-router-dom";
//import { useState } from "react";
import "./HomePage.css";
import "./ServicesPage.css";
import "./AdvantagePage.css";
import "./SuccessStoryPage.css";
import "./PricingPage.css";
import "./AboutPage.css";
import "./PageBanner.css";


import { useEffect, useState } from "react";
import "./Navbar.css";

const navigationItems = [
  { label: "Home", path: "home" },
  { label: "Services", path: "services" },
  { label: "Choose Tritox", path: "tritox-advantage" },
  { label: "Resource", path: "quote-team-impact" },
  { label: "Pricing", path: "pricing" },
  { label: "Success Story", path: "success-stories" },
  { label: "Contact Us", path: "contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) =>
        document.getElementById(item.path)
      );

      let currentSection = "home";

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;

          if (sectionTop <= 150) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar-content">

        {/* Logo */}
        <a href="#home" className="brand">
          <img
            src="/tritox_logo.png"
            className="brand-logo"
            
          />

          <span style={{ color: "#1565c0" }}>Tritox Technologies</span>
        </a>

        {/* Navigation */}
        <nav className="nav-links">
          {navigationItems.map((item) => (
            <a
              key={item.path}
              href={`#${item.path}`}
              className={
                activeSection === item.path ? "active" : ""
              }
            >
              {item.label}
            </a>
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
      recognition: "",
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
      image: "/bundle.png",
      
      service: "Quote Preparation",
    },
    {
      rating: "5.0",
      quote:
        "Tritox Technologies offers a practical approach to insurance quote preparation and operational support. Their focus on improving workflow efficiency and helping insurance agencies manage their daily quoting requirements can provide valuable support for growing agency networks.",
name: "Matt Bennett",
      role: " District Manager",
      location: " United States",
      recognition: "",
      image: "/bundle.png",
      
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
    setOpenFaq((currentFaq) =>
      currentFaq === index ? null : index
    );
  };

  return (
    <main className="services-page">

      {/* =====================================================
          PAGE BANNER
      ===================================================== */}

      {/* <section className="success-network-hero">
  <div className="success-network-overlay"></div>

  <div className="success-network-container">
    <div className="success-network-content">

      <span className="success-eyebrow">
        Success Stories
      </span>

      <h1>
        Supporting Agency Growth
        <span> Through Dedicated Quote Preparation</span>
      </h1>

      <p>
        See how dedicated backend quote support helps agencies expand
        capacity, manage higher lead volume, and keep producers focused
        on customers and new business.
      </p>

      <div className="success-hero-stats">
        <div className="success-stat-card">
          <strong>Faster</strong>
          <span>Quote Processing</span>
        </div>

        <div className="success-stat-card">
          <strong>More</strong>
          <span>Agency Capacity</span>
        </div>

        <div className="success-stat-card">
          <strong>Better</strong>
          <span>Producer Focus</span>
        </div>
      </div>

    </div>
  </div>
</section> */}

      {/* =====================================================
          SUCCESS STORY
      ===================================================== */}

      <section className="success-story-section">
        <div className="container">

          <div className="success-story-heading">
            

            <div>
              <p
                className="eyebrow"
                style={{ fontSize: "18px" }}
              >
                Success Story
              </p>

              <h2>
                Supporting a Michigan President’s Council Agency Owner
              </h2>
            </div>

            <p>
              Tritox introduced a dedicated quote preparation support model
              to help separate backend quoting responsibilities from
              producer activities and create additional operational capacity
              for the agency.
            </p>

          </div>


          {/* =================================================
              SUCCESS STORY GRID
          ================================================= */}

          <div className="success-story-grid">

            {/* LEFT CONTENT */}

            <div className="success-story-content">

              {/* STORY 01 */}

              <div className="story-content-block">

                <span className="story-block-number">
                  01
                </span>

                <div>

                  <h3>
                    Expanding Capacity as Lead Volume Increased
                  </h3>

                  <p>
                    Before engaging Tritox, the agency’s producers were
                    managing quote preparation alongside their sales and
                    customer-facing responsibilities. As the business grew,
                    this created additional administrative demands and
                    reduced the time producers could dedicate to customer
                    engagement, follow-up, and new-business activity.
                  </p>

                  <p>
                    During the engagement, the agency’s lead volume
                    increased from{" "}
                    <strong>10,000+ to 20,000+ leads.</strong>{" "}
                    Tritox supported this growth by providing dedicated,
                    trained team members to help manage the increased
                    workload.
                  </p>

                </div>

              </div>


              {/* STORY 02 */}

              <div className="story-content-block">

                <span className="story-block-number">
                  02
                </span>

                <div>

                  <h3>
                    More Capacity for Customer-Facing Work
                  </h3>

                  <p>
                    This additional backend capacity helped the agency
                    manage a larger volume of opportunities while allowing
                    producers to remain focused on customer conversations,
                    timely follow-ups, and closing new business.
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


            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <div className="success-story-visual">

              {/* NETWORK IMAGE */}

              <div className="network-image-card">

                <img
                  src="/sucessstory.jpg"
                  alt="Connected technology network representing agency workflow"
                />

                <div className="network-overlay"></div>


                <div className="network-content">

                  <span className="network-label">
                    TRITOX OPERATIONAL NETWORK
                  </span>

                  <h3>
                    Connecting People,
                    <br />
                    Processes & Growth
                  </h3>

                  <p>
                    Dedicated support capacity designed to keep quote
                    workflows moving while your producers focus on
                    customers and new business.
                  </p>


                  <div className="network-stats">

                    <div>
                      <strong>150K+</strong>
                      <span>Leads Supported</span>
                    </div>

                    <div>
                      <strong>5.0</strong>
                      <span>Client Rating</span>
                    </div>

                    <div>
                      <strong>100%</strong>
                      <span>Workflow Focus</span>
                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  PERFORMANCE CARD
              ================================================= */}

              {/* <aside className="performance-card">

                <div className="performance-card-top">

                  <span>
                    PERFORMANCE PROGRESSION
                  </span>

                  <i>↗</i>

                </div>


                <div className="performance-rank-line">

                  <div className="performance-rank rank-four">

                    <strong>4th</strong>

                    <span>
                      Before Tritox Support
                    </span>

                  </div>


                  <span className="rank-arrow">
                    →
                  </span>


                  <div className="performance-rank rank-two">

                    <strong>2nd</strong>

                    <span>
                      After Two Months
                    </span>

                  </div>


                  <span className="rank-arrow">
                    →
                  </span>


                  <div className="performance-rank rank-one">

                    <strong>1st</strong>

                    <span>
                      By the Third Month
                    </span>

                  </div>

                </div>


                <div className="performance-progress-bar">

                  <span className="progress-start">
                    4th
                  </span>

                  <div className="progress-track">
                    <span className="progress-fill"></span>
                  </div>

                  <span className="progress-end">
                    1st
                  </span>

                </div>


                <div className="performance-card-summary">

                  <span>✓</span>

                  <p>
                    During the same period, the agency also experienced
                    a significant improvement in sales performance.
                  </p>

                </div>

              </aside> */}

            </div>

          </div>


          {/* =================================================
              STORY SUMMARY
          ================================================= */}

          <div className="success-story-summary">

            <span className="success-summary-icon">
              ✓
            </span>

            <div>

              <strong>
                Dedicated support that enables scalable growth.
              </strong>

              <p>
                The agency’s progress reflects the combined efforts of
                its leadership, producers, sales strategy, and internal
                team. Tritox is proud to have supported this period of
                growth by providing the additional quote preparation
                capacity needed to manage increasing lead volume while
                allowing producers to focus on customers and new-business
                growth.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="testimonials-section">
        <div className="container">

          <div className="testimonials-heading">

            <div>

              <p
                className="eyebrow"
                style={{ fontSize: "18px" }}
              >
                Testimonials
              </p>

              <h2>
                Recommended by the best in the business.
              </h2>

            </div>

            <p>
              Direct feedback from agencies supported by Tritox through
              dedicated quote preparation and backend operational assistance.
            </p>

          </div>


         

          {/* TESTIMONIAL CARDS */}

<div className="testimonial-card-grid">

  {testimonials.map((testimonial) => (

    <article
      key={testimonial.name}
      className="testimonial-card"
    >

      {/* CUSTOMER DETAILS - FIRST */}

      <div className="testimonial-footer">

        <div className="testimonial-avatar">

          {testimonial.name
            .split(" ")
            .map((name) => name[0])
            .join("")}

          {/* Optional Image */}
          {/* <img
            src={testimonial.image}
            alt="Customer"
          /> */}

        </div>

        <div className="testimonial-client">

          <strong>
            {testimonial.name}
          </strong>

          <span>
            {testimonial.role} |{" "}
            {testimonial.location}
          </span>

          {testimonial.recognition && (
            <small>
              {testimonial.recognition}
            </small>
          )}

        </div>

      </div>


      {/* RATING */}

      <div className="testimonial-card-top">

        <div className="testimonial-rating">

          <span className="small-stars">
            ★★★★★
          </span>

          <strong>
            {testimonial.rating}
          </strong>

        </div>

        <span className="quote-mark">
          “
        </span>

      </div>


      {/* TESTIMONIAL QUOTE */}

      <p className="testimonial-quote">
        “{testimonial.quote}”
      </p>


      {/* SERVICE */}

      <div className="testimonial-service">

        <span>
          Service:
        </span>

        {testimonial.service}

      </div>

    </article>

  ))}

</div>
          </div>

        
      </section>


      {/* =====================================================
          FIRST CTA
      ===================================================== */}
{/* 
      <section className="success-final-cta">

        <div className="container success-final-cta-content">

          <div>

            <p
              className="success-light-eyebrow"
              style={{ fontSize: "18px" }}
            >
              Build More Capacity
            </p>

            <h2>
              Give your producers more time to focus on customers and
              growth.
            </h2>

            <p>
              Tritox helps agencies expand quote preparation capacity
              while maintaining structured, consistent, and scalable
              workflows.
            </p>

          </div>


          <div className="success-final-actions">

            <Link
              to="/contact"
              className="success-trial-button"
            >
              Start Your Free Trial →
            </Link>

            <Link
              to="/services"
              className="success-services-button"
            >
              View Our Services
            </Link>

          </div>

        </div>

      </section>

 */}
      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="faq-section">

        <div className="container">

          <div className="faq-heading">

            <div>

              <p
                className="eyebrow"
                style={{ fontSize: "18px" }}
              >
                Frequently Asked Questions
              </p>

              <h2>
                Clear Answers About How Tritox Supports Your Agency
              </h2>

            </div>

            <p>
              Learn more about onboarding, systems access, quote
              preparation support, data handling, quality procedures,
              pricing flexibility, and agency workflow alignment.
            </p>

          </div>


          <div className="faq-layout">

            {/* FAQ SIDE CARD */}

            <aside className="faq-side-card">

              <span className="faq-side-card-label">
                TRITOX SUPPORT
              </span>

              <h3>
                Have questions about your agency workflow?
              </h3>

              <p>
                Our team can help you understand how Tritox can align
                with your quote preparation, CRM, and operational
                support requirements.
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


              {/* <Link
                to="/contact"
                className="faq-contact-button"
              >
                Contact Our Team →
              </Link> */}

            </aside>


            {/* FAQ LIST */}

            <div className="faq-list">

              {faqs.map((faq, index) => {

                const isOpen = openFaq === index;

                return (

                  <article
                    key={faq.id}
                    className={`faq-item ${
                      isOpen ? "faq-open" : ""
                    }`}
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

                        {faq.answers.map(
                          (answer, answerIndex) => (
                            <p key={answerIndex}>
                              {answer}
                            </p>
                          )
                        )}

                      </div>

                    </div>

                  </article>

                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CONTACT CTA
      ===================================================== */}
{/* 
      <section className="contact-final-cta">

        <div className="container contact-final-content">

          <div>

            <p
              className="contact-light-eyebrow"
              style={{ fontSize: "18px" }}
            >
              Ready to Get Started?
            </p>

            <h2>
              Build a more efficient quote preparation workflow for
              your agency.
            </h2>

            <p>
              Start your free trial and discover how Tritox can help
              your agency expand backend capacity while keeping
              producers focused on customers and new business.
            </p>

          </div>


          {/* <Link
            to="/contact"
            className="contact-final-button"
          >
            Start Your Free Trial →
          </Link> */}

        {/* </div> */}

      {/* </section> */} 

    </main>
  );
}




function HomePage() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main>

      {/* ================= HERO ================= */}

      <section className="home-hero" id="home">

        {/* Animated background */}
        <div className="hero-circle hero-circle-top" />
        <div className="hero-circle hero-circle-bottom" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-grid">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            <div className="services-hero-badge">
              <span className="badge-dot" />
              Built for Farmers Insurance Agencies
            </div>

            <h1>
              Farmers Insurance Quote Preparation Support
              <span> Less Than $1 per Quote</span>
            </h1>

            <p className="hero-description">
              Tritox Technologies provides specialized quote preparation and
              operational support for Auto, Home, Bundle, Renters, Umbrella and Life quotes, helping
              Farmers Insurance agencies streamline quoting workflows and
              strengthen day-to-day operational efficiency.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">

              <button
                onClick={() => scrollToSection("contact")}
                className="hero-primary-button"
              >
                Start Your Free Trial
                <span>→</span>
              </button>

              <button
                onClick={() => scrollToSection("pricing")}
                className="hero-secondary-button"
              >
                View Pricing
                <span>→</span>
              </button>

            </div>

            {/* Benefits */}
            <div className="hero-benefits">

              <div className="hero-benefit">
                <span className="benefit-icon yellow-benefit">
                  ✓
                </span>

                <div>
                  <strong>Auto, Home, Renters, Umbrella, Life & Bundle</strong>
                  <small>Quote preparation support</small>
                </div>
              </div>

              <div className="hero-benefit">
                <span className="benefit-icon green-benefit">
                  ✓
                </span>

                <div>
                  <strong>Efficient operations</strong>
                  <small>Support built for agencies</small>
                </div>
              </div>

            </div>

          </div>


          {/* ================= RIGHT VISUAL ================= */}
          

          <div className="hero-logo-side">
            

            {/* Floating top badge */}
            <div className="floating-badge floating-badge-top">

              <div className="floating-icon">
                ✓
              </div>

              <div>
                <strong>Quote Support</strong>
                <small>Ready for your agency</small>
              </div>

            </div>


            {/* Main image card */}
            <div className="logo-card">

              <div className="card-shine" />

              <div className="logo-card-line" />

              <img
                src="/farmer_img.png"
                className="hero-logo"
                alt="Farmers Insurance quote support"
              />

              {/* Bottom card information */}
              <div className="image-card-info">

                <div>
                  <span className="status-dot" />
                  Operational Support
                </div>

                <strong>
                  Quote Preparation
                </strong>

              </div>

            </div>


            {/* Price floating card */}
            {/* <div className="floating-price-card">

              <span className="price-label">
                Support from
              </span>

              <strong>
                &lt; $1
              </strong>

              <span className="price-per">
                per quote
              </span>

            </div> */}


            {/* Quote types card */}
            {/* <div className="floating-types-card">

              <span>Auto</span>
              <span>Home</span>
              <span>Bundle</span>

            </div> */}


            {/* Caption */}
            <div className="logo-caption">

              <span className="caption-line" />

              <p>
                Enhancing Agency Efficiency Through
                <strong>
                  {" "}Specialized Quote Preparation Support.
                </strong>
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY TRITOX ================= */}

      <section className="section white-section">

        <div className="container">

          <div className="section-heading">

            <p
              className="eyebrow"
              style={{ fontSize: "18px" }}
            >
              Why Tritox
            </p>

            <h2>
              Support your agency with a better quote workflow.
            </h2>

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
              description="Structured support for Auto, Home, Renters, Umbrella, Life and Bundle quote preparation workflows."
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


      {/* ================= CTA ================= */}

      {/* <section className="section home-cta-section">

        <div className="container home-cta-content">

          <div>

            <p
              className="eyebrow light-eyebrow"
              style={{ fontSize: "18px" }}
            >
              Start Today
            </p>

            <h2>
              Ready to improve your quote preparation workflow?
            </h2>

          </div>


          <button
            onClick={() => scrollToSection("contact")}
            className="cta-yellow-button"
          >
            Start Your Free Trial →
          </button>

        </div>

      </section> */}

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
      <div className="page-banner-overlay"></div>

      <div className="services-network-content container">
        <div className="services-hero-badge">
          <span className="pulse-dot"></span>
          {eyebrow}
        </div>

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
    <main className="services-page">

      {/* =====================================================
          SERVICES BANNER
      ====================================================== */}
      <section className="services-network-hero">
        <div className="services-network-overlay"></div>

        <div className="services-network-content container">
          <div className="services-hero-badge">
            <span className="pulse-dot"></span>
            INSURANCE  OPERATIONS
          </div>

          <h1>
            Integrated Operational
            <span>  CRM, and Quote Preparation Support for Farmers Agencies</span>
          </h1>

          <p>Tritox provides structured backend support that helps Farmers agencies maintain efficient quote workflows, organized CRM activity, and reliable day-to-day operations.
          </p>

          {/* <div className="services-hero-buttons">
            <a href="#contact" className="services-primary-btn">
              Start Your Free Trial →
            </a>

            <a href="#pricing" className="services-secondary-btn">
              View Pricing
            </a>
          </div> */}

          <div className="services-hero-stats">
            <div>
              <strong>06+</strong>
              <span>Core Services</span>
            </div>

            <div>
              <strong>06+</strong>
              <span>CRM Platforms</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Operational Focus</span>
            </div>
          </div>
        </div>

        <div className="hero-network-lines"></div>
      </section>


      {/* =====================================================
          PAGE BANNER
      ====================================================== */}
      {/* <PageBanner
        eyebrow="Our Services"
        title="Integrated Operational, CRM, and Quote Preparation Support for Farmers Agencies"
        description="Tritox provides structured backend support that helps Farmers agencies maintain efficient quote workflows, organized CRM activity, and reliable day-to-day operations."
      /> */}


      {/* =====================================================
          QUOTE PREPARATION
      ====================================================== */}
      <section className="section white-section service-intro-section">
        <div className="container">

          <div className="premium-section-heading">
            <div>
              <p className="eyebrow">
                QUOTE PREPARATION SERVICES
              </p>

              <h2>
                Complete quote preparation support for
                <span> Auto, Home, Renters, Umbrella, Life and Bundle opportunities.</span>
              </h2>
            </div>

            <p style={{ fontSize: "18px",color: "#373737", lineHeight: "1.6",fontFamily: "Manrope, sans-serif" }}>
              Tritox provides specialized backend quote preparation support for
              Auto, Home, Bundle, Renters, Umbrella and Life opportunities, aligned with each Farmers
              agency's established coverage standards, quoting criteria, and
              operational requirements.
            </p>
          </div>


          

{/* Animated Workflow */}
<div className="quote-network-flow">

  {/* Connecting Lines */}
  <div className="network-line network-line-one"></div>
  <div className="network-line network-line-two"></div>

  {/* Auto */}
  <div className="network-flow-node node-auto">
    <div className="network-icon">A</div>
    <strong>Auto</strong>
    <small>Quote Processing</small>
  </div>

  {/* Home */}
  <div className="network-flow-node node-home">
    <div className="network-icon">B</div>
    <strong>Bundle</strong>
    <small>Opportunity Support</small>
  </div>

  {/* Bundle */}
  <div className="network-flow-node node-bundle">
    <div className="network-icon">P</div>
    <strong>Renters</strong>
    <small>Quote Processing</small>
  </div>

  {/* Umbrella */}
  <div className="network-flow-node node-umbrella">
    <div className="network-icon">L</div>
    <strong>Life</strong>
    <small>Coverage Support</small>
  </div>

  {/* Life */}
  <div className="network-flow-node node-life">
    <div className="network-icon">H</div>
    <strong>Home</strong>
    <small>Quote Processing</small>
  </div>

  {/* Renters */}
  <div className="network-flow-node node-renters">
    <div className="network-icon">U</div>
    <strong>Umbrella</strong>
    <small>
Coverage Support</small>
  </div>

  {/* Animated Particles */}
  <span className="network-particle particle-one"></span>
  <span className="network-particle particle-two"></span>
  <span className="network-particle particle-three"></span>

</div>


          <div className="quote-service-grid">

            {/* AUTO */}
            <article className="quote-service-card auto-service-card">

              <div className="quote-card-image">
                <img
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85"
                  alt="Auto insurance quote preparation"
                />

                <div className="quote-image-label">
                  AUTO
                </div>
              </div>

              <div className="quote-card-content">

                <div className="service-card-top">
                  <div className="service-card-icon auto-icon">
                    A
                  </div>

                  <span className="service-card-number">
                    01
                  </span>
                </div>

                <h3>Auto Quote Preparation</h3>

                <p>
                  Comprehensive support covering customer and prior-insurance
                  information validation, driver and vehicle data review,
                  coverage entry based on agency standards, and premium option
                  comparison.
                </p>

                <div className="service-tag-list">
                  <span>Customer data review</span>
                  <span>Driver validation</span>
                  <span>Vehicle information</span>
                  <span>Coverage entry</span>
                  
                </div>

              

              </div>
              <p className="service-card-note">
                 
                  Support for Farmers  in 
                  accordance with agency defined quoting criteria.
                </p>
            </article>


            {/* HOME */}
            <article className="quote-service-card home-service-card">

              <div className="quote-card-image">
                <img
                 src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85"
                  alt="Home insurance quote preparation"
                />

                <div className="quote-image-label">
                  HOME
                </div>
              </div>

              <div className="quote-card-content">

                <div className="service-card-top">
                  <div className="service-card-icon home-icon">
                    H
                  </div>

                  <span className="service-card-number">
                    02
                  </span>
                </div>

                <h3>Home Quote Preparation</h3>

                <p>
                  Structured support covering property address validation,
                  home characteristics and feature review, and applicable
                  coverage entry aligned with the agency's established Home
                  quoting standards.
                </p>

                <div className="service-tag-list">
                  <span>Address validation</span>
                  <span>Property review</span>
                  <span>Home features,Coverage details</span>
                  
                </div>

                {/* <p className="service-card-note">
                  Consistent preparation support designed around your agency's
                  Home quoting workflow.
                </p> */}

              </div>
              <p className="service-card-note">
                  Consistent preparation support designed around your agency's
                  Home quoting workflow.
                </p>
            </article>


            {/* BUNDLE */}
            <article className="quote-service-card bundle-service-card">

              <div className="quote-card-image">
                <img
                  src="/bundle.png"
                  alt="Bundle insurance opportunity"
                />

                <div className="quote-image-label">
                  BUNDLE
                </div>
              </div>

              <div className="quote-card-content">

                <div className="service-card-top">
                  <div className="service-card-icon bundle-icon">
                    B
                  </div>

                  <span className="service-card-number">
                    03
                  </span>
                </div>

                <h3>Bundle Quote Preparation</h3>

                <p>
                  Coordinated preparation of Auto and Home opportunities,
                  covering customer, vehicle, property, and coverage information
                  across both lines.
                </p>

                <div className="service-tag-list">
                  <span>Auto + Home data</span>
                  <span>Coverage alignment</span>
                  <span>Complete records,Bundle consistency</span>
                  
                </div>

                {/* <p className="service-card-note">
                  Maintain complete, accurate, and consistent quote data within
                  bundled opportunities.
                </p> */}

              </div>
              <p className="service-card-note">
                  Maintain complete, accurate, and consistent quote data within
                  bundled opportunities.
                </p> 
            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          BPO OPERATIONS
      ====================================================== */}
      <section className="bpo-support-section">

        <div className="container">

          <div className="premium-section-heading center-heading">

            <div>
              <p className="eyebrow">
                BPO OPERATIONS SUPPORT
              </p>

              <h2>
                A reliable backend team behind
                <span> your agency workflow.</span>
              </h2>
            </div>

            <p>
              Tritox supports insurance agencies with structured backend
              operations, quote preparation, CRM management, documentation,
              and daily workflow support.
            </p>

          </div>


          <div className="bpo-support-grid">

            {/* IMAGE */}
            <div className="bpo-image-card">

              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                alt="Insurance BPO operations team"
              />

              <div className="bpo-image-overlay"></div>

              <div className="bpo-image-caption">
                <span className="live-dot"></span>

                <div>
                  <strong>TEAM ACTIVE</strong>
                  <small>Backend operations in progress</small>
                </div>
              </div>

              <div className="bpo-floating-status">

                <div className="status-check">
                  ✓
                </div>

                <div>
                  <strong>Operations Online</strong>
                  <small>Workflow monitoring</small>
                </div>

              </div>

            </div>


            {/* CARDS */}
            <div className="bpo-operation-cards">

              <article>
                <span>01</span>

                <div>
                  <h3>Quote Preparation</h3>

                  <p>
                    Structured Auto, Home, Renters, Umbrella, Life and Bundle quote preparation
                    support for agency teams.
                  </p>
                </div>
              </article>


              <article>
                <span>02</span>

                <div>
                  <h3>CRM Management</h3>

                  <p>
                    Organized lead, opportunity and documentation management
                    across CRM platforms.
                  </p>
                </div>
              </article>


              <article>
                <span>03</span>

                <div>
                  <h3>Backend Operations</h3>

                  <p>
                    Consistent operational assistance that helps agencies
                    maintain reliable daily workflows.
                  </p>
                </div>
              </article>


              <article>
                <span>04</span>

                <div>
                  <h3>Quality & Accuracy</h3>

                  <p>
                    Focused data validation and process consistency to
                    reduce missing information.
                  </p>
                </div>
              </article>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CRM MANAGEMENT
      ====================================================== */}
      <section className="section crm-management-section">

        <div className="container">

          <div className="premium-section-heading">

            <div>

              <p className="eyebrow crm-eyebrow">
                CRM MANAGEMENT
              </p>

              <h2>
                Accurate CRM data.
              <span
  style={{
    
    color: "#ffffff",
    
  }}
>
  Clear pipeline visibility.
</span>
                Better sales operations.
              </h2>

            </div>

            <p>
              Tritox provides structured CRM management support across leading
              insurance agency platforms, helping Farmers agencies maintain
              accurate, organized, and actionable lead and opportunity data
              throughout the quoting lifecycle.
            </p>

          </div>


          {/* CRM IMAGE + PLATFORM AREA */}
          <div className="crm-visual-section">

            <div className="crm-dashboard-image">

              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
                alt="CRM analytics dashboard"
              />

              <div className="dashboard-overlay">
                <span>LIVE CRM WORKFLOW</span>
              </div>

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

                  {/* <strong>
                    {platform.name}
                  </strong> */}

                  {/* <span className="platform-arrow">
                    →
                  </span> */}

                </article>

              ))}

            </div>

          </div>


          {/* CRM DETAILS */}
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
                Keep pipeline stages, opportunities, and sales activity
                updated so agency teams have a clearer view of active business.
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

            <span className="summary-check">
              ✓
            </span>

            <p>
              Our team manages lead information, pipeline updates, quote
              documentation, and record accuracy—giving agency teams clear
              visibility into active opportunities and supporting consistent
              day-to-day sales operations.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          OPERATIONAL SUPPORT
      ====================================================== */}
      <section className="section white-section operational-section">

        <div className="container operational-grid">

          <div className="operational-visual">

            <div className="operation-image-card">

              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
                alt="Business operations support team"
              />

              <div className="operation-image-overlay"></div>

            </div>


            <div className="operation-panel operation-panel-main">

              <span className="operation-panel-label">
                TRITOX OPERATIONS
              </span>


              <div className="operation-bar">

                <div className="bar-heading">
                  <span>Documentation</span>
                  <strong>96%</strong>
                </div>

                <div className="bar-track">
                  <span
                    className="bar-fill green-fill"
                    style={{ width: "96%" }}
                  />
                </div>

              </div>


              <div className="operation-bar">

                <div className="bar-heading">
                  <span>Process execution</span>
                  <strong>93%</strong>
                </div>

                <div className="bar-track">
                  <span
                    className="bar-fill yellow-fill"
                    style={{ width: "93%" }}
                  />
                </div>

              </div>


              <div className="operation-bar">

                <div className="bar-heading">
                  <span>Daily consistency</span>
                  <strong>98%</strong>
                </div>

                <div className="bar-track">
                  <span
                    className="bar-fill blue-fill"
                    style={{ width: "98%" }}
                  />
                </div>

              </div>

            </div>


            {/* <div className="operation-floating-card">

              <span>✓</span>

              <div>
                <strong>Reliable Support</strong>
                <small>Built for agency operations</small>
              </div>

            </div> */}

          </div>


          <div className="operational-content">

            <p className="eyebrow">
              OPERATIONAL SUPPORT
            </p>

            <h2>
              Disciplined backend support for reliable
              <span> day-to-day agency performance.</span>
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

              <li>
                
                Agency operations support
              </li>

              <li>
               
                Documentation management
              </li>

              <li>
                
                Process execution assistance
              </li>

              <li>
                
                Consistent backend workflow support
              </li>

            </ul>


            {/* <div className="hero-primary-button">
            <a href="#contact" >
              Start Your Free Trial →
            </a>
            </div>  */}
            <button
                // onClick={() => scrollToSection("contact")}
                className="hero-primary-button"
              >
                <a href="#contact" >
              Start Your Free Trial  →
            </a>
                
              </button>

              {/* <button
                onClick={() => scrollToSection("pricing")}
                className="hero-secondary-button"
              >
                View Pricing
                <span>→</span>
              </button> */}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      {/* <section className="services-bottom-cta">

        <div className="container services-bottom-cta-content">

          <div>

            <p className="eyebrow light-eyebrow">
              WORK WITH TRITOX
            </p>

            <h2>
              Strengthen your quote process, CRM workflow,
              and daily operations.
            </h2>

            <p>
              Let Tritox handle the backend while your agency
              focuses on customers and growth.
            </p>

          </div>


          <a
            href="#contact"
            className="cta-yellow-button"
          >
            Request Free Trial →
          </a>

        </div>

      </section> */}

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
        "AgencyZoom, Little Giant, Agency MVP, EZLynx, Agent CRM, AMS360, and HawkSoft",
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
      color: "yellow-workflow-card",
    },
    {
      number: "04",
      title: "Guidewire PolicyCenter Review ",
      description:
        "The prepared quote is reviewed within Guidewire PolicyCenter to complete applicable validation before final quote generation.",
      points: [
        "Risk analysis review",
        "Policy validation",
        "Multi-policy discount verification",
        "Quote generation",
        "Document download",
      ],
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
      color: "green-workflow-card",
    },
  ];

  return (
    <main className="services-page">

      {/* =====================================================
          PAGE BANNER
      ===================================================== */}

      <section className="advantage-hero">
  <div className="advantage-hero-glow advantage-hero-glow-one" />
  <div className="advantage-hero-glow advantage-hero-glow-two" />
  <div className="advantage-hero-grid-pattern" />

  <div className="container advantage-hero-container">

    <div className="advantage-hero-content">

      <div className="services-hero-badge">
        <span className="pulse-dot" />
        Our Value
      </div>

      <h1>
        Turn Your Backend
        <span> Into a Growth Advantage.</span>
      </h1>

      <p>
        Reduce operational costs, increase producer capacity, and scale
        your agency with flexible quote preparation and structured
        backend support.
      </p>

      <div className="advantage-hero-actions">
{/* 
  <button
                className="hero-primary-button"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Free Trial
                <span>→</span>
              </button> */}

  <a href="#workflow" className="advantage-hero-secondary">
  Explore Our Workflow
  <span>↓</span>
</a>
  

</div>

      <div className="advantage-hero-stats">

        <div className="advantage-stat">
          <strong>70%</strong>
          <span>Potential Cost Savings</span>
        </div>

        <div className="advantage-stat-divider" />

        <div className="advantage-stat">
          <strong>24/7</strong>
          <span>Flexible Backend Support</span>
        </div>

        <div className="advantage-stat-divider" />

        <div className="advantage-stat">
          <strong>100%</strong>
          <span>Workflow Focused</span>
        </div>

      </div>

    </div>

    <div className="advantage-hero-visual">

      <div className="advantage-visual-card">

        <div className="advantage-card-top">
          <div>
            <span className="advantage-card-eyebrow">
              AGENCY PERFORMANCE
            </span>

            <h3>Growth Dashboard</h3>
          </div>

          <div className="advantage-card-status">
            <span />
            Live
          </div>
        </div>

        <div className="advantage-chart">

          <div className="chart-labels">
            {/* <span>Capacity</span> */}
            <strong>Capacity :  70%</strong>
          </div>

          <div className="chart-bars">
            <span style={{ height: "38%" }} />
            <span style={{ height: "52%" }} />
            <span style={{ height: "45%" }} />
            <span style={{ height: "68%" }} />
            <span style={{ height: "61%" }} />
            <span style={{ height: "82%" }} />
            <span style={{ height: "94%" }} />
          </div>

        </div>

        <div className="advantage-mini-cards">

          <div>
            <span>Producer Time</span>
            <strong>↑ 42%</strong>
          </div>

          <div>
            <span>Support Cost</span>
            <strong>↓ 70%</strong>
          </div>

        </div>

      </div>

      <div className="advantage-floating-card advantage-floating-one">
        <span className="floating-check">✓</span>

        {/* <div>
          <strong>Lower Costs</strong>
          <small>Smarter staffing model</small>
        </div> */}
      </div>

      <div className="advantage-floating-card advantage-floating-two">
        <span className="floating-arrow">↗</span>

        <div>
          <strong>More Producer Time</strong>
          <small>Focus on revenue</small>
        </div>
      </div>

    </div>

  </div>
</section>


      {/* =====================================================
          BENEFITS SECTION
      ===================================================== */}

      <section className="section advantage-benefits-section">

        <div className="advantage-bg-orb advantage-bg-orb-one" />
        <div className="advantage-bg-orb advantage-bg-orb-two" />
        <div className="advantage-bg-grid" />

        <div className="container advantage-benefits-container">

          {/* SECTION HEADING */}

          <div className="advantage-section-heading">

            <div className="advantage-heading-left">

              <div className="advantage-eyebrow">
                <span className="advantage-eyebrow-dot" />
                EFFICIENCY THAT SCALES
              </div>

              <h2>
                Smarter costs.
                <span> Greater producer capacity. </span>
                Flexible support.
              </h2>

            </div>

            <div className="advantage-heading-right">

              <p>
                Tritox helps Farmers agencies expand backend capacity without
                adding unnecessary fixed staffing costs, administrative burden,
                or operational complexity.
              </p>

              <div className="advantage-heading-line">
                <span />
                <strong>Built around your agency</strong>
              </div>

            </div>

          </div>


          {/* BENEFIT CARDS */}

          <div className="advantage-benefit-grid">

            {benefits.map((benefit, index) => (

              <article
                key={benefit.title}
                className={`advantage-benefit-card ${benefit.type}`}
              >

                {/* <div className="benefit-card-number">
                  0{index + 1}
                </div> */}

                <div className="benefit-card-top">

                  <span className="benefit-icon">
                    {benefit.icon}
                  </span>

                  <span className="benefit-label">
                    {benefit.label}
                  </span>

                </div>

                <strong className="benefit-metric">
                  {benefit.metric}
                </strong>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.description}
                </p>

                <div className="benefit-divider" />

                <div className="benefit-detail-list">

                  {benefit.details.map((detail) => (

                    <span key={detail}>
                      <i>✓</i>
                      {detail}
                    </span>

                  ))}

                </div>

                <div className="benefit-card-glow" />

              </article>

            ))}

          </div>


          {/* IMAGE + HIGHLIGHT */}

          <div className="advantage-growth-area">

            <div className="advantage-growth-image">

              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                alt="Professional insurance operations team"
              />

              <div className="growth-image-overlay" />

              <div className="growth-floating-card">

                <div className="growth-floating-icon">
                  ✓
                </div>

                <div>
                  <strong>Agency Growth Support</strong>
                  <span>Reliable backend operations</span>
                </div>

              </div>

            </div>


            <div className="advantage-highlight-banner">

              <div className="highlight-banner-icon">
                ✓
              </div>

              <div className="highlight-banner-content">

                <span className="highlight-small">
                  TRITOX ADVANTAGE
                </span>

                <strong>
                  Built to support agency growth
                </strong>

                <p>
                  Tritox manages structured quote preparation and backend
                  workflows, allowing producers to focus on high-value,
                  client-facing, and revenue-generating responsibilities.
                </p>

              </div>

              {/* <a
                href="#contact"
                className="highlight-banner-button"
              >
                Start Free Trial
                <span>→</span>
              </a> */}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WORKFLOW SECTION
      ===================================================== */}

      <section id="workflow" className="workflow-section">

        <div className="workflow-grid-pattern" />

        <div className="workflow-circle workflow-circle-one" />
        <div className="workflow-circle workflow-circle-two" />

        <div className="container workflow-container">

          {/* WORKFLOW HEADING */}

          <div className="workflow-heading">

            <div className="workflow-eyebrow-wrapper">

            

              <p className="eyebrow workflow-eyebrow">
                WORKFLOW
              </p>

            </div>

            <h2>
              A Structured Quote Preparation Process
              <span>
                {" "}Integrated With Your Agency’s Existing Systems
              </span>
            </h2>

            <p>
              Our workflow integrates with your agency’s existing systems,
              supporting the quoting lifecycle from CRM lead access through
              quote generation, documentation, and workflow completion.
            </p>

          </div>


          {/* WORKFLOW VISUAL IMAGE */}

          <div className="workflow-visual">

            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=85"
              alt="Business workflow collaboration"
            />

            <div className="workflow-visual-overlay" />

            <div className="workflow-visual-content">

              <span>TRITOX WORKFLOW</span>

              <strong>
                Connected. Structured. Scalable.
              </strong>

              <p>
                From lead access to quote completion and CRM documentation.
              </p>

            </div>

            <div className="workflow-visual-status">

              <span className="workflow-status-dot" />

              Workflow Active

            </div>

          </div>


          {/* TIMELINE */}

          <div className="tritox-workflow-timeline">

  <div className="tritox-workflow-progress-line" />

  {workflowSteps.map((step, index) => (

    <article
      key={step.number}
      className={`tritox-workflow-card ${step.color}`}
    >

      <div className="tritox-workflow-card-top">

        <span className="tritox-workflow-number">
          {step.number}
        </span>

        <span className="tritox-workflow-status">

          {index === workflowSteps.length - 1
            ? "Complete"
            : "Workflow Step"}

        </span>

      </div>

      <h3>
        {step.title}
      </h3>

      <p className="tritox-workflow-description">
        {step.description}
      </p>

      <div className="tritox-workflow-point-list">

        {step.points.map((point) => (

          <span key={point}>
            <i>✓</i>
            {point}
          </span>

        ))}

      </div>

    </article>

  ))}

</div>


          {/* BOTTOM WORKFLOW CARD */}

          <div className="workflow-bottom-card">

            <div className="workflow-bottom-left">

              <span className="workflow-complete-icon">
                ✓
              </span>

              <div>

                <p>
                  Complete workflow visibility
                </p>

                <strong>
                  From CRM lead access to quote documentation and next-stage
                  follow-up.
                </strong>

              </div>

            </div>

            
            <a href="#workflow" className="advantage-hero-secondary">
  Discuss Your Workflow
  
</a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="advantage-final-cta">

        <div className="advantage-cta-orb-one" />
        <div className="advantage-cta-orb-two" />

        <div className="container advantage-final-cta-content">

          <div className="advantage-final-text">

            <h1 className="eyebrow advantage-light-eyebrow"style={{ color: "#1e88e5" }}>
              READY TO SCALE SMARTER?
            </h1>

            <h2>
              Get flexible quote preparation support
              <span> built around your agency.</span>
            </h2>

            <p>
              Strengthen your backend capacity, improve producer productivity,
              and maintain a consistent workflow as your agency grows.
            </p>

          </div>
          
{/* 

          <div className="advantage-final-actions">
            

            <a
              href="#contact"
              className="hero-primary-button"
            >
              Start Your Free Trial
              <span>→</span>
            </a>

            <a
              href="#services"
              className="hero-primary-button"
            >
              View Our Services
              <span>→</span>
            </a>
            

          </div> */}

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
    "Send  text and e-mail through the CRM"
  ];

  const leadToCloseSteps = [
    "Lead Acquisition",
    // "CRM Intake",
    "Eligibility & Data Review",
    "Quote Preparation",
    "Quote Ready",
    // "Producer Engagement",
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
    <main className="services-page">
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

            <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
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
                  <small style={{ fontSize: "17px", lineHeight: "1.6" }}>QUOTE TEAM RESPONSIBILITIES</small>
                  <h3>Operational work managed by the quote team</h3>
                </div>
              </div>

              <div className="task-list">
                {quoteTeamTasks.map((task, index) => (
                  <div key={task} className="task-list-item">
                    <span style={{ fontSize: "14px", lineHeight: "1.6" }}>{String(index + 1).padStart(2, "0")}</span>
                    <p style={{ fontSize: "14px", lineHeight: "1.6" }}>{task}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="agency-benefit-card">
              <div className="agency-benefit-icon">↗</div>

              <p className="agency-benefit-label" style={{ fontSize: "17px", lineHeight: "1.6" }}>AGENCY BENEFIT</p>

              <h3>More quoting capacity without competing with producer time.</h3>

              <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                Creates dedicated quoting capacity, supports rapid quote
                preparation, maintains process consistency, and prevents
                backend workload from competing with producer time.
              </p>

              <div className="agency-benefit-stats" >
                <div>
                  <strong style={{ fontSize: "16px", lineHeight: "1.6" }}>Rapid</strong>
                  <span style={{ fontSize: "14px", lineHeight: "1.6" }}>Quote preparation</span>
                </div>

                <div>
                  <strong style={{ fontSize: "16px", lineHeight: "1.6" }}>Clear</strong>
                  <span style={{ fontSize: "14px", lineHeight: "1.6" }}>Role ownership</span>
                </div>

                <div>
                  <strong style={{ fontSize: "16px", lineHeight: "1.6" }}>Consistent</strong>
                  <span style={{ fontSize: "14px", lineHeight: "1.6" }}>Process execution</span>
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

      <div className="tritox-lead-flow-scroll">
  <div className="tritox-lead-flow-track">
    {leadToCloseSteps.map((step, index) => (
      <article
        key={step}
        className="tritox-lead-flow-card"
      >
        <div className="tritox-lead-flow-number">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="tritox-lead-flow-dot" />

        <h3 className="tritox-lead-flow-title">
          {step}
        </h3>
      </article>
    ))}
  </div>
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
          <div className="tritox-scale-visual">

  {/* Graph Card */}
  <div className="tritox-capacity-graph-card">

    <div className="tritox-capacity-graph-header">
      <div>
        <span className="tritox-capacity-eyebrow">
          SCALABLE OPERATIONS
        </span>

        <h3>Capacity That Grows With Demand</h3>

        <p>
          Increase quote volume without increasing operational pressure.
        </p>
      </div>

      <div className="tritox-capacity-live">
        <span className="tritox-capacity-live-dot" />
        Scaling
      </div>
    </div>


    {/* Graph */}
    <div className="tritox-growth-graph">

      {/* Y Axis */}
      <div className="tritox-growth-y-axis">
        <span>High</span>
        <span>Medium</span>
        <span>Low</span>
      </div>

      {/* Graph Area */}
      <div className="tritox-growth-area">

        <div className="tritox-growth-grid-line" />
        <div className="tritox-growth-grid-line" />
        <div className="tritox-growth-grid-line" />
        <div className="tritox-growth-grid-line" />

        <svg
          className="tritox-growth-svg"
          viewBox="0 0 700 260"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="tritoxGrowthGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#1e88e5"
                stopOpacity="0.28"
              />

              <stop
                offset="100%"
                stopColor="#1e88e5"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Filled growth area */}
          <path
            className="tritox-growth-fill"
            d="
              M 0 220
              C 100 205, 130 185, 200 190
              C 270 195, 300 150, 350 155
              C 430 160, 450 110, 510 115
              C 580 120, 610 65, 700 30
              L 700 260
              L 0 260
              Z
            "
          />

          {/* Growth Line */}
          <path
            className="tritox-growth-line"
            d="
              M 0 220
              C 100 205, 130 185, 200 190
              C 270 195, 300 150, 350 155
              C 430 160, 450 110, 510 115
              C 580 120, 610 65, 700 30
            "
          />

          {/* Data points */}
          <circle cx="0" cy="220" r="6" />
          <circle cx="200" cy="190" r="6" />
          <circle cx="350" cy="155" r="6" />
          <circle cx="510" cy="115" r="6" />
          <circle cx="700" cy="30" r="7" />
        </svg>


        {/* Graph labels */}
        <div className="tritox-growth-labels">
          <span>Current</span>
          <span>Growing</span>
          <span>Scaling</span>
          <span>High Volume</span>
          <span>Expansion</span>
        </div>

      </div>
    </div>


    {/* Metrics */}
    <div className="tritox-capacity-metrics">

      <div className="tritox-capacity-metric">
        <strong>Lead Volume</strong>
        <span>↑ Increasing</span>
      </div>

      <div className="tritox-capacity-metric">
        <strong>Quote Capacity</strong>
        <span>↑ Expanding</span>
      </div>

      <div className="tritox-capacity-metric">
        <strong>Producer Focus</strong>
        <span>↑ Protected</span>
      </div>

    </div>


    {/* Footer */}
    <div className="tritox-capacity-footer">
      <span className="tritox-capacity-footer-dot" />

      <span>
        Capacity grows as agency demand increases
      </span>
    </div>

  </div>


  {/* Floating Card */}
  <div className="tritox-parallel-card">

    <div className="tritox-parallel-icon">
      ↗
    </div>

    <div>
      <strong>Parallel Processing</strong>

      <span>
        More opportunities prepared at the same time
      </span>
    </div>

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

            {/* <Link to="/contact" className="primary-button">
              Explore Your Support Options
            </Link> */}
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

          <div className="tritox-growth-card-grid">
  {growthSteps.map((step, index) => (
    <article
      key={step.number}
      className={`tritox-growth-card tritox-growth-card-${index + 1} ${step.type}`}
    >
      <div className="tritox-growth-card-top">
        <span className="tritox-growth-card-number">
          {step.number}
        </span>

        <span className="tritox-growth-card-arrow">
          ↗
        </span>
      </div>

      <div className="tritox-growth-card-content">
        <h3>{step.title}</h3>

        <p>{step.description}</p>
      </div>

      <div className="tritox-growth-card-line" />
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
        <section className="tritox-onboarding-hero">
  <div className="tritox-onboarding-hero-container">

    {/* LEFT SIDE */}
    <div className="tritox-onboarding-hero-left">

      <span className="tritox-onboarding-status">
        <span className="tritox-onboarding-status-dot"></span>
        Ready to Onboard
      </span>

      <h2>
        We already have an existing{" "}
        <span>Farmers ID</span>
      </h2>

      <p>
        Easy onboarding for authorized international staff with a
        structured setup process and clearly defined responsibilities.
      </p>

      <div className="tritox-onboarding-easy">
        <span className="tritox-onboarding-check">✓</span>

        <div>
          <strong>Easy Onboarding</strong>
          <small>
            Simple and guided setup for approved international staff.
          </small>
        </div>
      </div>

      <a
        href="/Onboarding document.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="tritox-onboarding-pdf-btn"
      >
        <span>Click Here to Know About Onboarding</span>

        <span className="tritox-onboarding-pdf-arrow">
          →
        </span>
      </a>

    </div>


    {/* RIGHT SIDE */}
    <div className="tritox-onboarding-hero-right">

      <span className="tritox-onboarding-hero-eyebrow">
        International Staff Onboarding
      </span>

      <h1>
        Authorized International Staff Setup for Farmers Agency Support
      </h1>

      <p>
        A structured onboarding process for approved international staff
        supporting Farmers agency operations through authorized access
        and defined responsibilities.
      </p>

    </div>

  </div>
</section>

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
   <div className="horizontal-onboarding-section">

  {/* TOP TEXT */}
  <div className="horizontal-onboarding-heading">

    <p
      className="onboarding-light-eyebrow"
      style={{ fontSize: "18px" }}
    >
      Onboarding Workflow
    </p>

    <h2>
      Six structured steps from eligibility review to
      production-ready support.
    </h2>

    <p>
      This process helps agencies create the required setup,
      authorized access, CRM responsibilities, and payment
      arrangements before ongoing support begins.
    </p>

  </div>


  {/* HORIZONTAL SCROLL CARDS */}
  <div className="horizontal-onboarding-list">

    {onboardingSteps.map((step) => (

      <article
        key={step.number}
        className={`horizontal-onboarding-card ${step.type}`}
        style={{
          flex: "0 0 350px",
          minWidth: "350px",
          boxSizing: "border-box",
        }}
      >

        {/* Step Header */}
        <div className="horizontal-onboarding-header">

          <span className="horizontal-onboarding-number">
            {step.number}
          </span>

          <span className="horizontal-onboarding-status">
            Setup Step
          </span>

        </div>


        {/* Title */}
        <h3 className="horizontal-onboarding-title">
          {step.title}
        </h3>


        {/* Description */}
        <p className="horizontal-onboarding-description">
          {step.description}
        </p>


        {/* Details */}
        <div className="horizontal-onboarding-details">

          {step.details.map((detail) => (

            <span
              key={detail}
              className="horizontal-onboarding-detail"
            >

              <i className="horizontal-onboarding-check">
                ✓
              </i>

              {detail}

            </span>

          ))}

        </div>

      </article>

    ))}

  </div>

</div>
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
      {/* <section className="impact-final-cta">
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
      </section> */}
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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="pricing-page">

      {/* =========================================================
          PREMIUM PRICING HERO
      ========================================================= */}
      <section className="pricing-hero">

        <div className="pricing-network-bg"></div>

        <div className="pricing-hero-overlay"></div>

        {/* Animated network elements */}
        <div className="pricing-orb pricing-orb-one"></div>
        <div className="pricing-orb pricing-orb-two"></div>
        <div className="pricing-orb pricing-orb-three"></div>

        <div className="pricing-network-line line-one"></div>
        <div className="pricing-network-line line-two"></div>
        <div className="pricing-network-line line-three"></div>

        <div className="pricing-node node-one"></div>
        <div className="pricing-node node-two"></div>
        <div className="pricing-node node-three"></div>
        <div className="pricing-node node-four"></div>
        <div className="pricing-node node-five"></div>

        <div className="container pricing-hero-container">

          <div className="pricing-hero-content">

            <div className="services-hero-badge">
               <span className="pulse-dot"></span>
              
              Flexible Pricing Built Around Your Quoting Needs
            </div>

            <h1>
              Pricing Designed
              <span>Around Your Growth</span>
            </h1>

            <p>Reduce backend support costs by up to 70% compared with an equivalent in-house W-2 resource. 
            </p>
{/* 
            <div className="pricing-hero-price">

              <div className="price-symbol">&lt;</div>

              <div>
                <strong>$1</strong>
                <span>per completed eligible quote</span>
              </div>

            </div> */}

            <div className="pricing-hero-actions">

              <button
                className="hero-primary-button"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Free Trial
                <span>→</span>
              </button>

              <button
                className="hero-secondary-button"
                onClick={() => scrollToSection("pricing-factors")}
              >
                Explore Pricing
                <span>↓</span>
              </button>

            </div>

            <div className="pricing-trust-row">

              <div>
                <span>✓</span>
                Simple
              </div>

              <div>
                <span>✓</span>
                Transparent 
              </div>

              <div>
                <span>✓</span>
                Volume-Aligned
              </div>

            </div>

          </div>

          {/* Floating Pricing Visual */}
          <div className="pricing-hero-visual">

            <div className="floating-price-card">

              <div className="floating-card-glow"></div>

              <div className="floating-card-header">
                <div>
                  <small>TRITOX SUPPORT</small>
                  <h3>Quote Preparation</h3>
                </div>

                <div className="floating-check">
                  ✓
                </div>
              </div>

              <div className="floating-price">
                <span>&lt;</span>
                <strong>$1</strong>
              </div>

              <p>
                Starting per completed eligible quote
              </p>

              <div className="floating-progress">

                <div className="progress-label">
                  <span>Cost efficiency</span>
                  <strong>High</strong>
                </div>

                <div className="progress-bar">
                  <span></span>
                </div>

              </div>

              <div className="floating-card-footer">

                <div>
                  <span>✓</span>
                  Free Trial
                </div>

                <div>
                  <span>✓</span>
                  No Setup Fee
                </div>

              </div>

            </div>

            <div className="floating-mini-card mini-card-one">
              <span>↗</span>
              <div>
                <strong>70%</strong>
                <small>Potential Savings*</small>
              </div>
              
              
            <div className="floating-mini-card mini-card-two">
              <span>⚡</span>
              <div>
                <strong>Flexible</strong>
                <small>Cost Structure</small>
              </div>
            </div>
            </div>
{/* 
            <div className="floating-mini-card mini-card-two">
              <span>⚡</span>
              <div>
                <strong>Flexible</strong>
                <small>Cost Structure</small>
              </div>
            </div> */}

          </div>
          

        </div>
        

      </section>


      {/* =========================================================
          MAIN PRICING
      ========================================================= */}
      <section className="section pricing-main-section">

        <div className="pricing-background-shape pricing-shape-one"></div>
        <div className="pricing-background-shape pricing-shape-two"></div>

        <div className="container pricing-main-container">

          <div className="pricing-intro-grid">

            <div className="pricing-intro-content">

              <p className="eyebrow">
                Quote Preparation Pricing
              </p>

              <h2>
                Quote Preparation Starting at
                <span> Less Than $1</span>
              </h2>

              <p className="pricing-description">
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

              <div className="price-card-top-line"></div>

              <span className="price-card-label">
                QUOTE PREPARATION SUPPORT
              </span>
<div className="main-price-value">
  <small
    style={{
      fontSize: "60px",
      
    }}
  >
    &lt;
  </small>

  <strong>$1</strong>
</div>

              <p className="price-card-subtitle">
                Starting per completed eligible quote
              </p>

              <div className="price-card-divider"></div>

              <div className="price-card-row">
                <span>✓</span>
                <p>Free trial available</p>
              </div>

              <div className="price-card-row">
                <span>✓</span>
                <p>Monthly billing</p>
              </div>

              <div className="price-card-row">
                <span>✓</span>
                <p>Volume-aligned costs</p>
              </div>

              {/* <button
                className="price-card-button"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Free Trial
                <span>→</span>
              </button> */}

            </div>

          </div>


          <div className="eligible-quote-box">

            <div className="eligible-icon">
              ✓
            </div>

            <div>
              <span>PAY FOR COMPLETED ELIGIBLE QUOTES</span>

              <h3>
                Costs stay aligned with your actual quote volume.
              </h3>

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


      {/* =========================================================
          PRICING FACTORS
      ========================================================= */}
      <section
        id="pricing-factors"
        className="section pricing-factors-section"
      >

        <div className="container">

          <div className="pricing-factors-heading">

            <div>
              <p className="eyebrow">
                Pricing Built Around Your Agency
              </p>

              <h2>
                Pricing Aligned to Your Requirements
              </h2>
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

                  <span className="factor-icon">
                    {factor.icon}
                  </span>

                  <span className="factor-number">
                    {factor.number}
                  </span>

                </div>

                <h3>
                  {factor.title}
                </h3>

                <p>
                  {factor.description}
                </p>

                <span className="factor-bottom-line"></span>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          MONTHLY BILLING
      ========================================================= */}
      <section className="section monthly-billing-section">

        <div className="container monthly-billing-grid">

          <div className="monthly-billing-visual">

            <div className="billing-glow"></div>

            <div className="billing-card">

              <div className="billing-card-header">

                <div>
                  <span>TRITOX MONTHLY BILLING</span>
                  <h3>Simple & Transparent</h3>
                </div>

                <i>✓</i>

              </div>


              <div className="billing-card-line">
                <span>Eligible quotes completed</span>
                <strong>Volume-based</strong>
              </div>

              <div className="billing-card-line">
                <span>Upfront cost</span>
                <strong className="green-text">
                  No upfront fees
                </strong>
              </div>

              <div className="billing-card-line">
                <span>Billing cycle</span>
                <strong>Monthly</strong>
              </div>

              {/* <div className="billing-card-total">
                <span>Cost structure</span>
                <strong>Simple & transparent</strong>
              </div> */}

            </div>


            <div className="billing-floating-note">

              <span>✓</span>

              <p>
                Billing begins after your free trial period.
              </p>

            </div>

          </div>


          <div className="monthly-billing-content">

            <p className="eyebrow">
              Simple Monthly Billing
            </p>

            <h2>
              A transparent cost structure designed for your workflow.
            </h2>

            <p>
              There are no upfront fees to begin working with Tritox.
              Billing starts only after the free trial period is completed
              and is processed on a monthly basis.
            </p>

            <p>
              Each monthly invoice is based on the eligible quotes completed
              during that billing period, giving your agency a clear and
              transparent cost structure.
            </p>

            {/* <button
              className="primary-button"
              onClick={() => scrollToSection("contact")}
            >
              Request Your Free Trial
              <span>→</span>
            </button> */}

          </div>

        </div>

      </section>


      {/* =========================================================
          COST COMPARISON
      ========================================================= */}
      <section className="cost-comparison-section">

        <div className="comparison-grid-pattern"></div>

        <div className="comparison-circle comparison-circle-one"></div>
        <div className="comparison-circle comparison-circle-two"></div>

        <div className="container comparison-container">

          <div className="comparison-heading">

            <p className="eyebrow comparison-eyebrow">
              Cost Structure & Operational Efficiency
            </p>

            <h2>
              A More Flexible Approach to Expanding Backend Capacity
            </h2>

            <p>
              Expanding an in-house team creates a long-term fixed cost
              commitment that extends beyond base compensation. Payroll
              taxes, benefits, recruitment, onboarding, training, equipment,
              and ongoing employment overhead all contribute to the total
              cost of additional internal capacity.
            </p>

            <p>
              Tritox provides a variable support model that allows agencies
              to expand backend capacity while maintaining greater control
              over staffing-related costs.
            </p>

          </div>


          <div className="pricing-comparison-card">

            <div className="comparison-card-header">

              <div>
                <span className="comparison-small-label">
                  COST COMPARISON
                </span>

                <h3>
                  In-House Resource vs Tritox Support
                </h3>
              </div>

              <span className="comparison-savings-badge">
                Up to 70% Lower Cost*
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

                      <td>
                        {row.consideration}
                      </td>

                      <td>
                        {row.inHouse}
                      </td>

                      <td>
                        <span className="table-check">
                          ✓
                        </span>

                        {row.tritox}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>


            <p className="comparison-disclaimer">
              *Actual cost differences depend on compensation levels,
              staffing structure, workflow requirements, quote complexity,
              and quote volume.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      {/* <section className="pricing-final-cta">

        <div className="pricing-cta-network"></div>
        <div className="pricing-cta-overlay"></div>

        <div className="pricing-cta-glow"></div>

        <div className="container pricing-final-cta-content">

          <div className="pricing-cta-copy">

            <p className="eyebrow pricing-light-eyebrow">
              Start With a Free Trial
            </p>

            <h2>
              Explore a more flexible way to support your agency.
            </h2>

            <p>
              Get quote preparation support aligned with your actual
              workflow, quote volume, and operational requirements.
            </p>

          </div>


          <div className="pricing-final-buttons">

            <button
              className="pricing-trial-button"
              onClick={() => scrollToSection("contact")}
            >
              Start Your Free Trial
              <span>→</span>
            </button>

            <button
              className="pricing-services-button"
              onClick={() => scrollToSection("services")}
            >
              View Our Services
              <span>→</span>
            </button>

          </div>

        </div>

      </section> */}

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
      {/* <PageBanner
        eyebrow="Contact Us"
        title="Start Your Free Trial"
        description="Tell us about your agency and quote preparation requirements. Our team will help you understand the next steps."
      /> */}

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
              <div>
                <span>✓</span>
                Umbrella quote preparation support
              </div>

              <div>
                <span>✓</span>
                Renters quote preparation support
              </div>

              <div>
                <span>✓</span>
                Life quote preparation support
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

  {/* Network background */}
  <div className="about-network-bg" />

  {/* Dark/blue overlay */}
  <div className="about-hero-overlay" />

  {/* Grid */}
  <div className="about-hero-grid-pattern" />

  {/* Decorative circles */}
  <div className="about-hero-circle about-hero-circle-one" />
  <div className="about-hero-circle about-hero-circle-two" />
  <div className="about-hero-circle about-hero-circle-three" />

  {/* Animated glowing nodes */}
  <span className="about-network-node about-node-one" />
  <span className="about-network-node about-node-two" />
  <span className="about-network-node about-node-three" />
  <span className="about-network-node about-node-four" />
  <span className="about-network-node about-node-five" />

  <div className="container about-hero-content">

    <div className="about-hero-text">
<div className="about-eyebrow" style={{ color: "#ffffff" }}>
  <span className="pulse-dot" />
  ABOUT TRITOX TECHNOLOGIES
</div>

      <h1>
        Structured Operations.
        <span>Reliable Backend Support.</span>
      </h1>

      <p>
        Tritox Technologies Private Limited is a specialized business
        operations and backend support company serving clients worldwide.
        We help businesses build dependable operational capacity through
        structured processes, dedicated support, and scalable solutions.
      </p>

      <div className="about-hero-actions">

        <button
          className="about-primary-button"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Talk With Our Team
          <span>→</span>
        </button>

        <button
          className="about-primary-button"
          onClick={() =>
            document.getElementById("services")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Explore Our Services
          <span>↓</span>
        </button>

      </div>

    </div>


    {/* Right side visual */}
    <div className="about-hero-visual">

      <div className="about-glow" />

      <div className="about-operation-card">

        <div className="about-card-header">

          <div>
            <span>TRITOX TECHNOLOGIES</span>
            <h3>Operational Support</h3>
          </div>

          <div className="about-status">
            <span />
            Active
          </div>

        </div>


        <div className="about-card-divider" />


        <div className="about-operation-item">

          <div className="about-operation-icon">
            ✓
          </div>

          <div>
            <strong>Structured Workflows</strong>
            <span>Process-driven operations</span>
          </div>

        </div>


        <div className="about-operation-item">

          <div className="about-operation-icon">
            ↗
          </div>

          <div>
            <strong>Scalable Capacity</strong>
            <span>Support built around demand</span>
          </div>

        </div>


        <div className="about-operation-item">

          <div className="about-operation-icon">
            ⚡
          </div>

          <div>
            <strong>Reliable Execution</strong>
            <span>Focused on consistency</span>
          </div>

        </div>


        <div className="about-card-footer">

          <span>Business Operations</span>

          <strong>01</strong>

        </div>

      </div>


      <div className="about-floating-badge badge-one">
        <span>✓</span>
        <div>
          <strong>Reliable</strong>
          <small>Backend Support</small>
        </div>
      </div>


      <div className="about-floating-badge badge-two">
        <span>↗</span>
        <div>
          <strong>Scalable</strong>
          <small>Operations</small>
        </div>
      </div>

    </div>

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
                  <span className="value-number">
  {value.number}
</span>
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
            <h1 className="about-light-eyebrow"style={{ fontSize: "15px" ,color: "#ffffff" }}>Work With Tritox</h1>

            <h2>
              Build a more structured and reliable backend support model.
            </h2>

            <p>
              Discover how Tritox can align with your existing workflows and
              support your operational requirements.
            </p>
          </div>

          <div className="hero-buttons">

  <button
    className="hero-primary-button"
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      })
    }
  >
    Contact Our Team
    <span>→</span>
  </button>

  <button
    className="hero-secondary-button"
    onClick={() =>
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
      })
    }
  >
    View Our Services
    <span>→</span>
  </button>

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
  const socialLinks = [
    {
      name: "Facebook",
      shortName: "f",
      href: "https://facebook.com/tritoxtechnologies",
      image:"/images/socialmedia/facebook.png"
    },
    {
      name: "LinkedIn",
      shortName: "in",
      href: "https://linkedin.com/company/tritoxtechnologies",
      image:"/images/socialmedia/linkedin.png"
    },
    {
      name: "Instagram",
      shortName: "ig",
      href: "https://instagram.com/tritoxtechnologies",
      image:"/images/socialmedia/instagram.png"
    },
    // {
    //   name: "X",
    //   shortName: "𝕏",
    //   href: "https://x.com/tritoxtechnologies",
    // },
  ];

  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* Brand */}
        <div className="footer-brand-section">
          <Link to="/" className="footer-brand">
            <img
              src="/tritox_logo.png"
            
              className="brand-logo"
            />

            <span style={{ color:  "#1565c0" }}>Tritox Technologies</span>
          </Link>

          <p>
            Specialized quote preparation and operational support for
            insurance agencies.
          </p>

    <div className="footer-social">
  <a
    href="https://facebook.com/tritoxtechnologies"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="footer-social-link"
  >
    <img
      src="/images/socialmedia/linkedin.png"
      alt="Facebook"
      className="footer-social-icon"
    />
  </a>

  <a
    href="https://linkedin.com/company/tritoxtechnologies"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="footer-social-link"
  >
    <img
      src="/images/socialmedia/facebook.png"
      alt="LinkedIn"
      className="footer-social-icon"
    />
  </a>

  <a
    href="https://instagram.com/tritoxtechnologies"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="footer-social-link"
  >
    <img
      src="/images/socialmedia/instagram.png"
      alt="Instagram"
      className="footer-social-icon"
    />
  </a>

  {/* <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
    className="footer-social-link"
  >
    <img
      src="/x.png"
      alt="X"
      className="footer-social-icon"
    /> 
  </a>*/}
</div>
        </div>

    
       {/* Footer Links */}
<div className="footer-links">
  <a href="#home">Home</a>

  <a href="#services">Services</a>
  <a href="#tritox-advantage">Tritox Advantage</a>

  <a href="#pricing">Pricing</a>

  <a href="#quote-team-impact">Resource</a>

  <a href="#success-stories">
    Success Stories
  </a>

  <a href="#contact">
    Contact Us
  </a>

</div>
      </div>

      {/* Bottom */}
      <div className="container footer-bottom">
        <span>
          © 2026 Tritox Technologies. All rights reserved.
        </span>
      </div>
    </footer>
  );
}







function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Single Page Content */}
      <main className="single-page">

        {/* Home */}
        <section id="home" className="page-section">
          <HomePage />
        </section>

        {/* Services */}
        <section id="services" className="page-section">
          <ServicesPage />
        </section>

        {/* Tritox Advantage */}
        <section id="tritox-advantage" className="page-section">
          <AdvantagePage />
        </section>

        {/* Resource / Quote Team Impact */}
        <section id="quote-team-impact" className="page-section">
          <ImpactPage />
        </section>

        {/* Pricing */}
        <section id="pricing" className="page-section">
          <PricingPage />
        </section>

        {/* Success Stories */}
        <section id="success-stories" className="page-section">
          <SuccessStoryPage />
        </section>

        {/* Contact */}
        <section id="contact" className="page-section">
          <ContactPage />
          <Footer />
          
        </section>

      </main>
    </>
  );
}

export default App;