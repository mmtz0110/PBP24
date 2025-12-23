let isSize = (size) => {
  switch (size){
    case "S":
      return "Small";
      break;
    case "M":
      return "Medium";
      break;
    case "L":
      return "Large";
      break;
    default:
      return "Not Identified";
      break;
  }
}
console.log(isSize("S"));