


const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let a = 0       //task counter

//create and delete todo

btn.addEventListener('click', (e) => {
    if (input.value === '') return      //remove the empty line
      
    createDeleteElements(input.value)
    input.value = ''  
})

function createDeleteElements(value) {
 

let li = document.createElement('li')     // create li
li.className = 'li'

li.innerText = value
a++  //task counter

const btn1 = document.createElement('button')      // create button del
btn1.className = 'btn1'

btn1.innerHTML = "<img src='trash.svg' width='20' height='20'>"
li.appendChild(btn1)

total.innerText = a;



//// remove todo



btn1.addEventListener('click', (e) => {    // create an event for the button 
setTimeout(()=> {
    result.removeChild(li)                     // so that when clicked, the line is deleted
   
    a--                     //task counter
    total.innerText = a
},2000)
})

//toggle class active

li.addEventListener('click', (e) => {
    li.classList.toggle('li-active')
})

total.innerTex =a   //task counter

result.appendChild(li)

}


const check = document.createElement('input');
check.type = 'checkbox';
check.addEventListener('change', () => recount ())

item.appendChild(check);
li.appendChild(item);
check.className = 'check'
