//checking user details from local storage

function _(message) {
    var messageContainer = document.getElementById("login_message");
    if(message == "emtpy"){
        messageContainer.innerHTML = "Please enter all your details first!";
    }else if (message == "success") {
        messageContainer.innerHTML = "Yor have successfully logged in!";
    } else {
        messageContainer.innerHTML = "Invalid username or password.";
    }
}

function validateLoginForm(e){
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;

    let userinfo = JSON.parse(localStorage.getItem("users"));
    //if user input is empty
    if(userinfo != undefined || userinfo != null){
        if(username != "" && password != ""){
            let exists = userinfo.some(user => user.username.toLowerCase() == username.toLowerCase() && user.password == password);

            if(exists){
                _("success");
                //assigning a logged in session value to true.
                sessionStorage.loggedIn = "true";
                sessionStorage.username = username;

                setTimeout(() => {
                    window.location = "game.php";
                }, 2000);
        
            }else {
                _("invalid");
            }
        }else {
            _("empty");
        }
    } else {
        _("invalid");
    }    
}


