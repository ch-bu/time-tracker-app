class NavigationOuter extends React.Component {

  constructor(props) {
    super(props);

    // Bind this to methods
    this.showReport = this.showReport.bind(this);
    this.showTasks = this.showTasks.bind(this);
  }

  render() {

    let tasksActive = this.props.tasksActive ? 'active' : '';
    let reportActive = this.props.reportActive ? 'active': '';

    return (
      <div id="navigation-outer">
        <ul>
          <li onClick={this.showTasks} className={tasksActive}>
            <i className="material-icons">alarm_on</i>
            <span className="hide-on-med-and-down">Timer</span>
          </li>
          <li onClick={this.showReport} className={reportActive}>
            <i className="material-icons">dashboard</i>
            <span className="hide-on-med-and-down">Daily Report</span>
          </li>
          {/*<li>
            <i className="material-icons">equalizer</i>
            <span>Progress</span>
          </li>*/}
        </ul>
      </div>
    )
  }

  showReport() {
    this.props.showReport();
  }

  showTasks() {
    this.props.showTasks();
  }

}

export default NavigationOuter;
