<?php
    require("main.php");
    $pageName = "Leaderboard";
    outputHeader($pageName);
    navigationBar($pageName);
?>
<!-- LEADERBOARD AREA -->
<div class="ranking_area">
    <div class="top_section">
        <img src="images/cup.jpg" alt="cup">
    </div>
    <h2>FINAL LEADERBOARD</h2>
    <div class="mid_section">
        <h4>Rank</h4>
        <h4>Player</h4>
        <h4>Score</h4>
    </div>
   <div class="score_section" id="score_section">
   </div>

    
</div>

<script>

    var userDetails = JSON.parse(localStorage.getItem("users"));
    var points = [];
    
    for (let index = 0; index < userDetails.length; index++) {
        var user_score = userDetails[index]["topScore"];
        points.push(user_score);
    }

    points.sort(function(a, b){return b-a});

    for (let index = 0; index < points.length; index++) {
        var point = points[index];
        
        for (let a = 0; a < userDetails.length; a++) {
            var user = userDetails[a];

            if(point == user.topScore){        
                document.getElementById("score_section").innerHTML += "<div class='user_info'><p>" + (index + 1) + ".</p><p>" + user.username + "</p><p>" + point + "</p></div>";
            }  
        }
    }
    

    
    
</script>

<?php outputFooter()?>