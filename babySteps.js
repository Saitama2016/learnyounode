let Sum = 0;
let Num = process.argv.filter((value) => 
     isNaN(Number.parseInt(value)) === false)

for (let i=0; i < Num.length; i++) {
    Sum = Sum + parseInt(Num[i]);
}

console.log(Sum);