import { useState } from 'preact/hooks'

export function App() {
  const [count, setCount] = useState(0)

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
            Hate CMS'es? Ever wish you could stand up a CRUD application using EF Core as the truth?
          </div>
        </section>
        <sepa-rator>
          <separator-fold title="This is a fold."></separator-fold>
        </sepa-rator>
        <section>
          <ul class="usp-list">
            <li class="usp-item">
              <h3 class="usp-heading">EF Core is the data model</h3>
              <div class="usp-text">
                Your data model is stored in version control, along with the rest of your business logic.
              </div>
            </li>
            <li class="usp-item">
              <h3 class="usp-heading">Extensible, automatic scaffolding</h3>
              <div class="usp-text">
                Using regular Razor partials and UI Hints, you extend the scaffolding that the CMS toolkit provides you.
              </div>
            </li>
          </ul>
        </section>
        <sepa-rator></sepa-rator>
      </div>
      <footer class="site-footer">
        <div class="container">
          <div class="legalese">
          Cloudy CMS is a product by Bjorn Goransson Invest AB. Company ISIN: SE559204344101<br/>
          Contact: +46 (0)76 067 6064 bjorn.a.goransson@gmail.com 2022 © Bjorn Goransson Invest AB
          </div>
        </div>
      </footer>
    </>
  )
}
