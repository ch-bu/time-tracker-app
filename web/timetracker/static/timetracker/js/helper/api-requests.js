import {ajax, getCookie, csrfSafeMethod} from './helper.js';

function deleteTask(taskId, getTasks) {

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
      getTasks();
      return result;
    },
    error(xhr, status, error) {
      return null;
    }
  });
}


function getAPITasks(self) {
    // Get csrftoken cookie
    var csrftoken = getCookie('csrftoken');

    // Set X-CsRFtoken header before each
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
          if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
              xhr.setRequestHeader("X-CSRFToken", csrftoken);
          }
        }
    });

    // Send request
    $.ajax({
      url: '/api/tasks/',
      type: 'GET',
      success: function(result) {
        console.log(result);
        self.setState({tasks: result});
      },
      error: function(xhr, status, error) {
        Materialize.toast('Your tasks could not be fetched.', 4000);
      }
    });
}

function postTask(self, dataToSend) {
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
      url: '/api/tasks/',
      type: 'POST',
      data: dataToSend,
      success: function(result) {
        self.setState({tasks: self.getTasks()});
      },
      error(xhr, status, error) {
        Materialize.toast('Your login failed.', 4000);
      }
    });
}


export {deleteTask, getAPITasks, postTask};
