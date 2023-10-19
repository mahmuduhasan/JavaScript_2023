const userName = "Brad";
console.log(userName);

//Execution Context

const m = 100;
const o = 50;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(m, o);
const sum2 = getSum(5, 10);

console.log(sum1, sum2);
