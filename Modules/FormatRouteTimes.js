'use strict'

export default function formatRouteTimes(route_times){
    const date = new Date()
    const timestamp = date.getMinutes()
    const minutes_differences = route_times
        .map(schedule_time => difference(timestamp, schedule_time))
        .slice().sort((a, b) => a - b)
        .slice(0, 2) // get the two shortest waits for busses

    const [next, next_next] = minutes_differences
    return `${next} min, ${next_next} min`
}

function difference(now, later){
    // Adjust for minutes differences between hours
    const diff = later - now
    return diff < 0 ? (diff + 60) : diff 
}