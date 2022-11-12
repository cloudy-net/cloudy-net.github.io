export default () =>
  <>
    <div class="mt-5"></div>
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
        app.UseAuthentication();<br />
        app.UseAuthorization();<br />
        <br />
        app.MapRazorPages();<br />
        app.MapControllers();<br />
        app.MapGet("/", async c =&gt; c.Response.Redirect("/Admin"));<br />
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
  </>;
