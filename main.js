// Palindrom

const palindrom = (word) => word === word.split('').reverse().join('');
  
console.log(palindrom('atata'));

// Search of object placement
const data = [
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

const filterPrices = (array, value) => {
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

const countryCity = (array) => {
  return array.reduce((finalCountryCity, obj) => {
    Object.keys(finalCountryCity).includes(obj.country) 
      ? finalCountryCity[`${obj.country}`].push(obj.city)
      : finalCountryCity[`${obj.country}`] = [obj.city];
    return finalCountryCity;
  }, {});
}

console.log(countryCity(hotels));

//Calendar


const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  let amountDayInMonth = (daysInMonth + (dayOfWeek - 1)) % daysInWeek === 0 //Checking to see if there’s a moving week at the end
    ? daysInMonth + (dayOfWeek - 1) // if not a week at the end
    : (daysInWeek - (daysInMonth + (dayOfWeek - 1)) % daysInWeek + daysInMonth + (dayOfWeek - 1)); //If there is a week 
  let month = [];
  let weekOfCalendar = [];
  
  if (dayOfWeek > daysInWeek) { 
    return console.log('Err: the wrong dayOfWeek')
  }

  for (let day = 1; day <= amountDayInMonth; day++) {
    if (day <= dayOfWeek - 1) {
      weekOfCalendar.push(daysInMonth - (dayOfWeek-1) + day);
    } else if (day <= daysInMonth + (dayOfWeek-1)) {
      weekOfCalendar.push(day - (dayOfWeek - 1));
    } else {
      weekOfCalendar.push(day - (dayOfWeek - 1) - daysInMonth);
    }
    if (weekOfCalendar.length === daysInWeek) {
      month.push(weekOfCalendar);
      weekOfCalendar = [];
    }
  }
  return month;
}

console.log(getCalendarMonth(10, 10, 10));
