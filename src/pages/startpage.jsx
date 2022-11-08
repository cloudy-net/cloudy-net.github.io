import SelectImage from '../../images/select.png';

export default () =>
  <>
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

    <hr class="my-5" />

    <div class="container" style="max-width: 720px;">
      <h2 class="mb-4">Database</h2>

      <p>Cloudy.CMS supports any database supported by EF Core: Inmemory, SQLite, SQL Server, CosmosDB ...</p>
    </div>
  </>;
