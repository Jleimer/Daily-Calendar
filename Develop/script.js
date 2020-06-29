var currentHour = moment().hours();
var currentDate = moment()
var pageDate = document.querySelector("#currentDay");
pageDate.textContent = currentDate.format("MMMM Do YYYY, h:mm:ss a");
var notesArr = [];

$(".time-row").each(function(){
    var blockHour = parseInt($(this).attr("data-time"));
    console.log(blockHour);
    if (moment(currentHour).isAfter(blockHour)) {
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

$(".saveBtn").on("click", function() {
    var list = JSON.parse(localStorage.getItem('todolist')) || [];
    var id = $(this).attr("data-time");
        var notes = {
            time: $(this).attr("data-time"),
            note: $("#"+id).val()
        }
        //list.push(notes);
        console.log("Note object: "+JSON.stringify(notes));
    localStorage.setItem('todolist', JSON.stringify(list));
    localStorage.setItem('todolist', JSON.stringify(notes));
    //localStorage.getItem('todolist', notes);


    
    
    console.log(this);
})
