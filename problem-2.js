function checkName(name) {
    if(typeof name !== "string"){
        return "invalid"
    }else if(!isNaN(name)){
        return "invalid"
    }
  const goodAlphas = ["a", "y", "i", "e", "o", "w"];
  for (const goodAlpha of goodAlphas) {
    if (name.toLowerCase().endsWith(goodAlpha) === true) {
      return "Good Name";
    }
  }
  return "Bad Name";
}

// console.log(checkName(''));


