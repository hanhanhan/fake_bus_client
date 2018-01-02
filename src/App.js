'use strict'

import makeScheduleHtml from './Modules/ScheduleHTML.js'
import makeBusStopSelectionHtml from './Modules/BusStopSelectionHTML.js'
import socket from './Modules/APIConnection.js'

import './Resources/Skeleton-2.0.4/css/normalize.css'
import './Resources/Skeleton-2.0.4/css/skeleton.css'
import './Resources/custom.css'


let busStops = ["1", "2"]

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

document.getElementById('bus-stop-selection').innerHTML = makeBusStopSelectionHtml()
let busStopsInput = document.getElementsByClassName('bus-stop-selection')