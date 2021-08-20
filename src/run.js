import fs from 'fs';
import { compile } from "./compiler.js";

if (!process.argv[2]) {
  throw new Error("missing file");
  process.exit();
}

let program;
try {
  program = fs.readFileSync(process.argv[2], 'utf8');
} catch (e) {
  console.log(`cant read file ${process.argv[2]}`);
  process.exit();
}

compile(program);
