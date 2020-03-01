const now = moment().format('MMMM Do YYYY');
const currentDay = $('#currentDay')

//displays current day
currentDay.text(now)


// Grabs the user input and stores it into the local storge
// Each hour being given a unique ID
$("#hour-9 .plan").val(localStorage.getItem("hour-9"));
$("#hour-10 .plan").val(localStorage.getItem("hour-10"));
$("#hour-11 .plan").val(localStorage.getItem("hour-11"));
$("#hour-12 .plan").val(localStorage.getItem("hour-12"));
$("#hour-13 .plan").val(localStorage.getItem("hour-13"));
$("#hour-14 .plan").val(localStorage.getItem("hour-14"));
$("#hour-15 .plan").val(localStorage.getItem("hour-15"));
$("#hour-16 .plan").val(localStorage.getItem("hour-16"));
$("#hour-17 .plan").val(localStorage.getItem("hour-17"));
$("#hour-18 .plan").val(localStorage.getItem("hour-18"));
$("#hour-19 .plan").val(localStorage.getItem("hour-19"));

// When user hits save button, stores the text to local storage
$(".saveBtn").on("click", function(){
    let dayPlan = $(this).siblings(".plan").val();
    let hourTime = $(this).parent().attr("id");
    localStorage.setItem(hourTime, dayPlan);
  });
