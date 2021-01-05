function validateForm(event) {
    event.preventDefault();
    var email = document.getElementById["email-address"].value;
    var password = document.getElementById["password"].value;
    var address = document.getElementById["Address"].value;
    var DOB= document.getElementById["DOB"].value;
    var gender_checker = document.getElementById["gender"];
    var gender = null;
    var checkbox = document.getElementById["checkbox"].checked;
    for (let i = 0; i < gender_checker.length; i++) {
        if(element = gender_checker[i].checked){
            gender = gender_checker[i].value;
            break;
        }
    }
    if(gender == null){
        alert("please choose your gender");
    }
    if(DOB==null){
        alert("please fill the DOB");
    }
    if(password == null || email == null){
        alert("fill in the email or password");
    }
    if(checkbox == false){
        alert("read and agree to our TOC first");
    }
    else {

        var parts = email.split('@');
        var domain = parts[1];

        if (domain[0] == '.') {
            alert('Not a valid e-mail address');
        }
        else{

            var domainParts = domain.split('.');
            var ext = domainParts[1];

            if (ext.length > 4 || ext.length < 2) {
                alert('Not a valid e-mail address');
            }
        }
    }
}