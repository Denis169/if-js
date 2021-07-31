// Преобразование формата даты:

const dataFirst = '2020-11-26';

const dateFormatConversion = (date) => date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3.$2.$1');

console.log(dateFormatConversion(dataFirst));

// Поиск объектов размещения

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
  let finishData = '';
  value = new RegExp(value,'igm');
  array.forEach(function (obj) {
    (value.test(Object.values(obj).join())) && (finishData += `${Object.values(obj).join(', ')}\n`)
  });
  return finishData;
}
  
console.log(filterPrices(data, 'Germany'));