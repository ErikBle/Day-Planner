const now = moment().format('MMMM Do YYYY');
const currentDay = $('#currentDay')

//displays current day
currentDay.text(now)


// Grabs the user input and stores it into the local storge
// Each hour being given a unique ID
$("#hour-9 .col-md-10").val(localStorage.getItem("hour-9"));
$("#hour-10 .col-md-10").val(localStorage.getItem("hour-10"));
$("#hour-11 .col-md-10").val(localStorage.getItem("hour-11"));
$("#hour-12 .col-md-10").val(localStorage.getItem("hour-12"));
$("#hour-13 .col-md-10").val(localStorage.getItem("hour-13"));
$("#hour-14 .col-md-10").val(localStorage.getItem("hour-14"));
$("#hour-15 .col-md-10").val(localStorage.getItem("hour-15"));
$("#hour-16 .col-md-10").val(localStorage.getItem("hour-16"));
$("#hour-17 .col-md-10").val(localStorage.getItem("hour-17"));

// When user hits save button, stores the text to local storage
$(".saveBtn").on("click", function(){
    let dayPlan = $(this).siblings(".col-md-10").val();
    let hourTime = $(this).parent().attr("id");
    localStorage.setItem(hourTime, dayPlan);
  });

//Updates the time-blocks with the proper CSS
function timeBlockColor (){
    let time = moment().hours();
    $('.row').each(function(){
        let timeRow = parseInt($(this).attr("id").split("-")[1]);
        if (timeRow < time) {
            $(this).addClass("past")
        } else if (timeRow === time) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }
    })


}

// Calls the function
timeBlockColor ()