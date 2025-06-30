// DOM untuk membuat grid
const container = document.getElementsByClassName("canvas-container")[0];
const slider = document.getElementById("grid-size");
const pixelDisplay = document.getElementById("pixel");

// DOM untuk draw
const drawing = document.getElementById("drawBtn");
const colorInput = document.getElementById("favColor");
const gridBox = document.getElementsByClassName("grid-box");

// DOM untuk erase
const eraser = document.getElementById("eraserBtn");

// DOM untuk reset
const reset = document.getElementById("resetBtn");

let isDrawing = false;
let isDeleting = false;

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

function draw(color) {
    const boxes = document.getElementsByClassName("grid-box");
    const selectedColor = color;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mousedown", () => {
            isDrawing = true;
            boxes[i].style.backgroundColor = selectedColor;
        })

        boxes[i].addEventListener("mouseover", () => {
            if (isDrawing === true) {
                boxes[i].style.backgroundColor = selectedColor;
            }
        })

        boxes[i].addEventListener("mouseup", () => {
            isDrawing = false;
        })
    }
}

function erase() {
    const boxes = document.getElementsByClassName("grid-box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mousedown", () => {
            isDeleting = true;
            boxes[i].style.backgroundColor = "white";
        })

        boxes[i].addEventListener("mouseover", () => {
            if (isDeleting === true) {
                boxes[i].style.backgroundColor = "white";
            }
        })

        boxes[i].addEventListener("mouseup", () => {
            isDeleting = false;
        })
    }
}

function clearAll() {
    const boxes = document.getElementsByClassName("grid-box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "white";
    }
}

slider.addEventListener("input", () => {
    const newSize = slider.value;
    pixelDisplay.textContent = newSize;
    createGrid(newSize);
})

drawing.addEventListener("click", () => {
    const currentColor = colorInput.value;
    draw(currentColor);
})

colorInput.addEventListener("change", () => {
    const newColor = colorInput.value;
    draw(newColor);
})

eraser.addEventListener("click", () => {
    erase();
})

reset.addEventListener("click", () => {
    clearAll();
})
createGrid(slider.value);