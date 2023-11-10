var userDetails = JSON.parse(localStorage.getItem("users"));

for (let index = 0; index < userDetails.length; index++) {
    var user_score = userDetails[index]["topScore"];
    
    var array = [];
    array.push(user_score);

}
