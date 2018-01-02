import io from 'socket.io-client'

// socket
let socket = io('http://127.0.0.1:5000/', 
    {
        transports: ['websocket'],
    })

// Long polling back-up method
socket.on('reconnect_attempt', () => {
    socket.io.opts.transports = ['polling', 'websocket'];
})

export default socket

