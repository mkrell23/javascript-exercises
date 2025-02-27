const sumAll = function(number1, number2) {
    if (typeof(number1) != "number" || typeof(number2) != "number"
        || number1 < 0 || number2 < 0
        || number1 % 1 != 0 || number2 % 1 != 0) {
        return "ERROR";
    }
    let total = 0;
    let higerNumber = 0;
    let lowernumber = 0;
    if (number1 >= number2)
    {   
        higerNumber = number1;
        lowernumber = number2;

    }else {
        higerNumber = number2;
        lowernumber = number1;
    }
    for (lowernumber; lowernumber <= higerNumber; lowernumber++){
        total = total + lowernumber;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
