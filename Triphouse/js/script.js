// Header form people import
import {choosePeopleOn, choosePeopleOf, adultsChildrenRooms, filterCounts} from './formPeople.js';

// Header form people
adultsChildrenRooms.addEventListener('click', choosePeopleOn);
adultsChildrenRooms.addEventListener('click', checkInCheckOutOff);
document.body.addEventListener('click', choosePeopleOf);


// Calendar import
import {checkInCheckOutOn, checkInCheckOutOff, checkInCheckOut} from './calendar.js';

// Header calendar
checkInCheckOut.addEventListener('click', checkInCheckOutOn);
checkInCheckOut.addEventListener('click', choosePeopleOf);
document.body.addEventListener('click', checkInCheckOutOff);


//Header submit form import
import {sendFileDestination, formSendFile} from './headerSubmitForm.js';

// Header submit form
formSendFile.addEventListener('submit', sendFileDestination);


// Homes guests loves import
import {placesData} from './homesGuestsLoves.js';

// Homes guests loves
placesData();

