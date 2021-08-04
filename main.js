// // Палиндром в одну строку

const palindrom = (word) => word === word.split('').reverse().join('');
  
console.log(palindrom('atata'));

// // Поиск объектов размещения

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function filterPrices(array, value) {
  let finishData = [];
  value = new RegExp(value,'igm');
  array.forEach(function (obj) {
    (value.test(Object.values(obj).join())) && (finishData.push(Object.values(obj).join(', ')))
  });
  return finishData;
}
  
console.log(filterPrices(data, 'Germany'));

// // Сопоставление стран с городами из массива
const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];

function countryCity(array) {
  let country = [];
  let finalCountryCity = new Object();
  array.forEach(function(obj) {
    country.includes(obj.country) || country.push(obj.country)
  });
  country.forEach(function(count) {
    let cityes = [];
    array.forEach(function(obj) {
      count === obj.country && cityes.push(obj.city);
    })
    count = count.replace(/\s/g, '');
    finalCountryCity[count] = cityes;
  })
  
  return finalCountryCity;
}

console.log(countryCity(hotels));

Календарь


function getCalendarMonth(daysInMonth,daysInWeek,dayOfWeek ) {
  let month = [];
  let count = 0;
  let day = 1;
  let dayAfterMonth = 1;
  // Заполняем первый массив в массиве
  (() =>{
    let week = [];
    for (let i = 0; i < dayOfWeek; i++){
      week[i] = daysInMonth + 1 - (daysInWeek-(daysInWeek - dayOfWeek + i));
      count++;
    }
    while (count < daysInWeek){
      week[count] = (count + 1) - dayOfWeek;
      day = (count + 1) - dayOfWeek;
      count++;
    }
    month.push(week);
  })();
  // Заполняем массивы с неделями
  while (day < daysInMonth) {
    (() => {
      let week = [];
      for (let i=0; i < daysInWeek; i++){
        day++;
        if (day <= daysInMonth ){
          week[i] = day;
        } else {
          break;
        }
      }
      month.push(week);
    })();
  }
  // Заполняем в последней неделе следующий месяц
  while (month[month.length - 1].length < daysInWeek){
    month[month.length-1].push(dayAfterMonth);
    dayAfterMonth++;
  }

  console.log(month);
}

getCalendarMonth(30, 7, 6);

