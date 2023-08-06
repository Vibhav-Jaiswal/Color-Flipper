let array = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


const button = document.getElementById('btn');
const color = document.getElementById('color');
const title = document.getElementById('title');

button.addEventListener('click' , changeColor)

function changeColor() {
    let hex = "#";
    for(let i=0;i<6;i++){
        let idx = Math.floor(Math.random()*array.length);
        hex += array[idx];
    }
    document.body.style.backgroundColor = hex;
    color.innerHTML = hex;
    button.style.backgroundColor = hex;
    title.style.color = hex;
}

