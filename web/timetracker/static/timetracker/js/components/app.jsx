class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {taskDescription: ''};

    this.changeTaskDescription = this.changeTaskDescription.bind(this);
  }

  render() {
    return (
      <div id="app">
        <div className="row" id="app-task">
          <div className="col m8">
            <input autoFocus={true} type="text" placeholder={"Woran arbeitest du?"} tabindex="1" value={this.state.taskDescription} onChange={this.changeTaskDescription} />
          </div>
          <div className="col m4">Uhr</div>
        </div>
      </div>
    )
  }

  changeTaskDescription(event) {
    this.setState({taskDescription: event.target.value});
  }
}

export default App;
