// Ambil DOM untuk membuat grid canvas
const container = document.querySelector(".canvas-container");
const pixelDisplay = document.getElementById("pixel");
const slider = document.getElementById("myRange");
const gridSize = slider.value;

// Ambil DOM untuk tombol draw
const draw = document.getElementById("drawBtn");
const pickColor = document.getElementById("favColor");

let isDrawMode = false;
let isDrawing = false;

// Tambah event untuk membuat grid canvas berdasarkan input slider
slider.addEventListener("input", () => {
    // Ambil nilai baru slider tiap kali digeser
    const newSize = slider.value;
    pixelDisplay.textContent = newSize
    createGrid(newSize);
})

drawBtn.addEventListener("click", () => {
    isDrawMode = true;
    drawBtn.classList.toggle("active", isDrawMode);
    container.style.cursor = isDrawMode ? "crosshair" : "default";
})

function createGrid(size) {
    container.innerHTML = "";
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    const totalBox = size * size;

    for (let i = 0; i < totalBox; i++) {
        const box = document.createElement("div");
        box.classList.add("grid-box");
        container.appendChild(box);
    }
}

function draw(e) {
    if (isDrawMode) return;

    const target = e.target;
    if (!target.classList.contains("grid-box")) return;
    
    switch (e.type) {
        case "mousedown":
            isDrawing = true;
            target.style.backgroundColor = favColor.value;
            break;
        case "mouseup":
            isDrawing = false;
            break;
        case "mouseover":
            if (isDrawing) {
                target.style.backgroundColor = favColor.value;
            }
            break;
        case "mouseleave":
            isDrawing = false;
            break;
    }
}

createGrid(gridSize);