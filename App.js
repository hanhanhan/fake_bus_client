'use strict'

import makeScheduleHtml from './Modules/ScheduleHTML.js'
import socket from './Modules/APIConnection.js'

let busStops = ["1", "2"]

function update(schedule){
  
  const makeHtml = makeScheduleHtml.bind(null, schedule)

  const filteredScheduleHtml = busStops
    .map((busStop) => makeHtml(busStop))
    .join('<br>')

    document.getElementById('schedule').innerHTML = filteredScheduleHtml
}

socket.on('schedule', (schedule) => {
  update(schedule)
  setInterval(update, 15000, schedule)
  localStorage.setItem('schedule', JSON.stringify(schedule))
})

console.log(socket)
