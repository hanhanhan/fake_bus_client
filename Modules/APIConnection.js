import io from 'socket.io-client'

export let socket = io('http://127.0.0.1:5000/', 
    { transports: ['websocket']
})

// Long polling back-up method
socket.on('reconnect_attempt', () => {
    socket.io.opts.transports = ['polling', 'websocket'];
})

// works in entry point file
socket.on('connect', (data) => {
  // cache schedule data
  // console.log(type(data))
  console.log('hey thats my json')
  console.log(data)
  document.getElementById('debug').innerHTML = 'got some json event dude'
});