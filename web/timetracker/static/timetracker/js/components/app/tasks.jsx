import {ajax, getCookie, csrfSafeMethod} from '../../helper/helper.js';
import {deleteTask} from '../../helper/api-requests.js';

class Tasks extends React.Component {

  constructor(props) {
    super(props);

    this.taskClicked = this.taskClicked.bind(this);
  }

  render() {
    var self = this;
    var tasks;

    if (this.props.tasks) {
      tasks = this.props.tasks.map(function(task) {

          var duration = moment().startOf('day')
            .seconds(task.duration)
            .format('HH:mm:ss');

          return <li>
            <div className="tasks-description">{task.goal}</div>
            <div className="tasks-category"><div className="chip">{task.task_category}</div></div>
            <div className="tasks-type"><div className="chip">{task.task_type}</div></div>
            <div className="tasks-duration">{duration}</div>
            <div className="tasks-delete"><i className="material-icons" data-task-id={task.id} onClick={self.taskClicked}>clear</i></div>
          </li>;
      });
    } else {
      tasks = <li>No tasks yet</li>;
    }

    return (
      <div className="container" id="tasks">
        <ul className="tasks-ul">{tasks}</ul>
      </div>
    )
  }

  taskClicked(e) {
    var taskId = e.target.getAttribute('data-task-id');
    deleteTask(taskId, this.props.getTasks);
  }
}

export default Tasks;
