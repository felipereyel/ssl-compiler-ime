import Tokens from "./lexicalTokens.js";

// Key Words
const key_words = ["array", "boolean", "break", "char", "continue", "do", "else", "false", "function", "if", "integer", "of", "string", "struct", "true", "type", "var", "while"]

// Lexical_Finite_Automaton
const is_Digit = c => "0123456789".includes(c);
const is_Alnum = c => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(c);
const is_Space = c => [String.fromCharCode(10), String.fromCharCode(13), "\f", "\v", "\t"," "].includes(c);

export default class Lexical {
    lexicalError = false
    next_Char = " "
    program = ""

    constructor (program) {
        this.program = program;
    }

    programRead(n) {
        const chars = this.program.slice(0, n);
        this.program = this.program.slice(n);
        return chars;
    }

    search_Key_Word(name) {
        let left = 0
        let right = key_words.length - 1

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);
            if (key_words[middle] == name) return middle;
            else if (key_words[middle] > name) right = middle - 1;
            else left = middle + 1;
        }

        return Tokens.ID;
    }

    // Literals
    v_Ctes = [];

    add_Cte(c) {
        this.v_Ctes.push(c);
        return this.v_Ctes.length - 1;
    }

    get_Cte(c) {
        return this.v_Ctes[c];
    }

    // Identifiers
    identifiers = {};
    count = 0;

    search_Name(name) {
        if (!(name in this.identifiers)) {
            this.identifiers[name] = this.count;
            this.count += 1;
        }
        return this.identifiers[name];
    }

    secondary_Token = null;
    line = 1;
    ch = 1;

    next_Token() {
        const sep = "";
        let token;

        while (is_Space(this.next_Char)) {
            if (this.next_Char == "\n" || this.next_Char == "\r") this.line += 1;
            this.next_Char = this.programRead(1);
            this.ch += 1;
        }
        
        if (this.next_Char == "") {
            token = Tokens.EOF;
        }
        else if (is_Alnum(this.next_Char)) {
            const text_Aux = [];
            while (is_Alnum(this.next_Char) || this.next_Char == '_') {
                text_Aux.push(this.next_Char);
                this.next_Char = this.programRead(1);
                this.ch += 1;
            }
            const text = text_Aux.join(sep);
            token = this.search_Key_Word(text);
            if (token == Tokens.ID) {
                this.secondary_Token = this.search_Name(text);
            }
        }
        else if (is_Digit(this.next_Char)) {
            const num_Aux = [];
            while (is_Digit(this.next_Char)) {
                num_Aux.push(this.next_Char);
                this.next_Char = this.programRead(1);
                this.ch += 1;
            }
            const num = num_Aux.join(sep);
            token = Tokens.NUMERAL;
            this.secondary_Token = this.add_Cte(num);
        }
        else if (this.next_Char == "\"") {
            const string_Aux = [];
            string_Aux.push(this.next_Char);
            this.next_Char = this.programRead(1);
            this.ch += 1;
            if (this.next_Char != "\"") {
                while (this.next_Char!="\"") {
                    string_Aux.push(this.next_Char);
                    this.next_Char = this.programRead(1);
                    this.ch += 1;
                }
            }
            string_Aux.push(this.next_Char);
            this.next_Char = this.programRead(1);
            this.ch += 1;
            const string = string_Aux.join(sep);
            token = Tokens.STRING;
            this.secondary_Token = this.add_Cte(string);
        }
        else {
            if (this.next_Char == "\'") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.CHARACTER;
                this.secondary_Token = this.add_Cte(this.next_Char);
                this.next_Char = this.programRead(2);
                this.ch += 2;
            }
            else if (this.next_Char == ":") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.COLON;
            }
            else if (this.next_Char == "+") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                if (this.next_Char == "+") {
                    token = Tokens.PLUS_PLUS;
                    this.next_Char = this.programRead(1);
                    this.ch += 1;
                }
                else {
                    token = Tokens.PLUS;
                }
            }
            else if (this.next_Char == "-") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                if (this.next_Char == "-") {
                    token = Tokens.MINUS_MINUS;
                    this.next_Char = this.programRead(1);
                    this.ch += 1;
                }
                else {
                    token = Tokens.MINUS;
                }
            }
            else if (this.next_Char == ";") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.SEMI_COLON;
            }
            else if (this.next_Char == ",") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.COMMA;
            }
            else if (this.next_Char == "=") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                if (this.next_Char == "=") {
                    token = Tokens.EQUAL_EQUAL;
                    this.next_Char = this.programRead(1);
                    this.ch += 1;
                }
                else {
                    token = Tokens.EQUALS;
                }
            }
            else if (this.next_Char == "[") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.LEFT_SQUARE;
            }
            else if (this.next_Char == "]") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.RIGHT_SQUARE
            }
            else if (this.next_Char == "{") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.LEFT_BRACES;
            }
            else if (this.next_Char == "}") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.RIGHT_BRACES;
            }
            else if (this.next_Char == "(") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.LEFT_PARENTHESIS;
            }
            else if (this.next_Char == ")") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.RIGHT_PARENTHESIS;
            }
            else if (this.next_Char == "&") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                if (this.next_Char == "&") {
                    this.next_Char=this.programRead(1);
                    this.ch += 1;
                    token = Tokens.AND;
                }
                else {
                    token = Tokens.UNKNOWN;
                }
            }
            else if (this.next_Char == "|") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                if (this.next_Char == "|") {
                    this.next_Char = this.programRead(1);
                    this.ch += 1;
                    token = Tokens.OR;
                }
                else {
                    token = Tokens.UNKNOWN;
                }
            }
            else if (this.next_Char == "<") {
                this.next_Char=this.programRead(1);
                this.ch += 1;
                if (this.next_Char == "=") {
                    token = Tokens.LESS_OR_EQUAL;
                    this.next_Char = this.programRead(1);
                    this.ch += 1;
                }
                else {
                    token = Tokens.LESS_THAN;
                }
            }
            else if (this.next_Char == ">") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                if (this.next_Char == "=") {
                    token = Tokens.GREATER_OR_EQUAL;
                    this.next_Char = this.programRead(1);
                    this.ch += 1;
                }
                else {
                    token = Tokens.GREATER_THAN;
                }
            }
            else if (this.next_Char == "!") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                if (this.next_Char == "=") {
                    token = Tokens.NOT_EQUAL;
                    this.next_Char = this.programRead(1);
                    this.ch += 1;
                }
                else {
                    token = Tokens.NOT; 
                }
            }
            else if (this.next_Char == "*") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.TIMES;
            }
            else if (this.next_Char == ".") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.DOT;        
            }
            else if (this.next_Char == "/") {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.DIVIDE;
            }
            else {
                this.next_Char = this.programRead(1);
                this.ch += 1;
                token = Tokens.UNKNOWN;
            }
        }
        return token ;
    }

    check_Lexical_Error(token) {
        if (token == Tokens.UNKNOWN) {
            this.lexicalError = true;
            console.log(`Character ${this.ch + 1} not expected in the line ${this.line}`);
        }
    }

    run() {
        this.next_Char = this.programRead(1);
        let token_Aux = this.next_Token();
        while (token_Aux != Tokens.EOF) {
            this.check_Lexical_Error(token_Aux);
            token_Aux = this.next_Token();
        }
        if (!this.lexicalError) console.log("No lexical errors");
    }
}
