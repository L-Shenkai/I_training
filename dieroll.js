var getdieroll= function(diesize){
    console.log(diesize);
    return Math.ceil(diesize*Math.random());
};
var Firstdie=getdieroll(6);
var Seconddie=getdieroll(6);
console.log(Firstdie);
console.log(Seconddie);
console.log(Firstdie+Seconddie);
