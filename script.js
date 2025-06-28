const container = document.querySelector(".canvas-container");
const slider = document.getElementById("grid-size");
const pixelDisplay = document.getElementById("pixel");
const gridSize = slider.value;

// let currentMode = "draw";
// let drawMode = false;

function createGrid(size) {
    container.innerHTML = "";

    let boxSize = container.clientWidth / size;

    for (let i = 0; i < size * size; i++) {
        let box = document.createElement("div");

        box.style.background = "white";
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
        box.classList.add("grid-box");

        container.appendChild(box);
    }
}

slider.addEventListener("input", () => {
    const newSize = slider.value;
    pixelDisplay.textContent = newSize;
    createGrid(newSize);
})

createGrid(gridSize);