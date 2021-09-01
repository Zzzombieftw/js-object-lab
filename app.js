const guess = document.getElementById('Num')
const button = document.getElementById("hi")
const Ds = document.getElementById("displauNum")
let ranNum = Math.floor(Math.random() * 10)


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 30,
  // secretNum: Math.floor(Math.random() * 100),
  secretNum :10,
  preguess: [],
  winner: "",
  prevGuesses: [],
  play: function(){
    button.addEventListener('click', ()=>{
     const prevGuesses = []
      // let secretNum = Math.floor(Math.random() * 50)
     let secretNum = 10
      let input = submit.value
      if(input == secretNum){
        Ds.style.fontSize = "20px"
        Ds.style.color ="green"
        Ds.innerHTML = `You guessed right, the number was ${secretNum}`
       } else if(input < secretNum){
        Ds.style.color = "blue"
       Ds.innerHTML = "You guessed to low"
      }else if(input > secretNum){
       Ds.style.color = "red"
       Ds.innerHTML = "You guessed to high"
    }
    if(input != secretNum){
     prevGuesses.push(input)
     document.getElementById("tt").innerHTML = prevGuesses()
    }
    })


  }
}
game.play()





// while (guess) {
//   if(isNaN(guess) || guess < 1 || guess > 100){
//     alert(`nah, try again`)
    
//   } else if(guess > sercertNum){
//     promt(`too high`)
  
//   } else if(guess < smallestNum){
//     prompt(`too low`)
//   }
//   else if(guess === secretNum) {
//     Winner = true
//     alert(`winnner!!!`)
//   }
//  game.render()
//   preguess.push(guess)
// } 

