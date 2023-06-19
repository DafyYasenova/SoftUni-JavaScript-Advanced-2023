const { assert } = require('chai');
let lottery = require('./lottery')


describe("lottery", () => {
  describe("buyLotteryTicket", () => {

    it("If the ticketPrice is greater than 0, and ticketCount is greater or equal to 1, and the type of ticketPrice  and ticketCount  is number", () => {
      assert.equal(lottery.buyLotteryTicket(1, 1, true), "You bought 1 tickets for 1$.")
      assert.equal(lottery.buyLotteryTicket(1, 2, true), "You bought 2 tickets for 2$.")
    });

    it("if parameters is invalid", () => {
      assert.throw(() => lottery.buyLotteryTicket('test', 1, true), "Invalid input!")
      assert.throw(() => lottery.buyLotteryTicket('2', 1, 'true'), "Invalid input!")
      assert.throw(() => lottery.buyLotteryTicket('', 1, []), "Invalid input!")
      assert.throw(() => lottery.buyLotteryTicket(1, 1, 'true'), "Invalid input!")
      assert.throw(() => lottery.buyLotteryTicket(1, [], true), "Invalid input!")
      assert.throw(() => lottery.buyLotteryTicket('test', 2, true), "Invalid input!")
      assert.throw(() => lottery.buyLotteryTicket(2, 1, 'true'), "Invalid input!")
    });
    it("If the value of the boolean buy is false", () => {
      assert.throw(() => lottery.buyLotteryTicket(2, 1, false), "Unable to buy lottery ticket!")
    });
  });

  describe("checkTicket", () => {

    it("if paramerers is invalid", () => {
      assert.throw(() => lottery.checkTicket('test', 1), "Invalid input!")
      assert.throw(() => lottery.checkTicket('test', []), "Invalid input!")
      assert.throw(() => lottery.checkTicket(1, []), "Invalid input!")
      assert.throw(() => lottery.checkTicket(true, []), "Invalid input!")
      assert.throw(() => lottery.checkTicket([], 1), "Invalid input!")
      assert.throw(() => lottery.checkTicket([], 'test'), "Invalid input!")
      assert.throw(() => lottery.checkTicket([], {}), "Invalid input!")
      assert.throw(() => lottery.checkTicket(1, 1), "Invalid input!")
      assert.throw(() => lottery.checkTicket(1, 1), "Invalid input!")
      assert.throw(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], 1), "Invalid input!")
      assert.throw(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3]), "Invalid input!")
    });

    it("If there is from 3 to 5 winning numbers in the ticket", () => {
      assert.equal(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 8, 9, 10]), "Congratulations you win, check your reward!")
      assert.equal(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 9, 10]), "Congratulations you win, check your reward!")

    });
    it("If all 6 are winning numbers", () => {
      assert.equal(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]), "You win the JACKPOT!!!");
    });

  });
  describe("secondChance", () => {

    it("if parameters is invalid", () => {
      assert.throw(() => lottery.secondChance(1, 1), "Invalid input!")
      assert.throw(() => lottery.secondChance(1, ''), "Invalid input!")
      assert.throw(() => lottery.secondChance(1, {}), "Invalid input!")
      assert.throw(() => lottery.secondChance(1, false), "Invalid input!")
      assert.throw(() => lottery.secondChance(false, []), "Invalid input!")
      assert.throw(() => lottery.secondChance('', []), "Invalid input!")
      assert.throw(() => lottery.secondChance(1, true), "Invalid input!")
    });

    it("if ticketID is not mach", () => {
      assert.equal(lottery.secondChance(5, [1, 2, 3, 8, 9, 10]), "Sorry, your ticket didn't win!")
    });
    it("if mached", () => {

      assert.equal(lottery.secondChance(5, [1, 2, 5, 8, 9, 10]), "You win our second chance prize!")
    });
  });
});