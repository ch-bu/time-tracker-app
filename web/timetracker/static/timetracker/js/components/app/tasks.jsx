class Tasks extends React.Component {

  constructor(props) {
    super(props);

    this.taskClicked = this.taskClicked.bind(this);
  }

  render() {
    var self = this;

    if (this.props.tasks) {
      var tasks = this.props.tasks.map(function(task) {
          return <li data-task-id={task.id} onClick={self.taskClicked}>{task.goal}</li>;
      });
    } else {
      var tasks = <li>No tasks yet</li>;
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
  }
}

export default Tasks;
