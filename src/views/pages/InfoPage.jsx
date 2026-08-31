import { Link } from "react-router-dom";

function InfoPage({ pageData }) {
  return (
    <main className="inner-page">
      <section className="page-banner">
        <div className="page-banner-green" />
        <div className="page-banner-yellow" />

        <div className="container page-banner-content">
          <p className="eyebrow hero-eyebrow">{pageData.eyebrow}</p>

          <h1>{pageData.title}</h1>

          <p>{pageData.description}</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="info-card-grid">
            {pageData.cards.map((card) => (
              <article
                key={card.number}
                className={`info-card ${card.color}-info-card`}
              >
                <span className="info-card-number">{card.number}</span>

                <h2>{card.title}</h2>

                <p>{card.description}</p>

                <Link to="/contact" className="info-card-link">
                  Talk to our team →
                </Link>
              </article>
            ))}
          </div>

          <div className="page-bottom-cta">
            <div>
              <p className="eyebrow">Tritox Technologies</p>
              <h2>Want to see how quote preparation support can help?</h2>
            </div>

            <Link to="/contact" className="primary-button">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InfoPage;