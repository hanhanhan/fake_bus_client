'use strict'

import makeScheduleHtml from './Modules/ScheduleHTML.js'
import socket from './Modules/APIConnection.js'
import initialBusStops from './Modules/InitialBusStops.js'
import './Modules/BusStopUpdate.js'

let scheduleArg
const busStopsSelect = document.getElementById('bus-stop-select')


function update(schedule){
    const busStops = getBusStops()
    const makeHtml = makeScheduleHtml.bind(null, schedule)

    document.getElementById('schedule').innerHTML = 
        busStops.map((busStop) => makeHtml(busStop))
        .join('')
}

function getBusStops(){
    let busStops = Array.from(
        document.getElementById('bus-stop-select')
        .selectedOptions)
        .map((stop) => stop.value)

    if (busStops.length < 1) {
        return initialBusStops
    } else {
        return busStops
    }
}

socket.on('schedule', (schedule) => {
    update(schedule)
    setInterval(update, 15000, schedule)
    scheduleArg = schedule
})

function updateOnUI(){
    update(scheduleArg)
}

busStopsSelect.onchange = updateOnUI  
//NOTE: update.bind(null, scheduleArg) doesn't work

