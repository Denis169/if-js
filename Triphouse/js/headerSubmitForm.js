import {filterCounts} from "./formPeople.js";

export const formSendFile = document.getElementById('form-destination');
const sliderRight = document.getElementById('available-arrow-right');
const sliderLeft = document.getElementById('available-arrow-left');

let available = [];

let count = 0;
let countLeft = available.length - 1;

const addNewElement = (counter) => {
  const newDiv =  document.createElement('div');
  newDiv.setAttribute('class', 'homes__col');
  newDiv.innerHTML = `
    <img class="homes__images" src="${available[counter].imageUrl}" alt="Hotel">
    <a class="homes__link" href="">${available[counter].name}</a>
    <p class="homes__text">${available[counter].city}, ${available[counter].country}</p>
  `;
  return newDiv;
}

const blockFilling = () => {
  for (let i = 0; i <= 3 && i <= available.length - 1; i++) {
    document.getElementById('available__section-col').append(addNewElement(i));
    count = i;
  }
}

const emptyBlock = () =>{
  document.getElementById('available__section-col').innerText = 'Unfortunately no suitable places were found';
  document.getElementById('available__section-col').classList.add('available__grey-background');
}

const changeColRight = () => {
  document.getElementById('available__section-col').removeChild(document.getElementById('available__section-col').firstElementChild);
  count === available.length - 1 ? count = 0 : count++;
  document.getElementById('available__section-col').append(addNewElement(count));
  countLeft === available.length - 1 ? countLeft = 0 : countLeft++;
}

const changeColLeft = () => {
  document.getElementById('available__section-col').removeChild(document.getElementById('available__section-col').lastElementChild);
  document.getElementById('available__section-col').prepend(addNewElement(countLeft));
  countLeft === 0 ? countLeft = available.length - 1 : countLeft--;
  count === 0 ? count = available.length - 1 : count--;
}

const dataRetrieval = async(search, adults, children, rooms) => {
  try{
    const data = await fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${search}&adults=${adults}&children=${children},10&rooms=${rooms}`).then(data => data.json());
    available = data;
    document.getElementById('available-hotels').classList.remove('header__display-none');

    available.length === 0 ? emptyBlock() : blockFilling();

    if (available.length < 5) {
      sliderRight.classList.add('header__display-none');
      sliderLeft.classList.add('header__display-none');
    }

    if (available.length > 4) {
      sliderRight.classList.remove('header__display-none');
      sliderLeft.classList.remove('header__display-none');
    }

  } catch (error) {
    console.log(error);
  }
}

export const sendFileDestination = (event) => {
  event.preventDefault();
  event.stopPropagation();
  document.getElementById('available__section-col').innerHTML = '';
  const formData = new FormData(formSendFile);
  const searchLine = Array.from(formData.entries())[0][1];
  const numberOfAdults = filterCounts.adults.current;
  let children = '';

  if (filterCounts.children.current !== 0) {
    for (let i = 0; i < filterCounts.children.current; i++) {
      if (i !== 0) children += ',';
      children += document.querySelector(`#header__childs-age select:nth-of-type(${i+1})`).selectedIndex + 1;
    };
  };

  const rooms = filterCounts.rooms.current;
  dataRetrieval(searchLine,numberOfAdults,children,rooms);
};


sliderRight.addEventListener('click', changeColRight);
sliderLeft.addEventListener('click', changeColLeft);