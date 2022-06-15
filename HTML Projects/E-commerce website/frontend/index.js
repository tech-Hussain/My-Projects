var x = 0;
var y = 1;
var entries = ["Comfort", "Quality", "Reliability", "Reasonable Price"];
setInterval(() => {
  document.getElementById("blinking").classList.toggle("visibility");
}, 500);
function trim(str, length) {
  document.getElementById("change_content").innerHTML = str.substr(0, length);
}
const decrease_func=()=>{
const decrease = setInterval(() => {
  var value = document.getElementById("change_content").innerHTML;
  trim(value, value.length - 1);
  if (value.length == 0) {
    clearInterval(decrease);
    if (x==3) {
      x=0
    }
    else{
    x += 1;
    }
  }
}, 100);
}
const increase_func=()=>{
const increase = setInterval(() => {
  document.getElementById("change_content").innerHTML = entries[x];
  var value_0 = document.getElementById("change_content").innerHTML;
  trim(value_0, y);
  value_0 = document.getElementById("change_content").innerHTML;
  if (value_0 == entries[x]) {
    clearInterval(increase);
    y = 1;
  }
  else{
    y+=1
  }
}, 100);
}
const changeui = () => {
  setTimeout(() => {
    setInterval(() => {
      value_1=document.getElementById("change_content").innerHTML
      if (value_1.length == 0) {
        increase_func()
      }
      else if(value_1.length!=0){
        decrease_func()
      }
    }, 2500);
  }, 2500);
};
document.querySelector("#sale2").addEventListener("mouseenter",()=>{
  document.querySelector("#sale2").classList.add("sale1")
  document.querySelector("#sale2").classList.remove("sale2")
  document.querySelector("#sale1").classList.add("sale2")
  document.querySelector("#sale1").classList.remove("sale1")
})
document.querySelector("#sale2").addEventListener("mouseleave",()=>{
  document.querySelector("#sale2").classList.add("sale2")
  document.querySelector("#sale2").classList.remove("sale1")
  document.querySelector("#sale1").classList.add("sale1")
  document.querySelector("#sale1").classList.remove("sale2")
})
document.querySelector("#sale1").addEventListener("mouseenter",()=>{
  document.querySelector("#sale2").classList.add("sale1")
  document.querySelector("#sale2").classList.remove("sale2")
  document.querySelector("#sale1").classList.add("sale2")
  document.querySelector("#sale1").classList.remove("sale1")
})
document.querySelector("#sale1").addEventListener("mouseleave",()=>{
  document.querySelector("#sale2").classList.add("sale2")
  document.querySelector("#sale2").classList.remove("sale1")
  document.querySelector("#sale1").classList.add("sale1")
  document.querySelector("#sale1").classList.remove("sale2")
})
if (window.innerWidth<=870) {
  let height=`${(document.querySelector(".menu").offsetTop)+(Number(window.getComputedStyle(document.querySelector(".menu"),null).getPropertyValue("height").slice(0,-2)))}px`
  console.log(height);
  document.querySelector(".navbar").style.height=height
  console.log(`${(document.querySelector(".menu").offsetTop)+(Number(window.getComputedStyle(document.querySelector(".menu"),null).getPropertyValue("height").slice(0,-2)))}px`)
}
const menu=()=>{
  let initialHeight=`${(document.querySelector(".menu").offsetTop)+(Number(window.getComputedStyle(document.querySelector(".menu"),null).getPropertyValue("height").slice(0,-2)))}px`
  console.log(initialHeight);
  let navHeight=window.getComputedStyle(document.querySelector(".navbar"),null).getPropertyValue("height")
  let maxHeight=`${(document.querySelector(".nav").offsetTop)+(Number(window.getComputedStyle(document.querySelector(".nav"),null).getPropertyValue("height").slice(0,-2)))}px`
  console.log(navHeight,initialHeight,maxHeight);

  if (navHeight===initialHeight) {
    document.querySelector(".navbar").style.height=maxHeight
    console.log(document.querySelector(".navbar").style.height)
    console.log(maxHeight);
  }
  else if(navHeight===maxHeight){
    document.querySelector(".navbar").style.height=initialHeight
    console.log("tum");
  }
  else{
    console.log("koi");
    console.log(navHeight,initialHeight,maxHeight);
  }
}