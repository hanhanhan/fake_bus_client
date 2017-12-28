'use strict';

import {apiData} from './APIData.js'
import formatRouteTimes from './FormatRouteTimes.js'

const schedule = apiData["schedule"]
const tableHeader = `
    <thead>
      <tr>
        <th>Route</th>
        <th>Arriving In</th>
      </tr>
    </thead>
`

function makeTableRow(route_schedule){ 
    const [route_name, route_times] = route_schedule
    const upcomingBuses = formatRouteTimes(route_times)

    return (
    `<tr>
        <td class="route route-${route_name}">${route_name}</td>
        <td>${route_times}</td>      
    </tr>`
    )
}

export default function makeScheduleHtml(bus_stop){
    const routes_schedule = schedule[bus_stop]
    const routes = Object.entries(routes_schedule)

    return (
    `<table class="u-full-width">
      ${tableHeader}
      <tbody>
        ${routes
            .map((route_schedule) => makeTableRow(route_schedule))
            .join("<br>")}
      </tbody>
    </table>`
    )
}
