class Input extends React.Component {

  constructor(props) {
    super(props);

    // Bind this to methods
    this.changeTaskDescription = this.changeTaskDescription.bind(this);
    this.changeWorkDescription = this.changeWorkDescription.bind(this);
    this.changeTypeDescription = this.changeTypeDescription.bind(this);
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
        <div className="col s4 m4 l8">
          <input autoFocus={true} type="text"
            placeholder={"Woran arbeitest du?"}
            tabindex="1"
            value={task}
            onChange={this.changeTaskDescription} />
        </div>
        <div className="col s8 m8 l4">
          <div className="row" id="bar-info">
            <div className="col s3 m2 l3">
              <input tabindex="2" placeholder={"Arbeit"}
                value={this.props.workDescription}
                onChange={this.changeWorkDescription} />
            </div>
            <div className="col s3 m2 l3">
              <input tabindex="3" placeholder={"Typ"}
                value={this.props.typeDescription}
                onChange={this.changeTypeDescription} />
            </div>
            <div className="col s3 m4 l3" id="bar-clock">
              <span>{this.props.taskDuration.format('HH:mm:ss')}</span>
            </div>
            <div className="col s3 m4 l3">
              <i className="medium material-icons"
                ref={(button) => { this.button = button; }}
                onClick={this.onButtonClicked}>{buttonText}</i>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Change description of task whenever
  // user types any changes in the input box
  changeTaskDescription(e) {
    this.props.handleTaskDescriptionChange(e.target.value);
  }

  changeWorkDescription(e) {
    this.props.handleWorkDescriptionChange(e.target.value);
  }

  changeTypeDescription(e) {
    this.props.handleTypeDescriptionChange(e.target.value);
  }

  // Change button type when user clicks
  // and handle timer
  onButtonClicked(e) {
    // Stop button is clicked
    if (!this.state.buttonStart) {
      this.props.onStopButtonClicked();
      clearInterval(this.timer);
    // Start button is clicked
    } else {
      this.props.onStartButtonClicked();
      this.timer = setInterval(this.tick, 1000);
    }

    // Change button state when clicked
    this.setState({buttonStart: this.state.buttonStart ? false: true});
  }

  // Update parent taskDuration state every second
  // after us has clicked play button
  tick() {
    this.props.onDurationChange();
  }
}

export default Input;
