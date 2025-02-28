const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
    })
    
})

funtion removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
