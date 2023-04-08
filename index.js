let d22 = document.querySelector('.d22')
let food = document.querySelector('.food')
let food_pos = food.getBoundingClientRect()


setInterval(() => {
    d22.classList.toggle('mouse_open')
}, 300);

let body = window
let x = 100
let y = 100

window.onkeydown = (event) => {
    switch (event.which) {
        case 38:
            y -= 25
            d22.style.rotate = "270deg"
            moveD22()
            break;
        case 40:
            y += 25
            moveD22()
            d22.style.rotate = "90deg"
            break;
        case 37:
            x -= 25
            d22.style.rotate = "180deg"
            moveD22()
            break;
        case 39:
            x += 25
            d22.style.rotate = "0deg"
            moveD22()
            break;
    }
}

function moveD22() {
    d22.style.translate = `${x}px ${y}px`

    let d22_pos = d22.getBoundingClientRect()

    if (d22_pos.x >= food_pos.x - 40 && d22_pos.x <= food_pos.x + 40 && d22_pos.y >= food_pos.y - 40 && d22_pos.y <= food_pos.y + 40) {
        food.style.display = "none"
        if (food.style.display === "none") {
            randomize()
        }
    }
}

function randomize(e) {
    let max = 100;
    food.style.display = "flex"
    food.style.top = `${ Math.floor(Math.random() * (max + 1)) }%`
    food.style.left = `${ Math.floor(Math.random() * max + 1) }%`
}

let seconds = document.querySelector('.seconds')

let model = document.querySelector('.model_window')

let s = 60

setInterval(() => {
    s -= 1
    seconds.innerHTML = '0:' + s

    if(s <= 0) {
        s = 0
    }
},1000)

setInterval(() => {
    model.style.display = 'block'
    d22.style.display = 'none'
},60000)

