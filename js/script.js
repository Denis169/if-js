// Header
const adultsChildrenRooms = document.querySelector('.header__input-adults-block__js');
const body = document.querySelector('body');
const plusAdults = document.querySelector('.header__plus__adults__js');
const minusAdults = document.querySelector('.header__minus__adults__js');
let countAdults = 2;
let countChildren = 2;
let countRooms = 2;


const choosePeopleOn = (event) => {
  document.querySelector('.header__filter__people__js').style.display = 'inline';
  event.stopPropagation();
}

const choosePeopleOf = (event) => {
  document.querySelector('.header__filter__people__js').style.display = 'none';
  event.stopPropagation();
}

const moreAdults = (event) => {
  if (countAdults < 30) {
    countAdults++;
    if (countAdults === 30) document.querySelector('.header__plus__adults__js').style.border = '1px solid var(--secondary-text)';
    if (countAdults !== 0) document.querySelector('.header__minus__adults__js').style.border = '1px solid var(--primary)';
  } else {    
    countAdults;
  }
  document.querySelector('.header__adults__quantity__js').innerHTML = `${countAdults}`;
  document.querySelector('.input-adults').setAttribute('placeholder', `${countAdults} Adults - ${countChildren} Children - ${countRooms} Rooms`);
}

const smollerAdults = (event) => {
  if (countAdults > 0) { 
    countAdults--;
    if (countAdults !== 30) document.querySelector('.header__plus__adults__js').style.border = '1px solid var(--primary)';
    if (countAdults === 0) document.querySelector('.header__minus__adults__js').style.border = '1px solid var(--secondary-text)';
  } else {
    countAdults;
  }
  document.querySelector('.header__adults__quantity__js').innerHTML = `${countAdults}`;
  document.querySelector('.input-adults').setAttribute('placeholder', `${countAdults} Adults - ${countChildren} Children - ${countRooms} Rooms`);
}

adultsChildrenRooms.addEventListener('click', choosePeopleOn);
body.addEventListener('click', choosePeopleOf);
plusAdults.addEventListener('click', moreAdults);
minusAdults.addEventListener('click', smollerAdults)


// Homes guests loves

const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

let count = 0;
let countLeft = data.length - 1;

const sliderRight = document.querySelector('.homes__svg_arrow-right__js');
const sliderLeft = document.querySelector('.homes__svg_arrow-left__js');

const addNewElement = (counter) => {
  const newDiv =  document.createElement('div');
  newDiv.setAttribute('class', 'homes__col__js');
  newDiv.innerHTML = `
    <img class="homes__images" src="${data[counter].imageUrl}" alt="Hotel">
    <a class="homes__link" href="">${data[counter].name}</a>
    <p class="homes__text">${data[counter].city}, ${data[counter].country}</p>
  `;
  return newDiv;
}

const blockFilling = () => {
  for (let i = 0; i <= 3; i++) {
    document.querySelector('.homes__section-col__js').append(addNewElement(i));
    count = i + 1;
  }
}


const changeColRight = () => {
  document.querySelector('.homes__section-col__js').removeChild(document.querySelector('.homes__section-col__js').firstElementChild);
  document.querySelector('.homes__section-col__js').append(addNewElement(count));
  count === data.length - 1 ? count = 0 : count++;
  countLeft === data.length - 1 ? countLeft = 0 : countLeft++;
}


const changeColLeft = () => {
  document.querySelector('.homes__section-col__js').removeChild(document.querySelector('.homes__section-col__js').lastElementChild);
  document.querySelector('.homes__section-col__js').prepend(addNewElement(countLeft));
  countLeft === 0 ? countLeft = data.length - 1 : countLeft--;
  count === 0 ? count = data.length - 1 : count--;
}

blockFilling();
sliderRight.addEventListener('click', changeColRight);
sliderLeft.addEventListener('click', changeColLeft);


