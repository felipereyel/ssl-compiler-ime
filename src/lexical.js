import Tokens from "./lexicalTokens.js";

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
    const key_words = [
      "array",
      "boolean",
      "break",
      "char",
      "continue",
      "do",
      "else",
      "false",
      "function",
      "if",
      "integer",
      "of",
      "string",
      "struct",
      "true",
      "type",
      "var",
      "while",
      "return",
    ];
    const idx = key_words.findIndex((el) => el === name);
    return idx === -1 ? Tokens.ID : idx;
  }

  addConst(type, value) {
    this.vConsts.push({ type, value });
    return this.vConsts.length - 1;
  }

  // getConst(c) {
  //   return this.vConsts[c];
  // }

  searchName(name) {
    if (this.identifiers.findIndex((e) => e == name) == -1) {
      this.identifiers.push(name);
    }
    return this.identifiers.findIndex((e) => e == name);
  }

  nextToken() {
    let token;
    let secondaryToken;

    while (isSpace(this.nextChar)) {
      this.readNextChar();
    }

    if (this.nextChar == "") {
      token = Tokens.EOF;
    } else if (isAlfa(this.nextChar)) {
      let text = "";
      while (isAlfa(this.nextChar) || this.nextChar == "_") {
        text += this.nextChar;
        this.readNextChar();
      }
      token = this.searchKeyword(text);
      if (token == Tokens.ID) {
        secondaryToken = this.searchName(text);
      }
    } else if (isDigit(this.nextChar)) {
      let num = "";
      while (isDigit(this.nextChar)) {
        num += this.nextChar;
        this.readNextChar();
      }
      token = Tokens.NUMERAL;
      secondaryToken = this.addConst("int", num);
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
      token = Tokens.STRING;
      secondaryToken = this.addConst("string", string);
    } else {
      if (this.nextChar == "'") {
        this.readNextChar();
        token = Tokens.CHARACTER;
        secondaryToken = this.addConst("char", this.nextChar);
        this.readNextChar(); // pular o '
        this.readNextChar();
      } else if (this.nextChar == ":") {
        this.readNextChar();
        token = Tokens.COLON;
      } else if (this.nextChar == ";") {
        this.readNextChar();
        token = Tokens.SEMI_COLON;
      } else if (this.nextChar == ",") {
        this.readNextChar();
        token = Tokens.COMMA;
      } else if (this.nextChar == "[") {
        this.readNextChar();
        token = Tokens.LEFT_SQUARE;
      } else if (this.nextChar == "]") {
        this.readNextChar();
        token = Tokens.RIGHT_SQUARE;
      } else if (this.nextChar == "{") {
        this.readNextChar();
        token = Tokens.LEFT_BRACES;
      } else if (this.nextChar == "}") {
        this.readNextChar();
        token = Tokens.RIGHT_BRACES;
      } else if (this.nextChar == "(") {
        this.readNextChar();
        token = Tokens.LEFT_PARENTHESIS;
      } else if (this.nextChar == ")") {
        this.readNextChar();
        token = Tokens.RIGHT_PARENTHESIS;
      } else if (this.nextChar == "&") {
        this.readNextChar();
        if (this.nextChar == "&") {
          this.readNextChar(); // revisar
          token = Tokens.AND;
        } else {
          token = Tokens.UNKNOWN;
        }
      } else if (this.nextChar == "|") {
        this.readNextChar();
        if (this.nextChar == "|") {
          this.readNextChar(); // revisar
          token = Tokens.OR;
        } else {
          token = Tokens.UNKNOWN;
        }
      } else if (this.nextChar == "*") {
        this.readNextChar();
        token = Tokens.TIMES;
      } else if (this.nextChar == "/") {
        this.readNextChar();
        token = Tokens.DIVIDE;
      } else if (this.nextChar == ".") {
        this.readNextChar();
        token = Tokens.DOT;
      } else if (this.nextChar == "+") {
        this.readNextChar();
        if (this.nextChar == "+") {
          token = Tokens.PLUS_PLUS;
          this.readNextChar(); // revisar?
        } else {
          token = Tokens.PLUS;
        }
      } else if (this.nextChar == "!") {
        this.readNextChar();
        if (this.nextChar == "=") {
          token = Tokens.NOT_EQUAL;
          this.readNextChar();
        } else {
          token = Tokens.NOT;
        }
      } else if (this.nextChar == "=") {
        this.readNextChar();
        if (this.nextChar == "=") {
          token = Tokens.EQUAL_EQUAL;
          this.readNextChar();
        } else {
          token = Tokens.EQUALS;
        }
      } else if (this.nextChar == "-") {
        this.readNextChar();
        if (this.nextChar == "-") {
          token = Tokens.MINUS_MINUS;
          this.readNextChar();
        } else {
          token = Tokens.MINUS;
        }
      } else if (this.nextChar == "<") {
        this.readNextChar();
        if (this.nextChar == "=") {
          token = Tokens.LESS_OR_EQUAL;
          this.readNextChar();
        } else {
          token = Tokens.LESS_THAN;
        }
      } else if (this.nextChar == ">") {
        this.readNextChar();
        if (this.nextChar == "=") {
          token = Tokens.GREATER_OR_EQUAL;
          this.readNextChar();
        } else {
          token = Tokens.GREATER_THAN;
        }
      } else {
        token = Tokens.UNKNOWN;
        this.lexicalErrors.push({
          message: "unknown caracter",
          line: this.currentLine,
          char: this.currentChar,
          absoluteChar: this.absoluteCurrentChar,
        });
        this.readNextChar();
      }
    }
    return [token, secondaryToken];
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

    const tokens = this.tokens.map((t) => {
      let fullToken = t.token;
      if (t.secondaryToken != null) {
        fullToken += " " + t.secondaryToken;
      }
      return fullToken;
    });

    const consts = this.vConsts.map(
      (c, idx) => `Index: ${idx}, Type: ${c.type}, Value: ${c.value}`
    );

    const identifiers = this.identifiers.map(
      (c, idx) => `Index: ${idx}, ID: ${c}`
    );

    return { logs, tokens, consts, identifiers };
  }
}
