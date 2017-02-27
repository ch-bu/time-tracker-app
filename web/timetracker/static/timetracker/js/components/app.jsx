import Input from './app/input.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {taskDescription: '', taskDuration: moment('000000', 'HHmmss')};

    this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this);
  }

  render() {
    return (
      <div id="app">
        <Input taskDescription={this.state.taskDescription}
          taskDuration={this.state.taskDuration}
          onChange={this.handleTaskDescriptionChange} />
      </div>
    )
  }

  handleTaskDescriptionChange(value) {
    this.setState({taskDescription: value}, function() {
      // console.log(this.state.taskDescription);
    });
    // console.log(this.state.taskDescription);
  }
}

export default App;
