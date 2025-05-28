function updateColock() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    h = h ? h : 12; 

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = `${h}:${m}:${s} ${ampm}`;
    document.getElementById("clock").textContent = time;
}
setInterval(updateColock, 1000);
updateColock();
