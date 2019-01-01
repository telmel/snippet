Это очень простой пример использования React + SSE + PHP
Как использовать?
1 Берем Denwer. Создаем простой проект sse. Внутри создаем папку www.
Внутри кладем файл index.php и запускаем сервер.

2. Создаем новое приложение create-react-app.
Запускаем его. В папке src удаляем все файлы и кладем index.js



// The componentDidMount() method runs after the component output has been rendered to the DOM.


Когда сервер отправляет данные, метод экземпляра Eventsource 
onmessage принимает данные как string (JSON строка). Вот такого плана приходит message

message { target: EventSource, isTrusted: true, data: "[370,468]", origin: "http://colombo", 
lastEventId: "", ports: Restricted, srcElement: EventSource, 
currentTarget: EventSource, eventPhase: 2, bubbles: false, … }

Можно законсолить эти данные, там будет видно строку JSON.

Нужно распарсить данные при помощи JSON.parse
Это у нас получается массив.Можно проверить console.log(Array.isArray(d)); //true


мы вызываем метод this.setState в componentDidMount
сразу после распарсивания
Обновляем локальный стейт компонента на новые пришедшие данные.
После этого компонент самостоятельно перерендеривается.

В методе рендер обращаемся к стейту и выводим 
на экран данные как цифры



