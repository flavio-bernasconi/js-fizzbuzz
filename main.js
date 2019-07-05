var tre = 'fuzz';
var cinque = 'buzz';
var entrambi = 'fizzbuzz';


for (var i = 1; i <= 100; i++) {
  // resto dell-indice diviso 3 e 5
  var fuzz = i % 3;
  var buzz = i % 5;
  // se il resto di buzz e fuzz è 0 per entrambi
  //stampo fuzz e buzz e skippo di uno l-indice
  if (buzz == 0 && fuzz == 0) {
    console.log(i,entrambi);
    // continue;
  }
  // se il resto fuzz 3 è uguale a 0  stampo fuzz
  else if (fuzz == 0) {
    console.log( i,tre);
  }
  // se il resto buzz 5 è uguale a 0  stampo buzz
  else if (buzz == 0) {
    console.log( i,cinque);
  }
  // il resto stampo l-indice
  else{
    console.log(i);
  }
}







//
