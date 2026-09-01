

export default function HomePages() {
  return (
    <>
      <Navbar />

      <main>

        {/* HOME */}
        <section id="home">
          <HomePages />
        </section>

        {/* SERVICES */}
        <section id="services">
          <Services />
        </section>

        {/* TRITOX ADVANTAGE */}
        <section id="tritox-advantage">
          <WhyTritox />
        </section>

        {/* RESOURCE / IMPACT */}
        <section id="quote-team-impact">
          <QuoteTeamImpact />
        </section>

        {/* PRICING */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* SUCCESS STORIES */}
        <section id="success-stories">
          <SuccessStoryPage />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />
    </>
  );
}