'use strict'

import makeScheduleHtml from './Modules/ScheduleHTML.js'
import socket from './Modules/APIConnection.js'
import makeBusStopSelectionHtml from './Modules/BusStopSelectionHtml'



let busStops = ["1", "2"]

function update(schedule){
  const makeHtml = makeScheduleHtml.bind(null, schedule)

  const filteredScheduleHtml = busStops
    .map((busStop) => makeHtml(busStop))
    .join('')

    document.getElementById('schedule').innerHTML = filteredScheduleHtml
}

socket.on('schedule', (schedule) => {
  update(schedule)
  setInterval(update, 15000, schedule)
})

// on document load, set busStops = 1, 2 => trigger update of schedule
const busStopsSelector = document.getElementById('bus-stop-selection')
busStopsSelector.innerHTML = makeBusStopSelectionHtml()
const busStopInputs = document.getElementsByClassName('bus-stop')
    .foreach(console.log(item))
// busStopsSelectors.onchange = event.target => {console.log(event.target)}