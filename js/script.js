// Header
const adultsChildrenRooms = document.querySelector('.header__input-adults-block__js');
const body = document.querySelector('body');
const minusAdults = document.querySelector('.header__minus__adults__js');
const plusAdults = document.querySelector('.header__plus__adults__js');
const minusChildren = document.querySelector('.header__minus__children__js');
const plusChildren = document.querySelector('.header__plus__children__js');
const minusRoom = document.querySelector('.header__minus__room__js');
const plusRoom = document.querySelector('.header__plus__room__js');

let countAdults = 2;
let countChildren = 0;
let countRooms = 1;

const choosePeopleOn = (event) => {
  document.querySelector('.header__filter__people__js').style.display = 'inline';
  event.stopPropagation();
}

const choosePeopleOf = (event) => {
  document.querySelector('.header__filter__people__js').style.display = 'none';
  event.stopPropagation();
}

const changePlaseholder = () => {
  document.querySelector('.input__people__js').setAttribute('placeholder', `${countAdults} Adults - ${countChildren} Children - ${countRooms} Room`);
}

const more = (event) => {
  const count = (countVariant, max) => {
    if (countVariant < max) {
      countVariant++;
      if (countVariant === max) event.target.setAttribute('id','no__activity__js');
      if (countVariant !== 0) event.target.previousElementSibling.previousElementSibling.removeAttribute('id');
    } else {
      countVariant;
    }
    event.target.previousElementSibling.innerHTML = `${countVariant}`;
    return countVariant;
  }
  if (event.target.getAttribute('class') === 'header__plus__adults__js'){
    countAdults = count(countAdults, 30);
  } else if (event.target.getAttribute('class') === 'header__plus__children__js') {
    countChildren = count(countChildren, 10);
    if (countChildren === 1) {
      document.querySelector('.header__filter__childrens__age__js').setAttribute('class','header__filter__childrens__age');
    }
    document.getElementById('header__childs__age').insertAdjacentHTML('beforeend',` 
      <select>
        <option>0 years old</option>
        <option>1 years old</option>
        <option>2 years old</option>
        <option>3 years old</option>
        <option>4 years old</option>
        <option>5 years old</option>
        <option>6 years old</option>
        <option>7 years old</option>
        <option>8 years old</option>
        <option>9 years old</option>
        <option>10 years old</option>
        <option>11 years old</option>
        <option>12 years old</option>
        <option>13 years old</option>
        <option>14 years old</option>
        <option>15 years old</option>
        <option>16 years old</option>
        <option>17 years old</option>
      </select>`);
} else {
    countRooms = count(countRooms, 30);
  }
  changePlaseholder();
}

const smoller = (event) => {
  const count = (countVariant) => {
    if (countVariant > 0) { 
      countVariant--;
      if (countVariant !== 30) event.target.nextElementSibling.nextElementSibling.removeAttribute('id');
      if (countVariant === 0) event.target.setAttribute('id','no__activity__js');
    } else {
      countVariant;
    }
    event.target.nextElementSibling.innerHTML = `${countVariant}`;
    
    return countVariant;
  }
  if (event.target.getAttribute('class') === 'header__minus__adults__js'){
    countAdults = count(countAdults);
  } else if (event.target.getAttribute('class') === 'header__minus__children__js') {
    countChildren = count(countChildren);
    if (countChildren === 0) {
      document.querySelector('.header__filter__childrens__age').setAttribute('class','header__filter__childrens__age header__filter__childrens__age__js');
    }
    document.getElementById('header__childs__age').removeChild(document.querySelector('select')); 
  } else {
    countRooms = count(countRooms);
  };
  changePlaseholder();
}

adultsChildrenRooms.addEventListener('click', choosePeopleOn);
body.addEventListener('click', choosePeopleOf);
plusAdults.addEventListener('click', more);
minusAdults.addEventListener('click', smoller);
plusChildren.addEventListener('click', more);
minusChildren.addEventListener('click', smoller);
plusRoom.addEventListener('click', more);
minusRoom.addEventListener('click', smoller);


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


