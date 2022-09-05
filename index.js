const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const passLength = Number.parseInt(prompt("Enter the length of your passwords: "))
const passOne = document.querySelector('#pass-one')
const passTwo = document.getElementById("pass-two")
let btnDiv = document.getElementById("btn-div")
let btn = document.createElement("button")
btn.textContent = "Generate Passwords"
btn.style.cssText = `font-weight: 500; font-size: 16px; line-height: 24px; color: white; background: #10b981; 
border: none; border-radius: 10px; display: flex; flex-direction: row; justify-content: center; align-items: center;
padding: 9px 17px 9px 15px; margin-bottom: 25px;`

btn.addEventListener('click', () =>{
    passOne.innerText = ""
    for(let i = 0; i < passLength; i++){
        let randomInt = getRandomNumber()
        passOne.innerText += characters[randomInt]
    }
    secondPass()
})

function secondPass(){
    passTwo.innerText = ""
    for(let i = 0; i < passLength; i++){
        let randomInt = getRandomNumber()
        passTwo.innerText += characters[randomInt]
    }
}

function getRandomNumber(){
    return Math.floor(Math.random()*characters.length)
}
btnDiv.appendChild(btn)
