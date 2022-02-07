let text= document.getElementById("text")
let textEl="forgotton password? <a href='#'>/ click me</a> to recover password"
let username= document.getElementById("user")
let password=document.getElementById("password")
let loginInfo=["ebunoluwaakinwumi@gmail.com"]
username.textContent!=loginInfo[0]
function alerts() {
    if (username.textContent== loginInfo[0]){
        alert ("Thanks we will get back to you as soon as posible")
    }
    
}
function changeTexts() {
    text.textContent=textEl
}
let quest1= document.getElementById("quest1")
let quest2= document.getElementById("quest2")
let ans= document.getElementById("ans")
let multi1=9
let multi2=3
let sum= multi1*multi2

function result(){
    ans.textContent=sum
}
function start(){
    quest1.textContent=multi1
    quest2.textContent=multi2
}