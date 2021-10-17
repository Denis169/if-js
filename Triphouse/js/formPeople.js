const formPeople = document.getElementById('filter-people');
const inscriptionPeople = document.getElementById('Adults-Children-Room');
export const adultsChildrenRooms = document.getElementById('peopleFilter');
const minusAdults = document.getElementById('minus-adults');
const plusAdults = document.getElementById('plus-adults');
const minusChildren = document.getElementById('minus-children');
const plusChildren = document.getElementById('plus-children');
const minusRoom = document.getElementById('minus-room');
const plusRoom = document.getElementById('plus-room');

export const filterCounts = {
  adults: {
    min: 0,
    max: 30,
    current: 2
  },
  children: {
    min: 0,
    max: 10,
    current: 0,
    maximumAge: 17
  },
  rooms: {
    min: 0,
    max: 30,
    current: 1
  }
}

const addSelectChildren = () =>{
  const select = document.createElement('select');
  for (let i = 0; i < filterCounts.children.maximumAge; i++) {
    select.insertAdjacentHTML('beforeend',`<option>${i + 1} years old</option>`);
  }
  return select;
}

export const choosePeopleOn = (event) => {
  formPeople.classList.remove('header__display-none');
  inscriptionPeople.classList.add('header__input-border');
  event.stopPropagation();
}

export const choosePeopleOf = (event) => {
  formPeople.classList.add('header__display-none');
  inscriptionPeople.classList.remove('header__input-border');
  event.stopPropagation();
}

export const more = (event) => {
  const count = (countVariant, max) => {
    if (countVariant < max) {
      countVariant++;
      if (countVariant === max) event.target.classList.add('header__no-activity');
      if (countVariant !== 0) event.target.previousElementSibling.previousElementSibling.classList.remove('header__no-activity');
    } else {
      countVariant;
    }
    event.target.previousElementSibling.innerHTML = `${countVariant}`;
    return countVariant;
  }

  if (event.target.getAttribute('id') === 'plus-adults'){
    filterCounts.adults.current = count(filterCounts.adults.current, filterCounts.adults.max);

  } else if (event.target.getAttribute('id') === 'plus-children') {
    filterCounts.children.current = count(filterCounts.children.current, filterCounts.children.max);
    if (filterCounts.children.current === 1) {
      document.getElementById('header__childs-age').classList.remove('header__display-none');
    }

    document.getElementById('header__childs-age').appendChild(addSelectChildren());

  } else {
    filterCounts.rooms.current = count(filterCounts.rooms.current, filterCounts.rooms.max);
  }
  inscriptionPeople.innerHTML = `${filterCounts.adults.current} Adults - ${filterCounts.children.current} Children - ${filterCounts.rooms.current} Room`;
  event.stopPropagation();
}

export const smoller = (event) => {
  const count = (countVariant, max) => {
    if (countVariant > 0) {
      countVariant--;
      if (countVariant !== max) event.target.nextElementSibling.nextElementSibling.classList.remove('header__no-activity');
      if (countVariant === 0) event.target.classList.add('header__no-activity');
    } else {
      countVariant;
    }
    event.target.nextElementSibling.innerHTML = `${countVariant}`;
    return countVariant;
  }

  if (event.target.getAttribute('id') === 'minus-adults'){
    filterCounts.adults.current = count(filterCounts.adults.current, filterCounts.adults.max);

  } else if (event.target.getAttribute('id') === 'minus-children') {
    filterCounts.children.current = count(filterCounts.children.current, filterCounts.children.max);
    if (filterCounts.children.current === 0) {
      document.getElementById('header__childs-age').classList.add('header__display-none');
    }
    document.getElementById('header__childs-age').removeChild(document.querySelector('select'));

  } else {
    filterCounts.rooms.current = count(filterCounts.rooms.current, filterCounts.rooms.max);
  }
  inscriptionPeople.innerHTML = `${filterCounts.adults.current} Adults - ${filterCounts.children.current} Children - ${filterCounts.rooms.current} Room`;
  event.stopPropagation();
}

plusAdults.addEventListener('click', more);
minusAdults.addEventListener('click', smoller);
plusChildren.addEventListener('click', more);
minusChildren.addEventListener('click', smoller);
plusRoom.addEventListener('click', more);
minusRoom.addEventListener('click', smoller);
