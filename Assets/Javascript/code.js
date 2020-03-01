const now = moment().format('MMMM Do YYYY');
const currentDay = $('#currentDay')

//displays current day
currentDay.text(now)


// Grabs the user input and stores it into the local storge
// Each hour being given a unique ID
$("#hour-9").val(localStorage.getItem("hour-9"));
$("#hour-10").val(localStorage.getItem("hour-10"));
$("#hour-11").val(localStorage.getItem("hour-11"));
$("#hour-12").val(localStorage.getItem("hour-12"));
$("#hour-13").val(localStorage.getItem("hour-13"));
$("#hour-14").val(localStorage.getItem("hour-14"));
$("#hour-15").val(localStorage.getItem("hour-15"));
$("#hour-16").val(localStorage.getItem("hour-16"));
$("#hour-17").val(localStorage.getItem("hour-17"));
$("#hour-18").val(localStorage.getItem("hour-18"));
$("#hour-19").val(localStorage.getItem("hour-19"));

