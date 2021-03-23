function dateFormater(){
    this.getDate = function(){
       var today = new Date();
       const date = `${today.getUTCDate()}:${today.getUTCMonth()+1}:${today.getUTCFullYear()}`
       return date
    }
    return("Working")
}
module.exports = dateFormater;