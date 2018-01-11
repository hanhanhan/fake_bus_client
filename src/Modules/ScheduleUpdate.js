let updateID

export default function(update, interval, schedule){
    
    clearInterval(updateID)
    updateID = setInterval(update, interval, schedule)

}

