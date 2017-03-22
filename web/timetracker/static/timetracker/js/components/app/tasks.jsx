import {ajax, getCookie, csrfSafeMethod} from '../../helper/helper.js';
import {deleteTask} from '../../helper/api-requests.js';

class Tasks extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      sortedTasks: []
    };

    // Bind this to methods
    this.taskClicked = this.taskClicked.bind(this);
    this.sortTasks = this.sortTasks.bind(this);
  }

  render() {
    var self = this;
    var tasks;

    if (this.props.tasks) {

      let sortedTasks = this.sortTasks();

      let todaysTasks = sortedTasks.filter((e) => {
        let taskDate = new Date(e.started)
        let today = new Date();

        return taskDate.toDateString() == today.toDateString();
      });

      console.log(todaysTasks);
      // console.log(sortedTasks);

      tasks = sortedTasks.map(function(task) {

          var duration = moment().startOf('day')
            .seconds(task.duration)
            .format('HH:mm:ss');

          return (
            <li>
              <div className="tasks-description">{task.goal}</div>
              <div className="tasks-category"><div className="chip">{task.task_category}</div></div>
              <div className="tasks-type"><div className="chip">{task.task_type}</div></div>
              <div className="tasks-duration">{duration}</div>
              <div className="tasks-delete"><i className="material-icons" data-task-id={task.id} onClick={self.taskClicked}>clear</i></div>
            </li>
          )
      });
    } else {
      tasks = <li>No tasks yet</li>;
    }

    return (
      <div id="tasks">
        <ul className="tasks-ul">{tasks}</ul>
      </div>
    )
  }

  sortTasks() {

    // console.log(this.props.tasks);
    let sorted = this.props.tasks.sort((a, b) => {
      return new Date(b.started) - new Date(a.started);
    });

    return sorted;

  }


  taskClicked(e) {
    var taskId = e.target.getAttribute('data-task-id');
    deleteTask(taskId, this.props.getTasks);
  }
}

export default Tasks;
