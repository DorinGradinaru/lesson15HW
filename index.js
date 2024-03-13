const time = 9584

// 1week 5days 
// 4days 10hours
// 7hours 50minutes
// less than an hour

const week = 10080
const day = 1440
const hour = 60
const minute = 1

const timeFormat = (remainingTime) => {
    if(remainingTime/week >= 1) {
        const weekMark = Math.floor(remainingTime/week) !== 1 ? 'weeks' : 'week'
        const dayMark = (remainingTime%week)/day > 1 ? 'days' : 'day'
        return `${Math.floor(remainingTime/week)}${weekMark}${Math.floor((remainingTime%week)/day)}${dayMark}`
    } 

    else if (remainingTime/day >= 1) {
        const dayMark = (remainingTime/week) !== 1 ? 'days' : 'day'
        const hourMark = (remainingTime%hour)/minute > 1 ? 'hours' : 'hour'
        return `${Math.floor(remainingTime/day)}${dayMark}${Math.floor((remainingTime%day)/hour)}${hourMark}`
    }

    else if (remainingTime/hour >= 1) {
        const hourMark = (remainingTime/hour) !== 1 ? 'hours' : 'hour'
        const minuteMark = (remainingTime/minute) > 1 ? 'minutes' : 'minute'
        return `${Math.floor(remainingTime/hour)}${hourMark}${Math.floor((remainingTime%hour)/minute)}${minuteMark}`
    }

    else if (remainingTime/minute >= 1) {
        const errorMark = 'less than an hour'
        return `${errorMark}`
    }

}
//console.log(timeFormat(time))
