import formatRouteTimes from './FormatRouteTimes.js'

const tableHeader = `
    <thead>
      <tr>
        <th><h3>Route</h3></th>
        <th><h3>Arriving In</h3></th>
      </tr>
    </thead>
`

function makeTableRow(routeSchedule){ 
    const [routeName, routeTimes] = routeSchedule
    const upcomingBuses = formatRouteTimes(routeTimes)

    return (`
    <tr>
        <td class="route route-${routeName}"><h4>${routeName}</h4></td>
        <td><h4>${upcomingBuses}</h4></td>      
    </tr>`
    )
}

export default function makeScheduleHtml(schedule, busStop){

    let routesSchedule = schedule[busStop]
    let routes = Object.entries(routesSchedule)

    return (`
    <h2>Bus Stop ${busStop}</h2>
    <table class="u-full-width">
      ${tableHeader}
      <tbody>
        ${routes
            .map((routeSchedule) => makeTableRow(routeSchedule))
            .join('')}
      </tbody>
    </table>`
    )
}
