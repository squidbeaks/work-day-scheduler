const currentDayEl = document.getElementById("currentDay");
const timeBlockContainer = document.getElementById("container");

let events = [];

const timeBlocks = [
    { time: 9, event: "" },
    { time: 10, event: "" },
    { time: 11, event: "" },
    { time: 12, event: "" },
    { time: 13, event: "" },
    { time: 14, event: "" },
    { time: 15, event: "" },
    { time: 16, event: "" },
    { time: 17, event: "" },
];

const loadEvents = () => {
    if (!events) {
        events = [];
    }

    for (let i = 0; i < timeBlocks.length; i++) {
        let timeBlockTime = timeBlocks[i].time;

        savedEvent = JSON.parse(localStorage.getItem(timeBlockTime));

        if (savedEvent) {
            timeBlocks[i].event = savedEvent;
        }
    }
};

loadEvents();

function showCurrentDay() {
    let today = moment().format('dddd, MMMM Do');
    $(currentDayEl).text("Today's date is " + today);
};

function colorRow(time) {
    let currentHour = moment().hours();

    if (currentHour === time) {
        return "present";
    }
    if (currentHour > time) {
        return "past";
    }
    if (currentHour < time) {
        return "future";
    }
};

timeBlocks.forEach(function(timeBlock, index) {
    let time = timeBlock.time;

    let timeIndicator = colorRow(time);
    let row =
        '<div class="time-block" id="time-block-' +
        (index + 1) +
        '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
        time +
        '</div><textarea id="description-' +
        (index + 1) +
        '" class="form-control description ' +
        timeIndicator +
        '">' +
        timeBlock.event +
        '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" id="saveBtn" type="submit" data-time="' + time + '"><i class="fas fa-save"></i></button></div></div></div>';

    $(".container").append(row);
});

showCurrentDay();

$(".saveBtn").on("click", function(e) {
    let savedTextArea = e.currentTarget.parentElement.previousElementSibling.value;
    let savedTime = e.currentTarget.dataset.time;

    localStorage.setItem(savedTime, JSON.stringify(savedTextArea));
});
