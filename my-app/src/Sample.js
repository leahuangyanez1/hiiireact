const a = 1
const b = 2
const c = a + b
console.log(c)

const e = 1
const f = 2
const g = e + f

const data = require('./TestData.json');
console.log(data);
console.log("hi");

const myClass = data.UIUC_Classes.RHET105;
const classTime = myClass.timeHour;
myClass.teacher = "Dr. X";
const start = classTime.start;
const end = classTime.end;

// data[UIUC_Classes[0].RHET105];
console.log(myClass);
console.log(classTime);
console.log(start);
console.log(end);

/* Homework
Find the time of your "RHET 105" class with code, and log it with console log
*/