class Input extends React.Component {

  constructor(props) {
    super(props);

    this.state = {taskDescription: ''};

    this.changeTaskDescription = this.changeTaskDescription.bind(this);
  }

  render() {
    return (
      <div className="row" id="app-task">
        <div className="col m8">
          <input autoFocus={true} type="text" placeholder={"Woran arbeitest du?"} tabindex="1" value={this.state.taskDescription} onChange={this.changeTaskDescription} />
        </div>
        <div className="col m4">
          <div className="row">
            <div className="col m8">
            </div>
            <div className="col m4">
              <i className="medium material-icons">play_circle_filled</i>
            </div>
          </div>
        </div>
      </div>
    )
  }

  changeTaskDescription(event) {
    this.setState({taskDescription: event.target.value});
  }
}

export default Input;
