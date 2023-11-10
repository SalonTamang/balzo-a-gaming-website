
function displayMessage(message) {
    var messageContainer = document.getElementById("signup_message");
    if(message == "empty"){
        messageContainer.innerHTML = "Please enter all your details first!";
    }
    else if (message == "success") {
        messageContainer.innerHTML = "Yor have successfully registered!";
    }
    else{
        messageContainer.innerHTML = "User details already exists."
    }
}



function validateRegisterForm(e){
    var username = document.forms["signup"]["username"].value;
    var phoneNumber = document.forms["signup"]["phonenumber"].value;
    var address = document.forms["signup"]["address"].value;
    var email = document.forms["signup"]["email"].value;
    var password = document.forms["signup"]["password"].value;
    
    

    if(username == "" || phoneNumber == "" || address == "" || email == "" || password == ""){
        displayMessage("empty");
    }
    else {
        /*check if there is already users container
        if undefined or null assign new container and store new object of user is created
        or else push the new user info to the object*/
        let users = JSON.parse(localStorage.getItem("users")) || [];
    
        //check if user already exists using phonenumber, email and username
        let userExist = users.length && JSON.parse(localStorage.getItem("users")).some(user => user.username.toLowerCase() == username || user.email.toLowerCase() == email || user.phoneNumber == phoneNumber); 

        if(userExist){ 
            displayMessage("");
        } else {
            users.push({
                username : username,
                phoneNumber : phoneNumber,
                address : address,
                email : email,
                password : password,
                topScore : 0
                });
            
            localStorage.setItem("users", JSON.stringify(users));

            displayMessage("success");
            
            sessionStorage.setItem("loggedIn", true);
            sessionStorage.setItem("username", username);
            
            setTimeout(() => {
                window.location = "game.php";
            }, 2000);
        }
    }       
}
