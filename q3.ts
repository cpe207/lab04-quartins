function primeNumber(a) {
  typeof a === 'number'
  if(a === 2){
    return "YES";
  }
  else if(a%2 === 0){
    return "NO";
  } 
  else {
    return "YES"
  }
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;
