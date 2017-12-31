'use strict'

import makeScheduleHtml from './Modules/ScheduleHTML.js'
// import io from 'socket.io-client'
import socket from './Modules/APIConnection.js'

let busStops = ["1", "2"]

function update(schedule){
  
  const makeHtml = makeScheduleHtml.bind(null, schedule)

  const filteredScheduleHtml = busStops
    .map((busStop) => makeHtml(busStop))
    .join('<br>')

    document.getElementById('schedule').innerHTML = filteredScheduleHtml
}

socket.on('schedule', (data) => {
  document.getElementById('debug').innerHTML = JSON.stringify(data)
  update(data)
});


// let socket = io('http://127.0.0.1:5000/', 
//     {
//         transports: ['websocket'],
//     })

// // Long polling back-up method
// socket.on('reconnect_attempt', () => {
//     socket.io.opts.transports = ['polling', 'websocket'];
// })


// socket.on('schedule', (data) => {
//   update(data)
// });

