<?php
    require("main.php");
    $pageName = "About";
    outputHeader($pageName);
    navigationBar($pageName);
?>
<!-- MAIN DIV CONTAINER  -->
<div class="mainContainer">
    <!-- ABOUT CONTENT -->
    <div class="about">
        <h1>About the game</h1>
        <p>Balzo is simple colored ball game where you put the colored ball falling from <br>
        random directions in same colored box underneath it.</p>
    </div>


    <!-- HOW TO PLAY -->
    <div class="about">
        <h1 id="how_to_play">How to play</h1>
        <p>1. Use the left <- and right -> button to move the colored boxes <br>
           2. Put the ball in the same colored box to score a point.</p>
    </div>
</div>


<?php outputFooter()?>