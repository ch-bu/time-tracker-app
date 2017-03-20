import Tasks from './tasks.jsx';
import NavigationOuter from './navigation-outer.jsx';

class AppContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app-content">
        <NavigationOuter />
        <Tasks tasks={this.props.tasks} getTasks={this.props.getTasks} />
      </div>
    )
  }

}

export default AppContent;



