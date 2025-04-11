const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 20
let LPaddleHeight = 100
let LPaddleSpeed = 5
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = 70
const ballRadius = 20
const ball = document.createElement('div')
document.body.appendChild(ball)
let ballXPosition = windowHeight / 2 - ballRadius
let ballYPosition = windowHeight / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1

let score = 0
const scoreDisplay = document.createElement('div')
document.body.appendChild(scoreDisplay)
scoreDisplay.style.position = "absolute"
scoreDisplay.style.top = "10px"
scoreDisplay.style.left = "10px"
scoreDisplay.style.color = "black"
scoreDisplay.innerHTML = `Score: ${score}`

function updateScore() {
    score = score + 1
    scoreDisplay.innerHTML =`Score: ${score}`
}

let level = 1
const levelDisplay = document.createElement('div')
levelDisplay.style.position = "absolute"
levelDisplay.style.top = "40px"
levelDisplay.style.left = "10px"
levelDisplay.style.color = "black"
levelDisplay.innerHTML = `Level: ${level}`

function updateLevel() {
    if (score % 5 === 0 ) {
        level = level + 1
        ballSpeed = ballSpeed + 1
        levelDisplay.innerHTML = `Level ${level}`
    }
}

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed *ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth

    if(
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
        updateScore()
        updateLevel()

    }
}

createBall()

function createBall() {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "violet"
    ball.style.position = "absolute"
    ball.style.top = `${ballXPosition}px`
    ball.style.left =`${ballXPosition}px`
}

createLPaddle()

function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width =  `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'black'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = `${LPaddleXPosition}px`
    LPaddle.style.top = `${LPaddleYPosition}px`
}

wKey = false
sKey = false

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})

document.addEventListener('keyup', (evemt) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate() {
    if (ballXPosition  - ballRadius <= 0) {
        document.getElementById("message").textContent = "Game Over!"
        return;
    }

    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}
animate()
