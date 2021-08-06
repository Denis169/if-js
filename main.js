// Palindrom in one line

const palindrom = (word) => word === word.split('').reverse().join('');
  
console.log(palindrom('atata'));

// Search of object placement

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
  value = new RegExp(value,'igm');
  return array.reduce((acc, obj) => value.test(Object.values(obj)) ? acc + `${Object.values(obj).join(', ')}\n` : acc, []);
}
  
console.log(filterPrices(data, 'Germany'));

// Mapping Countries to Array Cities
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
  array.forEach((obj) => country.includes(obj.country) || country.push(obj.country));
  country.forEach(function(count) {
    let cityes = [];
    array.forEach((obj) => count === obj.country && cityes.push(obj.city));
    count = count.replace(/\s/g, '');
    finalCountryCity[count] = cityes;
  })
  return finalCountryCity;
}

console.log(countryCity(hotels));

//Calendar


function getCalendarMonth ( daysInMonth, daysInWeek, dayOfWeek ) {
  let day = 1;
  let amountWeekInMonth = (daysInMonth + (dayOfWeek - 1)) % daysInWeek === 0 ? (daysInMonth + (dayOfWeek - 1)) / daysInWeek : ((daysInWeek - (daysInMonth + (dayOfWeek - 1)) % daysInWeek) + daysInMonth + (dayOfWeek - 1))/daysInWeek; 
  let month = [];
  let weekOfCalendar = [];

  for ( let week = 0; week < amountWeekInMonth; week++ ) {
    for ( let weekDay = 0; weekDay < daysInWeek; weekDay++ ) {
      if (day <= (dayOfWeek - 1)) {
        weekOfCalendar.push(daysInMonth - (dayOfWeek-1) + day);
        day++;
      } else if (day <= (daysInMonth + (dayOfWeek-1))) {
        weekOfCalendar.push(day - (dayOfWeek - 1));
        day++;
      } else {
        weekOfCalendar.push(day - (dayOfWeek - 1) - daysInMonth);
        day++;
      }
    }
    month.push(weekOfCalendar);
    weekOfCalendar = [];
  }

  console.log(month);
}

getCalendarMonth(30, 7, 7);

