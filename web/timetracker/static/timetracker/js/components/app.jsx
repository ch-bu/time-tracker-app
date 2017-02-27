import Input from './app/input.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {taskDescription: '', taskDuration: moment('000000', 'HHmmss')};

    // Bind this to methods
    this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.onStopButtonClicked = this.onStopButtonClicked.bind(this);
  }

  // Render whole app component
  render() {
    return (
      <div id="app">
        <Input taskDescription={this.state.taskDescription}
          taskDuration={this.state.taskDuration}
          onChange={this.handleTaskDescriptionChange}
          onDurationChange={this.handleDurationChange}
          onStopButtonClicked={this.onStopButtonClicked} />
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
    this.setState({taskDuration: moment('000000', 'HHmmss')});
  }
}

export default App;
