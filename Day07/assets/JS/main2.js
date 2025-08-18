
const data = [
    { color: "red", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { color: "green", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { color: "blue", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { color: "purple", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.e" },
    { color: "orange", text: " Lorem ipsum dolor sit amet consectetur adipisicing elit." }
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
