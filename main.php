<?php 

// function that outputs every page header section with their title
function outputHeader($pageName) {
    echo  
    "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <title> $pageName | Balzo</title>

        <!-- LINK TO CSS FILES -->
        <link rel='stylesheet' type='text/css' href='css/main.css'>
        <link rel='stylesheet' type='text/css' href='css/$pageName.css'>

        <!-- LINK TO EXTERNAL GOOGLE FONT -->
        <link href='https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap' rel='stylesheet'>
        
        
    </head>
    <body>";
}

//function that outputs the navigation bar
function navigationBar($pageName){
    echo 
    "<!-- NAVIGATION BAR -->
    <nav>
        <!-- LOGO -->
        <div class='logo'>
            <span id='logo'>BALZO</span>

            <!-- LITTLE JAVASCRIPT -->
            <script>
                var login_button = document.querySelector('#logo');
                login_button.addEventListener('click', function(){
                    location.href = '';
                })
            </script>

        </div>
        <div class='nav_links'>";
        $links = array("Home", "Game", "Leaderboard", "Registration", "About");
        $link_files = array("index.php", "game.php", "ranking.php", "register.php", "about.php");

        for($x = 0; $x < count($links); $x++)
        {
            echo "<a href='$link_files[$x]' ";
            if($links[$x] == $pageName) {
                echo "class='selected' ";
            }
            echo ">$links[$x]</a>";
        }

    echo 
    "</div>
    <div id='user'>
        <!-- checking if user if already logged in -->
        <script src='js/main.js'></script>  
    </div>
    </nav>";

}

// function that outputs footer section 
function outputFooter(){
    echo 
    "
            <!-- FOOTER SECTION -->
            <div class='footer'>
                <!-- SOCIAL MEDIA LINKS -->
                <div class='info'>
                    <b> Find more about us: </b>
                    <br>
                    <br>
                    <div class='footer_links'>
                        <a href='#'><img src='images/social_media/facebook.svg' alt='facebook' height='20px' width='20px'></a>
                        <a href='#'><img src='images/social_media/twitter.svg' alt='twitter' height='20px' width='20px'></a>
                        <a href='#'><img src='images/social_media/instagram.svg' alt='instagram' height='20px' width='20px'></a>
                    </div>
                </div>
                <div class='developer'>
                    <p>&copy Balzo<br>
                    Powered By Salon Engine</p>
                </div>
            </div>
        </body>
    </html>
    ";
}

//fucntion to check if user is login or not
function isLogin(){
    //get username from browser session
    $is_logged_in = $_SESSION["logged_in"];

    //check if username in session is empty
    if (empty($is_logged_in) || $is_logged_in == false){
        //if user is not logged in then, move register.php 
        header("location: register.php");
        exit;
    }
}
?>
    
