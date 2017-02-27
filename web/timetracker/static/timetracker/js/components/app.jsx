import Input from './app/input.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {taskDescription: '', taskDuration: moment('000000', 'HHmmss')};

    this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
  }

  render() {
    return (
      <div id="app">
        <Input taskDescription={this.state.taskDescription}
          taskDuration={this.state.taskDuration}
          onChange={this.handleTaskDescriptionChange}
          onDurationChange={this.handleDurationChange} />
      </div>
    )
  }

  handleTaskDescriptionChange(value) {
    this.setState({taskDescription: value}, function() {
    });
  }

  handleDurationChange() {
    this.setState({taskDuration: this.state.taskDuration.add(1, 's')});
  }
}

export default App;
