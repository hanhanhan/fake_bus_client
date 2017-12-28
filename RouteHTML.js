const tableHeader = `
    <thead>
      <tr>
        <th>Route</th>
        <th>Arriving In</th>
      </tr>
    </thead>
`

function makeTableRow(){ 
    let route = 1
    let times = "4 min, 6 min"

    return (
    `<tr>
        <td class="route route-${route}">${route}</td>
        <td>${times}</td>      
    </tr>`
    )
}

export default function makeRouteHtml(bus_stop){

    return (
    `<table class="u-full-width">
      ${tableHeader}
      <tbody>
        ${["1", "2", "3"]
            .map(() => makeTableRow())
            .join("<br>")}
      </tbody>
    </table>`
    )
}
