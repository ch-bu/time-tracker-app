class Tasks extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var num = Math.floor(Math.random() * 6) + 1;
    // console.log(this.props.tasks);

    if (this.props.tasks) {
      var tasks = this.props.tasks.map(function() {
          return <p className="container">Testtestets</p>;
      });
    } else {
      var tasks = <p>No tasks yet</p>;
    }

    return (
      <div>
        {tasks}
      </div>
    )
  }
}

export default Tasks;
