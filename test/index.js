const expect = require('chai').expect
const mocha = require('mocha')
const it = mocha.it
const describe = mocha.describe
const {secondz} = require('../index')
const {days} = require('./days')
const today = new Date()

describe('Working of date formater', function () {
  describe('Basic working', function () {
    it('Check today date is correct', function () {
      const t1 = secondz.getDate()
      expect(t1).to.equal('25:03:2021')
    })
    for(let i=0;i<days.length;i++){
      it(`Check todays day is correct in ${days[i].lang}` , function () {
        const t1 = secondz.getDay(days[i].code)
        expect(t1).to.equal(days[i].today)
      })
    }
    for(let i=0;i<5;i++){
      it(`Check adding day is correct ${i} addition` , function () {
        const t1 = secondz.add(i,'today')
        expect(t1).to.equal(`${today.getUTCDate()+i}:0${today.getUTCMonth() + 1}:${today.getUTCFullYear()}`)
      })
    }
    it(`Check adding day greater than number of days within 1 month` , function () {
      const t1 = secondz.add(10,'today')
      expect(t1).to.equal(`05:10:2021`)
    })
    it(`Check for correct spliting the format` , function () {
      secondz.format('DD-m-YYYY','Ml')
    })
    it(`Check for random date` , function () {
      secondz.random()
    })
    it(`Find the day on passing date` , function () {
      const day = secondz.findDay('08/11/1998')
      expect(day).to.equal('Tuesday')
    })
  })
})
