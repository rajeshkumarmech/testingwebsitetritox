import { Link } from "react-router-dom";


function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-shape hero-shape-green" />
        <div className="hero-shape hero-shape-yellow" />

        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
              Farmers Insurance Quote Preparation Support
            </p>

            <h1>
              Quote Preparation Support
              <span>Less Than $1 per Quote</span>
            </h1>

            <p className="hero-description">
              Tritox Technologies provides specialized quote preparation and
              operational support for Auto, Home, and Bundle quotes, helping
              Farmers Insurance agencies streamline quoting workflows and
              strengthen day-to-day operational efficiency.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="primary-button">
                Start Your Free Trial
              </Link>

              <Link to="/pricing" className="secondary-button">
                View Pricing <span>→</span>
              </Link>
            </div>

            <div className="hero-mini-stats">
              <div>
                <strong>&lt; $1</strong>
                <span>Per Quote</span>
              </div>

              <div>
                <strong>Auto + Home</strong>
                <span>Quote Support</span>
              </div>

              <div>
                <strong>Free Trial</strong>
                <span>Available Now</span>
              </div>
            </div>
          </div>

          <div className="hero-logo-area">
            <div className="logo-circle logo-circle-green" />
            <div className="logo-circle logo-circle-yellow" />

            <div className="logo-image-card">
              <img
                src={logoImage}
                alt="Tritox Technologies logo"
                className="hero-logo-image"
              />
            </div>

            <div className="logo-caption">
              <span className="caption-line" />
              <p>
                Enhancing Agency Efficiency Through Specialized Quote
                Preparation Support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Why Tritox</p>

            <h2>Support Your Agency With a More Efficient Quote Workflow</h2>

            <p>
              Focus your internal team on customer service and growth while
              Tritox helps support key quote preparation activities.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card blue-card">
              <span className="feature-number">01</span>
              <h3>Organized Quote Preparation</h3>
              <p>
                Create a more structured workflow for Auto, Home, and Bundle
                quote preparation.
              </p>
            </article>

            <article className="feature-card green-card">
              <span className="feature-number">02</span>
              <h3>More Team Capacity</h3>
              <p>
                Reduce repetitive operational work and help your team focus on
                high-value agency activities.
              </p>
            </article>

            <article className="feature-card yellow-card">
              <span className="feature-number">03</span>
              <h3>Simple Cost Structure</h3>
              <p>
                Receive quote preparation support for less than $1 per quote
                with a free trial available.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container cta-section">
          <div>
            <p className="eyebrow light-eyebrow">Get Started Today</p>
            <h2>Ready to strengthen your quote preparation workflow?</h2>
          </div>

          <Link to="/contact" className="yellow-button">
            Start Your Free Trial →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;