ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
    center: [59.93, 30.34],
    zoom: 11,
    controls: ['zoomControl'],
    behaviors: ['drag']
    });

    let placemark = new ymaps.Placemark([59.90, 30.28], {
    hintContent: '<div class="map__marker">ул.Балтийская улица, 40</div>'
    },
    {
        iconLayout: 'default#image',
        iconImageHref: './img/map-marker.png',
        iconImafeSize: [46, 57],
        icoImageOffset: [-23, -57]
    })

    let placemark1 = new ymaps.Placemark([59.96, 30.29], {
        hintContent: '<div class="map__marker">Левшовский просп, 10Н</div>'
        },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/map-marker.png',
            iconImafeSize: [46, 57],
            icoImageOffset: [-23, -57]
        })

    let placemark2 = new ymaps.Placemark([59.98, 30.37], {
        hintContent: '<div class="map__marker">просп. Маршала Блюмера, 7к</div>'
        },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/map-marker.png',
            iconImafeSize: [46, 57],
            icoImageOffset: [-23, -57]
        })

    let placemark3 = new ymaps.Placemark([59.92, 30.41], {
        hintContent: '<div class="map__marker">Заневский просп, 31</div>'
        },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/map-marker.png',
            iconImafeSize: [46, 57],
            icoImageOffset: [-23, -57]
        })

    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
}