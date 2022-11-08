
export default () => {
  return <>
    <div class="pt-5"></div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">☁ Cloudy CMS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#quick-start">Quick start</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#documentation">Documentation</a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" href="#pricing">Pricing</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/cloudy-cms/Cloudy.CMS" title="Github"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="rgba(255, 255, 255, 0.55)" d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0z" /></svg></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://twitter.com/cloudydotnet" title="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="rgba(255, 255, 255, 0.55)" d="M24 5h-3l2-2-3 1a5 5 0 0 0-8 4C8 8 4 6 2 3c-2 2-1 5 1 7L1 9c0 2 2 5 4 5H3c0 2 2 3 4 3-2 2-4 3-7 3l8 2c9 0 14-8 14-15l2-2z" /></svg></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.youtube.com/channel/UC8BRpzvX5J9n8-2G1KIf5xg" title="Youtube"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="rgba(255, 255, 255, 0.55)" d="M20 3H4c-4 0-4 3-4 9s0 9 4 9h16c4 0 4-3 4-9s0-9-4-9zM9 16V8l8 4-8 4z" /></svg></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>;
}