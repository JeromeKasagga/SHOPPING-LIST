const inputText = document.querySelector("#input-box");
const addButton = document.querySelector("button");
const listDisplay = document.querySelector("ul");

addButton.addEventListener("click", function() {
    const shoppingItem = document.createElement("li");
    shoppingItem.textContent = inputText.value;

    listDisplay.appendChild(shoppingItem);
});

