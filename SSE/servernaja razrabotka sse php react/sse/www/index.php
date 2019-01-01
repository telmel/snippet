<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');



while (1) { 
	$data = array();                           //collect data from database or wherever to stream to browser  ----- example data
	$data[0] = rand(0,500);
    $data[1] = rand(0,500);
    
    echo 'data: '.json_encode($data)."\n\n";   // json encode the data for output
    flush();                                   // Flush the result to the browser всё содержимое буфера отправляется в браузер
    usleep(1250000);                                  // Задержка выполнения программы на 0,25 секунд
}

?>