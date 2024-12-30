const container = document.querySelector("#container");

const content = document.createElement("p");
content.classList.add("content");
content.textContent = "Hi, I'm red";
content.style.color = "red";

container.appendChild(content);

//const contentTwo = document.createElement("h3")
//content.classList.add("contentTwo")
