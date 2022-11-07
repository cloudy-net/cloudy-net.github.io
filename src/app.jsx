import Header from './header';
import SelectImage from '../images/select.png';

export function App() {
  return (
    <>
      <Header />
      <div class="container" style="max-width: 720px;">
        <hero-cloud>☁</hero-cloud>
        <h1 class="text-center mb-4">This CMS is made for Developers.</h1>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/pbCaz1tnSEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <p class="my-5 text-center fs-5">
          Gain control over the editing experience, without mucking around in hundreds of CRUD files, or getting fleeced by the incumbents.
        </p>
      </div>

      <hr class="my-5" />

      <div class="container" style="max-width: 720px;">
        <div class="row" style="--bs-gutter-x: 3rem;">
          <div class="col-md">
            <h3>Data model in POCOs</h3>
            <p>Your data model is stored declaratively, in code, version controlled, and deployed with your application.</p>
            <p>Content types do not get saved in some database, and they do not get created by point and click.</p>
            <pre style="background: rgba(0, 0, 0, 0.1); padding: 10px;">
              public class Book : <span class="opacity-50">INameable</span><br />
              &#123;<br />
              &nbsp;&nbsp;public Guid Id &#123; get; set; &#125;<br />
              &nbsp;&nbsp;public string Name &#123; get; set; &#125;<br />
              &nbsp;&nbsp;<span class="opacity-50">[Select(typeof(Author))]</span><br />
              &nbsp;&nbsp;public Guid AuthorId &#123; get; set; &#125;<br />
              &#125;
            </pre>
          </div>
          <div class="col-md">
            <h3>Extensible, automatic scaffolding</h3>
            <p>
              Using regular Razor partials and UI Hints, you extend the scaffolding that the CMS provides you.
            </p>
            <img src={SelectImage} style="max-width: 100%;" alt="Demonstration of how the CMS will scaffold the Select attribute on the POCO. It will give you a preview of the referenced entity, and a dropdown with filtering and pagination capabilities." />
          </div>
        </div>
      </div>

      <hr class="my-5" id="quick-start" />

      <div class="container" style="max-width: 720px;">
        <h2 class="mb-4">Quick start</h2>

        <p><em>Note: You can get off the ground using <a href="https://github.com/cloudy-net/template-website">our Github template</a>.</em></p>

        <p>Create a new, empty ASP.NET Core web application.</p>

        <p>Install Cloudy.CMS and Cloudy.CMS.UI from NuGet.</p>

        <p>This should be your Startup.cs:</p>

        <pre style="background: rgba(0, 0, 0, 0.1); padding: 10px;">
          var builder = WebApplication.CreateBuilder(args);<br />
          <br />
          builder.Services.AddCloudy(cloudy =&gt; cloudy<br />
          &nbsp;&nbsp;.AddAdmin(admin =&gt; admin.Unprotect())   // NOTE: Admin UI will be publicly available!<br />
          &nbsp;&nbsp;.AddContext&lt;MyContext&gt;()                // Adds EF Core context with your content types<br />
          );<br />
          <br />
          services.AddDbContext&lt;MyContext&gt;(options =&gt; options<br />
          &nbsp;&nbsp;.UseInMemoryDatabase("cloudytest")      // Adjust according to your needs.<br />
          );<br />
          <br />
          var app = builder.Build();<br />
          <br />
          app.UseStaticFiles(new StaticFileOptions().MustValidate()); // This removes the need for manually clearing browser cache when updating frontend assets<br />
          <br />
          app.UseRouting();<br />
          app.UseAuthentication();<br />
          app.UseAuthorization();<br />
          <br />
          app.UseEndpoints(endpoints =&gt; &#123;<br />
          &nbsp;&nbsp;endpoints.MapRazorPages();<br />
          &nbsp;&nbsp;endpoints.MapControllers();<br />
          &nbsp;&nbsp;endpoints.MapGet("/", async c =&gt; c.Response.Redirect("/Admin"));<br />
          &#125;);<br />
          <br />
          app.Run();<br />
        </pre>
      </div>

      <hr class="my-5" />

      <div class="container" style="max-width: 720px;">
        <h2 class="mb-4">Authentication</h2>

        <p>The UI works well with external login providers and ASP.NET Identity.</p>
        
        <p>Remove <code>Unprotect()</code> inside <code>UseCloudyAdmin()</code>, and define the <code>adminarea</code> authorization policy to something appropriate.</p>

        <p>The following example allows anyone having logged in access to the admin area:</p>

        <pre style="background: rgba(0, 0, 0, 0.1); padding: 10px;">
          configurator.Services.Configure&lt;AuthorizationOptions&gt;(o =&gt; o.AddPolicy("adminarea", builder =&lot; builder.RequireAuthenticatedUser()));
        </pre>
      </div>

      <hr class="my-5" />

      <div class="container" style="max-width: 720px;">
        <h2 class="mb-4">Database</h2>

        <p>Cloudy.CMS supports any database supported by EF Core: Inmemory, SQLite, SQL Server, CosmosDB ...</p>
      </div>

      <hr class="my-5" id="pricing" />

      <div class="container" style="max-width: 720px;">
        <h2 class="mb-4">Pricing tiers</h2>

        <p>Cloudy CMS is free for personal and OSS use. Commercial use costs as per below:</p>

        <dl>
          <dt class="mb-1">Non-commercial or OSS projects use</dt>
          <dd class="mb-4">Free</dd>

          <dt class="mb-1">Companies/freelancers with revenue <span title="Less than ...">&lt;</span> $100,000/year</dt>
          <dd class="mb-4">$9.95 per month (excl VAT) for unlimited production instances</dd>

          <dt class="mb-1">Companies with revenue <span title="Greater than ...">&gt;</span> $100,000/year</dt>
          <dd class="mb-4">$99.95 per month (excl VAT) per production instance<br/><br/><em>Note: An instance can have unlimited replicas</em></dd>
        </dl>

        <p>For information about payment, please email <a href="mailto:bjorn.a.goransson@gmail.com">bjorn.a.goransson@gmail.com</a>.</p>
      </div>
      <footer class="site-footer mt-5">
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
