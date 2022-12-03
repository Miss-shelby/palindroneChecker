

let button = document.querySelector(".btn")
let result = document.querySelector(".result")

button.addEventListener("click",checkPalindrone)
//basically we want to check if the first two word and last two are same
function checkPalindrone() {
    let word = document.querySelector(".input-text").value;
  console.log(word)

  let len = word.length;
  console.log(len)

  //to get the first two letter of our inputvalue
  let start = word.substring(0, Math.floor(len/2))
  console.log(start)

  //to get the last two letter of our inputvalue
  let end = word.substring(len - Math.floor(len/2))
  console.log(end)

  //then flip the last two word so it would be same with first two word
  let flip= end.split("").reverse().join("")
  console.log(flip)

  if (start == flip) {
    result.innerHTML= `${word.toUpperCase()} is a Palindrone `
  }else{

    result.innerHTML= `${word.toUpperCase()} is not Palindrome`
  }
}