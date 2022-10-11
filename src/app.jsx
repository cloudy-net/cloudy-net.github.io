import Header from './header';

export function App() {
  return (
    <>
      <Header/>
      <div class="container">
        <section class="hero">
          <hero-cloud>☁</hero-cloud>
          <h1 class="heading">We don't make the CMS - you do.</h1>
          <div class="intro">
            Create CRUD applications using EF Core as truth
          </div>
        </section>
        <sepa-rator></sepa-rator>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pbCaz1tnSEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <sepa-rator></sepa-rator>
        <section>
          <ul class="usp-list">
            <li class="usp-item">
              <h3 class="usp-heading">EF Core is the data model</h3>
              <div class="usp-text">
                Your data model is stored in your EF Core context - Not in the database.
              </div>
            </li>
            <li class="usp-item">
              <h3 class="usp-heading">Extensible, automatic scaffolding</h3>
              <div class="usp-text">
                Using regular Razor partials, UI Hints and <code>[CustomAttributes]</code>, you extend the scaffolding that the CMS toolkit provides you.
              </div>
            </li>
          </ul>
        </section>
        <sepa-rator></sepa-rator>
        
        <h3>Pricing tiers</h3>
        
        <dl>
          <dt>Non-commercial or OSS projects use</dt>
          <dd>Free</dd>

          <dt>Companies/freelancers with revenue <span title="Less than ...">&lt;</span> $100,000/year</dt>
          <dd>$9.95 per month (excl VAT) for unlimited production instances</dd>

          <dt>Companies with revenue <span title="Greater than ...">&gt;</span> $100,000/year</dt>
          <dd>$99.95 per month (excl VAT) per production instance</dd>
        </dl>
        <sepa-rator></sepa-rator>
      </div>
      <footer class="site-footer">
        <div class="container">
          <div class="legalese">
            Cloudy CMS is a product by Bjorn Goransson Invest AB. Company ISIN: SE559204344101<br />
            Contact: +46 (0)76 067 6064 bjorn.a.goransson@gmail.com 2022 © Bjorn Goransson Invest AB
          </div>
        </div>
      </footer>
    </>
  )
}
