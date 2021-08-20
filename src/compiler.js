import Lexical  from "./lexical.js";
// import Syntatical  from "./syntatical.js";

export function compile(program) {
    const lexical = new Lexical(program);
    lexical.run();
    
    // syntatical = new Syntatical(lexical)
    // syntatical.parse()
}
