const expect = require('chai').expect
const mocha = require('mocha')
const it = mocha.it
const describe = mocha.describe
const {secondz} = require('../index')
const {days} = require('./days')

describe('Working of date formater', function () {
  describe('Basic working', function () {
    it('Check today date is correct', function () {
      const t1 = secondz.getDate()
      expect(t1).to.equal('24:03:2021')
    })
    for(let i=0;i<days.length;i++){
      it(`Check todays day is correct in ${days[i].lang}` , function () {
        const t1 = secondz.getDay(days[i].code)
        expect(t1).to.equal(days[i].today)
      })
    }
    
  })
})
