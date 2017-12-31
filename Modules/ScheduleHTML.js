'use strict'

// import {apiData} from './APIData.js'
import formatRouteTimes from './FormatRouteTimes.js'

// const schedule = apiData["schedule"]
const tableHeader = `
    <thead>
      <tr>
        <th>Route</th>
        <th>Arriving In</th>
      </tr>
    </thead>
`

function makeTableRow(routeSchedule){ 
    const [routeName, routeTimes] = routeSchedule
    const upcomingBuses = formatRouteTimes(routeTimes)

    return (
    `<tr>
        <td class="route route-${routeName}">${routeName}</td>
        <td>${upcomingBuses}</td>      
    </tr>`
    )
}

export default function makeScheduleHtml(schedule, busStop){

    let routesSchedule = schedule[busStop]
    let routes = Object.entries(routesSchedule)

    return (
    `<table class="u-full-width">
      ${tableHeader}
      <tbody>
        ${routes
            .map((routeSchedule) => makeTableRow(routeSchedule))
            .join("")}
      </tbody>
    </table>`
    )
}
