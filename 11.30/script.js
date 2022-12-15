function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

// 1 užduotis

  const firstStringas = 'Brad Pitt';
//   console.log('Mėgstamiausias aktorius:', firstStringas);

  const secondStringas = 'Zoe Saldana';
//   console.log('Mėgstamiausia aktorė:', secondStringas);

  if(firstStringas.length > secondStringas.length){
    console.log('firstStringas');
  } else{
    console.log('secondStringas');
  }

  // 2 užduotis

  let name = 'Arūnė';

 let surname = 'Sysas';

  let birthday = 1983;

  let presentDay = 2022;

  let age = presentDay - birthday; 

  // const  result = 'As esu' + name + ' ' + surname + '. Man yra ' + age + ' metai.'


const result = `As esu ${name} ${surname}. Man yra ${presentDay - birthday} metai`;
  console.log(result);

  // console.log( ' Aš esu ' +  name , surname + '. Man yra '  + age + ' metai. ');



  //3 užduotis

  let favorite1 = 'Nicole Kidman';

  let favorite2 = 'Matt Smith';

  let newFavorite = favorite1 [3] + favorite1 [4] + favorite1 [5] + favorite2 [1] + favorite2 [2] + favorite2 [3] + favorite1 [10] + favorite1 [11] + favorite1 [12] + favorite2 [7] + favorite2 [8] + favorite2 [9];


  console.log(newFavorite)
 
//4 užduotis

const stringas = 'Once upon a time in Hollywood';

// stringas = stringas.replaceAll('O', '*').replaceAll('o', '*');

console.log(stringas.replaceAll('o', '*').replaceAll('O', '*'));


//5 užduotis

const randomSkaicius1 = rand (0, 2);
const randomSkaicius2 = rand (0, 2);
const randomSkaicius3 = rand (0, 2);
const randomSkaicius4 = rand (0, 2);

console.log('Atsitiktinis skaicius:' , randomSkaicius1);
console.log('Atsitiktinis skaicius:' , randomSkaicius2);
console.log('Atsitiktinis skaicius:' , randomSkaicius3);
console.log('Atsitiktinis skaicius:' , randomSkaicius4);





