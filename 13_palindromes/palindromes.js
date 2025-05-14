const palindromes = function (string) {
   let stripped = string.toLowerCase().replace(/[., \/#!$%\^&\*;:{}=\-_`~()]/g,"");
   let start = 0;
   let end = stripped.length - 1;
   for (let i = 0; i < end; i ++){
    if (stripped[i] != stripped[end]){
        return false
    }
    end --;
   }
   return true;
};



// Do not edit below this line
module.exports = palindromes;
