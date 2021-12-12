const chai = require('chai'); //more advanced assert module
const expect = chai.expect; //assign the expect flavor of chai to our constants. Can also be should or assert

chai.use(require('chai-string')); //has methods like startsWith

const printLL = require('./index');

describe('return fix formatted log msg', () => {
    context('test the prefix and msg',()=>{
        it('positive test with pref and ok',()=>{
            expect(printLL("pref","ok")).to.startsWith("pref").endsWith("ok");
        });
        it('negative test with pref and ok',()=>{
            expect(printLL("2pref","ok2")).to.not.startsWith("pref").endsWith("ok");
        });
    });
    context('check the length',()=>{
        it('check the length without pref or msg',()=>{
            expect(printLL("","")).to.have.a.lengthOf(19);
        });
        it('check the length with single digit pref and msg',()=>{
            expect(printLL("_","_")).to.have.a.lengthOf(21);
        });
    });  
})