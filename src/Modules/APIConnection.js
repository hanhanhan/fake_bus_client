'use strict'

import io from 'socket.io-client'


let socket = io('https://fakebus.hanhanhan.org/', 
    {
        transports: ['websocket'],
    })

// Long polling back-up method
socket.on('reconnect_attempt', () => {
    socket.io.opts.transports = ['polling', 'websocket'];
})

export default socket

