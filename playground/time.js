var moment = require('moment');
var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
var someTimestamp = moment().valueOf();
console.log(someTimestamp);
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));
