class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {taskDescription: ''};

    this.changeTaskDescription = this.changeTaskDescription.bind(this);
  }

  render() {
    return (
      <div className="row" id="app">
        <div className="col m8">
          <input type="text" tabindex="1" value={this.state.taskDescription} onChange={this.changeTaskDescription} />
        </div>
        <div className="col m4">Uhr</div>
      </div>
    )
  }

  changeTaskDescription(event) {
    this.setState({taskDescription: event.target.value});
  }
}

export default App;
