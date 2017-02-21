import Input from './app/input.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {taskDescription: ''};

    this.changeTaskDescription = this.changeTaskDescription.bind(this);
  }

  render() {
    return (
      <div id="app">
        <Input />
      </div>
    )
  }

  changeTaskDescription(event) {
    this.setState({taskDescription: event.target.value});
  }
}

export default App;
