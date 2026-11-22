const fs = require('fs');

fs.mkdirSync('/output', { recursive: true });
const text = 'A cup of tea, going slowly cool. Someone two rooms away is laughing at nothing you need to hear. The window is open one inch and the evening comes in quietly, like a cat that lives here.';
fs.writeFileSync('/output/entry.txt', text + '\n', 'utf8');
