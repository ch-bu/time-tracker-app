import React from 'react';
import Header from './header.jsx';
import Login from './login.jsx';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
      </div>
    )
  }
}

export default LandingPage;
