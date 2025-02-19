const reverseString = function(input_string) {

    let reversed_string ="";
    let len = (input_string.length) -1;

    while((len) >= 0){
        reversed_string += input_string.charAt(len);
        len--;
    }

    return reversed_string;


};

// Do not edit below this line
module.exports = reverseString;
