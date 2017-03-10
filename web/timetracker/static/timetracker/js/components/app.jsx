import Input from './app/input.jsx';
import Tasks from './app/tasks.jsx';
import DjangoCrsftoken from './django-crsf-token.js';
import {ajax, getCookie, csrfSafeMethod} from './helper.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {taskDescription: '',
                  taskDuration: moment('000000', 'HHmmss'),
                  taskStarted: null,
                  taskStopped: null,
                  tasks: null};

    // Bind this to methods
    this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.onStopButtonClicked = this.onStopButtonClicked.bind(this);
    this.onStartButtonClicked = this.onStartButtonClicked.bind(this);
    this.getTasks = this.getTasks.bind(this);
  }

  componentDidMount() {
    this.getTasks();
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
        <Tasks tasks={this.state.tasks} />
      </div>
    )
  }

  // Change description of task whenever
  // user types any changes in the input box
  handleTaskDescriptionChange(value) {
    this.setState({taskDescription: value});
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
    var self = this;

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

    // Store data to send in variable
    var dataToSend = {
        started: moment(this.state.taskStarted).format('YYYY-MM-DD HH:mm:ss'),
        stopped: moment().format('YYYY-MM-DD HH:mm:ss'),
        duration: seconds,
        goal: this.state.taskDescription
      };

    // Send request
    $.ajax({
      url: '/api/tasks/',
      type: 'POST',
      data: dataToSend,
      success: function(result) {
        self.setState({tasks: self.getTasks()});
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


  getTasks() {
    // Get tasks and save
    var self = this;

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
      type: 'GET',
      success: function(result) {
        self.setState({tasks: result});
      },
      error: function(xhr, status, error) {
        Materialize.toast('Your tasks could not be fetched.', 4000);
      }
    });
  }

  // When user clicks start Button save date time
  onStartButtonClicked() {
    this.setState({taskStarted: new Date()});
  }
}

export default App;
