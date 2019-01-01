ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [56.107494, 54.268317],
            zoom: 7
        }, {
            searchControlProvider: 'yandex#search'
        }),
        cafe, metro;
    
    function findClosestObjects () {
        // Найдем в выборке кафе, ближайшее к найденной станции метро,
        // и откроем его балун.
        cafe.getClosestTo(metro.get(0)).balloon.open();
        
        // Будем открывать балун кафе, который ближе всего к месту клика
        myMap.events.add('click', function (event) {
            cafe.getClosestTo(event.get('coords')).balloon.open();
        });
    }
    
    // Описания кафе можно хранить в формате JSON, а потом генерировать
    // из описания геообъекты с помощью ymaps.geoQuery.
    cafe = ymaps.geoQuery({
        type: 'FeatureCollection',
        features: [{
                type: 'Feature',
                properties: {
                    balloonContent: 'Пункт приема в Нефтекамске - у нас можно сдать черный лом!'
                },
                geometry: {
                    type: 'Point',
                    coordinates: [56.107494, 54.268317]
                }
            }, {
                type: 'Feature',
                properties: {
                    balloonContent: 'Пункт приема в Уфе - у нас можно сдать черный лом!'
                },
                geometry: {
                    type: 'Point',
                    coordinates: [54.836881, 56.116327]
                }
            }, {
                type: 'Feature',
                properties: {
                    balloonContent: 'Пункт приема в Туймазы - у нас можно сдать черный лом!'
                },
                geometry: {
                    type: 'Point',
                    coordinates: [54.587824, 53.739538]
                }
            }
        ]
    // Сразу добавим точки на карту.
    }).addToMap(myMap);

    // С помощью обратного геокодирования найдем метро "Кропоткинская".
    metro = ymaps.geoQuery(ymaps.geocode([55.744828, 37.603423], {kind: 'metro'}))
    // Нужно дождаться ответа от сервера и только потом обрабатывать полученные результаты.
        .then(findClosestObjects);
}