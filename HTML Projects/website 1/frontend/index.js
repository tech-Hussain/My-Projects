function scrollfind() {
    if (window.pageYOffset >= 170) {
        document.getElementById("go_up").style.visibility = "visible"
        document.getElementById("go_up").style.opacity = "1"
    } else {
        document.getElementById("go_up").style.opacity = "0"
        document.getElementById("go_up").style.visibility = "hidden"
    }
}
function scrolling() {
    window.scrollTo(0, 0)
    
}
var androidmenu_h=`${document.getElementById("androidmenu").offsetHeight}px`
var totalheight_menu=`${document.getElementById("androidmenu").offsetHeight+document.getElementById("nav").offsetHeight+document.getElementById("searchlogin").offsetHeight+10}px`
if ((window.getComputedStyle(document.getElementById("androidmenu"),null).getPropertyValue("display"))==="flex") {
    document.getElementById("header").style.height=androidmenu_h
}
const resmenu=()=>{
    if (document.getElementById("header").style.height===androidmenu_h) {
        document.getElementById("header").style.height=totalheight_menu
    }
    else if(document.getElementById("header").style.height===totalheight_menu){
        document.getElementById("header").style.height=androidmenu_h
    }
}
// function element_add(num,file) {
//             // document.getElementById("sliderimgdiv").style.transition="transform 0s"
//             // document.getElementById("sliderimgdiv").style.transform=`translate(${0}px)`
//             document.getElementById(`sldimg${num}`).remove()
//             var sldimg=document.createElement("img")
//             document.getElementById("sliderimgdiv").insertBefore(sldimg,document.getElementById("sliderimgdiv").childNodes[0])
//             sldimg.src=`img/${file}.jpg`
//             sldimg.classList.add("sliderimg")
//             sldimg.id=`sldimg${num}`
//             sldimg.alt="images"
//             sldimg.style.width=`${document.getElementById("mainslider").offsetWidth}px`
//             document.getElementById("sliderimgdiv").style.transition="transform 1s cubic-bezier(1, 0.01, 0.59, 0.05)"
//             document.getElementById("sliderimgdiv").style.transform=`translate(${0}px)`
    
// }
var arr=[]
function element_delete(num) {
            var children=document.getElementById("sliderimgdiv").children
            var childrens=[...children]
            document.getElementById("sliderimgdiv").style.transition="transform 0s"
            document.getElementById("sliderimgdiv").style.transform=`translate(${0}px)`
            var index_of_current=childrens.indexOf(document.getElementById(`sldimg${num}`))
            // console.log("index of current",index_of_current);
            for (let index = 0; index < index_of_current; index++) {
                arr.push(childrens[index])
                childrens[index].remove();
            }
            for (let index = 0; index < arr.length; index++) {
                document.getElementById("sliderimgdiv").appendChild(arr[index])
            }
}
const colordefiner=()=>{
    if (color==5) {
        color=0
    }
    else{}
}
var num1=3,num2=5,num3=7,num4=9,num5=11,num6=13
var color=1
var sliderimg_width_real,sliderimg_width;
var sliderimg=document.getElementsByClassName("sliderimg")
for (const iterator of sliderimg) {
    iterator.style.width=`${document.getElementById("mainslider").offsetWidth}px`
}
sliderimg_width=document.getElementById("sldimg0").offsetWidth
function sliderforward() {
    sliderimg_width_real=document.getElementById("sldimg0").offsetWidth
    for (const iterator of sliderimg) {
        iterator.style.width=`${document.getElementById("mainslider").offsetWidth}px`
    }
    for (let index = 0; index <= 5; index++) {
        if (index==color) {
            document.getElementById(`circle${index}`).style.border="2px solid rgb(99, 95, 95)"
            document.getElementById(`circle${index}`).style.backgroundColor="gray"
        }
        else{
            document.getElementById(`circle${index}`).style.border="2px solid rgb(27, 20, 20)"
            document.getElementById(`circle${index}`).style.backgroundColor="transparent"
        }
    }
    document.getElementById("sliderimgdiv").style.transition="transform 1s cubic-bezier(1, 0.01, 0.59, 0.05"
    document.getElementById("sliderimgdiv").style.transform=`translate(-${sliderimg_width_real}px)`
    sliderimg_width+=sliderimg_width_real
        if(sliderimg_width>=sliderimg_width_real*num1&&sliderimg_width<sliderimg_width_real*(num1+1)){
            element_delete(1)
            color+=1
            num1+=12
        }
        else if(sliderimg_width>=sliderimg_width_real*num2&&sliderimg_width<sliderimg_width_real*(num2+1)){

            element_delete(2)
            num2+=12
            color+=1
        }
        else if(sliderimg_width>=sliderimg_width_real*num3&&sliderimg_width<sliderimg_width_real*(num3+1)){   
            element_delete(3)
            num3+=12
            color+=1
        }
        else if(sliderimg_width>=sliderimg_width_real*num4&&sliderimg_width<sliderimg_width_real*(num4+1)){

            element_delete(4)
            num4+=12
            color+=1
        }
        else if(sliderimg_width>=sliderimg_width_real*num5&&sliderimg_width<sliderimg_width_real*(num5+1)){
            element_delete(5)
            num5+=12
            color=0
        }
        else if(sliderimg_width>=sliderimg_width_real*num6&&sliderimg_width<sliderimg_width_real*(num6+1)){
            element_delete(0)
            num6+=12
            color+=1
        }
        // n+=10,n1+=10,n2+=10,n2_+=10,n3+=10,n3_+=10,n4+=10,n4_+=10,n5+=10,n5_+=10
    }
var x=setInterval(sliderforward, 3000);
// var n=1,n_=0,n1=2,n2=3,n2_=4,n3=5,n3_=6,n4=7,n4_=8,n5=9,n5_=10
// const navigate_before=()=>{
//     clearInterval(x)
//     switch (sliderimg_width) {
//         case (sliderimg_width_real*n):      
//         case (sliderimg_width_real*n_):      
//             element_add(5,"tortoise")
//             color+=1
//             if (sliderimg_width==0) {
//                 sliderimg_width=sliderimg_width_real*6
//             }
//             else{
//                 sliderimg_width-=sliderimg_width_real
//             }
//             break;
//         case (sliderimg_width_real*n1):
//             element_add(0,"panda")
//             color+=1
//             if (sliderimg_width==0) {
//                 sliderimg_width=sliderimg_width_real*6
//             }
//             else{
//                 sliderimg_width-=sliderimg_width_real
//             }
//             break;
//         case (sliderimg_width_real*n2):
//         case (sliderimg_width_real*n2_):
//             element_add(1,"elephant")
//             color+=1
//             if (sliderimg_width==0) {
//                 sliderimg_width=sliderimg_width_real*6
//             }
//             else{
//                 sliderimg_width-=sliderimg_width_real
//             }
//             break;
//         case (sliderimg_width_real*n3):
//         case (sliderimg_width_real*n3_):
//             element_add(2,"rhino")
//             color+=1
//             if (sliderimg_width==0) {
//                 sliderimg_width=sliderimg_width_real*6
//             }
//             else{
//                 sliderimg_width-=sliderimg_width_real
//             }
//             break;
//         case (sliderimg_width_real*n4):
//         case (sliderimg_width_real*n4_):
//             element_add(3,"leopard")
//             color=0
//             if (sliderimg_width==0) {
//                 sliderimg_width=sliderimg_width_real*6
//             }
//             else{
//                 sliderimg_width-=sliderimg_width_real
//             }
//             break;
//         case (sliderimg_width_real*n5):
//         case (sliderimg_width_real*n5_):
//             element_add(4,"tiger")
//             color+=1
//             if (sliderimg_width==0) {
//                 sliderimg_width=sliderimg_width_real*6
//             }
//             else{
//                 sliderimg_width-=sliderimg_width_real
//             }
//             break;
//         default:
//             console.log("no match",sliderimg_width/sliderimg_width_real);
//             break;
//     }
//     setTimeout(() => {
//         x=setInterval(sliderforward, 3000);
//     }, 2000);
//     // for (let index = 0; index <= 5; index++) {
//     //     if (index==color) {
//     //         document.getElementById(`circle${index}`).style.border="2px solid rgb(99, 95, 95)"
//     //         document.getElementById(`circle${index}`).style.backgroundColor="gray"
//     //     }
//     //     else{
//     //         document.getElementById(`circle${index}`).style.border="2px solid rgb(27, 20, 20)"
//     //         document.getElementById(`circle${index}`).style.backgroundColor="transparent"
//     //     }
//     // }
    
// }
var opafirst=0
var opasecond=0
var opathird=0
var firstpos=(document.getElementById("flex1").getBoundingClientRect().right)
var secondpos=(window.innerWidth-(document.getElementById("flex3").getBoundingClientRect().right))+(document.getElementById("flex3").offsetWidth)
console.log(firstpos,secondpos);
document.getElementById("flex1").style.transform=`translate(-${firstpos}px)`
document.getElementById("flex3").style.transform=`translate(${secondpos}px)`
function main() {
    window.requestAnimationFrame(main)
    if (firstpos>0) {
        firstpos-=12
        opafirst+=0.02
    }
    else{
        opafirst=1
    }
    document.getElementById("flex1").style.transform=`translate(-${firstpos}px)`
    document.getElementById("flex1").style.opacity=opafirst
}
function main1() {
    window.requestAnimationFrame(main1)
    if (secondpos>0) {
        secondpos-=12
        opathird+=0.02
    }
    else{
        opathird=1
    }
    document.getElementById("flex3").style.transform=`translate(${secondpos}px)`
    document.getElementById("flex3").style.opacity=opathird
}
function main2(){
    window.requestAnimationFrame(main2)
    if (opasecond<1) {
        opasecond+=0.017
    }
    else{
        opasecond=1
    }
    document.getElementById("flex2").style.opacity=opasecond
}
window.addEventListener("scroll",()=>{
    let position=document.getElementById("flex1").getBoundingClientRect().top
    let position3=document.getElementById("flex2").getBoundingClientRect().top
    let position2=document.getElementById("flex3").getBoundingClientRect().top
    let windowsize=window.innerHeight/1.5
    if (position < windowsize) {
    if (window.getComputedStyle(document.getElementById('flex1')).getPropertyValue("visibility")===`hidden`) {
        window.requestAnimationFrame(main)    
        document.getElementById("flex1").style.visibility=`visible`
        }
    }
    if (position2 < windowsize) {
    if (window.getComputedStyle(document.getElementById('flex3')).getPropertyValue("visibility")===`hidden`) {
        window.requestAnimationFrame(main1)
        document.getElementById("flex3").style.visibility=`visible`
        }
    }
    if (position3 < windowsize) {
        if (window.getComputedStyle(document.getElementById('flex2')).getPropertyValue("visibility")===`hidden`) {
            window.requestAnimationFrame(main2)
            document.getElementById("flex2").style.visibility=`visible`
            }
        }
})
var val1=Number(document.getElementById("animate_1").innerHTML)
var val2=Number(document.getElementById("animate_2").innerHTML)
var val3=Number(document.getElementById("animate_3").innerHTML)
function animate(){
    window.requestAnimationFrame(animate)
    if (val1<41415) {
        document.getElementById("animate_1").innerHTML=val1
        val1+=45
    }
    else{
      document.getElementById("animate_1").innerHTML="41,415"
    }
    if (val2<16306) {
        document.getElementById("animate_2").innerHTML=val2
        val2+=18
    } else {
        document.getElementById("animate_2").innerHTML="16,306"
    }
    if (val3<48) {
        document.getElementById("animate_3").innerHTML=val3
        val3+=1
    } else {
        document.getElementById("animate_3").innerHTML=48
    }
}
window.addEventListener("scroll",()=>{
    let position=document.getElementById("flex-animate").getBoundingClientRect().top
    let windowsize=window.innerHeight/1.1
    if (position<windowsize) {
        // 41,415, 16,306, 48
        window.requestAnimationFrame(animate)
    }
})