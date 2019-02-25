<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Cache-Control: no-cache');
$data = array(); //collect data fro
$data[0] = rand(0,500);
$data[1] = rand(0,500);
$data = "Here is some text";
sleep(2);
echo json_encode($data); // json encode the dat
?>