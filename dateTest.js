const dateConversion = () => {
    let date = new Date();
    console.log(date)
    let dateToString = date.toString();
    let slicedDate = dateToString.slice(0, -38);
    return slicedDate;
  };
  
  
console.log(dateConversion())