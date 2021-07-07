/*var kata = "menahan lapar kerena puasa"
var newArr = []
var str = ""
for (let i=0; i<kata.length; i++) {    
  if (kata[i] != " ") {
    str += kata[i]    
  } else {
    newArr.push(str)
    str = ""
  } 
}
console.log(newArr)*/
/*var input = "1.9.9"
var newArr = Number(input.split(".").join(""))
var angka = String(newArr + 1)
output = []
for (let i=0; i<angka.length; i++) {
  output.push(angka[i])
}
console.log(output.join("."))*/

/*function toWeirdCase(string){
  //TODO
  var newArr = string.split(" ");
  var output = []
  for (let i=0; i<newArr.length; i++) {
    var str = '';
    for (let j=0; j<newArr[i].length; j++) {      
      if (j % 2 === 0 ) {
        str += newArr[i][j].toUpperCase()
      } else {
        str += newArr[i][j]
      }      
    }
    output.push(str)
  }
  return output.join(" ");
}

console.log(toWeirdCase( "String" ));//=> returns "StRiNg"
console.log(toWeirdCase( 'This is a test' ));//=> returns 'ThIs Is A TeSt'*/

/*var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  var output = [];
  for (let i=0; i<iterable.length; i++) {
    if (iterable[i] != iterable[i-1]) {
      output.push(iterable[i])
    }
  }
  return output
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) //== ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))         //== ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))       //== [1,2,3]*/

/*function angkaRomawi(angka) {
  var objek = {
    'I'    :      1,
    'V'    :      5,
    'X'    :      10,
    'L'    :      50,
    'C'    :      100,
    'D'    :      500,
    'M'    :      1000}
    var output = []
    for (let i=0; i<angka.length; i++) {
      output.push(objek[angka[i]])
    }
    var j = 0;
    var sum = 0
    while (j<output.length) {      
      if (output[j] >= output[j+1] || j == output.length-1) {
        sum += output[j]        
      } else {
        sum -= output[j]
      }
      j++      
    }
  console.log(output)          
  return sum;
}

console.log(angkaRomawi('XXI'))
console.log(angkaRomawi('CM'))
console.log(angkaRomawi("MCMXC"))
console.log(angkaRomawi("MMVIII"))*/

/*function digital_root(angka) {
  // you can only write your code here!
  angka = String(angka)
  if (angka.length <= 1) {
      return Number(angka)
  }  
  return digital_root(Number(angka[0]) + digital_root(angka.slice(1)))
}*/

/**decodeMorse = function(morseCode){
  //your code here
  var newArr = morseCode.split("   ")
  var output = []
  for (let i=0; i<newArr.length; i++) {
    var temp = newArr[i].split(" ")
    var str = ""
    for (let j=0; j<temp.length; j++) {
      if (MORSE_CODE[temp[j]]) {
        str += MORSE_CODE[temp[j]]
      } 
    }
    output.push(str) 
  
  }
  return output.join(" ").trim()
} */

/**function sumAll(arr) {
  if (arr[0]>=arr[1]) {
    if (arr[0] === arr[1]) {
      return arr[0]
    }    
    return arr[0] + sumAll([arr[0]-1, arr[1]])
  } else {
    return sumAll([arr[1], arr[0]])
  }
}
 */

/*function palindromeRec(words) {
  if (words.length <= 1) {
    return true
  } else if (words[0] !== words[words.length-1]) {
    return false
  } else {
    return palindromeRec(words.slice(1,words.length-1))
    } 
}

console.log(palindromeRec('kasurrusak'))*/

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for (var element1 of arr1) {    
    var ada = false
    for (var element2 of arr2) {
    var boleh = true  
      if (element1 === element2) {
        ada = true        
        break;        
      } else if (arr1.indexOf(element2) != -1) {
        boleh = false
      }
    if (boleh) {
      newArr.push(element2)
    }        
    }    
    if (!ada) {      
      newArr.push(element1)      
    }        
  }
  return newArr
}
