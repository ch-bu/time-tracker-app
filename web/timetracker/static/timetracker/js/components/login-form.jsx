import DjangoCrsftoken from './django-crsf-token.js';
import {ajax, getCookie, csrfSafeMethod} from './ajax.js';

class Login extends React.Component {
  constructor(props) {
    super(props);

    // Set state
    this.state = {username: '',
      password: ''};

    // Bind this to methods
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  render() {
    return (
      <div className="row" id="login">
        <form className="col s12" method="post">
          <DjangoCrsftoken/>
          <div className="row">
            <div className="input-field col s12">
              <input id="username" type="text" name="username" value={this.state.username} onChange={this.changeUsername} />
              <label htmlFor="username">Username</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" name="password" value={this.state.password} onChange={this.changePassword} />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <button onClick={this.logIn} id="login-button" className="waves-effect waves-light btn">button</button>
          </div>

        </form>
      </div>
    )
  }

  changeUsername(event) {
    this.setState({username: event.target.value});
  }

  changePassword(event) {
    this.setState({password: event.target.value});
  }

  logIn(e) {
    e.preventDefault();

    var csrftoken = getCookie('csrftoken');

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
          if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
              xhr.setRequestHeader("X-CSRFToken", csrftoken);
          }
        }
    });

    $.ajax({
      url: '/login/',
      type: 'POST',
      data: {username: this.state.username,
        password: this.state.password},
      success: function(result) {
        console.log(result);
      },
      error(xhr, status, error) {
        console.log(error);
      }
    });
    // // Make ajax call
    // ajax({
    //   url: '/login',
    //   type: 'POST',
      // data: {username: this.state.username,
      //   password: this.state.password,
      //   csrfmiddlewaretoken: getCookie('csrftoken')}
    // }).then(function(result) {
    //   console.log(result);
    // });
  }
}

export default Login;
