const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const characters2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let genetatePassword = document.querySelector('.btn__start')
let passwordEl1 = document.querySelector('#password__1') 
let passwordEl2 = document.querySelector('#password__2') 
// let random1  = Math.floor(Math.random()*characters.length)
// let random2 = Math.floor(Math.random()*characters.length)
// let randomcharacters1 = characters[random1]
// let randomcharacters2 = characters[random2]

genetatePassword.addEventListener("click", function () {
  passwordEl2.textContent = ''
  passwordEl1.textContent = ''  
    if(document.querySelector('.input-el').checked){
      for (let i=0; i<16; i++) { 
let random1  = Math.floor(Math.random()*characters.length)
let random2 = Math.floor(Math.random()*characters.length)
let randomcharacters1 = characters[random1]
let randomcharacters2 = characters[random2]
    passwordEl2.textContent += `${randomcharacters2}`
    passwordEl1.textContent += `${randomcharacters1}`
  }
} else {
  for (let i=0; i<16; i++) {  
    let random1  = Math.floor(Math.random()*characters2.length)
    let random2 = Math.floor(Math.random()*characters2.length)
    let randomcharacters1 = characters2[random1]
    let randomcharacters2 = characters2[random2]
        passwordEl2.textContent += `${randomcharacters2}`
        passwordEl1.textContent += `${randomcharacters1}`
      }
}
}
)

let password1Copy = passwordEl1.onclick = () => { 
  navigator.clipboard.writeText(passwordEl1.textContent);
  document.querySelector('.out1').textContent = 'Text copied'
  setTimeout( () => document.querySelector('.out1').textContent = '', 2000)
}



let password2Copy = passwordEl2.onclick = () => { 
  navigator.clipboard.writeText(passwordEl2.textContent);
  document.querySelector('.out2').textContent = 'Text copied'
  setTimeout( () => document.querySelector('.out2').textContent = '', 2000)
}
