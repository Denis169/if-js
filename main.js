// Deep Equal

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2 ) => {
  if  (Object.keys(object1).length !== Object.keys(object2).length) {
   return false;
  }
  for(var key in object1) {
    if (! Object.keys(object2).includes(key)) { 
      return false;
    }
    if(object1[key] !== object2[key]){ 
      if(! deepEqual(object1[key], object2[key]) ){ 
        return false;
      }
    }
  }
  return true;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));


// //Calendar


// const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
//   let amountDayInMonth = (daysInMonth + (dayOfWeek - 1)) % daysInWeek === 0 ? //Checking to see if there’s a moving week at the end
//     daysInMonth + (dayOfWeek - 1) // if not a week at the end
//     : (daysInWeek - (daysInMonth + (dayOfWeek - 1)) % daysInWeek + daysInMonth + (dayOfWeek - 1)); //If there is a week 
//   let month = [];
//   let weekOfCalendar = [];
  
//   if (dayOfWeek > daysInWeek) { 
//     return console.log('Err: the wrong dayOfWeek')
//   }

//   for (let day = 1; day <= amountDayInMonth; day++) {
//     if (day <= dayOfWeek - 1) {
//       weekOfCalendar.push(daysInMonth - (dayOfWeek-1) + day);
//     } else if (day <= daysInMonth + (dayOfWeek-1)) {
//       weekOfCalendar.push(day - (dayOfWeek - 1));
//     } else {
//       weekOfCalendar.push(day - (dayOfWeek - 1) - daysInMonth);
//     }
//     if (weekOfCalendar.length === daysInWeek) {
//       month.push(weekOfCalendar);
//       weekOfCalendar = [];
//     }
//   }
//   return month;
// }

// console.log(getCalendarMonth(30, 7, 7));