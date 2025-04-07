
const tagLines = [
    "Free and open source distributed version control system.",
    "Fast and efficient version control.",
    "Supports nonlinear development with branches.",
    "Designed for performance and scalability.",
    "Staging area for fine-grained commits.",
    "--20th-anniversary"
];

let tagline = document.getElementById("tagLine");
let rotatingTagLines = Math.floor(Math.random() * tagLines.length);
tagline.textContent = tagLines[rotatingTagLines]; 