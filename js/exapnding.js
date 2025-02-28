const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    removeActiveClasses()
})

funtion removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
