class Input extends React.Component {

  constructor(props) {
    super(props);

    // Bind this to methods
    this.changeTaskDescription = this.changeTaskDescription.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.tick = this.tick.bind(this);

    // Init state variables
    this.state = {buttonStart: true,
      clock: moment('000000', 'HHmmss').format('HH:mm:ss')};
  }

  changeTaskDescription(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    // Get right icon (play vs. stop)
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
            <div className="col m8">
            </div>
            <div className="col m2">
              <span>{this.state.clock}</span>
            </div>
            <div className="col m2">
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
    // Start button is clicked
    if (!this.state.buttonStart) {
      this.setState({clock: moment('000000', 'HHmmss').format('HH:mm:ss')});
      clearInterval(this.timer);
    // Stop button is clicked
    } else {
      this.setState({taskStarted: moment('000000', 'HHmmss')}, function() {
        this.timer = setInterval(this.tick, 1000);
      });
    }

    // Change button state when clicked
    this.setState({buttonStart: this.state.buttonStart ? false: true});
  }

  tick() {
    this.setState({clock: this.state.taskStarted.add(1, 's').format('HH:mm:ss')});
  }
}

export default Input;
