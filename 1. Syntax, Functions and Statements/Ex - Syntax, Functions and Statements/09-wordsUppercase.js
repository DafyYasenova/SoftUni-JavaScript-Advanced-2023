function wordsUppercase(string) {

    let pattern = /\w+/g;
    let newString = string.match(pattern);
    
    console.log(newString.join(", ").toUpperCase());
}
wordsUppercase('Hi, how are you?') // HI, HOW, ARE, YOU
wordsUppercase('hello') // HELLO