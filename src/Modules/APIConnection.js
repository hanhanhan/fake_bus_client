'use strict'

import io from 'socket.io-client'


let socket = io('http://localhost:5000/', 
    {
        transports: ['websocket'],
    })

// Long polling back-up method
socket.on('reconnect_attempt', () => {
    socket.io.opts.transports = ['polling', 'websocket'];
})

export default socket

