import io from 'socket.io-client'

export let socket = io('http://127.0.0.1:5000/', 
    {
        transports: ['websocket'],
    })

// Long polling back-up method
socket.on('reconnect_attempt', () => {
    socket.io.opts.transports = ['polling', 'websocket'];
})



