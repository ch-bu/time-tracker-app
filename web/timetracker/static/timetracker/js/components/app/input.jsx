class Input extends React.Component {

  constructor(props) {
    super(props);

    // Bind this to methods
    this.changeTaskDescription = this.changeTaskDescription.bind(this);
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.tick = this.tick.bind(this);

    // Init state variables
    this.state = {buttonStart: true};
  }

  render() {
    // Get right icon (play vs. stop)
    var buttonText = this.state.buttonStart ? 'play_circle_filled' : 'stop';

    const task = this.props.taskDescription;
    return (
      <div className="row" id="bar-task">
        <div className="col m8 s12">
          <input autoFocus={true} type="text"
            placeholder={"Woran arbeitest du?"}
            tabindex="1"
            value={task}
            onChange={this.changeTaskDescription} />
        </div>
        <div className="col m4 s12">
          <div className="row" id="bar-info">
            <div className="col m6">
            </div>
            <div className="col m3" id="bar-clock">
              <span>{this.props.taskDuration.format('HH:mm:ss')}</span>
            </div>
            <div className="col m3">
              <i className="medium material-icons"
                ref={(button) => { this.button = button; }}
                onClick={this.onButtonClicked}>{buttonText}</i>
            </div>
          </div>
        </div>
      </div>
    );
  }

  changeTaskDescription(e) {
    this.props.onChange(e.target.value);
  }

  onButtonClicked(e) {
    // Stop button is clicked
    if (!this.state.buttonStart) {
      // this.setState({clock: moment('000000', 'HHmmss').format('HH:mm:ss')});
      clearInterval(this.timer);
    // Start button is clicked
    } else {
      // this.setState({taskStarted: moment('000000', 'HHmmss')}, function() {

      // });
      this.timer = setInterval(this.tick, 1000);
    }

    // Change button state when clicked
    this.setState({buttonStart: this.state.buttonStart ? false: true});
  }

  tick() {
    this.props.onDurationChange();
  }
}

export default Input;
