// Select button and color text elements
const btn = document.getElementById('colorBtn');
const colorCode = document.getElementById('colorCode');

// Function to generate a random color in HEX format
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event handling: change background when button is clicked
btn.addEventListener('click', () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorCode.textContent = `Background Color: ${randomColor}`;
});
