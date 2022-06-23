function time() {
    var time = new Date
    var day = time.toLocaleDateString('en-AU', { weekday: "short" })
    var date = time.toLocaleDateString('en-AU', { day: "2-digit", month: 'short' })
    var curtime = time.toLocaleTimeString('en-AU', { timeStyle: 'short' })
    document.getElementById("time").innerHTML = `${day} | ${date} | ${curtime}`
}
time()
setInterval(() => {
    time()
}, 5000);