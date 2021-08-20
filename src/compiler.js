import Lexical  from "./lexical.js";
// import Syntatical  from "./syntatical.js";

export function compile(program) {
    const lexical = new Lexical(program);
    return lexical.run();
    
    // syntatical = new Syntatical(lexical)
    // syntatical.parse()
}
