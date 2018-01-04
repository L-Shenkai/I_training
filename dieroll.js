var getdieroll= function(diesize){
    var result=Math.ceil(diesize*Math.random());
    return result;
};
var Firstdie=getdieroll(6);
var Seconddie=getdieroll(6);
console.log(Firstdie);
console.log(Seconddie);
console.log(Firstdie+Seconddie);
