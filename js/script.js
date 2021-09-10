// Header forma people
const adultsChildrenRooms = document.querySelector('.adults-block__js');
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

const addSelectChildren = () =>{
  const select =  document.createElement('select');
  for (let i = 0; i < 17; i++) {
    select.insertAdjacentHTML ('beforeend',`<option>${i + 1} years old</option>`);
  }
  return select;
}

const choosePeopleOn = (event) => {
  document.querySelector('.filter-people__js').style.display = 'inline';
  event.stopPropagation();
}

const choosePeopleOf = (event) => {
  document.querySelector('.filter-people__js').style.display = 'none';
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
    
    document.getElementById('header__childs__age').appendChild(addSelectChildren()); //Вот эта строчка где добавляем селект, непонятно почему не работает

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
adultsChildrenRooms.addEventListener('click', checkInCheckOutOff);
body.addEventListener('click', choosePeopleOf);
plusAdults.addEventListener('click', more);
minusAdults.addEventListener('click', smoller);
plusChildren.addEventListener('click', more);
minusChildren.addEventListener('click', smoller);
plusRoom.addEventListener('click', more);
minusRoom.addEventListener('click', smoller);

// Header calendar

const nextMonthRight = document.querySelector('.calendar-right__js');
const previousMonthLeft = document.querySelector('.calendar-left__js');
const currentMonth = document.querySelector('.first-month__js');
const currentMonthNext = document.querySelector('.second-month__js');
const checkInCheckOut = document.querySelector('#date');

const dateUser = {
  checkInDate: 28,
  checkInDateInMonth: false,
  checkOutDate: 10,
  checkOutDateInMonth: true,
};

let countFirstMonth = 0;
let countSecondMonth = 1;
let chooseDateCurrent = 0;
let chooseDateCurrentEnd =63;
let labelIn = 'Check-in';
let labelOut = 'Check-out';

const checkInCheckOutOn = (event) => {
  document.querySelector('.calendar-block__js').style.display = 'flex';
  event.stopPropagation();
}

function checkInCheckOutOff(event) {
  document.querySelector('.calendar-block__js').style.display = 'none';
}

const changePlaseholderDate = () => document.querySelector('#date').setAttribute('placeholder', `${labelIn} - ${labelOut}`);

const сurrentMonth = (nextMonth) => {
  const needDate = new Date((new Date()).getFullYear(), (new Date()).getMonth() + nextMonth, 1);
  return needDate;
}

const whatStartDayWeek = (nextMonth) =>{
  let needDate = new Date((new Date()).getFullYear(), (new Date()).getMonth() + nextMonth, 1);
  let startDay = [7, 1, 2, 3, 4, 5, 6][(new Date(needDate.getFullYear(), needDate.getMonth(), 1)).getDay()];
  return startDay;
}

const howMatchdaysInMonth = (nextMonth) => {
  let needDate = new Date((new Date()).getFullYear(), (new Date()).getMonth() + nextMonth, 1);
  let days = new Date(needDate.getFullYear(), needDate.getMonth() + 1, 0).getDate();
  return days;
}

const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek, daysUser) => {
  let amountDayInMonth = (daysInMonth + (dayOfWeek - 1)) % daysInWeek === 0 //Checking to see if there’s a moving week at the end
    ? daysInMonth + (dayOfWeek - 1) // if not a week at the end
    :(daysInWeek - (daysInMonth + (dayOfWeek - 1)) % daysInWeek + daysInMonth + (dayOfWeek - 1)); //If there is a week 
  let month = [];
  let weekOfCalendar = [];
  let dataDay = {};
  
  for (let day = 1; day <= amountDayInMonth; day++) {
    if (day <= dayOfWeek - 1) {
      dataDay.dayOfMonth = daysInMonth - (dayOfWeek - 1) + day;
      dataDay.notCurrentMonth = true;
      dataDay.currentDay = false;
      if (daysUser.checkInDateInMonth) {
        dataDay.selectedDay = false;
      } else {
        daysUser.checkInDate <= dataDay.dayOfMonth ? dataDay.selectedDay = true : dataDay.selectedDay = false;
      }
      weekOfCalendar.push(dataDay);
      dataDay = {};

    } else if (day <= daysInMonth + (dayOfWeek - 1)) {
      dataDay.dayOfMonth = day - (dayOfWeek - 1);
      dataDay.notCurrentMonth = false;
      if (!daysUser.checkInDateInMonth && !daysUser.checkOutDateInMonth) {
        dataDay.selectedDay = true;
      } else if (daysUser.checkOutDateInMonth) {
        dataDay.dayOfMonth <= daysUser.checkOutDate ? dataDay.selectedDay = true : dataDay.selectedDay = false;
      } else {
        dataDay.dayOfMonth >= daysUser.checkInDate ? dataDay.selectedDay = true : dataDay.selectedDay = false;
      }
      (new Date()).getDate() === dataDay.dayOfMonth ? dataDay.currentDay = true : dataDay.currentDay = false;
      weekOfCalendar.push(dataDay);
      dataDay = {};

    } else {
      dataDay.dayOfMonth = day - (dayOfWeek - 1) - daysInMonth;
      dataDay.notCurrentMonth = true;
      dataDay.currentDay = false;
      if (daysUser.checkOutDateInMonth) {
        dataDay.selectedDay = false;
      } else {
        dataDay.dayOfMonth <= daysUser.checkOutDate ? dataDay.selectedDay = true : dataDay.selectedDay = false;
      }
      weekOfCalendar.push(dataDay);
      dataDay = {};
    }

    if (weekOfCalendar.length === daysInWeek) {
      month.push(weekOfCalendar);
      weekOfCalendar = [];
    }
  }
  return month;
}

const newWeek = (week, dataMonth, anyMonth) => {
  const newWeekElement = document.createElement('div');
  for (let i = 0; i < 7; i++){
    const newDayElement = document.createElement('p');
    if (dataMonth[week][i].notCurrentMonth){
      newDayElement.innerHTML = '';
      newDayElement.setAttribute('class', 'header__countday__of__week__none__js');
    } else {
      newDayElement.innerHTML = `${dataMonth[week][i].dayOfMonth}`;
      newDayElement.setAttribute('class', 'header__countday__of__week__js');
      if (dataMonth[week][i].dayOfMonth < (new Date()).getDate() && anyMonth === 0)  newDayElement.style.color = 'var(--secondary-text)';
      if (dataMonth[week][i].currentDay && anyMonth === 0) newDayElement.style.color = 'var(--primary)';
    }
    
    newWeekElement.appendChild(newDayElement);
  }
  newWeekElement.setAttribute('class', 'header__count__day__of__week__js');
  return newWeekElement;
}

const fillingOfTheMonth = (countFirst, countSecond) => {
  const newElement = () => {
    const newMonthElement = document.createElement('div');
    newMonthElement.setAttribute('class', `header__number__of__days__js`);
    return newMonthElement;
  }
  
  let dataFirstMonth = getCalendarMonth(howMatchdaysInMonth(countFirst), 7, whatStartDayWeek(countFirst), dateUser);
  document.querySelector('.first-month__js').appendChild(newElement());
  for (let q = 0; q < dataFirstMonth.length; q++)
  document.querySelector('.header__number__of__days__js').appendChild(newWeek(q, dataFirstMonth, countFirst));

  let dataSecondMonth = getCalendarMonth(howMatchdaysInMonth(countSecond), 7, whatStartDayWeek(countSecond), dateUser);
  document.querySelector('.second-month__js').appendChild(newElement());
  for (let q = 0; q < dataSecondMonth.length; q++)
  document.querySelector('.second-month__js .header__number__of__days__js').appendChild(newWeek(q, dataSecondMonth, countSecond));
}

fillingOfTheMonth(countFirstMonth, countSecondMonth);

const letMonth = (count) => {
  let newMonth = new Date();
  return new Date(newMonth.setMonth(newMonth.getMonth() + count));
}

const choseMonth = (count) => {
  const nameMonth = document.createElement('p');
  nameMonth.appendChild(document.createTextNode(`${letMonth(count).toLocaleDateString('en-us', { year: 'numeric', month: 'long'})}`));
  nameMonth.setAttribute('class', 'header__month__year__js');
  return nameMonth;
}  

document.querySelector('.first-month__js div:first-of-type').appendChild(choseMonth(0));
document.querySelector('.second-month__js div:first-of-type').appendChild(choseMonth(countSecondMonth));


nextMonthRight.addEventListener('click', (event) => {
  countSecondMonth++;
  document.querySelector('.first-month__js .header__number__of__days__js').remove();
  document.querySelector('.second-month__js .header__number__of__days__js').remove();
  document.querySelector('.second-month__js .header__month__year__js').remove();
  document.querySelector('.second-month__js div:first-of-type').appendChild(choseMonth(countSecondMonth));
  document.querySelector('.calendar-left__js').style.display = 'inline';
  fillingOfTheMonth(countFirstMonth, countSecondMonth);
  event.stopPropagation();
});
previousMonthLeft.addEventListener('click', (event) => {
  countSecondMonth--;
  document.querySelector('.first-month__js .header__number__of__days__js').remove();
  document.querySelector('.second-month__js .header__number__of__days__js').remove();
  document.querySelector('.second-month__js .header__month__year__js').remove();
  document.querySelector('.second-month__js div:first-of-type').appendChild(choseMonth(countSecondMonth));
  if ( countSecondMonth === 1) document.querySelector('.calendar-left__js').style.display = 'none';
  fillingOfTheMonth(countFirstMonth, countSecondMonth);
  event.stopPropagation();
});

const changeLabeIn = (numberDay, numberMonth) => {
  labelIn = (`${numberDay}.${letMonth(numberMonth).toLocaleDateString('en-us', { month: 'numeric'})}.${letMonth(numberMonth).toLocaleDateString('en-us', { year: 'numeric' })}`);
}

const changeLabeOut = (numberDay, numberMonth) => {
  labelOut = (`${numberDay}.${letMonth(numberMonth).toLocaleDateString('en-us', { month: 'numeric'})}.${letMonth(numberMonth).toLocaleDateString('en-us', { year: 'numeric' })}`);
}

currentMonth.addEventListener('click', (event) => {
  if (chooseDateCurrent!== 0 && chooseDateCurrentEnd !== 63) {
    document.querySelectorAll('.header__countday__of__week__js').forEach((n) => n.setAttribute('class','header__countday__of__week__js'));
    chooseDateCurrent = 0;
    chooseDateCurrentEnd = 63;
    event.target.classList.toggle('background__color__date__js');
    chooseDateCurrent = event.target.innerHTML;
    labelOut = 'Check-out';
    changeLabeIn(chooseDateCurrent, countFirstMonth);
  } else if (event.target.innerHTML !== chooseDateCurrent && event.target.innerHTML >= (new Date()).getDate() && chooseDateCurrent > Number(event.target.innerHTML)){
    document.querySelectorAll('.header__countday__of__week__js').forEach((n) => n.setAttribute('class','header__countday__of__week__js'));
    event.target.classList.toggle('background__color__date__js');
    chooseDateCurrent = event.target.innerHTML;
    changeLabeIn(chooseDateCurrent, countFirstMonth);
  } else if (event.target.innerHTML >= (new Date()).getDate() && Number(event.target.innerHTML) > chooseDateCurrent && chooseDateCurrent !== 0 && Number(event.target.innerHTML) < chooseDateCurrentEnd) {
    event.target.classList.toggle('background__color__date__js');
    chooseDateCurrentEnd = event.target.innerHTML;
    document.querySelectorAll('.first-month__js .header__countday__of__week__js').forEach((n) => {
      if (Number(n.innerHTML) > chooseDateCurrent && Number(n.innerHTML) < chooseDateCurrentEnd) {
        n.setAttribute('class','header__countday__of__week__js background__color__intermediate__dates__js');
      };
    });
    changeLabeOut(chooseDateCurrentEnd, countFirstMonth);
    changePlaseholderDate();
    checkInCheckOutOff();
    
  } else if (event.target.innerHTML >= (new Date()).getDate()) {
    
    event.target.classList.toggle('background__color__date__js');
    chooseDateCurrent = event.target.innerHTML;
    changeLabeIn(chooseDateCurrent, countFirstMonth);
  }
  if (document.querySelector('.background__color__date__js') === null) {
    labelIn = 'Check-in';
    labelOut = 'Check-out';
  }
  changePlaseholderDate();
  event.stopPropagation();
});

currentMonthNext.addEventListener('click', (event) => {

  if (chooseDateCurrent!== 0 && chooseDateCurrentEnd !== 63) {
    document.querySelectorAll('.header__countday__of__week__js').forEach((n) => n.setAttribute('class','header__countday__of__week__js'));
    chooseDateCurrent = 0;
    chooseDateCurrentEnd = 63;
    event.target.classList.toggle('background__color__date__js');
    chooseDateCurrent = howMatchdaysInMonth(0) + Number(event.target.innerHTML);
    labelOut = 'Check-out';
    changeLabeIn(Number(event.target.innerHTML), countSecondMonth);
  } else if (howMatchdaysInMonth(0) + Number(event.target.innerHTML) !== chooseDateCurrent && chooseDateCurrent > howMatchdaysInMonth(0) + Number(event.target.innerHTML)) {
    document.querySelectorAll('.header__countday__of__week__js').forEach((n) => n.setAttribute('class','header__countday__of__week__js'));
    event.target.classList.toggle('background__color__date__js');
    chooseDateCurrent = howMatchdaysInMonth(0) + Number(event.target.innerHTML);
    changeLabeIn(Number(event.target.innerHTML), countSecondMonth);
  } else if ( Number(event.target.innerHTML) + howMatchdaysInMonth(0) > chooseDateCurrent && chooseDateCurrent !== 0 && Number(event.target.innerHTML) + howMatchdaysInMonth(0) < chooseDateCurrentEnd ) {
    event.target.classList.toggle('background__color__date__js');
    chooseDateCurrentEnd = howMatchdaysInMonth(0) + Number(event.target.innerHTML);
    document.querySelectorAll('.first-month__js .header__countday__of__week__js').forEach((n) => {
      if (chooseDateCurrent < howMatchdaysInMonth(0) && Number(n.innerHTML) > chooseDateCurrent) {
        n.setAttribute('class','header__countday__of__week__js background__color__intermediate__dates__js');
      };
    });
    document.querySelectorAll('.second-month__js .header__countday__of__week__js').forEach((n) => {
      if (howMatchdaysInMonth(0) + Number(n.innerHTML) > chooseDateCurrent && howMatchdaysInMonth(0) + Number(n.innerHTML) < chooseDateCurrentEnd) {
        n.setAttribute('class','header__countday__of__week__js background__color__intermediate__dates__js');
      };
    });
    changeLabeOut(Number(event.target.innerHTML), countSecondMonth);  
    changePlaseholderDate();
    checkInCheckOutOff();   
  } else if (Number(event.target.innerHTML) !== 0 && (/\d/g).test(event.target.innerHTML) && (event.target.innerHTML).length <= 2) {
    event.target.classList.toggle('background__color__date__js');
    chooseDateCurrent = howMatchdaysInMonth(0) + Number(event.target.innerHTML);
    changeLabeIn(Number(event.target.innerHTML), countSecondMonth);
  }
  if (document.querySelector('.background__color__date__js') === null) {
    labelIn = 'Check-in';
    labelOut = 'Check-out';
  }
  changePlaseholderDate();
  event.stopPropagation();
});

checkInCheckOut.addEventListener('click', checkInCheckOutOn);
checkInCheckOut.addEventListener('click', choosePeopleOf);
body.addEventListener('click', checkInCheckOutOff);




// Homes guests loves

(async function placesData() {
  try {
    if (sessionStorage.getItem('places') === null){
    let places = await (await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')).json();
    console.log(places);
    sessionStorage.setItem('places', JSON.stringify(places));
    }

    const data = JSON.parse(sessionStorage.getItem('places'));
    
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

  } catch (error) {
    console.error(error);
  }
})();

