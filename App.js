'use strict'

import makeScheduleHtml from './Modules/ScheduleHTML.js'
import makeBusStopSelectionHtml from './Modules/BusStopSelectionHTML.js'
import socket from './Modules/APIConnection.js'


let busStops = ["1", "2"]
let busStopsInput = document.getElementsByClass('bus-stop-selection')

function updateSchedule(schedule){
  const makeHtml = makeScheduleHtml.bind(null, schedule)
  const filteredScheduleHtml = busStops
    .map((busStop) => makeHtml(busStop))
    .join('<br>')
  document.getElementById('schedule').innerHTML = filteredScheduleHtml
}

socket.on('schedule', (schedule) => {
  updateSchedule(schedule)
  setInterval(updateSchedule, 15000, schedule)
  localStorage.setItem('schedule', JSON.stringify(schedule))
})

document.getElementById('bus-stop').innerHTML = makeBusStopSelectionHtml()