'use strict'

import makeScheduleHtml from './Modules/ScheduleHTML.js'

let bus_stops = ["1", "2"]

let filtered_schedule_html = bus_stops
    .map((bus_stop) => makeScheduleHtml(bus_stop))
    .join('<br>')

document.getElementById('schedule').innerHTML = filtered_schedule_html
 
