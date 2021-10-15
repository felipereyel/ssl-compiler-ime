import { Tokens } from "./header.js";

const keyByValue = (object, value) =>
  Object.keys(object).find((key) => object[key] === value);
const isDigit = (c) => "0123456789".includes(c);
const isAlfa = (c) =>
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(c);
const isSpace = (c) =>
  [
    String.fromCharCode(10),
    String.fromCharCode(13),
    "\f",
    "\v",
    "\t",
    " ",
  ].includes(c);

export default class Lexical {
  tokens = [];
  lexicalErrors = [];
  programContent = "";

  vConsts = [];
  identifiers = [];

  nextChar = " ";
  currentLine = 1;
  currentChar = 0;
  absoluteCurrentChar = 0;

  token = -1;
  secondaryToken = -1;

  constructor(programContent) {
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
    const key_words = {
      array: Tokens.ARRAY,
      boolean: Tokens.BOOLEAN,
      break: Tokens.BREAK,
      char: Tokens.CHAR,
      continue: Tokens.CONTINUE,
      do: Tokens.DO,
      else: Tokens.ELSE,
      false: Tokens.FALSE,
      function: Tokens.FUNCTION,
      if: Tokens.IF,
      integer: Tokens.INTEGER,
      of: Tokens.OF,
      string: Tokens.STRING,
      struct: Tokens.STRUCT,
      true: Tokens.TRUE,
      type: Tokens.TYPE,
      var: Tokens.VAR,
      while: Tokens.WHILE,
      return: Tokens.RETURN,
    };
    const idx = key_words[name];
    return idx == undefined ? Tokens.IDT : idx;
  }

  addConst(type, value) {
    this.vConsts.push({ type, value });
    return this.vConsts.length - 1;
  }

  getConst(c) {
    return this.vConsts[c];
  }

  searchName(name) {
    if (this.identifiers.findIndex((e) => e == name) == -1) {
      this.identifiers.push(name);
    }
    return this.identifiers.findIndex((e) => e == name);
  }

  getName(idx) {
    return this.identifiers[idx];
  }

  nextToken() {
    while (isSpace(this.nextChar)) {
      this.readNextChar();
    }

    if (this.nextChar == "") {
      this.token = Tokens.EOF;
    } else if (isAlfa(this.nextChar)) {
      let text = "";
      while (isAlfa(this.nextChar) || this.nextChar == "_") {
        text += this.nextChar;
        this.readNextChar();
      }
      this.token = this.searchKeyword(text);
      if (this.token == Tokens.IDT) {
        this.secondaryToken = this.searchName(text);
      }
    } else if (isDigit(this.nextChar)) {
      let num = "";
      while (isDigit(this.nextChar)) {
        num += this.nextChar;
        this.readNextChar();
      }
      this.token = Tokens.NUMERAL;
      this.secondaryToken = this.addConst("int", num);
    } else if (this.nextChar == '"') {
      let string = "";
      string += this.nextChar;
      this.readNextChar();
      if (this.nextChar != '"') {
        while (this.nextChar != '"') {
          string += this.nextChar;
          this.readNextChar();
        }
      }
      string += this.nextChar;
      this.readNextChar();
      this.token = Tokens.STRING;
      this.secondaryToken = this.addConst("string", string);
    } else {
      if (this.nextChar == "'") {
        this.readNextChar();
        this.token = Tokens.CHARACTER;
        this.secondaryToken = this.addConst("char", this.nextChar);
        this.readNextChar(); // pular o '
        this.readNextChar();
      } else if (this.nextChar == ":") {
        this.readNextChar();
        this.token = Tokens.COLON;
      } else if (this.nextChar == ";") {
        this.readNextChar();
        this.token = Tokens.SEMI_COLON;
      } else if (this.nextChar == ",") {
        this.readNextChar();
        this.token = Tokens.COMMA;
      } else if (this.nextChar == "[") {
        this.readNextChar();
        this.token = Tokens.LEFT_SQUARE;
      } else if (this.nextChar == "]") {
        this.readNextChar();
        this.token = Tokens.RIGHT_SQUARE;
      } else if (this.nextChar == "{") {
        this.readNextChar();
        this.token = Tokens.LEFT_BRACES;
      } else if (this.nextChar == "}") {
        this.readNextChar();
        this.token = Tokens.RIGHT_BRACES;
      } else if (this.nextChar == "(") {
        this.readNextChar();
        this.token = Tokens.LEFT_PARENTHESIS;
      } else if (this.nextChar == ")") {
        this.readNextChar();
        this.token = Tokens.RIGHT_PARENTHESIS;
      } else if (this.nextChar == "&") {
        this.readNextChar();
        if (this.nextChar == "&") {
          this.readNextChar(); // revisar
          this.token = Tokens.AND;
        } else {
          this.token = Tokens.UNKNOWN;
        }
      } else if (this.nextChar == "|") {
        this.readNextChar();
        if (this.nextChar == "|") {
          this.readNextChar(); // revisar
          this.token = Tokens.OR;
        } else {
          this.token = Tokens.UNKNOWN;
        }
      } else if (this.nextChar == "*") {
        this.readNextChar();
        this.token = Tokens.TIMES;
      } else if (this.nextChar == "/") {
        this.readNextChar();
        this.token = Tokens.DIVIDE;
      } else if (this.nextChar == ".") {
        this.readNextChar();
        this.token = Tokens.DOT;
      } else if (this.nextChar == "+") {
        this.readNextChar();
        if (this.nextChar == "+") {
          this.token = Tokens.PLUS_PLUS;
          this.readNextChar(); // revisar?
        } else {
          this.token = Tokens.PLUS;
        }
      } else if (this.nextChar == "!") {
        this.readNextChar();
        if (this.nextChar == "=") {
          this.token = Tokens.NOT_EQUAL;
          this.readNextChar();
        } else {
          this.token = Tokens.NOT;
        }
      } else if (this.nextChar == "=") {
        this.readNextChar();
        if (this.nextChar == "=") {
          this.token = Tokens.EQUAL_EQUAL;
          this.readNextChar();
        } else {
          this.token = Tokens.EQUALS;
        }
      } else if (this.nextChar == "-") {
        this.readNextChar();
        if (this.nextChar == "-") {
          this.token = Tokens.MINUS_MINUS;
          this.readNextChar();
        } else {
          this.token = Tokens.MINUS;
        }
      } else if (this.nextChar == "<") {
        this.readNextChar();
        if (this.nextChar == "=") {
          this.token = Tokens.LESS_OR_EQUAL;
          this.readNextChar();
        } else {
          this.token = Tokens.LESS_THAN;
        }
      } else if (this.nextChar == ">") {
        this.readNextChar();
        if (this.nextChar == "=") {
          this.token = Tokens.GREATER_OR_EQUAL;
          this.readNextChar();
        } else {
          this.token = Tokens.GREATER_THAN;
        }
      } else {
        this.token = Tokens.UNKNOWN;
        this.lexicalErrors.push({
          message: "unknown caracter",
          line: this.currentLine,
          char: this.currentChar,
          absoluteChar: this.absoluteCurrentChar,
        });
        this.readNextChar();
      }
    }
    return [this.token, this.secondaryToken];
  }

  lexicalCheck(token) {
    if (token == Tokens.UNKNOWN) {
      this.lexicalError.push({ message: "unknown caracter checked" });
      print(`Character ${self.ch + 1} not expected in the line ${self.line}`);
    }
  }

  run() {
    this.readNextChar();
    let token, secondaryToken;
    do {
      [token, secondaryToken] = this.nextToken();
      this.tokens.push({ token, secondaryToken });
    } while (token != Tokens.EOF);
  }

  getResults() {
    const logs = [];
    if (this.lexicalErrors.length) {
      logs.push("There were some lexical errors");
      logs.push(
        ...this.lexicalErrors.map(
          (e) => `Line ${e.line}, Char ${e.char}: ${e.message}`
        )
      );
    } else {
      logs.push("There are no lexical errors");
    }

    const consts = this.vConsts.map(
      (c, idx) => `Index: ${idx}, Type: ${c.type}, Value: ${c.value}`
    );

    const identifiers = this.identifiers.map(
      (c, idx) => `Index: ${idx}, ID: ${c}`
    );

    return { logs, consts, identifiers };
  }
}
