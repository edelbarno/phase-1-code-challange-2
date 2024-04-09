function swapCase(string){
    let swappedString = '';
    for(let character of string){
    if(character === character.toUpperCase() ){
      //check if char is uppercase
      swappedString += character.toLowerCase();
      //convert uppercase to lowercase
      
        
    }else{
       swappedString += character.toUpperCase();
       
        
    
}
}
 return swappedString;
}

let String =swapCase('The Quick Brown Fox');

console.log(String);