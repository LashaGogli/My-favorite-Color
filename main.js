// let title = document.querySelector("#title");
// let text = document.querySelector(".text");
// let circle = document.querySelector(".circle");
// let button = document.querySelector("button");
// let box = document.querySelector(".box");
// let secondButton = document.querySelector(".secondButton");
// let thirdbutton = document.querySelector(".thirdbutton");



// title.classList.add("title");



// text.style.color = "brown";
// text.style.fontSize = "25px";

// circle.style.width = "100px";
// circle.style.height = "100px";
// circle.style.backgroundColor = "yellow";
// circle.style.borderRadius = "50%";
// circle.style.marginTop = "50px";
// circle.style.margin = "0 auto";

// circle.addEventListener("mouseover", function () {
//     circle.style.backgroundColor = "blue";
// });

// button.style.width = "100px";
// button.style.height = "50px";
// button.style.fontSize = "14px";
// button.style.display = "block";
// button.style.margin = "0 auto";
// button.style.marginTop = "50px";



// button.addEventListener("click", function () {
//     box.style.display = "none";
// });


// secondButton.addEventListener("click", function () {
//     thirdbutton.classList.toggle("axaliclasi");
//     thirdbutton.style.display="block";




//   });

// let x;
// let texti = document.createElement("p");
// container.appendChild(texti);
// texti.innerText = "rame";
// texti.style.color = "red";
// texti.style.fontSize = "30px";
// texti.classList.add("texti");

let container = document.querySelector(".container");

let textP = document.createElement("p");
textP.classList.add("textP");
container.appendChild(textP);




let ADD = document.querySelector(".ADD");
let input = document.querySelector(".someInput");
let h1 = document.querySelector("h1");



console.log(h1.style.color);

ADD.addEventListener("click", function () {
  x = (input.value);
  let y = x.toString();
  container.style.backgroundColor = y;
  textP.innerHTML = x;

  if (x === "white") {

    h1.style.color = "black";
  } else {
    h1.style.color = "white";
  }
  if (x === "red") {

    ADD.style.backgroundColor = "black";
  } else {
    ADD.style.backgroundColor = "red";
  }
  if (x === "white") {

    textP.style.color = "black";
  } else {
    textP.style.color = "white";
  }

  input.value = "";








});





input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    let x = input.value;
    let y = x.toString();
    container.style.backgroundColor = y;

    textP.innerHTML = x;
    if (x === "white") {

      h1.style.color = "black";
    } else {
      h1.style.color = "white";
    }
    if (x === "red") {

      ADD.style.backgroundColor = "black";
    } else {
      ADD.style.backgroundColor = "red";
    }
    if (x === "white") {

      textP.style.color = "black";
    } else {
      textP.style.color = "white";
    }

    input.value = "";

  }
});