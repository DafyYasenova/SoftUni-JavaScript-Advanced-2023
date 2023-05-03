function printAnArrayWithAGivenDelimiter(array, delimiter){

    console.log(array.join(delimiter));
}
printAnArrayWithAGivenDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'); // One-Two-Three-Four-Five
printAnArrayWithAGivenDelimiter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'	); //How about no?_I_will_not_do_it!
