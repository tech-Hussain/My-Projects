var x=1;
var entries=["Comfort","Quality","Reliability","Reasonable Price"]
setInterval(() => {
    document.getElementById("blinking").classList.toggle("visibility")
}, 500);
const changeui=()=>{
    interval=setInterval(() => {
        var value=document.getElementById("change_content").innerHTML
        document.getElementById("change_content").innerHTML=value.slice(0,value.length-1)
        if (value.length==0){
                document.getElementById("change_content").innerHTML=entries[x]
                if (x==3) {
                 x=0
                } else {
                  x+=1    
                }  
            clearInterval(interval)
            setTimeout(() => {
                changeui()
                
            }, 1000);
        }
    }, 100);
}