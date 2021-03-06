import Input from './input.jsx';
import Tasks from './tasks.jsx';
import AppContent from './app-content.jsx'
import {ajax, getCookie, csrfSafeMethod} from '../../helper/helper.js';
import {getAPITasks, postTask} from '../../helper/api-requests.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {taskDescription: '',
                  categoryDescription: '',
                  typeDescription: '',
                  taskDuration: moment('000000', 'HHmmss'),
                  taskStarted: null,
                  taskStopped: null,
                  tasks: null};

    // Bind this to methods
    this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this);
    this.handleWorkDescriptionChange = this.handleWorkDescriptionChange.bind(this);
    this.handleTypeDescriptionChange = this.handleTypeDescriptionChange.bind(this);
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
          categoryDescription={this.state.categoryDescription}
          typeDescription={this.state.typeDescription}
          taskDuration={this.state.taskDuration}
          handleTaskDescriptionChange={this.handleTaskDescriptionChange}
          handleWorkDescriptionChange={this.handleWorkDescriptionChange}
          handleTypeDescriptionChange={this.handleTypeDescriptionChange}
          onDurationChange={this.handleDurationChange}
          onStopButtonClicked={this.onStopButtonClicked}
          onStartButtonClicked={this.onStartButtonClicked} />
        <AppContent tasks={this.state.tasks} getTasks={this.getTasks} />
      </div>
    )
  }

  /**
   * Change description of task whenever
   * user types any changes in the input box
   */
  handleTaskDescriptionChange(value) {
    this.setState({taskDescription: value});
  }

  /**
   * Change type of task whenever
   * user types any changes in the input box
   */
  handleTypeDescriptionChange(value) {
    this.setState({typeDescription: value});
  }

  /**
   * Change work description
   * whenever a user types any changes
   * in the input box
   */
  handleWorkDescriptionChange(value) {
    this.setState({categoryDescription: value});
  }

  /**
   * Change duration of task every second after
   * start button has been clicked
   */
  handleDurationChange() {
    this.setState({taskDuration: this.state.taskDuration.add(1, 's')});
  }

  /**
   * When a user clicks the stop button,
   * rerender tasks and
   * reset taskDuration state to zero
   */
  onStopButtonClicked() {
    var self = this;

    // Calculate seconds current task has taken
    var seconds = moment.duration({
      seconds: this.state.taskDuration.get('second'),
      minutes: this.state.taskDuration.get('minute'),
      hours: this.state.taskDuration.get('hour'),
    }).asSeconds();

    // Store data to send in variable
    var dataToSend = {
        started: moment(this.state.taskStarted).format('YYYY-MM-DD HH:mm:ss'),
        stopped: moment().format('YYYY-MM-DD HH:mm:ss'),
        duration: seconds,
        goal: this.state.taskDescription,
        task_category: this.state.categoryDescription,
        task_type: this.state.typeDescription
      };

    // Send data to server
    postTask(self, dataToSend);

    // Reset task values and send data to server when
    // finished
    this.setState({taskDuration: moment('000000', 'HHmmss'),
      taskDescription: '',
      categoryDescription: '',
      typeDescription: '',
      taskStopped: new Date()});
  }

  /**
   * Get all tasks from the server
   */
  getTasks() {
    var self = this;

    // Get data from server
    getAPITasks(self);
  }

  /**
   * When user clicks start Button save date time
   */
  onStartButtonClicked() {
    this.setState({taskStarted: new Date()});
  }
}

export default App;
