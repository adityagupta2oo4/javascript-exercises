const leapYears = function(year) {
    const div_4 = (year%4 == 0);
    const div_100 = (year%100 == 0);
    const div_400 = (year%400 ==0);

    if(div_4){

        if(div_100){
            if(div_400){
                return true;

            }
            return false;
        }
        return true;

    }
    
    return false;

};

// Do not edit below this line
module.exports = leapYears;
