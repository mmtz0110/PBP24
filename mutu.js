let isMutu = (score) => {
  if (score >= 85 && score <= 100){
    return "A";;
  }else if (score >= 70 && score <= 84){
    return "B";
  }else if (score >= 65 && score <= 69){
    return "C";
  }else if (score >= 55 && score <= 64){
    return "D";
  }else if (score >= 0 && score <= 54){
    return "E";
  }else{
    return "Invalid input";
  }
}

console.log(isMutu(85));
console.log(isMutu(80));
console.log(isMutu(66));
console.log(isMutu(55));
console.log(isMutu(6));