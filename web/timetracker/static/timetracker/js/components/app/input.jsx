class Input extends React.Component {

  constructor(props) {
    super(props);

    // Bind this to methods
    this.changeTaskDescription = this.changeTaskDescription.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);

    this.state = {buttonStart: 'true' };
  }

  changeTaskDescription(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    var buttonText = this.state.buttonStart ? 'play_circle_filled' : 'stop';

    const task = this.props.taskDescription;
    return (
      <div className="row" id="app-task">
        <div className="col m8">
          <input autoFocus={true} type="text"
            placeholder={"Woran arbeitest du?"}
            tabindex="1"
            value={task}
            onChange={this.changeTaskDescription} />
        </div>
        <div className="col m4">
          <div className="row">
            <div className="col m9">
            </div>
            <div className="col m3">
              <i className="medium material-icons"
                ref={(button) => { this.button = button; }}
                onClick={this.buttonClicked}>{buttonText}</i>
            </div>
          </div>
        </div>
      </div>
    );
  }

  buttonClicked() {
    // Change button when clicked
    this.setState({buttonStart: this.state.buttonStart ? false: true });
  }
}

export default Input;
