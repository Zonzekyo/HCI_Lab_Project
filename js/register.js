function validateForm(event) {
    var gender_checker = document.getElementsByName("gender");
    var gender = null;
    var checkbox = document.getElementById("agree").checked;

    for (let i = 0; i < gender_checker.length; i++) {
        if(gender_checker[i].checked){
            gender = gender_checker[i].value;
            break;
        }
    }
    if(gender == null){
        event.preventDefault();
        return(alert("please choose your gender"));
    }

    if(document.getElementById("DOB").value==""){
        event.preventDefault();
        return(alert("please fill the DOB"));
    }
    var DOB= document.getElementById("DOB").value;

    if(document.getElementById("password").value == null || document.getElementById("email-address").value == null){
        event.preventDefault();
        return(alert("fill in the email or password"));
    }
    var email = document.getElementById("email-address").value;
    var password = document.getElementById("password").value;

    if(document.getElementById("Address").value==null){
        event.preventDefault();
        return(alert("please fill the Address"));
    }
    var address = document.getElementById("Address").value;

    if(checkbox == false){
        event.preventDefault();
        return(alert("read and agree to our TOC first"));
    }

    if (email.indexOf('@') == -1) {
        event.preventDefault();
        return(alert('Not a valid e-mail address'));
    }

    var parts = email.split('@');
    var domain = parts[1];

    if (domain.indexOf('.') == -1) {
        event.preventDefault();
        return(alert('Not a valid e-mail address'));
    }
    else{
        var domainParts = domain.split('.');
        var ext = domainParts[1];

        if (ext.length > 4 || ext.length < 2) {
            event.preventDefault();
            return(alert('Not a valid e-mail address'));
        }
    }
}