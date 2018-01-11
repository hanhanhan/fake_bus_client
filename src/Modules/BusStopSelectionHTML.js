export default function makeBusStopSelectionHtml(){   
    return `
    <select name="bus stop select" multiple="" class="ui dropdown" id="bus-stop-select">
        ${makeBusStopOptionHtml()}
    </select>
    `
}

function makeBusStopOptionHtml(){
    let busStopsArray = []
    let stopHTML

    // Header/default value
    busStopsArray.push(`
        <option value="">
            Nearest Bus Stops
        </option>
        `)
    
    // Numbered stops
    for (let stop = 1; stop < 11; stop++){  
        let stopHTML = 
        `<option value="${stop}">
            ${stop}
        </option>
        `
        busStopsArray.push(stopHTML)
    }

    return busStopsArray.join('') 
}