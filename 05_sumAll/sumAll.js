const sumAll = function(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR"
    }

    let sum = 0;
    let min;
    let max;
    if(a>b){
        min = b;
        max = a;
    }
    else{
        min = a;
        max = b;
    }
    for(let i = min ; i<=max ; i++){
        sum +=i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
