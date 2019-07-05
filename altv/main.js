

var tre = 'fizz';
var cinque = 'buzz';
var entrambi = 'fizzbuzz';

var contenuto;

for (var i = 1; i <= 100; i++) {
  // resto dell-indice diviso 3 e 5
  var fuzz = i % 3;
  var buzz = i % 5;

  // se il resto di buzz e fuzz è 0 per entrambi
  //stampo fuzz e buzz e skippo di uno l-indice
  if (buzz == 0 && fuzz == 0) {
    console.log(i,entrambi);
    //stampo in pagina un li
    contenuto = document.getElementById('numero').innerHTML;
    document.getElementById('numero').innerHTML  = contenuto + "<li>" + i + " " + tre + cinque + "</li>";
    //comando per far saltare un giro all-indice e andare al ciclo successivo
    continue;
  }
  // se il resto fuzz 3 è uguale a 0  stampo fuzz
  else if (fuzz == 0) {
    console.log( i,tre);
    //stampo in pagina un li
    contenuto = document.getElementById('numero').innerHTML;
    document.getElementById('numero').innerHTML  = contenuto + "<li>" + i + " " + tre + "</li>";

  }
  // se il resto buzz 5 è uguale a 0  stampo buzz
  else if (buzz == 0) {
    console.log( i,cinque);
    //stampo in pagina un li
    contenuto = document.getElementById('numero').innerHTML;
    document.getElementById('numero').innerHTML  = contenuto + "<li>" + i + " " + cinque + "</li>";

  }
  // se il resto è diverso da 0 sia per 5 che 3 allora stampo l-indice
  else{
    console.log(i);
    contenuto = document.getElementById('numero').innerHTML;
    document.getElementById('numero').innerHTML  = contenuto + "<li>" + i + " " + "</li>";

  }
}






//
