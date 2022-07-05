if (window.innerWidth <= 870) {
    let height = `${(document.querySelector(".menu").offsetTop) + (Number(window.getComputedStyle(document.querySelector(".menu"), null).getPropertyValue("height").slice(0, -2)))}px`
    document.querySelector(".navbar").style.height = height
  }
  const menu = () => {
    let initialHeight = (document.querySelector(".menu").offsetTop) + (Number(window.getComputedStyle(document.querySelector(".menu"), null).getPropertyValue("height").slice(0, -2)))
    let navHeight = window.getComputedStyle(document.querySelector(".navbar"), null).getPropertyValue("height").slice(0, -2)
    let maxHeight = (document.querySelector(".nav").offsetTop) + (Number(window.getComputedStyle(document.querySelector(".nav"), null).getPropertyValue("height").slice(0, -2)))
  
    if ((Math.abs(navHeight - initialHeight)) < (Math.abs(navHeight - maxHeight))) {
      document.querySelector(".navbar").style.height = (maxHeight + 50) + "px"
      document.querySelector(".navbar").style.backdropFilter = "blur(10px)"
    }
    else if ((Math.abs(navHeight - initialHeight)) > (Math.abs(navHeight - maxHeight))) {
      document.querySelector(".navbar").style.height = initialHeight + "px"
      setTimeout(() => {
        document.querySelector(".navbar").style.backdropFilter = "blur(0px)"
  
      }, 500);
    }
  }
  function toggle(val0,val){
    if(val.type=="password"){
      val.type="text"
      val0.innerHTML="visibility_off"
    }
    else{
      val.type="password"
      val0.innerHTML="visibility"
    }
  }
function validate() {
    if (document.getElementsByName("username")[0].value.length<2) {
      console.log("hi");
      return false;
    }
}