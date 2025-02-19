const removeFromArray = function(input_array,...args) {
    let newArray = [];

    input_array.array.forEach(element => {

        if(!args.includes(element))
            newArray.push(element);
        
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
