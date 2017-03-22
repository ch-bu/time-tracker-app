class Input extends React.Component {

  constructor(props) {
    super(props);

    // Bind this to methods
    this.changeTaskDescription = this.changeTaskDescription.bind(this);
    this.changeWorkDescription = this.changeWorkDescription.bind(this);
    this.changeTypeDescription = this.changeTypeDescription.bind(this);
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.onBlurWork = this.onBlurWork.bind(this);
    this.onBlurType = this.onBlurType.bind(this);
    this.tick = this.tick.bind(this);
    this.onWorkChipClick = this.onWorkChipClick.bind(this);
    this.onTypeChipClicked = this.onTypeChipClicked.bind(this);

    // Init state variables
    this.state = {buttonStart: true};
  }

  /**
   * Set work and type fields
   * to input element when components
   * renders first
   */
  componentWillMount() {
    this.setState({workFocused: true,
                   typeFocused: true});
  }

  /**
   * Render component
   */
  render() {
    // Get right icon (play vs. stop)
    var buttonText = this.state.buttonStart ? 'play_circle_filled' : 'stop';
    const task = this.props.taskDescription;

    // Check if work should be a chip
    var work;
    var type;
    if (this.state.workFocused == true) {
      work =  <input tabindex="2" placeholder={"Arbeit"}
                value={this.props.categoryDescription}
                ref="work"
                onChange={this.changeWorkDescription}
                onBlur={this.onBlurWork}/>;
    } else {
        work = <div className="chip"
          onClick={this.onWorkChipClick}>
          {this.props.categoryDescription}</div>;
    }

    if (this.state.typeFocused == true) {
        type = <input tabindex="3" placeholder={"Typ"}
          value={this.props.typeDescription}
          ref="type"
          onChange={this.changeTypeDescription}
          onBlur={this.onBlurType} />;
    } else {
      type = <div className="chip"
        onClick={this.onTypeChipClicked}>
        {this.props.typeDescription}</div>;
    }

    return (
      <div className="row" id="bar-task">
        <div className="col s4 m4 l7">
          <input autoFocus={true} type="text"
            placeholder={"Woran arbeitest du?"}
            tabindex="1"
            ref="taskInput"
            value={task}
            onChange={this.changeTaskDescription} />
        </div>
        <div className="col s8 m8 l5">
          <div className="row" id="bar-info">
            <div className="col s3 m2 l3 bar-info-chip">
              {work}
            </div>
            <div className="col s3 m2 l3 bar-info-chip">
              {type}
            </div>
            <div className="col s3 m4 l3" id="bar-clock">
              <span>{this.props.taskDuration.format('HH:mm:ss')}</span>
            </div>
            <div className="col s3 m4 l2">
              <i className="medium material-icons"
                ref={(button) => { this.button = button; }}
                onClick={this.onButtonClicked}>{buttonText}</i>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /**
   * When user clicks the
   * work chip, render the input
   * element instead
   */
  onWorkChipClick() {
    this.setState({workFocused: true}, () => {
      this.refs.work.focus();
    });
  }

  /**
   * When user clicks the
   * type chip, render the input
   * element instead
   */
  onTypeChipClicked() {
    this.setState({typeFocused: true}, () => {
      this.refs.type.focus();
    });
  }

  /**
   * When focus of input element
   * of work disappears render chip
   * element
   */
  onBlurWork() {
    this.setState({workFocused: false});
  }

  /**
   * When focus on input element of
   * type disappears render chip
   * element
   */
  onBlurType() {
    this.setState({typeFocused: false});
  }

  /**
   * Change description of task whenever
   * user types any changes in the input box
   */
  changeTaskDescription(e) {
    this.props.handleTaskDescriptionChange(e.target.value);
  }

  /**
   * Change work when user types any
   * changes
   */
  changeWorkDescription(e) {
    this.props.handleWorkDescriptionChange(e.target.value);
  }

  /**
   * Change type description when users
   * types any changes
   */
  changeTypeDescription(e) {
    this.props.handleTypeDescriptionChange(e.target.value);
  }

  /**
   * Change button type when user clicks
   * and handle timer
   */
  onButtonClicked(e) {
    // Stop button is clicked
    if (!this.state.buttonStart) {
      this.props.onStopButtonClicked();

      // Stop timer
      clearInterval(this.timer);

      // Set back type and work of task
      this.setState({typeFocused: true, workFocused: true});

      // Focus input of task
      this.refs.taskInput.focus()
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
