const loadText = document.querySelector('.loading-text')
const bg = document.querySelctor('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring(){
    load = load + 1
    if (load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    bg.style.filter = `blur(${30 - (load / 100) * 30}px)`
    loadText.style.opacity = `${1 - load}/100}`
}

