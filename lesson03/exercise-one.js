const pets = ['cats', 'dogs', 'fish', 'birds', 'turtles'];

console.log(pets);

pets.push('guinea pigs'); 

console.log(pets);

pets.splice(2, 2);

console.log(pets);

const petsList = pets.join(', ');

console.log(petsList);