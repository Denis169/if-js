// Преобразование формата даты:

const dataFirst = '2020-11-26';

const dateFormatConversion = (date) => date.split('-').reverse().join('.');

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
  value = value.toLowerCase();
  let createdData = array.filter(function (obj) {
    return Object.values(obj).toString().toLowerCase().indexOf(value) !== -1;
  });
  let finishData = '';
  createdData.forEach(function(item){
   finishData += `${Object.values(item).join(', ')}
`;
  });
  return finishData;
}
  
console.log(filterPrices(data, 'Ourika'));