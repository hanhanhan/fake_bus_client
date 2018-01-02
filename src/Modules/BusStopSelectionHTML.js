'use strict'

export default function makeBusStopSelectionHtml(){   
    let busStopsArray = []
    let stopHTML
    for (let stop = 1; stop < 11; stop++){  
        stopHTML = 
        `<div class="bus-stop">
            <label>
                <input type="checkbox" hidden value="${stop}" size="10">
                <span>${stop}</span>
            </label>
        </div>`

        busStopsArray.push(stopHTML)
    }
    return busStopsArray.join('')
}