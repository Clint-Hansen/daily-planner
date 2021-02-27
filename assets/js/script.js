var currentDayEl = document.querySelector("#currentDay");


// display of day of week, month, and day of month at top of schedule 

var localDate = moment();
var weekDay = localDate.format("dddd");
var month = localDate.format("MMMM");
var monthDay = localDate.format("Do")
currentDayEl.textContent = (weekDay + ", " + month + " " + monthDay);


// saving textarea content to local storage when save button is clicked

$(".container").on("click", ".saveBtn", function() {
   var timeEl = $(this).parent().attr("data-hour")
   var entryEl = $(this).siblings(".description").children().val();
   localStorage.setItem(timeEl, entryEl );
})

// getting content from local storage so that textarea content is persistent

$("[data-hour~='9']").children(".description").children("textarea").val(localStorage.getItem("9"));
$("[data-hour~='10']").children(".description").children("textarea").val(localStorage.getItem("10"));
$("[data-hour~='11']").children(".description").children("textarea").val(localStorage.getItem("11"));
$("[data-hour~='12']").children(".description").children("textarea").val(localStorage.getItem("12"));
$("[data-hour~='13']").children(".description").children("textarea").val(localStorage.getItem("13"));
$("[data-hour~='14']").children(".description").children("textarea").val(localStorage.getItem("14"));
$("[data-hour~='15']").children(".description").children("textarea").val(localStorage.getItem("15"));
$("[data-hour~='16']").children(".description").children("textarea").val(localStorage.getItem("16"));
$("[data-hour~='17']").children(".description").children("textarea").val(localStorage.getItem("17"));

// comparing current time with schedule entry hour to add past, present, and future styling classes

$(".row").each(function() {
    var entryHour = $(this).attr("data-hour");
    var momentHour = moment(entryHour, "k");
    var entryTextArea = $(this).children(".description");
    if (moment().isAfter(momentHour)) {
        entryTextArea.addClass("past");
    }
    if (moment().isBefore(momentHour)) {
        entryTextArea.addClass("future");
    }
    if (Math.abs(moment().diff(momentHour, "minutes")) <60) {
        entryTextArea.addClass("present");
    }
});