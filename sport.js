

//------------------------------------------------------------

const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");
const result1 = document.querySelector("#result1");
const total1 = document.querySelector("#total1");


let i=0

//add event to button

btn.addEventListener("click", (e) => {
  result.innerHTML += `<ul>${input.value}<button><img src='trash.svg' width='20' height='20'></button></ul>`;
  input.value = "";
  e.preventDefault();
});


//create and delete todo

btn1.addEventListener("click", (e) => {
  if (input1.value === '') return  //remove the empty line
  createDeleteElements(input1.value)
    input1.value = "";

  });


function createDeleteElements(value) {
i++
    const li= document.createElement('li') // create li
    li.className = 'li'
    li.innerText= value

    const btn2= document.createElement('button') // create button del
    btn2.className = 'btn2'
    btn2.innerHTML= "<img src='trash.svg' width='20' height='20'>"

   


li.appendChild(btn2)

// remove todo

btn2.addEventListener("click", (e) => { // create an event for the button 
                                        // so that when clicked, the line is deleted
    result1.removeChild(li)
    i--
    total1.innerText = i
     })

// toggle class active

    li.addEventListener("click", (e) => { 
    li.classList.toggle('li-active')
})

total1.innerText = i

    result1.appendChild(li)
}



  



