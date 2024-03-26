function deleteInvalids(array){
    if(Array.isArray(array) === false){
        return "Invalid Array";
    }

    const valid = [];
    for(const arr of array){
      if(typeof arr === "number" && !isNaN(arr) && valid.includes(arr) === false){
        valid.push(arr)

      }  
    }
    return valid;
}

// const numbers = {num: [ 1 , 2 , 3 ]}
// console.log(deleteInvalids(numbers));