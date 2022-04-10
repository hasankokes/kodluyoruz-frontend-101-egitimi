// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("Lutfen Adinizi Giriniz: ")
// id olduğu için başına diyez konur.!!
let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`