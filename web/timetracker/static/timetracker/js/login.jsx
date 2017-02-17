import LandingPage from './components/login-form.jsx';

ReactDOM.render(
  <LandingPage />,
  document.getElementById('landing-page-container')
);

$(document).ready(() => {
  console.log('der Login');
});

