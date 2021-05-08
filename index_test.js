var expect = chai.expect;

//wasn't able to get this to work unfortunately
describe("index.js", () => {
    describe("index.js", () => {
        it("is supposed to read the length of the deck", () => {     
            const testDeck = new Deck();
            testDeck.deck = [1,2,3,4];

            expect((testDeck.numberOfCards()).to.have.lengthOf(4));
        })
    })
})