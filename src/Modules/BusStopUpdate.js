'use strict'

import makeBusStopSelectionHtml from './BusStopSelectionHTML'

let busStopsSection = document.getElementById('bus-stop-section')
busStopsSection.innerHTML = makeBusStopSelectionHtml()
