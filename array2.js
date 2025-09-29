let buah = [
    ["Apple", 10000],
    ["Watermelon", 15000],
    ["Banana", 7000],
    ["Orange", 12000],
  ];
  
  console.log(`${buah[2][1]}`)
  for (let b = 0; b < buah.length; b++){
    for (let k = 0; k < buah[b].length;k++){
      console.log(buah[b][k])
    }
  }
  for(let sebuah of buah){
    console.log(`Nama: ${sebuah[0]}, Harga: ${sebuah[1]}`);
  }