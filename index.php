<?php
ob_start();
session_start();
require_once ('db.php');
require_once ('home.php');
$_SESSION['POSTED'] = false;
if(isset($_POST['submit']))
{
    $time = date("g:i:s A");
    $date = date("n/j/Y");
    $msg = $_POST['message'];
    $name = $_POST['fname'];
    $result = "";
    if(!empty($msg) && !empty($name))
    {
        // create sql query for --> name, time, date, and message
        $query = "INSERT INTO comments (";
        $query .= "name, time, date, message";
        $query .= ") VALUES (";
        $query .= "'{$name}' '{$time}' '{$date}' '{$msg}'";
        $query .= ")";
        $result = mysqli_query($connect, $query);
    }
}
?>
<!-- Stuart Spiegel : 10/25/19 -->
<!DOCTYPE HTML>
<html>
<head>
    <title>Messages</title>
    <style type="text/css">
    textarea
    {
        border-radius: 2%;
    }
    #thread
    {
    border: 1px #d3d3d3 solid;
    height: 350px;
    width: 350px;
    overflow: scroll;
    }
    </style>
</head>
<!-- End header -->
<body>
<!-- Begin div containing message threads -->
<div id="thread">
    <?php
        $select = "SELECT * FROM comments";
        $q = mysqli_query($connect, $select);
        while($row = mysqli_fetch_array($q, MYSQLI_ASSOC))
        {
        echo $row ['name']. ": ". $row['comment']."<br>";
        }
    ?>
<form method="POST" action="index.php">
<label for="fname">Name:</label>
<input type="text" name="fname" id="fname"><br>
    <textarea name="message" id="message" rows="4" cols="35" ></textarea><br>
    <button type="submit" name="submit">Submit</button>
</form>
</body>
</html>
