const expect = require('chai').expect;

// JS code:
const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};

//Unit testing:
describe('bookSelection', function () {

  describe('isGenreSuitable', function () {
    it('with Thriller or Horror genre adn under 12', function () {
      let genre1 = 'Thriller';
      let genre2 = 'Horror';
      let age1 = 12;
      let age2 = 13;

      let result1 = bookSelection.isGenreSuitable(genre1, age1)
      let result2 = bookSelection.isGenreSuitable(genre2, age1)
      let result3 = bookSelection.isGenreSuitable(genre1, age2)
      let result4 = bookSelection.isGenreSuitable(genre2, age2)
      // ако жанра е Трилър или Ужас и възрастта е до 12г трябва да хвърли грешка
      expect(result1).to.equal(`Books with ${genre1} genre are not suitable for kids at ${age1} age`)
      expect(result2).to.equal(`Books with ${genre2} genre are not suitable for kids at ${age1} age`)
      // ако е Трилър или Ужас, но възрастта е над 12:
      expect(result3).to.equal(`Those books are suitable`);
      expect(result4).to.equal(`Those books are suitable`);
    });

    it('with non -Thriller or Horror', function () {
      let genre1 = 'Something';
      let genre2 = 'Non censure';
      let age1 = 12;
      let age2 = 13;

      let result1 = bookSelection.isGenreSuitable(genre1, age1)
      let result2 = bookSelection.isGenreSuitable(genre2, age1)
      let result3 = bookSelection.isGenreSuitable(genre1, age2)
      let result4 = bookSelection.isGenreSuitable(genre2, age2)
      // ако жанра НЕ Е Трилър или Ужас независимо от възрастта, 
      // не трябва да хвърли грешка, а съобяение:
      expect(result1).to.equal(`Those books are suitable`)
      expect(result2).to.equal(`Those books are suitable`)

      expect(result3).to.equal(`Those books are suitable`);
      expect(result4).to.equal(`Those books are suitable`);


    });
  });
  describe('isItAffordable', function () {
    it('with non-number price and budjet, should throw correct Error', function () {
      let price = '10';
      let budget = '20';
      // правим функция, която ще върне грешката, а не директно повикване
      let result1Func = () => bookSelection.isItAffordable(price, 30);
      let result2Func = () => bookSelection.isItAffordable(20, budget);

      expect(result1Func).to.throw(Error, 'Invalid input');
      expect(result2Func).to.throw(Error, 'Invalid input');
    });
    it('with more budjet than price, should return correct result', function () {
      let price = 20;
      let budget = 20;
      let price2 = 22.2;
      let budget2 = 33.3;

      let result1 = bookSelection.isItAffordable(price, budget)
      let result2 = bookSelection.isItAffordable(price2, budget2)

      expect(result1).to.equal(`Book bought. You have ${budget - price}$ left`);
      expect(result2).to.equal(`Book bought. You have ${budget2 - price2}$ left`);
    });
    it('with price more than budjet, should return correct result', function () {
      let price = 20;
      let budget = 10;
      let price2 = 22.2;
      let budget2 = 13.3;

      let result1 = bookSelection.isItAffordable(price, budget)
      let result2 = bookSelection.isItAffordable(price2, budget2)

      expect(result1).to.equal(`You don't have enough money`);
      expect(result2).to.equal(`You don't have enough money`);
      ;
    });
  });
  describe('suitableTitles', function () {
    it('with non-array books or non-string, should throw correct Error', function () {
      let arr = 'test';
      let arrCorect = [{ title: "The Da Vinci Code", genre: "Thriller" }];
      let genre = 22;

      let result1Func = () => bookSelection.suitableTitles(arr, 'neshosi')
      let result2Func = () => bookSelection.suitableTitles(arrCorect, genre);

      expect(result1Func).to.throw(Error, 'Invalid input');
      expect(result2Func).to.throw(Error, 'Invalid input');
    });
    it(`array is not array`, () => {
      expect(() => bookSelection.suitableTitles(1, "abc")).to.throw(Error);
    });

    it(`wantedGenre is not string`, () => {
      expect(() => bookSelection.suitableTitles([1, 2, 3], 1)).to.throw(Error);
    });

    // deep equal се използва за сравняване на масиви
    it(`works correct with 1 match`, () => {  
      let example = { title: "a", genre: "aa" };
      expect(bookSelection.suitableTitles([example], "aa")).to.deep.equal(["a"]);
    });

    it(`works correct with no match`, () => {
      let example = { title: "a", genre: "aa" };
      expect(bookSelection.suitableTitles([example], "aaa")).to.deep.equal([]);
    });
  });
});