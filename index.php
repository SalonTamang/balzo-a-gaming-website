<?php
    require("main.php");
    $pageName = "Home";
    outputHeader($pageName);
    navigationBar($pageName);
?>
<!-- HOME CONTENT -->
<div class="homeContainer">
    <h1>Welcome</h1>
    <a href="register.php">
        <button>
        Start Game
        </button>
    </a>
    <br><br>
    <a href="about.php">
        <button>
        How to play
        </button>
    </a>
</div>



<?php outputFooter()?>