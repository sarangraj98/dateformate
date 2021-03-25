const { days } = require('./days')
const today = new Date()
var formatDate = []
function DateFormater() {
  // Get the current date in DD:MM:YYYY format
  this.getDate = function () {
    let date = String(today.getUTCDate()).padStart(2, 0)
    let month = String(today.getUTCMonth() + 1).padStart(2, '0')
    return `${date}:${month}:${today.getUTCFullYear()}`
  }
  // Function for finding language specific day
  function findLanDay(lang) {
    let final = []
    for (let i = 0; i < days.length; i++) {
      if (days[i].name == lang) {
        final.push(days[i])
      }
    }
    return final[0]
  }
  // Get the current day name
  this.getDay = function (type) {
    const days = findLanDay(type)
    const dayIndex = today.getUTCDay()
    return days.arrays[dayIndex - 1]

  }
  // Function to add days to a specific date
  this.add = function (number, date) {
    if (date === 'today') {
      const daysinMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
      if (today.getUTCDate() + Number(number) > daysinMonth) {
        let date = String((Number(number) - (daysinMonth - today.getUTCDate())) + 1).padStart(2, 0)
        let month = String(today.getUTCMonth() + 8).padStart(2, '0')
        return `${date}:${month}:${today.getUTCFullYear()}`
      } else {
        let date = String(today.getUTCDate() + Number(number)).padStart(2, 0)
        let month = String(today.getUTCMonth() + 1).padStart(2, '0')
        return `${date}:${month}:${today.getUTCFullYear()}`
      }
    }
  }
  // Formating dates
  this.format = function (userFormat, lang) {
    const format = userFormat.split(/[\,:/-]+/);
    const match = userFormat.match(/[\,:/-]+/g)
    getSingleDate(format)
    getSingleYear(format)
    getSingleMonth(format)
    if (lang) {
      console.log(`${formatDate.join(`${match[0]}`)} ${this.getDay(lang)}`)
      return `${formatDate.join(`${match[0]}`)} ${this.getDay(lang)}`
    }else{
      console.log(`${formatDate.join(`${match[0]}`)}`)
      return `${formatDate.join(`${match[0]}`)}`
    }
  }
  function getSingleDay() {
    const day = days[0].arrays[today.getDay() - 1]
  }
  function getSingleDate(format) {
    let index;
    for (var i = 0; i < format.length; i++) {
      if (format[i] === 'DD' || format[i] === 'dd' || format[i] === 'd' || format[i] === 'D') {
        index = i
      }
    }
    if (format[index] == 'D' || format[index] == 'd') {
      const date = today.getUTCDate();
      formatDate[index] = date
    } else {
      const paddedDate = String(today.getUTCDate()).padStart(2, '0')
      formatDate[index] = paddedDate
    }
    const date = today.getUTCDate();
    formatDate[index] = date
  }
  function getSingleYear(format) {
    let index;
    for (var i = 0; i < format.length; i++) {
      if (format[i] === 'YYYY' || format[i] === 'yyyy' || format[i] === 'yy' || format[i] === 'YY') {
        index = i
      }
    }
    const date = today.getUTCFullYear();
    if (format[index] == 'YY' || format[index] == 'yy') {
      formatDate[index] = String(date).slice(-2)
    } else {
      formatDate[index] = date
    }
  }
  function getSingleMonth(format) {
    let index;
    for (var i = 0; i < format.length; i++) {
      if (format[i] === 'MM' || format[i] === 'mm' || format[i] === 'm' || format[i] === 'M') {
        index = i
      }
    }
    if (format[index] == 'm' || format[index] == 'M') {
      const date = today.getUTCMonth() + 1;
      formatDate[index] = date
    } else {
      const paddedMonth = String(today.getUTCMonth() + 1).padStart(2, '0')
      formatDate[index] = paddedMonth
    }
  }
  // Generate a random date
  this.random = function () {
    //console.log(new Date(new Date(2012, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime())))
    return new Date(new Date(2012, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime()));
  }
}
module.exports = DateFormater
