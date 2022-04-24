<?php
$server = "localhost:3300";
$username = "root";
$password = "";
$dbName = "assignment1";

$connection = mysqli_connect($server, $username, $password, $dbName);
if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
} else { ?>
    <script>console.log ("MySQL successfully connected");</script>
<?php } ?>
<br>