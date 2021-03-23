var expect = require("chai").expect;
const dateFormater = require('../src/index');

describe("Working of date formater",function(){
    describe("Basic working",function(){
        it("Check root funciton invoke",function(){
            const data = dateFormater();
            expect(data).to.equal("Working")
        });
        it("Check today date is correct",function(){
            const x =new dateFormater();
            const t1 = x.getDate();
            expect(t1).to.equal("23:3:2021")
        });
    });
    
});