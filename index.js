// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

  const gifts = ["teddy bear", "drone", "doll"]

  function wrapGifts(gifts) {
      for (let i = 0; i < gifts.length; i++) {
          console.log(`Wrapped ${gifts[i]} and added a bow!`);
      }
      return gifts;
  }

  wrapGifts(gifts) */

  function writeCards(name, event) {
    let card = []
      for (let i = 0; i < name.length; i++) {
        card.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
      }
    return card
  }

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(n) {
    for (let i = n; i > 0; i--){
        console.log(i)
    }
    console.log(0)
}
countDown(10)

/*function countDown(n){
    let i = n
    while (i !== 0){
      console.log(i);
      i--
    }
    console.log(0)
  }
  
  countDown(10)*/