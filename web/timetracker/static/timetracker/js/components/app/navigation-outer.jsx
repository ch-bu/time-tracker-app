class NavigationOuter extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="navigation-outer">
        <ul>
          <li>
            <i className="material-icons">alarm_on</i>
            <span>Timer</span>
          </li>
          <li>
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

}

export default NavigationOuter;
