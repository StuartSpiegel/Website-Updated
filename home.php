
<?php
require_once 'db.php';
if(isset($_POST['submit'])) { $time = date("g:i:s A"); $date = date("n/j/Y");
$msg = $_POST['message'];
$name = $_POST['fname'];
$result = "";
if(!empty($msg) && !empty($name)) { 
$query = "INSERT INTO comments ("; $query .= " name, time, date, comment"; $query .= ") VALUES ("; $query .= " '{$name}', '{$time}', '{$date}', '{$msg}' "; $query .= ")"; $result = mysqli_query($connect, $query); } } ?>

