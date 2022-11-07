let add = document.querySelector("#add");
let hiddenText = document.querySelector("#hidden-text");
let inputText = document.querySelector("#input-text");
let clear = document.querySelector("#clear");

add.addEventListener("click", function () {
  let parag = document.createElement("p");
  parag.classList.add("parag-style");
  hiddenText.appendChild(parag);
  parag.innerHTML = inputText.value;
  inputText.value = "";

  parag.addEventListener("click", function () {
    parag.style.textDecoration = "line-through";
  });

  parag.addEventListener("dblclick", function () {
    hiddenText.removeChild(parag);
  });

  clear.addEventListener("click", function () {
    parag.remove();
  });
});
