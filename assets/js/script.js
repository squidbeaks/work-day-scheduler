const currentDayEl = document.getElementById("currentDay");
const timeBlockContainer = document.getElementById("time-block-container");

const timeBlocks = [
    { time: "9am", event: "" },
    { time: "10am", event: "" },
    { time: "11am", event: "" },
    { time: "12pm", event: "" },
    { time: "1pm", event: "" },
    { time: "2pm", event: "" },
    { time: "3pm", event: "" },
    { time: "4pm", event: "" },
    { time: "5pm", event: "" },
];

    for (i = 0; i < timeBlocks.length; i++) {
        var calendarTime = timeBlocks[i].time.replace("pm", "").replace("am", "");

        if (calendarTime < 7) {
            calendarTime = parseInt(calendarTime);
            calendarTime += 12;
        }

        console.log("Calendar Time:" + calendarTime);
    }
    const colorRow = function(time) {
        let currentHour = moment().format("H");
        console.log("current Hour:" + currentHour);

        if (currentHour === time) {
            return "present";
        }
        if (currentHour > time) {
            return "past";
        }
        if (currentHour < time) {
            return "future";
        }
    }

var timeIndicator = colorRow(calendarTime);


const showCurrentDay = function() {
    let today = moment().format('dddd, MMMM Do');
    $(currentDayEl).text("Today's date is " + today);
};


timeBlocks.forEach(function(timeBlock, index) {
    let time = timeBlock.time;
    let row =
        '<div class="time-block" id="time-block-' +
        (index + 1) +
        '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
        time +
        '</div><textarea class="form-control ' +
        timeIndicator +
        '">' +
        timeBlock.event +
        '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

    $(".container").append(row);
});




showCurrentDay();
console.log(calendarTime);
// showCalendar();
// GIVEN I am using a daily planner to create a schedule
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist