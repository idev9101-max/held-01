const fs = require('fs');

fs.mkdirSync('/output', { recursive: true });
const text = 'Soup on the stove, a chair pulled close. The dog asleep with one ear open. Somewhere a clock ticks without meaning it. The house holds the evening like a cup held in both hands.';
fs.writeFileSync('/output/entry.txt', text + '\n', 'utf8');
