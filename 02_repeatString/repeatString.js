const repeatString = function(input_string,repeatition) {

    let output_string  = "";
    
    for(let i = 0; i<repeatition ;i++){
        output_string +=input_string;
    }

    
    return output_string;
};

// Do not edit below this line
module.exports = repeatString;
