const container = document.querySelector("#container");

const content = document.createElement("p");
content.classList.add("content");
content.textContent = "Hi, I'm red";
content.style.color = "red";

container.appendChild(content);


const contentTwo = document.createElement("h3");
contentTwo.classList.add("contentTwo");
contentTwo.textContent = "I'm a blue h3!";
contentTwo.style.color = "blue";

container.appendChild(contentTwo);


const contentThree = document.createElement("div");
    contentThree.classList.add("contentThree");
    contentThree.style.backgroundColor = "pink";
    contentThree.style.borderColor = "black";
const contentFour = document.createElement("h1");
    contentFour.classList.add("contentFour");
    contentFour.textContent = "I'm in a div";
    contentFour.style.color = "green";
const contentFive = document.createElement("p");
    contentFive.classList.add("contentFive");
    contentFive.textContent = "Me too!";

contentThree.appendChild(contentFour);
contentThree.appendChild(contentFive);

container.appendChild(contentThree);
