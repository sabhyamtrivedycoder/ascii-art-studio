const ASCII_BANNER = [
  "   _____       ____  __  ___  __  ___  __  ___ ",
  "  / ___/      / __ )/ / / / / / / /   |/  |/  / ",
  "  \__ \      / __  / /_/ / /_/ / / /|_/ /|_/ /  ",
  " ___/ /     / /_/ / __  / __  / / /  / /  / /   ",
  "/____/     /_____/_/ /_/_/ /_/ /_/  /_/  /_/    "
];

function generateAsciiBanner(text) {
  return ASCII_BANNER.join('\n');
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('textInput');
    const out = document.getElementById('asciiOutput');
    function update() { out.textContent = generateAsciiBanner(input.value); }
    input.addEventListener('input', update);
    update();
  });
}
if (typeof module !== 'undefined') module.exports = { generateAsciiBanner };
