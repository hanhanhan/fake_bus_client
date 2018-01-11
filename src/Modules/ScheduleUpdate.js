let updateID
let earlier = Date.now()

function updateFrame(update, interval, schedule){
    if ((Date.now() - earlier) > interval){
        update(schedule)
        console.log('updated!' + Date.now())
        earlier = Date.now()
    } else {
        return
    }
}

export default function(update, interval, schedule){
    
    clearInterval(updateID)
    let uf = updateFrame.bind(null, update, interval, schedule)
    updateID = requestAnimationFrame(uf)
    // updateID = setInterval(update, interval, schedule)

}

