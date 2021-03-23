const expect = require('chai').expect
const DateFormater = require('../src/index')
const mocha = require('mocha')
const it = mocha.it
const describe = mocha.describe

describe('Working of date formater', function () {
  describe('Basic working', function () {
    it('Check today date is correct', function () {
      const x = new DateFormater()
      const t1 = x.getDate()
      expect(t1).to.equal('23:03:2021')
    })
    it('Check todays day is correct', function () {
      const x = new DateFormater()
      const t1 = x.getDay()
      expect(t1).to.equal('Tuesday')
    })
  })
})
