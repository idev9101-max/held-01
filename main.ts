const fs = require('fs');

fs.mkdirSync('/output', { recursive: true });
const text = 'The kettle ticks as it cools. On the porch step a cat has folded itself into the last warm square of sun. Nothing is due. The lamp in the next room hums low, and the dark outside holds no questions.';
fs.writeFileSync('/output/entry.txt', text + '\n', 'utf8');
