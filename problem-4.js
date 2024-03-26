function password(object) {
   if(!object.name || !object.birthYear || !object.siteName){
    return "invalid"
   }
   const birthYear = String(object.birthYear)
   if(birthYear.length !== 4){
    return "invalid"
   }
  
    return `${
    object.siteName.charAt(0).toUpperCase() + object.siteName.slice(1)
  }#${object.name}@${object.birthYear}`;
}

// const object ={ name: "kolimuddin" , birthYear: 1999 , siteName: "google" };
// console.log(password(object));
