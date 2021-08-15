// Classes

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  }
];

class User {
  constructor(firstName, lastname) {
    this.firstName = firstName;
    this.lastName = lastname;
    this.fullName = `${this.firstName}` + ` ` + `${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastname, admissionYear, courseName) {
    super(firstName, lastname);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
    this.course = new Date().getFullYear() - this.admissionYear;
  }
}

class Students {
  constructor(studentsData) {
    this.arrStudents = [];
    studentsData.forEach((obj) => {
      let [firstName, lastname, admissionYear, courseName] = Object.values(obj);
      this.arrStudents.push({... new Student(firstName, lastname, admissionYear, courseName)});
    });
    this.arrStudents.sort((a, b) => a.course > b.course ? 1: -1);
  }

  getInfo() {
    let getInfo = [];
    this.arrStudents.forEach((obj) => getInfo.push(`${obj.fullName} - ${obj.courseName}, ${obj.course} курс`));
    return getInfo;
  }
}



const students = new Students(studentsData);
console.log(students.getInfo());