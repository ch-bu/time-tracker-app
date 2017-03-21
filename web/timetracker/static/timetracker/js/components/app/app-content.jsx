import Tasks from './tasks.jsx';
import DailyReport from './daily-report.jsx';
import NavigationOuter from './navigation-outer.jsx';

class AppContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showTasks: true,
      showReport: false,
      showProgress: false,
    };

    // Bind this to methods
    this.showReport = this.showReport.bind(this);
    this.showTasks = this.showTasks.bind(this);
  }

  render() {

    // Show different components depending on which the user has clicked
    let tasks = this.state.showTasks ? <Tasks tasks={this.props.tasks} getTasks={this.props.getTasks} /> : '';
    let dailyReport = this.state.showReport ? <DailyReport /> : '';

    return (
      <div id="app-content">
        <NavigationOuter showReport={this.showReport}
                         showTasks={this.showTasks}
                         tasksActive={this.state.showTasks}
                         reportActive={this.state.showReport} />
        {tasks}
        {dailyReport}
      </div>
    )
  }

  /**
   * Displays the daily report of
   * tasks
   * @return None
   */
  showReport() {
    this.setState({showReport: true, showTasks: false, showProgress: false});
  }

  /**
   * Display all tasks
   */
  showTasks() {
    this.setState({showReport: false, showTasks: true, showProgress: false});
  }

}

export default AppContent;



