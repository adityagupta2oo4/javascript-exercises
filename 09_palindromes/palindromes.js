const palindromes = function (str) {

    let end = str.length - 1;

    let start = 0;

    str = str.toLowerCase();



    let flag = true;

    function isAlpha(str){
        return /^[A-Za-z0-9]+$/.test(str);
    }

    while(start<end){

        //igonre if not alpha or number
        if(isAlpha(str.charAt(start)) == false){
            ++start;
            continue; // to check again avoid the change of start and end

        }
        else if(isAlpha(str.charAt(end))==  false){
            --end;
            continue;

        }

        if(str.charAt(start) != str.charAt(end)){
            flag = false;
        }

        start++;
        end--;
    }





    return flag;


};

// Do not edit below this line
module.exports = palindromes;
