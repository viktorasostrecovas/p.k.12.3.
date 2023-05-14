window.onload = function() {
    let a = prompt("Iveskite ilgi");
    let b = prompt("Iveskite ploti");
    let c = prompt("Iveskite auksti");
    console.log(pavirsiausplotas(a,b,c));
}
function pavirsiausplotas(a,b,c) {
    return 2 * a * b + 2 * a * c + 2 * b * c;
}