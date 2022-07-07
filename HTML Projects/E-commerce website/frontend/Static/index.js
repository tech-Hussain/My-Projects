var x = 0;
var y = 1;
var entries = ["Comfort", "Quality", "Reliability", "Reasonable Price"];
setInterval(() => {
  document.getElementById("blinking").classList.toggle("visibility");
}, 500);
function trim(str, length) {
  document.getElementById("change_content").innerHTML = str.substr(0, length);
}
const decrease_func = () => {
  const decrease = setInterval(() => {
    var value = document.getElementById("change_content").innerHTML;
    trim(value, value.length - 1);
    if (value.length == 0) {
      clearInterval(decrease);
      if (x == 3) {
        x = 0
      }
      else {
        x += 1;
      }
    }
  }, 100);
}
const increase_func = () => {
  const increase = setInterval(() => {
    document.getElementById("change_content").innerHTML = entries[x];
    var value_0 = document.getElementById("change_content").innerHTML;
    trim(value_0, y);
    value_0 = document.getElementById("change_content").innerHTML;
    if (value_0 == entries[x]) {
      clearInterval(increase);
      y = 1;
    }
    else {
      y += 1
    }
  }, 100);
}
const changeui = () => {
  setTimeout(() => {
    setInterval(() => {
      value_1 = document.getElementById("change_content").innerHTML
      if (value_1.length == 0) {
        increase_func()
      }
      else if (value_1.length != 0) {
        decrease_func()
      }
    }, 2500);
  }, 2500);
};
document.querySelector("#sale2").addEventListener("mouseenter", () => {
  document.querySelector("#sale2").classList.add("sale1")
  document.querySelector("#sale2").classList.remove("sale2")
  document.querySelector("#sale1").classList.add("sale2")
  document.querySelector("#sale1").classList.remove("sale1")
})
document.querySelector("#sale2").addEventListener("mouseleave", () => {
  document.querySelector("#sale2").classList.add("sale2")
  document.querySelector("#sale2").classList.remove("sale1")
  document.querySelector("#sale1").classList.add("sale1")
  document.querySelector("#sale1").classList.remove("sale2")
})
document.querySelector("#sale1").addEventListener("mouseenter", () => {
  document.querySelector("#sale2").classList.add("sale1")
  document.querySelector("#sale2").classList.remove("sale2")
  document.querySelector("#sale1").classList.add("sale2")
  document.querySelector("#sale1").classList.remove("sale1")
})
document.querySelector("#sale1").addEventListener("mouseleave", () => {
  document.querySelector("#sale2").classList.add("sale2")
  document.querySelector("#sale2").classList.remove("sale1")
  document.querySelector("#sale1").classList.add("sale1")
  document.querySelector("#sale1").classList.remove("sale2")
})
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
if (window.innerWidth <= 530) {
  document.querySelector("#change_content").insertAdjacentHTML("beforebegin", `<br>`)
  document.querySelector("#change_content").insertAdjacentHTML("beforebegin", `<br>`)
}
                                         // SWIPER


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    870:{
      slidesPerView:2,
    },
    0:{
      slidesPerView:1,
    }
  },
});

///animation
var errorKey=[
  {
    visibility: "hidden",
    opacity: 0
  },
  {
    visibility: "visible",
    opacity: 1
  },
  {
    visibility: "visible",
    opacity: 1
  },
  {
    visibility: "visible",
    opacity: 1
  },
  {
    visibility: "visible",
    opacity: 1
  },
  {
    visibility: "hidden",
    opacity: 0,
  }
]
var errorTime={
  duration:5000,
}
try {
  if (document.getElementById("prompt").innerHTML=="Logged in Successfully") {
    document.getElementById("prompt").animate(errorKey,errorTime)
  }
} catch (error) {
  //////
}








