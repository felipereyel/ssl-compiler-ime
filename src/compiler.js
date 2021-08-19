const Lexical = require("./lexical");
const Syntatical = require("./syntatical");

export function compile(program) {
    lexical = Lexical(program);
    lexical.run();
    
    // syntatical = Syntatical(lexical)
    // syntatical.parse()
}
