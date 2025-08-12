
const data = [
    { color: "red", text: "This is red" },
    { color: "green", text: "This is green" },
    { color: "blue", text: "This is blue" },
    { color: "purple", text: "This is purple" },
    { color: "orange", text: "This is orange" }
];

let index = 0;

const addBtn = document.getElementById("addBtn");
const container = document.getElementById("container");

addBtn.addEventListener("click", () => {

    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = data[index].color;
    box.textContent = data[index].text;

    container.appendChild(box);

    index = (index + 1) % data.length;


    setTimeout(() => {
        box.style.opacity = "0";
        setTimeout(() => {
            box.remove();
        }, 500);
    }, 3000);
});
