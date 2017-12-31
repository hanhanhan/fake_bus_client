'use strict'

export default function makeBusStopSelectionHtml(){   
    let busStopsArray = []
    let stopHTML
    for (let stop = 1; stop++; stop < 11){  
        stopHTML = 
        `<label>
            <input type="checkbox" hidden value="${stop}" size="10" class="bus-stop">
            <span>${stop}</span>
        </label>`

        // busStopsArray.push(stopHTML)
    }
    // return busStops.join('')
    return `<h1>Hi I am not a button</h1>`
}