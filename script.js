// Change text content dynamically
const changeTextButton = document.getElementById("changeText");
const textElement = document.getElementById("text");

changeTextButton.addEventListener("click", () => {
  textElement.textContent = "The text has been changed dynamically!";
  textElement.classList.toggle("highlight");
});

// Add an element dynamically
const addElementButton = document.getElementById("addElement");
const dynamicContent = document.getElementById("dynamicContent");

addElementButton.addEventListener("click", () => {
  const newElement = document.createElement("p");
  newElement.textContent = "This is a new element added to the DOM!";
  dynamicContent.appendChild(newElement);
});

// Remove an element dynamically
const removeElementButton = document.getElementById("removeElement");

removeElementButton.addEventListener("click", () => {
  if (dynamicContent.lastChild) {
    dynamicContent.removeChild(dynamicContent.lastChild);
  } else {
    alert("No more elements to remove!");
  }
});