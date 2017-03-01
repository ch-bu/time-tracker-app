import Input from './app/input.jsx';
import DjangoCrsftoken from './django-crsf-token.js';
import {ajax, getCookie, csrfSafeMethod} from './helper.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {taskDescription: '',
                  taskDuration: moment('000000', 'HHmmss'),
                  taskStarted: null,
                  taskStopped: null};

    // Bind this to methods
    this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.onStopButtonClicked = this.onStopButtonClicked.bind(this);
    this.onStartButtonClicked = this.onStartButtonClicked.bind(this);
  }

  // Render whole app component
  render() {
    return (
      <div id="app">
        <Input taskDescription={this.state.taskDescription}
          taskDuration={this.state.taskDuration}
          onChange={this.handleTaskDescriptionChange}
          onDurationChange={this.handleDurationChange}
          onStopButtonClicked={this.onStopButtonClicked}
          onStartButtonClicked={this.onStartButtonClicked} />
      </div>
    )
  }

  // Change description of task whenever
  // user types any changes in the input box
  handleTaskDescriptionChange(value) {
    this.setState({taskDescription: value}, function() {
    });
  }

  // Change duration of task every second after
  // start button has been clicked
  handleDurationChange() {
    this.setState({taskDuration: this.state.taskDuration.add(1, 's')});
  }

  // When a user clicks the stop button,
  // rerender tasks and
  // reset taskDuration state to zero
  onStopButtonClicked() {
    // Calculate seconds current task has taken
    var seconds = moment.duration({
      seconds: this.state.taskDuration.get('second'),
      minutes: this.state.taskDuration.get('minute'),
      hours: this.state.taskDuration.get('hour'),
    }).asSeconds();

    ////////////////////////////
    // Send data to server
    // ////////////////////////

    // Get csrftoken cookie
    var csrftoken = getCookie('csrftoken');

    // Set X-CsRFtoken header before each
    // ajax request
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
          if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
              xhr.setRequestHeader("X-CSRFToken", csrftoken);
          }
        }
    });

    // Send request
    $.ajax({
      url: '/api/tasks/',
      type: 'POST',
      data: {
        started: moment(this.state.taskStarted).format('YYYY-MM-DD HH:mm:ss'),
        stopped: moment().format('YYYY-MM-DD HH:mm:ss'),
        duration: seconds,
        goal: this.state.taskDescription
      },
      success: function(result) {
        // Redirect to app page
        console.log(result);
        // window.location.href = "/app";
      },
      error(xhr, status, error) {
        Materialize.toast('Your login failed.', 4000)
      }
    });

    // Reset task values and send data to server when
    // finished
    this.setState({taskDuration: moment('000000', 'HHmmss'),
      taskDescription: '',
      taskStopped: new Date()});
  }

  // When user clicks start Button save date time
  onStartButtonClicked() {
    this.setState({taskStarted: new Date()});
  }
}

export default App;
