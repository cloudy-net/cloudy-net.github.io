import './main.scss'
import { render } from 'preact'
import Header from './components/header'
import Router from 'preact-router';
import Startpage from './pages/startpage'
import Documentation from './pages/documentation';
import { createHashHistory } from 'history';
import Footer from './components/footer';
import QuickStart from './pages/quick-start';
import Pricing from './pages/pricing';

render(<>
  <Header />
  <Router history={createHashHistory()}>
    <Startpage path="/" />
    <QuickStart path="/quick-start" />
    <Pricing path="/pricing" />
    <Documentation path="/documentation" />
  </Router>
  <Footer />
</>, document.getElementById('app'))
