const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i=0 ;       //task counter

//create and delete todo

btn.addEventListener('click', (e) => {
    if (input.value === '') return          //remove the empty line
    createDeleteElements(input.value)
    input.value = ''  
})

function createDeleteElements(value) {
 i++  //task counter

let li = document.createElement('li')     // create li
li.className = 'li'
li.innerText = value

const btn1 = document.createElement('button')      // create button del
btn1.className = 'btn1'
btn1.innerText = 'del'
li.appendChild(btn1)

//// remove todo

btn1.addEventListener('click', (e) => {     // create an event for the button 
    result.removeChild(li)                     // so that when clicked, the line is deleted

    i--                     //task counter
    total.innerText = i
    
})

//toggle class active

li.addEventListener('click', (e) => {
    li.classList.toggle('li-active')
})

total.innerTex =i   //task counter

result.appendChild(li)

}