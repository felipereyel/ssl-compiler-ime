const _ = require('lodash');
const tokens = require("./lexicalTokens");

// Key Words
key_words = ["array", "boolean", "break", "char", "continue", "do", "else", "false", "function", "if", "integer", "of", "string", "struct", "true", "type", "var", "while"]

// Lexical_Finite_Automaton
const is_Digit = c => "0123456789".includes(c);
const is_Alnum = c => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(c);
const is_Space = c => [String.fromCharCode(10), String.fromCharCode(13), "\f", "\v", "\t"," "].includes(c);

class Lexical {
    lexicalError = false
    next_Char = " "

    program = ""

    // rever
    constructor (program) {
        file.seek(0)
        this.program = program
    }

    programRead(n) {
        const char = this.program[0];
        this.program = this.program.slice(1);
    }

    search_Key_Word(name) {
        left = 0
        right = len(key_words) - 1
        while left <= right:
            middle = (left + right) // 2
            if key_words[middle] == name:
                return middle
            elif key_words[middle] > name:
                right = middle - 1
            else:
                left = middle + 1
        return ID
    }

    // Literals
    v_Ctes = []

    add_Cte(c):
        this.v_Ctes.append(c)
        return len(.v_Ctes)-1

    get_Cte(c):
        return this.v_Ctes[c]

    // Identifiers
    identifiers = {}
    count = 0

    search_Name(name): 
        if name not in this.identifiers:
            this.identifiers[name] = this.count
            this.count += 1
        return this.identifiers[name]

    secondary_Token = None
    line = 1
    ch = 1

    next_Token():
        sep = ""
        while is_Space(.next_Char):
            if this.next_Char == "\n" or this.next_Char == "\r":
                this.line+=1
            this.next_Char = this.arq.read(1)
            this.ch+=1
        
        if this.next_Char == "":
            token = EOF
        
        elif is_Alnum(.next_Char):
            text_Aux = []
            while is_Alnum(.next_Char) or this.next_Char == '_':
                text_Aux.append(.next_Char)
                this.next_Char = this.arq.read(1)
                this.ch+=1
            text = sep.join(text_Aux)
            token = this.search_Key_Word(text)
            if token == ID:
                this.secondary_Token = this.search_Name(text)
        
        elif is_Digit(.next_Char):
            num_Aux = []
            while is_Digit(.next_Char):
                num_Aux.append(.next_Char)
                this.next_Char = this.arq.read(1)
                this.ch+=1
            num = sep.join(num_Aux)
            token = NUMERAL
            this.secondary_Token = this.add_Cte(num)
        
        elif this.next_Char == "\"":
            string_Aux = []
            string_Aux.append(.next_Char)
            this.next_Char = this.arq.read(1)
            this.ch+=1
            if this.next_Char != "\"":
                while(.next_Char!="\""):
                    string_Aux.append(.next_Char)
                    this.next_Char = this.arq.read(1)
                    this.ch+=1
            string_Aux.append(.next_Char)
            this.next_Char = this.arq.read(1)
            this.ch+=1
            string = sep.join(string_Aux)
            token = STRING
            this.secondary_Token = this.add_Cte(string)
        
        else:
            if this.next_Char == "\'":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = CHARACTER
                this.secondary_Token = this.add_Cte(.next_Char)
                this.next_Char = this.arq.read(2) 
                this.ch+=2
            elif this.next_Char == ":":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = COLON
            elif this.next_Char == "+":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                if this.next_Char == "+":
                    token = PLUS_PLUS
                    this.next_Char = this.arq.read(1)
                    this.ch+=1
                else:
                    token = PLUS
            elif this.next_Char == "-":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                if this.next_Char == "-":
                    token = MINUS_MINUS
                    this.next_Char = this.arq.read(1)
                    this.ch+=1
                else:
                    token = MINUS
            elif this.next_Char == ";":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = SEMI_COLON
            elif this.next_Char == ",":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = COMMA
            elif this.next_Char == "=":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                if this.next_Char == "=":
                    token = EQUAL_EQUAL
                    this.next_Char = this.arq.read(1)
                    this.ch+=1
                else:
                    token = EQUALS
            elif this.next_Char == "[":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = LEFT_SQUARE
            elif this.next_Char == "]":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = RIGHT_SQUARE
            elif this.next_Char == "{":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = LEFT_BRACES
            elif this.next_Char == "}":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = RIGHT_BRACES
            elif this.next_Char == "(":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = LEFT_PARENTHESIS
            elif this.next_Char == ")":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = RIGHT_PARENTHESIS
            elif this.next_Char == "&":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                if this.next_Char == "&":
                    this.next_Char=this.arq.read(1)
                    this.ch+=1
                    token = AND
                else:
                    token = UNKNOWN
            elif this.next_Char == "|":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                if this.next_Char == "|":
                    this.next_Char = this.arq.read(1)
                    this.ch+=1
                    token = OR
                else:
                    token = UNKNOWN
            elif this.next_Char == "<":
                this.next_Char=this.arq.read(1)
                this.ch+=1
                if this.next_Char == "=":
                    token = LESS_OR_EQUAL
                    this.next_Char = this.arq.read(1)
                    this.ch+=1
                else:
                    token=LESS_THAN
            elif this.next_Char == ">":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                if this.next_Char == "=":
                    token = GREATER_OR_EQUAL
                    this.next_Char = this.arq.read(1)
                    this.ch+=1
                else:
                    token = GREATER_THAN
            elif this.next_Char == "!":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                if this.next_Char == "=":
                    token = NOT_EQUAL
                    this.next_Char = this.arq.read(1)
                    this.ch+=1
                else:
                    token = NOT 
            elif this.next_Char == "*":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = TIMES
            elif this.next_Char == ".":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = DOT        
            elif this.next_Char == "/":
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = DIVIDE
            else:
                this.next_Char = this.arq.read(1)
                this.ch+=1
                token = UNKNOWN
        // print('token', token)
        return token

    Lexical_error(token):
        if token == UNKNOWN:
            this.lexicalError = True
            print("Character "+str(.ch+1)+" not expected in the line " + str(.line))

    run():
        this.next_Char = this.arq.read(1)
        token_Aux = this.next_Token()
        while token_Aux != EOF:
            if token_Aux == UNKNOWN:
                print("Character "+str(.ch+1)+" not expected in the line " + str(.line))
                this.lexicalError = True
            token_Aux = this.next_Token()
        if not this.lexicalError:
            print ("No lexical errors.")

}
