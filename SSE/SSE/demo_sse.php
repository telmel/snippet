<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

// infinite loop
while (1) { 
    $time = date("H:i:s d.m.Y");               // output the time and date on the server
    echo "data: Server time: {$time}\n\n";     // 2 new line characters
    ob_end_flush();                            // отправляет содержимое буфера вывода и выключает буферизацию вывода
    flush();                                   // очищает системный буфер вывода PHP, при этом всё содержимое буфера отправляется в браузер пользователя
    sleep(5);                                  // Задержка выполнения программы на 5 секунд
}
?>