const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')

element1.addEventListener('click', ()=>{
    element1.innerHTML = "I've been clicked! <br> Try double clicking me."
})
element1.addEventListener('dblclick', ()=>{
    element1.innerHTML = "I've been double clicked! <br> Try single clicking me."
})

element2.addEventListener('mouseover', ()=>{
    element2.style.color = "white"
    element2.style.backgroundColor = "pink"
})

element2.addEventListener('mouseout', ()=>{
    element2.style.color = "white"
    element2.style.backgroundColor = "#BB33BB"
})

let positionY = 0;
let positionX = 0;

document.addEventListener('keyup', (event)=>{
    console.log(event.key)

    if (event.key == 'ArrowDown') {
        
    }
})
