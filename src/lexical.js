import Tokens from "./lexicalTokens.js";


const isDigit = c => "0123456789".includes(c);
const isAlnum = c => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(c);
const isSpace = c => [String.fromCharCode(10), String.fromCharCode(13), "\f", "\v", "\t"," "].includes(c);

export default class Lexical {
    lexicalError = false;
    programContent = "";

    vConsts = [];
    identifiers = {};
    count = 0; // check
    
    nextChar = " ";
    currentLine = 1;
    currentChar = 0;
    absoluteCurrentChar = 0;

    constructor (programContent) {
        this.programContent = programContent;
    }

    readNextChar() {
        const char = this.programContent.slice(0, 1);
        this.programContent = this.programContent.slice(1);

        this.absoluteCurrentChar += 1;
        if (char == "\n" || char == "\r") {
            this.currentLine += 1;
            this.currentChar = 0;
        } else {
            this.currentChar += 1;
        }
        
        this.nextChar = char;
    }

    searchKeyword(name) {
        const key_words = ["array", "boolean", "break", "char", "continue", "do", "else", "false", "function", "if", "integer", "of", "string", "struct", "true", "type", "var", "while"];
        const idx = key_words.findIndex(el => el === name);
        return idx === -1 ? Tokens.ID : idx;
    }

    addConst(c) {
        this.vConsts.push(c);
        return this.vConsts.length - 1;
    }
    
    getConst(c) {
        return this.vConsts[c];
    }// unused

    searchName(name) {
        if (!this.identifiers[name]) {
            this.identifiers[name] = this.count;
            this.count += 1;
        }
        return this.identifiers[name];
    }

    nextToken() {
        let token;
        let secondaryToken;

        while (isSpace(this.nextChar)) {
            this.readNextChar();
        }
        
        if (this.nextChar == "") {
            token = Tokens.EOF;
        }
        else if (isAlnum(this.nextChar)) {
            let text = "";
            text += this.nextChar;
            while (isAlnum(this.nextChar) || this.nextChar == '_') {
                text += this.nextChar;
                this.readNextChar();
            }
            token = this.searchKeyword(text);
            if (token == Tokens.ID) {
                secondaryToken = this.searchName(text);
            }
        }
        else if (isDigit(this.nextChar)) {
            let num = "";
            num += this.nextChar;
            while (isDigit(this.nextChar)) {
                num += this.nextChar;
                this.readNextChar();
            }
            token = Tokens.NUMERAL;
            secondaryToken = this.addConst(num);
        }
        else if (this.nextChar == "\"") {
            let string = "";
            string += this.nextChar;
            this.readNextChar();
            if (this.nextChar != "\"") {
                while (this.nextChar!="\"") {
                    string += this.nextChar;
                    this.readNextChar();
                }
            }
            string += this.nextChar;
            this.readNextChar();
            token = Tokens.STRING;
            secondaryToken = this.addConst(string);
        }
        else {
            if (this.nextChar == "\'") {
                this.readNextChar();
                token = Tokens.CHARACTER;
                secondaryToken = this.addConst(this.nextChar);
                this.readNextChar();
                this.readNextChar();
            }
            else if (this.nextChar == ":") {
                this.readNextChar();
                token = Tokens.COLON;
            }
            else if (this.nextChar == ";") {
                this.readNextChar();
                token = Tokens.SEMI_COLON;
            }
            else if (this.nextChar == ",") {
                this.readNextChar();
                token = Tokens.COMMA;
            }
            else if (this.nextChar == "[") {
                this.readNextChar();
                token = Tokens.LEFT_SQUARE;
            }
            else if (this.nextChar == "]") {
                this.readNextChar();
                token = Tokens.RIGHT_SQUARE
            }
            else if (this.nextChar == "{") {
                this.readNextChar();
                token = Tokens.LEFT_BRACES;
            }
            else if (this.nextChar == "}") {
                this.readNextChar();
                token = Tokens.RIGHT_BRACES;
            }
            else if (this.nextChar == "(") {
                this.readNextChar();
                token = Tokens.LEFT_PARENTHESIS;
            }
            else if (this.nextChar == ")") {
                this.readNextChar();
                token = Tokens.RIGHT_PARENTHESIS;
            }
            else if (this.nextChar == "&") {
                this.readNextChar();
                if (this.nextChar == "&") {
                    this.readNextChar(); // revisar
                    token = Tokens.AND;
                }
                else {
                    token = Tokens.UNKNOWN;
                }
            }
            else if (this.nextChar == "|") {
                this.readNextChar();
                if (this.nextChar == "|") {
                    this.readNextChar(); // revisar
                    token = Tokens.OR;
                }
                else {
                    token = Tokens.UNKNOWN;
                }
            }
            else if (this.nextChar == "*") {
                this.readNextChar();
                token = Tokens.TIMES;
            }
            else if (this.nextChar == "/") {
                this.readNextChar();
                token = Tokens.DIVIDE;
            }
            else if (this.nextChar == ".") {
                this.readNextChar();
                token = Tokens.DOT;        
            }
            else if (this.nextChar == "+") {
                this.readNextChar();
                if (this.nextChar == "+") {
                    token = Tokens.PLUS_PLUS;
                    this.readNextChar(); // revisar?
                }
                else {
                    token = Tokens.PLUS;
                }
            }
            else if (this.nextChar == "!") {
                this.readNextChar();
                if (this.nextChar == "=") {
                    token = Tokens.NOT_EQUAL;
                    this.readNextChar();
                }
                else {
                    token = Tokens.NOT; 
                }
            }
            else if (this.nextChar == "=") {
                this.readNextChar();
                if (this.nextChar == "=") {
                    token = Tokens.EQUAL_EQUAL;
                    this.readNextChar();
                }
                else {
                    token = Tokens.EQUALS;
                }
            }
            else if (this.nextChar == "-") {
                this.readNextChar();
                if (this.nextChar == "-") {
                    token = Tokens.MINUS_MINUS;
                    this.readNextChar();
                }
                else {
                    token = Tokens.MINUS;
                }
            }
            else if (this.nextChar == "<") {
                this.readNextChar();
                if (this.nextChar == "=") {
                    token = Tokens.LESS_OR_EQUAL;
                    this.readNextChar();
                }
                else {
                    token = Tokens.LESS_THAN;
                }
            }
            else if (this.nextChar == ">") {
                this.readNextChar();
                if (this.nextChar == "=") {
                    token = Tokens.GREATER_OR_EQUAL;
                    this.readNextChar();
                }
                else {
                    token = Tokens.GREATER_THAN;
                }
            }
            else {
                this.readNextChar();
                token = Tokens.UNKNOWN;
            }
        }
        return token ;
    }

    checkLexicalError(token) {
        if (token == Tokens.UNKNOWN) {
            this.lexicalError = true;
            console.log(`Character ${this.currentChar} not expected in the line ${this.currentLine}`);
        }
    }

    run() {
        this.readNextChar();
        let token_Aux = this.nextToken();
        while (token_Aux != Tokens.EOF) {
            this.checkLexicalError(token_Aux);
            token_Aux = this.nextToken();
        }
        if (!this.lexicalError) console.log("No lexical errors");
    }
}
