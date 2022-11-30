// получаем список чая из таблицы Teas с помощью феча
const getTeas = async () => {
    try {
        const response = await fetch(`/teas/all`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            }
        });
        const {teaList} = await response.json();
         teas = teaList
    } catch (error) {
        console.error('Ошибка редактирования', error.message);
    }
}
const init = () =>{
    // console.log(teas)
    // создаем карту, задаем центральную точку и увеличение.
    let map = new ymaps.Map('map', {
        center:[47.200990795750656,39.60658957937272],
        zoom: 2,
    })
    // console.log(teas)
// проходимся по списку чая и записываем значения в метки.
    teas.forEach((el)=>{
        const firstCoord = + el.coordinates.slice(0,el.coordinates.indexOf(','))
        const secondCoord = + el.coordinates.slice(el.coordinates.indexOf(',')+2,-1)
            let placemark = new ymaps.Placemark([firstCoord,secondCoord ], {
                balloonContentHeader: `<a href = "/teas/${el.id}">${el.name}</a><br>` +
                    '<br/>',
                // Зададим содержимое основной части балуна.
                balloonContentBody: `<img src="${el.picture_url}" height="150" width="200"> <br/> ` +
                    `<b>Место культивации</b> <br/> ${el.placeOfBirth}`,
                // Зададим содержимое всплывающей подсказки.
                hintContent: `${el.name}`
            }, {
                 iconLayout: 'default#image',
                 iconImageHref: '/css/metka.png',
                 iconImageSize: [50,60],
                 iconImageOffset: [-28, -56]
            })
            // добавляем метки на карту.
            return map.geoObjects.add(placemark)
        
    })

    map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил 
}
// запускаем функции(ждем пока не получим решенный промис из базы)
// getTeas().then(() => {
//     ymaps.ready(init);
   
// });
getTeas().then();
ymaps.ready(init)
