<?php
    require("main.php");
    $pageName = "Registration";
    outputHeader($pageName);
    navigationBar($pageName);
?>

<!-- REGISTRATION SECTION -->
<div class="user_registration">

    <!-- LOGIN CONTENT -->
    <div class="login_section">
        <h1>Login</h1>
        <span class="message" id="login_message"></span>
        <br>
        <br>
        <form id="login" name="login">
            <input type="text" name="username" placeholder="Username" autofill="off" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <button onclick="validateLoginForm(event)">Login</button>
        </form>
    </div>

    <!-- SIGNUP CONTENT -->
    <div class="signup_section">
        <h1>Register</h1>
        <span class="message" id="signup_message"></span>
        <br>
        <br>
        <form id="signup" name="signup">
            <input type="text" name="username" placeholder="Username" autofill="off" required><br>
            <input type="number" name="phonenumber" placeholder="Phone Number"><br>
            <input type="text" name="address" placeholder="Home Address"><br>
            <input type="email" name="email" id="email" placeholder="Email Address" required><br>
            <input type="password" name="password"  placeholder="Password" required><br>
            <button onclick="validateRegisterForm(event)">Register</button>
        </form>
    </div>

</div>

<!-- including javascript in the page -->

<script src="js/login.js"></script>
<script src="js/register.js"></script>
<?php outputFooter()?>
