//votre code ici
const pairNumbers = (num1,num2) => {
  num1 = Number(num1)
  num2 = Number(num2)
  let arrayPairs = []
  for (let i = num1; i < num2 + 1; i++) {
    if (i % 2 === 0) {
      arrayPairs.push(i)
    }
  }
  return arrayPairs.toString()

};


export default pairNumbers;
