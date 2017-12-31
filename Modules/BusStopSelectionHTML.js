'use strict'

export default function makeBusStopSelectionHtml(){   
    let busStopsArray = []
    let stopHTML
    for (let stop = 1; stop < 11; stop++){  
        stopHTML = 
        `<label>
            <input type="checkbox" hidden value="${stop}" size="10" class="bus-stop">
            <span>${stop}</span>
        </label>`

        busStopsArray.push(stopHTML)
    }
    return busStopsArray.join('')
}