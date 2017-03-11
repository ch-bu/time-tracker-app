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


export {deleteTask};
