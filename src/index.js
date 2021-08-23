import Lexical from "./lexical.js";
// import Syntatical  from "./syntatical.js";

const compile = (program) => {
  const lexical = new Lexical(program);
  return lexical.run();

  // syntatical = new Syntatical(lexical)
  // syntatical.parse()
};

export {
  compile,
  Lexical,
  // Syntatical
};
