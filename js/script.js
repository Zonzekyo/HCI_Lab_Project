var form = document.getElementById('form_rgstr');
function validateForm() {
    var email = document.getElementById["email-address"].value;
    var atSymbol = emailToTest.indexOf("@");
    if(atSymbol < 1) return false;
    } else {

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
  } 

  form.addEventListener('submit', validateForm);