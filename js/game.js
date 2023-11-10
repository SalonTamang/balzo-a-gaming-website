

    
if(sessionStorage.loggedIn === false){
    alert("You have not logged in to play the game");
    window.location = "register.php";
}
var ball = document.getElementById("myGame");
var ctx = ball.getContext("2d");
var speed = 3;
var x = 250;
var y = 50;
var r = 25;


var bx = 50;
var rx = 150;
var yx = 250;
var gx = 350;

var score = 0;

var colors = ["red", "blue", "green", "yellow"];
var color = colors[Math.floor(Math.random() * colors.length)];

var scoreboard = document.getElementById("score");
var start_button = document.getElementById("start_button");


// function to move the ball vertically downward
function moveDownward(){
    ctx.clearRect(0,0,ball.width, ball.height);

    y += speed;

    //if ball touches the button of the game board
    if(y > ball.height - r) {
        y = 50;
        x = Math.floor(Math.random() * 450) + 25;
        color = colors[Math.floor(Math.random() * colors.length)];
        if(score == 0){
            start_button.style.display = "inline-block";
            clearInterval(gameInterval);
        }
    }

    //if ball touches the bucket
    if (y > 400 && y < 402){
        var a = x - r;
        var b = x + r; 
        //check the color and whether the ball is inside the bucket or not
        if((a > rx && b < rx + 70 && color == "red") || (a > bx && b < bx + 70 && color == "blue") || (a > yx && b < yx + 70 && color == "yellow") || (a > gx && b < gx + 70 && color == "green")){
            score += 1;
        } else {
            
            // check if the current score if higher than the one stored in local storage
            // if not store the best score of the user
            var userDetails = JSON.parse(localStorage.getItem("users"));
            var username = sessionStorage.username;

            
            for (let index = 0; index < userDetails.length; index++) {
                var name = userDetails[index]["username"];

                if(name === username){
                    if(score > userDetails[index]["topScore"]) {
                        userDetails[index]["topScore"] = score;
                        localStorage.setItem("users", JSON.stringify(userDetails));  
                    }
                } 
            }   

            //reset the score to zero
            score = 0;
        }
    }

    scoreboard.innerHTML = "<b>" + score + "</b>";

    //create a ball
    ctx.beginPath();
    ctx.arc(x,y,r,0*Math.PI, 2*Math.PI,true);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();

    //creating colored buckets
    ctx.beginPath();
    ctx.rect(bx, 400, 70, 70);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(rx, 400, 70, 70);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(yx, 400, 70, 70);
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(gx, 400, 70, 70);
    ctx.fillStyle = "green";
    ctx.fill();


}

//if score is more than 10, increase the speed of the ball
if(score >= 5){
    speed = 3.5;
} else if(score >=10) {
    speed = 4;
} else if(score >= 15){
    speed = 4.7;
}
var gameInterval = setInterval(moveDownward, 25);

window.addEventListener("keydown", this.checkKey,false);

function checkKey(e){
    var code = e.keyCode;
    switch (code) {
        case 37:
            //left button
            //on pressing left button, changing the position of each bucket to the left side by 20px
            bx = bx - 20;
            rx = rx - 20;
            yx = yx - 20;
            gx = gx - 20;
            break;
        case 39:
            //right button
            //on pressing right button, changing the position of each bucket to the right side by 20px
            bx += 20;
            rx += 20;
            yx += 20;
            gx += 20;
            break;
    } 
}

function reload(){
    start_button.style.display = "none";
    //resetting the position of ball and bucket
    x = posx = 250;
    y = 50;
    r = 25;

    bx = 50;
    rx = 150;
    yx = 250;
    gx = 350;

    //starting the game again
    gameInterval = setInterval(moveDownward, 25);

    
}
