// Ambil DOM untuk membuat grid canvas
const container = document.querySelector(".canvas-container");
const pixelDisplay = document.getElementById("pixel");
const slider = document.getElementById("myRange");
const gridSize = slider.value;

// Tambah event untuk membuat grid canvas berdasarkan input slider
slider.addEventListener("input", () => {
    // Ambil nilai baru slider tiap kali digeser
    const newSize = slider.value;
    pixelDisplay.textContent = newSize
    createGrid(newSize);
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

createGrid(gridSize);