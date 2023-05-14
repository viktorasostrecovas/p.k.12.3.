window.onload = function() {
    let a = prompt("Iveskite pirma krastine");
    let b = prompt("Iveskite antra krastine");
    console.log(staciakampioperimetras(a,b));
}
function staciakampioperimetras(a,b) {
    return 2 * (a + b);
}