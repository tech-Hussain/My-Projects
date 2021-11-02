document.querySelector(".input").addEventListener("focus", () => {
    document.querySelector("#textinp").style.border = "5px solid rgb(132, 221, 224)"
});
document.querySelector(".input").addEventListener("blur", () => {
    document.querySelector("#textinp").style.border = "5px solid rgb(31, 116, 122)"
});
var ans_org = "answer"
var srt="off"
var srt_val=""
var sqt_answers=[]
var sqt_val=[]
var val2;
function input(num) {
    if (num=="√") {
        srt="on"
        // console.log("Srt is on");
    }else{
        if (srt=='on') {
        if (isNaN(num)==false) {
            srt_val+=num
        } else {
            let ans1=Math.sqrt(Number(srt_val))
            sqt_answers.push(ans1)
            sqt_val.push(srt_val)
            // console.log(sqt_answers);
            srt_val=""
            srt="off"
            // console.log("Srt is off");
        }
    }}
    if (document.getElementById("input").value == ans_org) {
        if (!(num == "+" || num == "-" || num == "x" || num == ("÷") || num == ("%") || num == ("^"))) {
            document.getElementById("input").value = num
        }
        else {
            document.getElementById("input").value += ` ${num} `
        }
    } else {
        if (document.getElementById("input").value == "0") {
            document.getElementById("input").value = "";
        }
        if (document.getElementById("input").value == "Invalid Expression") {
            document.getElementById("input").style.color = "transparent"
            document.getElementById("input").value = "";
        }
        if (document.getElementById("input").value.length >= 55) {
            document.getElementById("warn").style.visibility = "visible"
            document.getElementById("warn").style.opacity = "1"
            setTimeout(() => {
                document.getElementById("warn").style.visibility = "hidden"
                document.getElementById("warn").style.opacity = "0"
            }, 2000);
            
        } else {
            let val = document.getElementById("input").value;
            let arr = val.split(" + ").join(",").split(" - ").join(",").split(" x ").join(",").split(" ÷ ").join(",").split(" ^ ").join(",").split("% ").join(",").split(",")
            lastin = arr[(arr.length) - 1]
            if ((lastin.startsWith("0") == true) && (lastin.startsWith("0.") == false)) {
                if (num != ".") {
                    val = val.slice(0, val.length - 1)
                    document.getElementById("input").value = val
                    console.log(val);
                }
            }
            if (lastin.length == 0) {
                if (num == ".") {
                    document.getElementById("input").value += "0"
                }
            }
            if (lastin.includes(".") == true) {
                if (num == ".") {
                    document.getElementById("input").value += ""
                }
                else {
                    if (num == "+" || num == "-" || num == "x" || num == ("÷") || num == ("^")) {
                        document.getElementById("input").value += ` ${num} `
                    }
                    else if(num=="%"){
                        document.getElementById("input").value += `${num} `
                    }
                    else {
                        document.getElementById("input").value += num
                    }
                }
            }
            else {
                if (num == "+" || num == "-" || num == "x" || num == ("÷") || num == ("^")) {
                    document.getElementById("input").value += ` ${num} `
                }
                else if(num=="%"){
                    document.getElementById("input").value += `${num} `
                }
                else {
                    document.getElementById("input").value += num
                }
            }

        }
    }
    // console.log(srt_val);
 

}

function remove() {
    if (document.getElementById("input").value == "0") {
        document.getElementById("input").value = "";
    }
}
const calculate = () => {
    if (srt_val.length>0) {
        let ans1=Math.sqrt(Number(srt_val))
            sqt_answers.push(ans1)
            sqt_val.push(srt_val)
    }
    let val = document.getElementById("input").value;
    val = val.replace("x", "*")
    val = val.replace("÷", "/")
    val = val.replace("^", "**")
    for (let index = 0; index < sqt_val.length; index++) {
        val = val.replace(`√${sqt_val[index]}`, sqt_answers[index])      
        
    }
    // if (srt_val.length>0) {
    //     numb=Number(srt_val)
    //     var srt_ans=Math.sqrt(numb)
    // }
    // val=val.replace(`√${srt_val}`,"srt_ans")
    try {
        ans = eval(val)
        document.getElementById("input").value = ans;
        ans_org = ans

    } catch (error) {
        document.getElementById("input").value = "Invalid Expression"
        document.getElementById("input").style.color = "rgb(243, 95, 107)"
    }
    srt_val=""
    sqt_answers=[]
    sqt_val=[]
    srt="off"
}

function clr() {
    if (document.getElementById("input").value != 0) {
        if (document.getElementById("input").value.length == 1) {
            document.getElementById("input").value = 0;

        }
        else if (document.getElementById("input").value == "Invalid Expression") {
            document.getElementById("input").value = 0;
            document.getElementById("input").style.color = "transparent"
        }
        else if (document.getElementById("input").value == ans_org) {
            document.getElementById("input").value = 0;

        }
        else {
            let val = document.getElementById("input").value
            document.getElementById("input").value = val.substring(0, (val.length) - 1);
        }
    }

}
var hold;
function del() {
    hold = setTimeout(() => {
        document.getElementById("input").value = 0
        document.getElementById("input").style.color = "transparent"
    }, 600);
}
function clrtime() {
    clearTimeout(hold)
}
var buttons = document.getElementsByClassName("buttons")
for (const iterator of buttons) {
    iterator.addEventListener("click", function () {
        document.getElementById("input").focus();
    })


}

function prs(event) {
    try {
        var x = event.key
        document.getElementById(x).click();
    } catch (error) {

    }
}
function dle() {
    if (event.key == "Backspace") {
        clr()
    }
    if (event.key == "Enter") {
        calculate()
    }
}
