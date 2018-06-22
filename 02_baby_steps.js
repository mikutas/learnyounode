let sum = 0;
for (arg of process.argv.slice(2)){
  sum += Number(arg);
}
console.log(sum);
