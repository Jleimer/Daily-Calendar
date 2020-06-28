var currentHour = moment().hours();
var currentDate = moment()
var pageDate = document.querySelector("#currentDay");
pageDate.textContent = currentDate.format("MMMM Do YYYY, h:mm:ss a");

$(".time-row").each(function(){
    var blockHour = parseInt($(this).attr("data-time"));
    console.log(blockHour);
    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
    } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
    
})
