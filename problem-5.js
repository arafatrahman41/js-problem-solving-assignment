function monthlySavings(numbers, livingCost) {

    if(Array.isArray(numbers) === false){
        return "Invalid input"
    }else if(typeof livingCost !== "number"){
        return "Invalid input"
    }


    let sum = 0;
    for(const num of numbers){
        if(num >= 3000){
            const tax = num * 0.2;
            sum = (sum + num) - tax;
        }else{
            sum += num;
        }
    }
    const saving = sum - livingCost;
    
    if(saving >= 0){
        return saving;
    }
    else{
        return "earn more"
    }
}

// const numbers =[ 900 , 2700 , 3400]
// console.log(monthlySavings(10000,numbers ));
