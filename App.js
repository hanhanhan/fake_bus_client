'use strict';

import makeScheduleHtml from './ScheduleHTML.js'
// import apiData from './APIData.js'

// example
// let api_data = {"schedule": {"1": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "2": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "3": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "4": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "5": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "6": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "7": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "8": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "9": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}, "10": {"1": [18, 33, 48, 3], "2": [20, 35, 50, 5], "3": [22, 37, 52, 7]}}, "timestamp": 1}
// let schedule = api_data["schedule"]
// determined by location, input
// should be non empty
let bus_stops = ["1", "2"]

let filtered_schedule_html = bus_stops
    .map((bus_stop) => makeScheduleHtml(bus_stop))
    .join('<br>')

document.getElementById('schedule').innerHTML = filtered_schedule_html
