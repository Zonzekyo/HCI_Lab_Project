var form = document.getElementById('form_rgstr');
function validateForm(event) {
    var email = document.getElementById["email-address"].value;
    if(email === null) return alert('fill in the email');
    else {

        var parts = email.split('@');
        var domain = parts[1];

        if (domain.indexOf('.') == -1) {

            alert('Not a valid e-mail address');

        } else {

            var domainParts = domain.split('.');
            var ext = domainParts[1];

            if (ext.length > 4 || ext.length < 2) {

                alert('Not a valid e-mail address');
            }
        }
    }
    alert('Valid???');
    event.preventDefault();
  } 

  form.addEventListener('submit', validateForm);