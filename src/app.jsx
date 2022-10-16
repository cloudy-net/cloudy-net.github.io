import Header from './header';
import SelectImage from '../images/select.png';

export function App() {
  return (
    <>
      <Header/>
      <div class="container">
        <section class="hero">
          <hero-cloud>☁</hero-cloud>
          <h1 class="heading">This CMS is made for Developers.</h1>
          <div class="intro">
            Gain control over the editing experience, without mucking around in hundreds of CRUD files, or getting fleeced by the incumbents.
          </div>
        </section>
        <sepa-rator></sepa-rator>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pbCaz1tnSEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <sepa-rator></sepa-rator>
        <section>
          <ul class="usp-list">
            <li class="usp-item">
              <h3 class="usp-heading">Data model in POCOs</h3>
                <p>Your data model is stored declaratively, in code, version controlled, and deployed with your application.</p>
                <p>Content types do not get saved in some database, and they do not get created by point and click.</p>
                <pre style="background: rgba(0, 0, 0, 0.1); padding: 10px;">
                  public class Book : <span class="opacity-50">INameable</span><br/>
                  &#123;<br/>
                  &nbsp;&nbsp;public Guid Id &#123; get; set; &#125;<br/>
                  &nbsp;&nbsp;public string Name &#123; get; set; &#125;<br/>
                  &nbsp;&nbsp;<span class="opacity-50">[Select(typeof(Author))]</span><br/>
                  &nbsp;&nbsp;public Guid AuthorId &#123; get; set; &#125;<br/>
                  &#125;
                </pre>
            </li>
            <li class="usp-item">
              <h3 class="usp-heading">Extensible, automatic scaffolding</h3>
              <p>
                Using regular Razor partials and UI Hints, you extend the scaffolding that the CMS provides you.
              </p>
              <img src={SelectImage} style="max-width: 100%;" alt="Demonstration of how the CMS will scaffold the Select attribute on the POCO. It will give you a preview of the referenced entity, and a dropdown with filtering and pagination capabilities." />
            </li>
            <li class="usp-item">
              <h3 class="usp-heading">Support any database</h3>
              <p>
                Because we use standard EF Core as our data backend, we support anything and everything supported by EF Core:
              </p>
              <ul>
                <li>Inmemory</li>
                <li>SQLite</li>
                <li>SQL Server</li>
                <li>CosmosDB</li>
                <li>... even `/dev/null`</li>
              </ul>
              <p>(for legal reasons, that last one was a joke)</p>
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

        <p>For more information, email <a href="mailto:bjorn.a.goransson@gmail.com">bjorn.a.goransson@gmail.com</a>.</p>
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
