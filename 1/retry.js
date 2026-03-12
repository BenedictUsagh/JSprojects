const body = document.getElementsByTagName("body")[0];

const setColor = (name) => {
    body.style.backgroundColor = name;
}

document.getElementById("green").addEventListener("click", () => setColor("green"))
document.getElementById("red").addEventListener("click", () => setColor("red"))
document.getElementById("blue").addEventListener("click", () => setColor("blue"))

const randomColor = () => {
    const g = Math.floor(Math.random() * 256);
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

   return `rgb(${g}, ${r}, ${b})`
}

const rcolor = () => body.style.backgroundColor = randomColor();

random.addEventListener('click', rcolor)