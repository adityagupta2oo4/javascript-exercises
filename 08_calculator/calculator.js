const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arr =[]) {

  let s = arr.reduce((total,intialValue) =>{

    return total +=intialValue;
  },0);

  return s;
	
};

const multiply = function(arr = []) {

  let m = arr.reduce((total,intialValue) =>{

    return total *=intialValue;
  },1);

  return m;


};

const power = function(a,b) {

 return a**b;
	
};

const factorial = function(num) {
  let fac =1;
  for(let i = 1 ; i<= num ; i++){
    fac *=i;
  }
  if(num == 0){
    return 1;
  }

  return fac;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
