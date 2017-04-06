var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});




function map (input,element){
  var output =[];
  input.forEach(function(indexEntry , i){
    output.push(element(indexEntry)) ;
  });
  console.log(output);
}

// input is array word
// function called map to do :
// loop through each element of the array
// call other fun to return each array elemnt length

