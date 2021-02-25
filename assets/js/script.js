

var currentDayEl = document.querySelector("#currentDay");
var entryInput = document.querySelector("textarea").value;
var containerEl = document.querySelector(".container")






var localDate = moment();
var weekDay = localDate.format("dddd");
var month = localDate.format("MMMM");
var monthDay = localDate.format("Do")
currentDayEl.textContent = (weekDay + ", " + month + " " + monthDay);



var loadEntries = function() {
    var entry = localStorage.getItem("entry");
    
    if (!entry) {
        entryInput = "";
    }
    else entry = entryInput;
};


var saveEntries = function() {
    var entry = 
    localStorage.setItem("entry", entryInput);
};



$(containerEl).on("click", ".saveBtn", saveEntries)

loadEntries();