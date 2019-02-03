<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
while (1) {
$data = array(); //collect data fro
$data[0] = rand(0,500);
$data[1] = rand(0,500);
$data[2] = rand(0,500);
$data[3] = rand(0,500);
$data[4] = rand(0,500);
$data[5] = rand(0,500);
$data[6] = rand(0,500);
$data[7] = rand(0,500);
$data[8] = rand(0,500);
$data[9] = rand(0,500);
$data[10] = rand(0,500);
$data[11] = rand(0,500);
$data[12] = rand(0,500);
$data[13] = rand(0,500);
$data[14] = rand(0,500);
$data[15] = rand(0,500);
$data[16] = rand(0,500);
$data[17] = rand(0,500);
$data[18] = rand(0,500);
$data[19] = rand(0,500);
echo 'data: '.json_encode($data)."\n\n"; // json encode the dat
flush(); // Flush the result to
usleep(2000000); // Задержка вып
}
?>