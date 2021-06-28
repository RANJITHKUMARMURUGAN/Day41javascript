let randomArr = new Array();
for (i = 0; i < 10; i++) {
    randomArr[i] = Math.floor(100 + Math.random() * 900);
}

randomArr.sort();
console.log(randomArr);

console.log("Second Greatest number: " + randomArr[randomArr.length - 2] +
 "\nSecond Smallest number: " + randomArr[1]);
