class Tasks extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.tasks) {
      var tasks = this.props.tasks.map(function(task) {
          return <li>{task.goal}</li>;
      });
    } else {
      var tasks = <p>No tasks yet</p>;
    }

    return (
      <div className="container" id="tasks">
        <ul className="tasks-ul">{tasks}</ul>
      </div>
    )
  }
}

export default Tasks;
