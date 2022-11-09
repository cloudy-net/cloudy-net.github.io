export default () => {
  return <>
    <div class="mt-5"></div>
    <div class="container" style="max-width: 720px;">
      <h2 class="mb-4">Documentation</h2>

      <p class="fs-5">Cloudy CMS automatically generates a graphical admin user interface based on your EF Core models, augmented with attributes and interfaces.</p>
    </div>

    <hr class="my-5" />

    <div class="container" style="max-width: 720px;">
      <h3>Architecture</h3>

      <p>The core solution consists of two packages: <code>Cloudy.CMS</code> and <code>Cloudy.CMS.UI</code>.</p>

      <p>The package <code>Cloudy.CMS.UI</code> contains the actual graphical user interface (the "Admin"). There are really no usable API's in this package, except the initialization code that goes into your <code>Startup.cs</code> or equivalent.</p>
      <p>The more fundamental package <code>Cloudy.CMS</code> contains:</p>

      <ul>
        <li>Data model support classes (interfaces, attributes for your data models like <code>INameable</code>)</li>
        <li>MVC support classes (routing, model binding)</li>
        <li>Naming support classes (pluralizing, humanizing etc)</li>
        <li>Other support classes (entity reference generation, json serialization for EF)</li>
      </ul>

      <p>There is also a Azure Media Picker package, called <code>Cloudy.CMS.UI.AzureMediaPicker</code>.</p>
    </div>

    <hr class="my-5" />

    <div class="container" style="max-width: 720px;">
      <h3>Augmenting your data model</h3>

      <p>When having created your EF data model, you don't really have to do anything special to make it show up in Cloudy. Make sure you got the Cloudy initialization setup correctly, and add your <code>DbContext</code> with its <code>DbSet</code>s.</p>

      <p>There are however a few ways of augmenting and customizing the scaffolded UI.</p>

      <h4>Augmenting your classes</h4>

      <ul>
        <li>Add <code>INameable</code> to make the name of your content be used purposefully in the UI</li>
        <li>Add <code>IImageable</code> to make your content show an image preview next to it, where applicable</li>
      </ul>

      <p>To be documented: [Singleton]</p>

      <h4>Augmenting and customizing your properties</h4>

      <p>You can use <code>UIHint</code> on your properties to set the Razor partial being used to render your control.</p>

      <pre>
        [UIHint("mypartial")] // will load mypartial.cshtml<br />
        public string Property {'{'} get; set; {'}'}
      </pre>

      <p>To be documented: [Display], [ListFilter], [ListColumn], [CloudyIgnore], [Select], [MediaPicker]</p>
    </div>

    <hr class="my-5" />

    <div class="container" style="max-width: 720px;">
      <h3>Routing</h3>

      <p>To be documented: Routing, Model binding, Polymorphism</p>
    </div>

    <hr class="my-5" />

    <div class="container" style="max-width: 720px;">
      <h3>To be documented</h3>

      <ul>
        <li>UI walkthrough</li>
        <li>Authentication</li>
        <li>Existing edit partials</li>
        <li>Existing listing column partials</li>
        <li>Supported property types</li>
        
      </ul>
    </div>
  </>;
};