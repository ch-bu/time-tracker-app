import {ajax, getCookie, csrfSafeMethod} from '../helper.js';

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
    console.log(taskId);

    // Get csrftoken cookie
    var csrftoken = getCookie('csrftoken');

    // Set X-CsRFtoken header before each
    // ajax request
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
          if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
              xhr.setRequestHeader("X-CSRFToken", csrftoken);
          }
        }
    });

    // Send request
    $.ajax({
      url: '/api/task/' + taskId,
      type: 'DELETE',
      success: function(result) {
        console.log('deleted');
      },
      error(xhr, status, error) {
        Materialize.toast('Could not delete item.', 4000)
      }
    });
  }
}

export default Tasks;
