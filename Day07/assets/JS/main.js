const data = [
    { text: "Life is beautiful", author: "Unknown" },
    { text: "Stay positive", author: "John Doe" },
    { text: "Never give up", author: "Jane Smith" }
];

const btn = document.getElementById("btn");
const autherdata = document.getElementById("author");

let index = 0;

btn.addEventListener("click", () => {
    autherdata.textContent = data[index].text + " — " + data[index].author;

    index = (index + 1) % data.length;
});
