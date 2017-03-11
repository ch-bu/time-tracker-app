class DjangoCrsftoken extends React.Component {
  constructor(props) {
    super(props);
    this.state = {token: this.getCookie('csrftoken')};
  }

  render() {
    // Return csrf token from django
    // The crsf token from django is essentially an
    // input field with a specific value. When I click
    // the button, the input is processed in the backend and checked
    // http://michaeljones.github.io/blog/posts/2014/06/08/django-csrf-react-component/
    return React.DOM.input({
        type: 'hidden', name: 'csrfmiddlewaretoken', value: this.state.token
    });
  }

  // This is a convenience function that
  // reads a cookie via jquery
  // This function reads the crsf token that we need in
  // order to process it with the form tag
  // https://docs.djangoproject.com/en/1.10/ref/csrf/
  getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(
                  cookie.substring(name.length + 1)
                  );
                break;
            }
        }
    }
    return cookieValue;
  }
}

export default DjangoCrsftoken;
