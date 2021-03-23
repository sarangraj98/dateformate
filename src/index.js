const { days } = require('./days')
function DateFormater () {
  // Get the current date in DD:MM:YYYY format
  this.getDate = function () {
    const today = new Date()
    const date = `${today.getUTCDate()}:0${today.getUTCMonth() + 1}:${today.getUTCFullYear()}`
    return date
  }

  // Get the current day name
  this.getDay = function () {
    const today = new Date()
    const day = today.getUTCDay()
    return days[day - 1]
  }
}
module.exports = DateFormater
