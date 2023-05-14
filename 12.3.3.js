window.onload = function () {
    let r = prompt("Iveskite pirma apskritimo spinduli");
    let r1 = prompt("Iveskite antra apskritimo spinduli");
    console.log(apskritimoplotas(r,r1));
}
function apskritimoplotas(r,r1) {
    return Math.PI * r * r1;
}