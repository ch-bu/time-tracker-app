class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" id="login">
        <form className="col s12">

          <div className="row">
            <div className="input-field col s12">
              <input id="username" type="text" />
              <label htmlFor="username">Username</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <a id="login-button" className="waves-effect waves-light btn">button</a>
          </div>

        </form>
      </div>
    )
  }
}

export default Login;
