// Create variables for time and to display on page
var dateHolder = document.getElementById('#currentDay');
var date = moment().format('dddd, MMMM Do');
var time = moment().format('HH');
// Diplay time in correct format and as a string


//Use save button to save to local storage
$(".saveBtn").on("click", function() {
    var userInput = $(this).siblings(".description").val();
    var localTime = $(this).parent().attr("id");

    localStorage.setItem(localTime, userInput);
});

$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("9am"));
$("#11am .description").val(localStorage.getItem("9am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));

if (time < 9) {
    $("#9amInput").addClass("future");
        } else if (time > 9) {
        $("#9amInput").addClass("past");
            } else if (time = 9) {
            $("#9amInput").addClass("present");
}

if (time < 10) {
    $("#10amInput").addClass("future");
        } else if (time > 10) {
        $("#10amInput").addClass("past");
            } else if (time = 10) {
            $("#10amInput").addClass("present");
}

if (time < 11) {
    $("#11amInput").addClass("future");
        } else if (time > 11) {
        $("#11amInput").addClass("past");
            } else if (time = 11) {
            $("#11amInput").addClass("present");
}

if (time < 12) {
    $("#12pmInput").addClass("future");
        } else if (time > 12) {
        $("#12pmInput").addClass("past");
            } else if (time = 12) {
            $("#12pmInput").addClass("present");
}

if (time < 13) {
    $("#1pmInput").addClass("future");
        } else if (time > 13) {
        $("#1pmInput").addClass("past");
            } else if (time = 13) {
            $("#1pmmInput").addClass("present");
}

if (time < 14) {
    $("#2pmInput").addClass("future");
        } else if (time > 14) {
        $("#2pmInput").addClass("past");
            } else if (time = 14) {
            $("#2pmInput").addClass("present");
}

if (time < 15) {
    $("#3pmInput").addClass("future");
        } else if (time > 15) {
        $("#3pmInput").addClass("past");
            } else if (time = 15) {
            $("#3pmInput").addClass("present");
}

if (time < 16) {
    $("4pmInput").addClass("future");
        } else if (time > 16) {
        $("4pmInput").addClass("past");
            } else if (time = 16) {
            $("4pmInput").addClass("present");
}

if (time <17) {
    $("5pmInput").addClass("future");
        } else if (time > 17) {
        $("5pmInput").addClass("past");
            } else if (time = 17) {
            $("5pmInput").addClass("present");
}