function add(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b == 0){
        return "The division can not operate because the second number can't be 0";
    }else{
        return a / b;
    }
}

module.exports = {add,substract,multiply,divide};