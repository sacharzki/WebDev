
const button1 = document.querySelector("#greeting");

button1.addEventListener("click", greeting);

function greeting() {
    let name = document.querySelector("#name").value;
    let comment = "Hey " + name + " altes Haus - was geht?!";
    let newParagraph = document.createElement('p');
    newParagraph.textContent = comment;
    document.getElementById("div1").appendChild(newParagraph);
};

console.log("Hello");