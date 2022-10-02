export function App() {
  return (
    <>
      <header>
        <div class="container">
          <header-logo></header-logo>
          <header-title>Cloudy.NET</header-title>
          <a class="header-link" href="https://github.com/cloudy-cms/Cloudy.CMS">Github</a>
        </div>
      </header>
      <div class="container">
        <section class="hero">
          <hero-cloud></hero-cloud>
          <h1 class="heading">We don't make the CMS - you do.</h1>
          <div class="intro">
            Stand up your CRUD application using EF Core as the truth
          </div>
        </section>
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
        
        <h4>Non-commercial use</h4>
        <p>Free</p>

        <h4>Companies or freelancers with a yearly revenue less than 100,000 US Dollars</h4>
        <p>$9.95 per month (excl VAT) for unlimited production instances</p>

        <h4>Companies with a yearly revenue in excess of 100,000 US Dollars</h4>
        <p>$99.95 per month (excl VAT) per production instance</p>

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
