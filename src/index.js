const {days} = require('./days')
const today = new Date()
function DateFormater () {
  // Get the current date in DD:MM:YYYY format
  this.getDate = function () {
    const date = `${today.getUTCDate()}:0${today.getUTCMonth() + 1}:${today.getUTCFullYear()}`
    return date
  }
  // Function for finding language specific day
  function findLanDay(lang){
      let final = []
      for (let i =0;i<days.length;i++){
        if(days[i].name==lang){
          final.push(days[i])
        }
      }
      return final[0]
  }
  // Get the current day name
  this.getDay = function (type) {
    const days = findLanDay(type)
    const dayIndex = today.getUTCDay()
    return days.arrays[dayIndex-1]

  }
  
}
module.exports = DateFormater
