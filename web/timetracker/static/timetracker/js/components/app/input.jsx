class Input extends React.Component {

  constructor(props) {
    super(props);

    // Bind this to methods
    this.changeTaskDescription = this.changeTaskDescription.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.tick = this.tick.bind(this);

    this.state = {buttonStart: true, taskStarted: moment()};
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
            <div className="col m8">
            </div>
            <div className="col m2">
              <span>{this.state.taskStarted.format('HH:mm:ss')}</span>
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

    if (!this.state.buttonStart) {
      // this.setState({taskStopped: moment() }, function() {
        // var difference = this.state.taskStopped - this.state.taskStarted
        // console.log(this.state.taskStarted.from(this.state.taskStopped));
      // });

      clearInterval(this.timer);
    } else {
      this.setState({taskStarted: moment() });
      this.timer = setInterval(this.tick, 1000);
    }

    // Change button when clicked
    this.setState({buttonStart: this.state.buttonStart ? false: true});
  }

  tick() {
    // http://jsfiddle.net/brettdewoody/4b8opcf1/
    var elapsed = moment.duration(moment().diff(this.state.taskStarted));
    console.log(elapsed.format('HH:mm:ss'));
  }
}

export default Input;
