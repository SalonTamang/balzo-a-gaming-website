<?php
    require("main.php");
    $pageName = "Game";
    outputHeader($pageName);
    navigationBar($pageName);
?>
<!-- GAME AREA -->
<div class="main_area">
    <div class="game_area">
        <canvas id="myGame" width="500" height="470"></canvas>
        <div id="start_again">
            <button id="start_button" onclick="reload()">
                Start again
            </button>
        </div>
    </div>
    
    <div id="scoreboard">
        <span>Your score:</span> <br>
        <b><span id="score">0</span></b>
    </div>
</div>

<script src="js/game.js"></script>
<?php outputFooter()?>