let array = ['red','black','green','yellow','pink','orange','maginta','blue'];
const button = document.getElementById('btn');
const color = document.getElementById('color');
const title = document.getElementById('title');
const text = document.getElementById('text');

button.addEventListener('click' , changeColor);

function changeColor() {
    let idx = Math.floor(Math.random()*array.length);

    document.body.style.backgroundColor = array[idx];
    color.textContent = array[idx];
    button.style.backgroundColor = array[idx];
    title.style.color = array[idx];
    
    if(array[idx] === 'black'){
       text.style.color = 'white';
       button.style.color = 'white';
    }else{
        text.style.color = 'black';
        button.style.color = 'black';
    }
} 
