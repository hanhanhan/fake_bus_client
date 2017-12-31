'use strict'

import makeScheduleHtml from './Modules/ScheduleHTML.js'
// import {socket, io} from './Modules/APIConnection.js'
// import io from 'socket.io-client'

let bus_stops = ["1", "2"]

let filtered_schedule_html = bus_stops
    .map((bus_stop) => makeScheduleHtml(bus_stop))
    .join('<br>')

document.getElementById('schedule').innerHTML = filtered_schedule_html
// console.log(socket)






// Long polling back-up method
// socket.on('reconnect_attempt', () => {
//     socket.io.opts.transports = ['polling', 'websocket'];
// })


document.getElementById('debug').innerHTML = 'before'

// io.on('connection', (socket) => {
//   // cache schedule data
//   // console.log(type(data))
//   console.log('hey it connected!')
//   console.log(socket)
//   document.getElementById('debug').innerHTML = 'connection event dude'
// });

// doesn't work
// socket.on('message', (data) => {
//   // cache schedule data
//   // console.log(type(data))
//   console.log('hey thats my json')
//   console.log(data)
//   document.getElementById('debug').innerHTML = 'got some json event dude'

// });




// export let socket = io('http://127.0.0.1:5000/', 
//     {
//         transports: ['websocket']
//     })


// Long polling back-up method
// socket.on('reconnect_attempt', () => {
//     socket.io.opts.transports = ['polling', 'websocket'];
// })

// // works
// socket.on('connect', (data) => {
//   // cache schedule data
//   // console.log(type(data))
//   console.log('hey thats my json')
//   console.log(data)
//   document.getElementById('debug').innerHTML = 'got some json event dude'

// });

