const fs = require('fs');
const { compile } = require("./compiler");

const program = fs.readFileSync('program.ssl', 'utf8');
compile(program);
