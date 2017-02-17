import DjangoCrsftoken from './django-crsf-token.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" id="login">
        <form className="col s12" method="post">
          <DjangoCrsftoken/>
          <div className="row">
            <div className="input-field col s12">
              <input id="username" type="text" name="username" />
              <label htmlFor="username">Username</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" name="password" />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <button id="login-button" className="waves-effect waves-light btn">button</button>
          </div>

        </form>
      </div>
    )
  }
}

export default Login;
