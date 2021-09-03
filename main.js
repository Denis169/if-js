// Coloring text <p> 2 "First blood 2"



const elemTextFirst = document.getElementById('text_1');
const elemTextTwo = document.getElementById('text_2');
const elemTextThree = document.getElementById('text_3');

const changeColor = () => {
  const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
      return this;
    },
    next() {
      this.current++
      if (this.current < this.data.length) {
        return {
          done: false,
          value: this.data[this.current],
        };
      } else {
        this.current = 0;
        return {
          done: true,
          value: this.data[this.current],
        };
      }
    }
  };
  return (event) => event.target.style.color = colors.next(colors).value;
};

elemTextFirst.addEventListener('click', changeColor());
elemTextTwo.addEventListener('click', changeColor());
elemTextThree.addEventListener('click', changeColor());


//Calendar

const dateUser = {
  checkInDate: 28,
  checkInDateInMonth: false,
  checkOutDate: 10,
  checkOutDateInMonth: true,
};

const startDayWeek = [7, 1, 2, 3, 4, 5, 6][(new Date((new Date()).getFullYear(), (new Date()).getMonth(), 1)).getDay()];

const daysInMonth = new Date((new Date()).getFullYear(), (new Date()).getMonth() + 1, 0).getDate();

const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek, daysUser) => {
  let amountDayInMonth = (daysInMonth + (dayOfWeek - 1)) % daysInWeek === 0 //Checking to see if there’s a moving week at the end
    ? daysInMonth + (dayOfWeek - 1) // if not a week at the end
    :(daysInWeek - (daysInMonth + (dayOfWeek - 1)) % daysInWeek + daysInMonth + (dayOfWeek - 1)); //If there is a week 
  let month = [];
  let weekOfCalendar = [];
  let dataDay = {};
  
  for (let day = 1; day <= amountDayInMonth; day++) {
    if (day <= dayOfWeek - 1) {
      dataDay.dayOfMonth = daysInMonth - (daysInWeek + dayOfWeek - 1) + day;
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

console.log(getCalendarMonth(daysInMonth, 7, startDayWeek, dateUser));





