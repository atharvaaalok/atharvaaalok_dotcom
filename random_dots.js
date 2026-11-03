// Loaded with defer, so document.body already exists.
// Positions are in % of the viewport so the dots stay spread out after a resize.
const dots = document.createDocumentFragment();

for (let i = 0; i < 300; i++) {
  const dot = document.createElement("div");
  dot.classList.add("box");
  dot.style.top = (100 * Math.random()) + '%';
  dot.style.left = (100 * Math.random()) + '%';
  const size = Math.floor(3 * Math.random()) + 1;
  dot.style.height = size + 'px';
  dot.style.width = size + 'px';

  dots.appendChild(dot);
}

document.body.appendChild(dots);
