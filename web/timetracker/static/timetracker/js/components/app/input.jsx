class Input extends React.Component {

  constructor(props) {
    super(props);

    // Bind this to methods
    this.changeTaskDescription = this.changeTaskDescription.bind(this);
  }

  changeTaskDescription(e) {
    this.props.onChange(e.target.value);
  }

  render() {
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
            <div className="col m4">
              <i className="medium material-icons">play_circle_filled</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
