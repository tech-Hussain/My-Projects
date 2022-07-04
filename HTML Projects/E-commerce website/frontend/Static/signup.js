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