// Task: Days in a Month.
// Description: Receive a month and a year and calculate 
// the number of days in the given month.

function daysInAMonth(month, year) {
   console.log(new Date(year, month, 0).getDate());
}
daysInAMonth(1, 2012);
daysInAMonth(2, 2021);