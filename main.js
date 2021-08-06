// Date format conversion

const dataFirst = '2020-11-26';

const dateFormatConversion = (date) => date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3.$2.$1');

console.log(dateFormatConversion(dataFirst));

// Search for accommodation facilities

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

const filterPrices = (array, value) => {
  value = new RegExp(value,'igm');
  return array.reduce((acc, obj) => value.test(Object.values(obj)) ? acc + `${Object.values(obj).join(', ')}\n` : acc, []);
}
  
console.log(filterPrices(data, 'Germany'));
