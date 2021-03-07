const currentDayEl = document.getElementById("currentDay");
const timeBlockContainer = document.getElementById("time-block-container");
const timeBlocks = [
    { time: "9 am", event: "" },
    { time: "10 am", event: "" },
    { time: "11 am", event: "" },
    { time: "12 pm", event: "" },
    { time: "1 pm", event: "" },
    { time: "2 pm", event: "" },
    { time: "3 pm", event: "" },
    { time: "4 pm", event: "" },
    { time: "5 pm", event: "" },
];

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
        '</div><textarea class="form-control">' +
        timeBlock.event +
        '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

    $(".container").append(row);
});


showCurrentDay();
// showCalendar();
// GIVEN I am using a daily planner to create a schedule
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist