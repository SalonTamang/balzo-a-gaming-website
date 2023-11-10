function logout() {
    sessionStorage.loggedIn = false;
    sessionStorage.username = "";
    location.href = "";
}

if(sessionStorage.loggedIn != undefined && sessionStorage.loggedIn == 'true'){
    let username = sessionStorage.getItem('username');
    document.getElementById('user').innerHTML = 'Hi ' + username + '<button onclick=\'logout()\'>(logout)</button>';
} else {
    document.getElementById('user').innerHTML = '<span>You are not logged in!</span>';
}