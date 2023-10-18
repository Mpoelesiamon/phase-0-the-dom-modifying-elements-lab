// Create a new div element
const element = document.createElement("div");

// Append the element to the body
document.body.append(element);

// Create an unordered list and add list items
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

// Set the innerHTML of the element
const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// Change element styles and text content
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

// Change the class of the element
element.className = "pet-listing dog";

// Remove an element from the DOM
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);