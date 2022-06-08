var aud   = new Audio("audio/start.ogg")
var eat = new Audio("audio/eat.wav")
var move= new Audio("audio/move.wav")
var x=1
eat.volume = 0.8
aud.loop = true
aud.volume = 0.4
var ltptime = 0
var x_axis = 3, y_axis = 13;
var x_axisarr=[],y_axisarr=[]
var food_x = getRndInteger(1, 38), food_y = getRndInteger(1, 23);
foodrand()
var last_detected_keys;
var speed = 8;
var score = 0;
var food_voice;
var box;
var boxes_head=document.getElementById("boxes_head")
var real_rotate;
var snake=document.getElementsByClassName("boxes")
var key=localStorage.getItem("high-score")
if (key==null) {
    localStorage.setItem("high-score","0")
} 
document.getElementById("score_high").innerHTML=localStorage.getItem("high-score")
boxes_head.style.gridColumnStart=x_axis;
boxes_head.style.gridRowStart=y_axis;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function volume() {
    if (document.getElementById('volume_on').style.visibility === "visible") {
        if ((document.getElementById("start").style.display === "inline-block") && (document.getElementById("game_screen").style.display === "none")) {
            aud.pause()
        }
        document.getElementById("volume_off").style.visibility = "visible"
        document.getElementById("volume_on").style.visibility = "hidden"
    }
    else if (document.getElementById("volume_off").style.visibility === "visible") {
        if ((document.getElementById("start").style.display === "inline-block") && (document.getElementById("game_screen").style.display === "none")) {
            aud.play()
        }
        document.getElementById("volume_on").style.visibility = "visible"
        document.getElementById("volume_off").style.visibility = "hidden"
    }
    else {
        console.log(45);
    }
}
function changeinter() {
    document.getElementById("start").style.display = "none"
    document.getElementById("game_screen").style.display = "grid"
    aud.pause()
}
function main(cttime) {
    window.requestAnimationFrame(main)
    if (((cttime - ltptime) / 1000) >= (1 / (speed))) {
        ltptime = cttime
        gamemain()
    }
}
function foodrand() {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    food_x = getRndInteger(1, 38)
    food_y = getRndInteger(1, 23)
    for (let index = 0; index < x_axisarr.length; index++) {
        if (food_x==x_axisarr[index]&&food_y==y_axisarr[index]) {
            food_x = getRndInteger(1, 38)
            food_y = getRndInteger(1, 23)
            index=1;
    }
    }
    document.getElementById("food").style.gridColumnStart = food_x
    document.getElementById("food").style.gridRowStart = food_y
}
function gamemain() {
    var tranf=boxes_head.style.transform
    var rtate=Number(tranf.slice(7,-4))
    if (last_detected_keys == "right") {
        var new_rtate_right=rtate-rtate
        if(new_rtate_right-rtate==180 || new_rtate_right-rtate==(-180)){
            real_rotate=rtate
            x_axis-=1
        }
        else{
        real_rotate=new_rtate_right
        x_axis += 1
        }
    }
    else if (last_detected_keys == "left") {
        var new_rtate_left=rtate-(rtate-180)
        if(new_rtate_left-rtate==180 || new_rtate_left-rtate==(-180)){
            real_rotate=rtate
            x_axis+=1
        }
        else{
        real_rotate=new_rtate_left
        x_axis -= 1
        }
    }
    else if (last_detected_keys == "up") {
        var new_rtate_up=rtate-(rtate-(-90))
        if(new_rtate_up-rtate==180 || new_rtate_up-rtate==(-180)){
            real_rotate=rtate
            y_axis+=1
        }
        else{
        real_rotate=new_rtate_up
        y_axis -= 1
        }
    }
    else if (last_detected_keys == "down") {
        var new_rtate_down=rtate-(rtate-90)
        if(new_rtate_down-rtate==180 || new_rtate_down-rtate==(-180)){
            real_rotate=rtate
            y_axis-=1
        }
        else{
        real_rotate=new_rtate_down
        y_axis += 1
        }
    }
    for (let index = 0; index < x_axisarr.length; index++) {
        if(snake.length>1){
        if (x_axis==x_axisarr[index]&&y_axis==y_axisarr[index]) {
            speed=0
            end()
            return;
        }
    }
    }
    if (x_axis==39||x_axis==0) {
        speed=0
        end()
        return;
    }
    if (y_axis==24||y_axis==0) {
        speed=0
        end()
        return;
    }
    snakemover()
    if (boxes_head.style.gridColumnStart == food_x &&boxes_head.style.gridRowStart == food_y) {
        if (document.getElementById('volume_on').style.visibility === "visible") {
            eat.play()
        }
        box = document.createElement("span")
        var gamescreen = document.getElementById("game_screen")
        gamescreen.appendChild(box)
        box.classList.add("boxes")
        box.style.gridColumnStart = box.previousElementSibling.style.gridColumnStart
        box.style.gridRowStart = box.previousElementSibling.style.gridRowStart
        box.style.transform=`rotate(${real_rotate}deg)`
        score += 5
        foodrand()
    }
    document.getElementById("score_real").innerHTML = score
}
function snakemover() {
    x_axisarr=[]
    y_axisarr=[]
    for (let index = snake.length-1; index >= 0; index--) {
        if (index==0) {
            snake[index].style.gridColumnStart=x_axis
            snake[index].style.gridRowStart=y_axis
            snake[index].style.transform=`rotate(${real_rotate}deg)`
            x_axisarr.push(snake[index].style.gridColumnStart)
            y_axisarr.push(snake[index].style.gridRowStart)
        }
        else if (index>=1){
            snake[index].style.transform=snake[index].previousElementSibling.style.transform
            snake[index].style.gridColumnStart=snake[index].previousElementSibling.style.gridColumnStart
            x_axisarr.push(snake[index].style.gridColumnStart)
            snake[index].style.gridRowStart=snake[index].previousElementSibling.style.gridRowStart
            y_axisarr.push(snake[index].style.gridRowStart)
        }
        
    }
}
function keydetect(event) {
    let tranf=boxes_head.style.transform
    let rtate=Number(tranf.slice(7,-4))
    var key = event.keyCode
    if (key == 39) {
        if (rtate!=180) {
            if (document.getElementById('volume_on').style.visibility === "visible" && speed!=0) {
                move.play()
                move.playbackRate=3
            }
        }
        last_detected_keys = "right"
    }
    else if (key == 38) {
        if (rtate!=90) {
            if (document.getElementById('volume_on').style.visibility === "visible" && speed!=0) {
            move.play()
            move.playbackRate=3
            }
        }
        last_detected_keys = "up"
    }
    else if (key == 37) {
        if (rtate!=0) {
            if (document.getElementById('volume_on').style.visibility === "visible" && speed!=0) {
                move.play()
                move.playbackRate=3
            }
        }
        last_detected_keys = "left"
    }
    else if (key == 40) {
        if (rtate!=(-90)) {
            if (document.getElementById('volume_on').style.visibility === "visible" && speed!=0) {
                move.play()
                move.playbackRate=3
            }
        }
        last_detected_keys = "down"
    }
}
function end() {
    gamescreen=document.getElementById("game_screen")
    var gameover=new Audio("audio/game-over.wav")
    var gameover_div=document.createElement("div")
    var gameover_h1=document.createElement("h1")
    var gamescore=document.createElement("h1")
    gamescreen.appendChild(gameover_div)
    gameover_div.appendChild(gameover_h1)
    gameover_div.appendChild(gamescore)
    gamescore.style.fontSize="2rem"
    gameover_div.classList.add("gameover")
    gameover_h1.innerHTML="Game Over"
    gamescore.innerHTML=`Your Score is ${score}`
    if ((Number(localStorage.getItem("high-score")))<score) {
        localStorage.setItem("high-score",score)
        document.getElementById("score_high").innerHTML=localStorage.getItem("high-score")

    } 
    
    if (document.getElementById('volume_on').style.visibility === "visible") {
        gameover.play()
    }

}
window.requestAnimationFrame(main)