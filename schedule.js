'use strict';

// example
let api_data = {"schedule": {"1": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "2": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "3": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "4": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "5": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "6": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "7": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "8": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "9": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "10": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}}, "timestamp": 1}
let schedule = api_data["schedule"]
// determined by location, input
// should be non empty
let bus_stops = ["1", "2"]

// filter schedule to only have selected bus stops
 
let filtered_schedule = bus_stops.reduce(
    (fs, stop) => {
        fs[stop] = schedule[stop];
        return fs; 
    }, {})

let filtered_schedule_html = bus_stops
    .map(() => makeRouteHtml())
    .join('<br>')

console.log("filtered schedule", filtered_schedule)
// get schedule on first connection, open ws connection,
// update on server push
// add simulate delay to api
// notification if offline?
// event listener for change/click


function makeTableRow(){ 
    let route = 1
    let times = "4 min, 6 min"

    return (
    `<tr>
        <td class="route route-${route}">${route}</td>
        <td>${times}</td>      
    </tr>`
    )
}

function makeRouteHtml(){

    const tableHeader = `
    <thead>
      <tr>
        <th>Route</th>
        <th>Arriving In</th>
      </tr>
    </thead>
`
    return (
    `<table class="u-full-width">
      ${tableHeader}
      <tbody>
        ${makeTableRow()}
      </tbody>
    </table>`
    )
}

document.getElementById('schedule').innerHTML = filtered_schedule_html