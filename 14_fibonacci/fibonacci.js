const fibonacci = function(end) {
    if (parseInt(end) >= 0){
        let total = 0;
        let next = 1;
        for (i = 0; i < end; i++){
            let temp = total;
            total = next;
            next = total + temp;
        }
    
        return total;
    }
    else{
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
