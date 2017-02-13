import LandingPage from './components/landing-page.jsx';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Materialize from 'materialize';

ReactDom.render(
  <LandingPage />,
  document.getElementById('landing-page-container')
);

$(document).ready(() => {
  console.log('argoto');
});

