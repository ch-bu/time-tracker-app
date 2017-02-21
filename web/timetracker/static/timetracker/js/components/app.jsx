import Input from './app/input.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {taskDescription: ''};
  }

  render() {
    return (
      <div id="app">
        <Input taskDescription={this.state.taskDescription} />
      </div>
    )
  }
}

export default App;
