let str = prompt("soz yazin");
let regex = /[^a-z]/gi;
console.log(str.replace(/[^a-z]/gi, "").length);