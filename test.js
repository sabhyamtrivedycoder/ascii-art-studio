const assert = require('assert');
const { generateAsciiBanner } = require('./app.js');
console.log('🧪 Testing ASCII Forge...');
const art = generateAsciiBanner('SABHYAM');
assert(art.includes('_____'), 'ASCII banner generated');
console.log('✅ ASCII Forge test passed!');
