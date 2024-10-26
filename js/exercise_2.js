//Declare una variable denominada challenge y asígnela a un valor inicial '30 Days Of JavaScript'
let challenge = '30 Days Of JavaScript';

// Imprima la cadena en la consola del navegador usando console.log()
console.log(challenge);

//Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(challenge.length);

//Cambie todos los caracteres de la cadena a letras mayúsculas usando el método toUpperCase()
console.log(challenge.toUpperCase());

//Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(challenge.toLowerCase());

//Corta (corta) la primera palabra de la cadena usando el método substr() o substring()
console.log(challenge.substring(3));

//Corta la frase Days Of JavaScript de 30 Days Of JavaScript
console.log(challenge.substring(0,2));

//Compruebe si la cadena contiene una palabra Script usando el método include()
console.log(challenge.includes('Script'));

//Divida la cadena en una matriz usando el método split()
console.log(challenge.split());

//Divida la cadena 30 días de JavaScript en el espacio usando el método split()
console.log(challenge.split(' '));

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena por la coma y la cambia a una matriz.
let companys = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(companys.split());
console.log(companys.split(','));
console.log(companys.split(', '));

//Cambie 30 días de JavaScript a 30 días de Node usando el método reemplazar()
console.log(challenge.replace('JavaScript', 'Node'));

//¿Cuál es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt()
console.log(challenge.charAt(15));

//¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()?
console.log(challenge.charCodeAt(11));

//Utilice indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(challenge.indexOf('a'));

//Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript
console.log(challenge.lastIndexOf('a'));

/*Utilice indexOf para encontrar la posición de la primera aparición de la palabra because en la
siguiente oración: 'You cannot end a sentence with because because because is a conjunction' */

//declaramos una nueva variable para la oracion
let sentence =  'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.indexOf('because'));

/* Utilice lastIndexOf para encontrar la posición de la última aparición de la palabra because en la
siguiente oración: 'You cannot end a sentence with because because because is a conjunction' */
console.log(sentence.lastIndexOf('because'));

/*Utilice la búsqueda para encontrar la posición de la primera aparición de la palabra because en
la siguiente oración: 'You cannot end a sentence with because because because is a conjunction' */
console.log(sentence.search('because'));

//Utilice trim() para eliminar cualquier espacio en blanco al principio y al final de una cadena. Por ejemplo, '30 Days Of JavaScript'
let space = '  30 Days Of JavaScript  ';

//Imprimo una string normal para luego hacer el del ejercicio para que se note la diferencia
console.log(space);
console.log(space.trim());

//Utilice el método startWith() con la cadena 30 Days Of JavaScript y haga que el resultado sea verdadero
console.log(challenge.startsWith('30'));

//Utilice el método terminaCon() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(challenge.endsWith('JavaScript'));

//Utilice el método match() para encontrar todas las a en 30 días de JavaScript
console.log(challenge.match(/a/g));

//Utilice concat() y combine '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
let string = '30';

console.log(string.concat("Days","Of","JavaScript"));

//Utilice el método repetir() para imprimir 30 días de JavaScript 2 veces
console.log(challenge.repeat(2));

//hecho por
let namestudent = 'Yair Guzman'

console.log(namestudent);