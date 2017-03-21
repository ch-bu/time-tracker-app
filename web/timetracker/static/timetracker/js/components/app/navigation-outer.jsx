class NavigationOuter extends React.Component {

  constructor(props) {
    super(props);

    // Bind this to methods
    this.showReport = this.showReport.bind(this);
    this.showTasks = this.showTasks.bind(this);
  }

  render() {
    return (
      <div id="navigation-outer">
        <ul>
          <li onClick={this.showTasks}>
            <i className="material-icons">alarm_on</i>
            <span>Timer</span>
          </li>
          <li onClick={this.showReport}>
            <i className="material-icons">dashboard</i>
            <span>Daily Report</span>
          </li>
          <li>
            <i className="material-icons">equalizer</i>
            <span>Progress</span>
          </li>
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
