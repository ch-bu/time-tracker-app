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
          return <li data-task-id={task.id} onClick={self.taskClicked}>{task.goal}</li>;
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
