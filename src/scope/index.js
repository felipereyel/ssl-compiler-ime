import { isEqual } from "lodash";

import {
  Kind,
  ErrorCode,
  ObjectStruct,
  Attr,
  int_,
  char_,
  bool_,
  string_,
  universal_,
} from "./header";
import { Rules, States } from "../syntatical/header";
import Stack from "../stack";

const MAX_NEST_LEVEL = 50;
const IS_TYPE_KIND = (k) =>
  [
    Kind.ARRAY_TYPE_,
    Kind.STRUCT_TYPE_,
    Kind.ALIAS_TYPE_,
    Kind.SCALAR_TYPE_,
  ].includes(k);

export default class Scope {
  _out = "";
  stack = new Stack();
  nFuncs = 0;
  curFunction = {};

  nCurrentLevel = 0;
  SymbolTable = {};
  SymbolTableLast = {};

  errors = [];

  constructor(lexical) {
    this.lexical = lexical;
  }

  addOut(content) {
    this._out += content;
  }

  labelNo = 0;
  newLabel() {
    return this.labelNo++;
  }

  newBlock() {
    this.nCurrentLevel++;
    this.SymbolTable[this.nCurrentLevel] = null;
    this.SymbolTableLast[this.nCurrentLevel] = null;
    return this.nCurrentLevel;
  }

  endBlock() {
    return --this.nCurrentLevel;
  }

  define(aName) {
    const obj = new ObjectStruct();
    obj.nName = aName;
    obj.pNext = null;

    if (this.SymbolTable[this.nCurrentLevel] == null) {
      this.SymbolTable[this.nCurrentLevel] = obj;
      this.SymbolTableLast[this.nCurrentLevel] = obj;
    } else {
      this.SymbolTableLast[this.nCurrentLevel].pNext = obj;
      this.SymbolTableLast[this.nCurrentLevel] = obj;
    }
    return obj;
  }

  search(aName) {
    let obj = this.SymbolTable[this.nCurrentLevel];
    while (obj != null) {
      if (obj.nName == aName) {
        break;
      } else {
        obj = obj.pNext;
      }
    }
    return obj;
  }

  find(aName) {
    let i;
    let obj = null;
    for (i = this.nCurrentLevel; i >= 0; --i) {
      obj = this.SymbolTable[i];
      while (obj != null) {
        if (obj.nName == aName) {
          break;
        } else {
          obj = obj.pNext;
        }
      }
      if (obj != null) break;
    }
    return obj;
  }

  recordError(code) {
    let error = `Line: ${this.lexical.currentLine} - `;
    switch (code) {
      case ErrorCode.ERR_NO_DECL:
        error += "Variable not declared";
        break;
      case ErrorCode.ERR_REDCL:
        error += "Variable already declared";
        break;
      case ErrorCode.ERR_TYPE_EXPECTED:
        error += "Type Expected";
        break;
      case ErrorCode.ERR_BOOL_TYPE_EXPECTED:
        error += "Bool Expected";
        break;
      case ErrorCode.ERR_INVALID_TYPE:
        error += "Invalid Type";
        break;
      case ErrorCode.ERR_TYPE_MISMATCH:
        error += "Type Mismatch";
        break;
      case ErrorCode.ERR_KIND_NOT_STRUCT:
        error += "Kind not Struct";
        break;
      case ErrorCode.ERR_FIELD_NOT_DECL:
        error += "Field not Declared";
        break;
      case ErrorCode.ERR_KIND_NOT_ARRAY:
        error += "Kind not Array";
        break;
      case ErrorCode.ERR_INVALID_INDEX_TYPE:
        error += "Invalid Index";
        break;
      case ErrorCode.ERR_KIND_NOT_VAR:
        error += "Kind not Var";
        break;
      case ErrorCode.ERR_KIND_NOT_FUNCTION:
        error += "Kind not Function";
        break;
      case ErrorCode.ERR_TOO_FEW_ARGS:
        error += "Too Few Args";
        break;
      case ErrorCode.ERR_TOO_MANY_ARGS:
        error += "Too Many Args";
        break;
      case ErrorCode.ERR_PARAM_TYPE:
        error += "Param Type";
        break;
      case ErrorCode.ERR_RETURN_TYPE_MISMATCH:
        error += "Return Type Mismatch";
        break;
      default:
        break;
    }
    // console.error(error);
    this.errors.push(error);
  }

  checkTypes(t1, t2) {
    // check is equal
    if (isEqual(t1, t2)) {
      return true;
    } else if (isEqual(t1, universal_) || isEqual(t2, universal_)) {
      return true;
    } else if (t1.eKind == Kind.UNIVERSAL_ || t2.eKind == Kind.UNIVERSAL_) {
      return true;
    } else if (t1.eKind == Kind.ALIAS_TYPE_ && t2.eKind != Kind.ALIAS_TYPE_) {
      return this.checkTypes(t1.Alias.pBaseType, t2);
    } else if (t1.eKind != Kind.ALIAS_TYPE_ && t2.eKind == Kind.ALIAS_TYPE_) {
      return this.checkTypes(t1, t2.Alias.pBaseType);
    } else if (t1.eKind == t2.eKind) {
      if (t1.eKind == Kind.ALIAS_TYPE_) {
        return this.checkTypes(t1.Alias.pBaseType, t2.Alias.pBaseType);
      } else if (t1.eKind == Kind.ARRAY_TYPE_) {
        if (t1.Array.nNumElems == t2.Array.nNumElems) {
          return this.checkTypes(t1.Array.pElemType, t2.Array.pElemType);
        }
      } else if (t1.eKind == Kind.STRUCT_TYPE_) {
        let f1 = t1.Struct.pFields;
        let f2 = t2.Struct.pFields;
        while (f1 != null && f2 != null) {
          if (!this.checkTypes(f1.Field.pType, f2.Field.pType)) {
            return false;
          }
          f1 = f1.pNext;
          f2 = f2.pNext;
        }
        return f1 == null && f2 == null;
      }
    }

    return false;
  }

  /* Semantics */
  name = null;
  n = null;
  l = null;
  l1 = null;
  l2 = null;
  p = new ObjectStruct();
  t = new ObjectStruct();
  f = new ObjectStruct();
  IDD_ = new Attr();
  IDU_ = new Attr();
  ID_ = new Attr();
  T_ = new Attr();
  LI_ = new Attr();
  LI0_ = new Attr();
  LI1_ = new Attr();
  TRU_ = new Attr();
  FALS_ = new Attr();
  STR_ = new Attr();
  CHR_ = new Attr();
  NUM_ = new Attr();
  DC_ = new Attr();
  DC0_ = new Attr();
  DC1_ = new Attr();
  LP_ = new Attr();
  LP0_ = new Attr();
  LP1_ = new Attr();
  E_ = new Attr();
  E0_ = new Attr();
  E1_ = new Attr();
  L_ = new Attr();
  L0_ = new Attr();
  L1_ = new Attr();
  R_ = new Attr();
  R0_ = new Attr();
  R1_ = new Attr();
  K_ = new Attr();
  K0_ = new Attr();
  K1_ = new Attr();
  F_ = new Attr();
  F0_ = new Attr();
  F1_ = new Attr();
  LV_ = new Attr();
  LV0_ = new Attr();
  LV1_ = new Attr();
  MC_ = new Attr();
  LE_ = new Attr();
  LE0_ = new Attr();
  LE1_ = new Attr();
  MT_ = new Attr();
  ME_ = new Attr();
  MW_ = new Attr();
  MA_ = new Attr();
  semantics(rule) {
    switch (rule) {
      case Rules.IDD_RULE:
        this.name = this.lexical.secondaryToken;
        this.IDD_.nont = States.IDD;
        this.IDD_.ID.name = this.name;
        if ((this.p = this.search(this.name)) != null) {
          this.recordError(ErrorCode.ERR_REDCL);
        } else {
          this.p = this.define(this.name);
        }

        this.p.eKind = Kind.NO_KIND_DEF_;
        this.IDD_.ID.obj = this.p;
        this.stack.push(this.IDD_);
        break;
      case Rules.IDU_RULE:
        this.name = this.lexical.secondaryToken;
        this.IDU_.nont = States.IDU;
        this.IDU_.ID.name = this.name;

        if ((this.p = this.find(this.name)) == null) {
          this.recordError(ErrorCode.ERR_NO_DECL);
          this.p = this.define(this.name);
        }
        this.IDU_.ID.obj = this.p;
        this.stack.push(this.IDU_);
        break;
      case Rules.ID_RULE:
        this.ID_.nont = States.ID;
        this.name = this.lexical.secondaryToken;
        this.ID_.ID.name = this.name;
        this.ID_.ID.obj = null;
        this.stack.push(this.ID_);
        break;
      case Rules.T_IDU_RULE:
        this.IDU_ = this.stack.top;
        this.p = this.IDU_.ID.obj;
        this.stack.pop();

        if (IS_TYPE_KIND(this.p.eKind) || this.p.eKind == Kind.UNIVERSAL_) {
          this.T_.T.type = this.p;
          this.T_.nSize = this.p.Alias.nSize;
        } else {
          this.T_.T.type = universal_;
          this.T_.nSize = 0;
          this.recordError(ErrorCode.ERR_TYPE_EXPECTED);
        }
        this.T_.nont = States.T;
        this.stack.push(this.T_);
        break;
      case Rules.T_INTEGER_RULE:
        this.T_.T.type = int_;
        this.T_.nont = States.T;
        this.T_.nSize = 1;
        this.stack.push(this.T_);
        break;
      case Rules.T_CHAR_RULE:
        this.T_.T.type = char_;
        this.T_.nont = States.T;
        this.T_.nSize = 1;
        this.stack.push(this.T_);
        break;
      case Rules.T_BOOL_RULE:
        this.T_.T.type = bool_;
        this.T_.nont = States.T;
        this.T_.nSize = 1;
        this.stack.push(this.T_);
        break;
      case Rules.T_STRING_RULE:
        this.T_.T.type = string_;
        this.T_.nont = States.T;
        this.T_.nSize = 1;
        this.stack.push(this.T_);
        break;
      case Rules.LI_IDD_RULE:
        this.IDD_ = this.stack.top;
        this.LI_.LI.list = this.IDD_.ID.obj;
        this.LI_.nont = States.LI;
        this.stack.pop();
        this.stack.push(this.LI_);
        break;
      case Rules.LI_COMMA_RULE:
        this.IDD_ = this.stack.top;
        this.stack.pop();
        this.LI1_ = this.stack.top;
        this.stack.pop();
        this.LI0_.LI.list = this.LI1_.LI.list;
        this.LI0_.nont = States.LI;
        this.stack.push(this.LI0_);
        break;
      case Rules.DV_VAR_RULE:
        this.T_ = this.stack.top;
        this.t = this.T_.T.type;
        this.stack.pop();
        this.LI_ = this.stack.top;
        this.stack.pop();
        this.p = this.LI_.LI.list;
        this.n = this.curFunction.Function.nVars;

        while (this.p != null && this.p.eKind == Kind.NO_KIND_DEF_) {
          this.p.eKind = Kind.VAR_;
          this.p.Var.pType = this.t;
          this.p.Var.nSize = this.T_.nSize;
          this.p.Var.nIndex = this.n;

          this.n += this.T_.nSize;
          this.p = this.p.pNext;
        }

        this.curFunction.Function.nVars = this.n;
        break;
      case Rules.TRUE_RULE:
        this.TRU_.nont = States.TRU;
        this.TRU_.TRU.val = true;
        this.TRU_.TRU.type = bool_;
        this.stack.push(this.TRU_);
        break;
      case Rules.FALSE_RULE:
        this.FALS_.nont = States.FALS;
        this.FALS_.FALS.val = false;
        this.FALS_.FALS.type = bool_;
        this.stack.push(this.FALS_);
        break;
      case Rules.CHR_RULE:
        this.CHR_.nont = States.CHR;
        this.CHR_.CHR.type = char_;
        this.CHR_.CHR.pos = this.lexical.secondaryToken;
        this.CHR_.CHR.val = this.lexical.getConst(
          this.lexical.secondaryToken
        ).value;
        this.stack.push(this.CHR_);
        break;
      case Rules.STR_RULE:
        this.STR_.nont = States.STR;
        this.STR_.STR.type = string_;
        this.STR_.STR.pos = this.lexical.secondaryToken;
        this.STR_.STR.val = this.lexical.getConst(
          this.lexical.secondaryToken
        ).value;
        this.stack.push(this.STR_);
        break;
      case Rules.NUM_RULE:
        this.NUM_.nont = States.NUM;
        this.NUM_.NUM.type = int_;
        this.NUM_.NUM.pos = this.lexical.secondaryToken;
        this.NUM_.NUM.val = this.lexical.getConst(
          this.lexical.secondaryToken
        ).value;
        this.stack.push(this.NUM_);
        break;
      case Rules.DT_ARRAY_RULE:
        this.T_ = this.stack.top;
        this.stack.pop();
        this.NUM_ = this.stack.top;
        this.stack.pop();
        this.IDD_ = this.stack.top;
        this.stack.pop();

        this.p = this.IDD_.ID.obj;
        this.n = this.NUM_.NUM.val;
        this.t = this.T_.T.type;

        this.p.eKind = Kind.ARRAY_TYPE_;
        this.p.Array.nNumElems = this.n;
        this.p.Array.pElemType = this.t;
        this.p.Array.nSize = this.n * this.T_.nSize;

        break;
      case Rules.DT_ALIAS_RULE:
        this.T_ = this.stack.top;
        this.stack.pop();
        this.IDD_ = this.stack.top;
        this.stack.pop();

        this.p = this.IDD_.ID.obj;
        this.t = this.T_.T.type;

        this.p.eKind = Kind.ALIAS_TYPE_;
        this.p.Alias.pBaseType = this.t;
        this.p.Alias.nSize = this.T_.nSize;
        break;
      case Rules.NB_RULE:
        this.newBlock();
        break;
      case Rules.DC_LI_RULE:
        this.T_ = this.stack.top;
        this.stack.pop();
        this.LI_ = this.stack.top;
        this.stack.pop();

        this.p = this.LI_.LI.list;
        this.t = this.T_.T.type;
        this.n = 0;
        while (this.p != null && this.p.eKind == Kind.NO_KIND_DEF_) {
          this.p.eKind = Kind.FIELD_;
          this.p.Field.pType = this.t;
          this.p.Field.nSize = this.T_.nSize;
          this.p.Field.nIndex = this.n;
          this.n = this.n + this.T_.nSize;
          this.p = this.p.pNext;
        }
        this.DC_.DC.list = this.LI_.LI.list;
        this.DC_.nSize = this.n;
        this.DC_.nont = States.DC;
        this.stack.push(this.DC_);
        break;
      case Rules.DC_DC_RULE:
        this.T_ = this.stack.top;
        this.stack.pop();
        this.LI_ = this.stack.top;
        this.stack.pop();
        this.DC1_ = this.stack.top;
        this.stack.pop();

        this.p = this.LI_.LI.list;
        this.t = this.T_.T.type;
        this.n = this.DC1_.nSize;

        while (this.p != null && this.p.eKind == Kind.NO_KIND_DEF_) {
          this.p.eKind = Kind.FIELD_;
          this.p.Field.pType = this.t;
          this.p.Field.nIndex = this.n;
          this.p.Field.nSize = this.T_.nSize;
          this.n = this.n + this.T_.nSize;
          this.p = this.p.pNext;
        }

        this.DC0_.DC.list = this.DC1_.DC.list;
        this.DC0_.nSize = this.n;
        this.DC0_.nont = States.DC;
        this.stack.push(this.DC0_);
        break;
      case Rules.DT_STRUCT_RULE:
        this.DC_ = this.stack.top;
        this.stack.pop();
        this.IDD_ = this.stack.top;
        this.stack.pop();

        this.p = this.IDD_.ID.obj;
        this.p.eKind = Kind.STRUCT_TYPE_;
        this.p.Struct.pFields = this.DC_.DC.list;
        this.p.Struct.nSize = this.DC_.nSize;
        this.endBlock();
        break;
      case Rules.LP_EPSILON_RULE:
        this.LP_.LP.list = null;
        this.LP_.nont = States.LP;
        this.LP_.nSize = 0;
        this.stack.push(this.LP_);
        break;
      case Rules.LP_IDD_RULE:
        this.T_ = this.stack.top;
        this.stack.pop();
        this.IDD_ = this.stack.top;
        this.stack.pop();

        this.p = this.IDD_.ID.obj;
        this.t = this.T_.T.type;
        this.p.eKind = Kind.PARAM_;
        this.p.Param.pType = this.t;
        this.p.Param.nIndex = 0;
        this.p.Param.nSize = this.T_.nSize;
        this.LP_.LP.list = this.p;
        this.LP_.nSize = this.T_.nSize;
        this.LP_.nont = States.LP;

        this.stack.push(this.LP_);
        break;
      case Rules.LP_LP_RULE:
        this.T_ = this.stack.top;
        this.stack.pop();
        this.IDD_ = this.stack.top;
        this.stack.pop();
        this.LP1_ = this.stack.top;
        this.stack.pop();

        this.p = this.IDD_.ID.obj;
        this.t = this.T_.T.type;
        this.n = this.LP1_.nSize;

        this.p.eKind = Kind.PARAM_;
        this.p.Param.pType = this.t;
        this.p.Param.nIndex = this.n;
        this.p.Param.nSize = this.T_.nSize;

        this.LP0_.LP.list = this.LP1_.LP.list;
        this.LP0_.nSize = this.n + this.T_.nSize;
        this.LP0_.nont = States.LP;
        this.stack.push(this.LP0_);
        break;
      case Rules.NF_RULE:
        this.IDD_ = this.stack.top;
        this.f = this.IDD_.ID.obj;
        this.f.eKind = Kind.FUNCTION_;
        this.f.Function.nParams = 0;
        this.f.Function.nVars = 0;
        this.f.Function.nIndex = this.nFuncs++;
        this.newBlock();
        break;
      case Rules.MF_RULE:
        this.T_ = this.stack.top;
        this.stack.pop();
        this.LP_ = this.stack.top;
        this.stack.pop();
        this.IDD_ = this.stack.top;
        this.stack.pop();

        this.f = this.IDD_.ID.obj;
        this.f.eKind = Kind.FUNCTION_;
        this.f.Function.pRetType = this.T_.T.type;
        this.f.Function.pParams = this.LP_.LP.list;
        this.f.Function.nParams = this.LP_.nSize;
        this.f.Function.nVars = this.LP_.nSize;
        this.curFunction = this.f;

        this.addOut(
          `BEGIN_FUNC ${this.f.Function.nIndex} ${
            this.f.Function.nParams
          } ${this.f.Function.nVars - this.f.Function.nParams}\n`
        );
        break;
      case Rules.DF_RULE:
        this.endBlock();
        this.addOut("END_FUNC\n");
        break;
      case Rules.S_BLOCK_RULE:
        this.endBlock();
        break;
      case Rules.S_E_SEMICOLON:
        this.E_ = this.stack.top;
        this.stack.pop();
        this.addOut("\tPOP\n");
        break;
      case Rules.MT_RULE:
        this.l = this.newLabel();
        this.MT_.MT.label = this.l;
        this.MT_.nont = States.MT;
        this.addOut(`\tTJMP_FW L${this.l}\n`);
        this.stack.push(this.MT_);
        break;
      case Rules.S_IF_RULE:
        this.stack.pop();
        this.MT_ = this.stack.top;
        this.stack.pop();
        this.E_ = this.stack.top;
        this.stack.pop();

        this.t = this.E_.E.type;
        if (!this.checkTypes(this.t, bool_)) {
          this.recordError(ErrorCode.ERR_BOOL_TYPE_EXPECTED);
        }

        this.addOut(`L${this.MT_.MT.label}\n`);

        break;
      case Rules.ME_RULE:
        this.MT_ = this.stack.top;
        this.l1 = this.MT_.MT.label;
        this.l2 = this.newLabel();
        this.ME_.ME.label = this.l2;
        this.ME_.nont = States.ME;
        this.stack.push(this.ME_);

        this.addOut(`\tTJMP_FW L${this.l2}\nL${this.l1}\n`);
        break;
      case Rules.S_IF_ELSE_RULE:
        this.ME_ = this.stack.top;
        this.stack.pop();
        this.MT_ = this.stack.top;
        this.stack.pop();
        this.E_ = this.stack.top;
        this.stack.pop();

        this.l = this.ME_.ME.label;

        this.t = this.E_.E.type;
        if (!this.checkTypes(this.t, bool_)) {
          this.recordError(ErrorCode.ERR_BOOL_TYPE_EXPECTED);
        }
        this.addOut(`\tL${this.l}\n`);
        break;
      case Rules.MW_RULE:
        this.l = this.newLabel();
        this.MW_.MW.label = this.l;
        this.stack.push(this.MW_);
        this.addOut(`\tL${this.l}\n`);
        break;
      case Rules.S_WHILE_RULE:
        this.MT_ = this.stack.top;
        this.stack.pop();
        this.E_ = this.stack.top;
        this.stack.pop();
        this.MW_ = this.stack.top;
        this.stack.pop();

        this.l1 = this.MW_.MW.label;
        this.l2 = this.MT_.MT.label;

        this.t = this.E_.E.type;
        if (!this.checkTypes(this.t, bool_)) {
          this.recordError(ErrorCode.ERR_BOOL_TYPE_EXPECTED);
        }

        this.addOut(`\tJMP_BW L${this.l1}\nL${this.l2}\n`);
        break;
      case Rules.S_DO_WHILE_RULE:
        this.E_ = this.stack.top;
        this.stack.pop();

        this.MW_ = this.stack.top;
        this.stack.pop();
        this.l = this.MW_.MW.label;

        this.t = this.E_.E.type;
        if (!this.checkTypes(this.t, bool_)) {
          this.recordError(ErrorCode.ERR_BOOL_TYPE_EXPECTED);
        }

        this.addOut(`\tNOT\n\tTJMP_BW L${this.l}\n`);
        break;
      case Rules.S_BREAK_RULE:
        this.MT_ = this.stack.top;
        break;
      case Rules.S_CONTINUE_RULE:
        break;
      case Rules.S_RETURN_RULE:
        this.E_ = this.stack.top;
        this.stack.pop();
        if (
          !this.checkTypes(this.curFunction.Function.pRetType, this.E_.E.type)
        ) {
          this.recordError(ErrorCode.ERR_RETURN_TYPE_MISMATCH);
        }
        this.addOut("\tRET\n");
        break;
      case Rules.E_AND_RULE:
        this.L_ = this.stack.top;
        this.stack.pop();
        this.E1_ = this.stack.top;
        this.stack.pop();
        if (!this.checkTypes(this.E1_.E.type, bool_)) {
          this.recordError(ErrorCode.ERR_BOOL_TYPE_EXPECTED);
        }

        if (!this.checkTypes(this.L_.L.type, bool_)) {
          this.recordError(ErrorCode.ERR_BOOL_TYPE_EXPECTED);
        }

        this.E0_.E.type = bool_;
        this.E0_.nont = States.E;
        this.stack.push(this.E0_);
        this.addOut("\tAND\n");
        break;
      case Rules.E_OR_RULE:
        this.L_ = this.stack.top;
        this.stack.pop();
        this.E1_ = this.stack.top;
        this.stack.pop();
        if (!this.checkTypes(this.E1_.E.type, bool_)) {
          this.recordError(ErrorCode.ERR_BOOL_TYPE_EXPECTED);
        }

        if (!this.checkTypes(this.L_.L.type, bool_)) {
          this.recordError(ErrorCode.ERR_BOOL_TYPE_EXPECTED);
        }

        this.E0_.E.type = bool_;
        this.E0_.nont = States.E;
        this.stack.push(this.E0_);
        this.addOut("\tOR\n");
        break;
      case Rules.E_L_RULE:
        this.L_ = this.stack.top;
        this.stack.pop();
        this.E_.E.type = this.L_.L.type;
        this.E_.nont = States.E;
        this.stack.push(this.E_);
        break;
      case Rules.L_LESS_THAN_RULE:
        this.R_ = this.stack.top;
        this.stack.pop();
        this.L1_ = this.stack.top;
        this.stack.pop();

        if (!this.checkTypes(this.L1_.L.type, this.R_.R.type)) {
          this.recordError(ErrorCode.ERR_TYPE_MISMATCH);
        }
        this.L0_.L.type = bool_;
        this.L0_.nont = States.L;
        this.stack.push(this.L0_);

        this.addOut("\tLT\n");

        break;
      case Rules.L_GREATER_THAN_RULE:
        this.R_ = this.stack.top;
        this.stack.pop();
        this.L1_ = this.stack.top;
        this.stack.pop();

        if (!this.checkTypes(this.L1_.L.type, this.R_.R.type)) {
          this.recordError(ErrorCode.ERR_TYPE_MISMATCH);
        }
        this.L0_.L.type = bool_;
        this.L0_.nont = States.L;
        this.stack.push(this.L0_);
        this.addOut("\tGT\n");
        break;
      case Rules.L_LESS_EQUAL_RULE:
        this.R_ = this.stack.top;
        this.stack.pop();
        this.L1_ = this.stack.top;
        this.stack.pop();

        if (!this.checkTypes(this.L1_.L.type, this.R_.R.type)) {
          this.recordError(ErrorCode.ERR_TYPE_MISMATCH);
        }
        this.L0_.L.type = bool_;
        this.L0_.nont = States.L;
        this.stack.push(this.L0_);
        this.addOut("\tLE\n");
        break;
      case Rules.L_GREATER_EQUAL_RULE:
        this.R_ = this.stack.top;
        this.stack.pop();
        this.L1_ = this.stack.top;
        this.stack.pop();

        if (!this.checkTypes(this.L1_.L.type, this.R_.R.type)) {
          this.recordError(ErrorCode.ERR_TYPE_MISMATCH);
        }
        this.L0_.L.type = bool_;
        this.L0_.nont = States.L;
        this.stack.push(this.L0_);
        this.addOut("\tGE\n");
        break;
      case Rules.L_EQUAL_EQUAL_RULE:
        this.R_ = this.stack.top;
        this.stack.pop();
        this.L1_ = this.stack.top;
        this.stack.pop();

        if (!this.checkTypes(this.L1_.L.type, this.R_.R.type)) {
          this.recordError(ErrorCode.ERR_TYPE_MISMATCH);
        }
        this.L0_.L.type = bool_;
        this.L0_.nont = States.L;
        this.stack.push(this.L0_);
        this.addOut("\tEQ\n");
        break;
      case Rules.L_NOT_EQUAL_RULE:
        this.R_ = this.stack.top;
        this.stack.pop();
        this.L1_ = this.stack.top;
        this.stack.pop();

        if (!this.checkTypes(this.L1_.L.type, this.R_.R.type)) {
          this.recordError(ErrorCode.ERR_TYPE_MISMATCH);
        }
        this.L0_.L.type = bool_;
        this.L0_.nont = States.L;
        this.stack.push(this.L0_);
        this.addOut("\tNE\n");
        break;
      case Rules.L_R_RULE:
        this.R_ = this.stack.top;
        this.stack.pop();
        this.L_.L.type = this.R_.R.type;
        this.L_.nont = States.L;
        this.stack.push(this.L_);
        break;
      case Rules.R_PLUS_RULE:
        this.K_ = this.stack.top;
        this.stack.pop();
        this.R1_ = this.stack.top;
        this.stack.pop();

        if (!this.checkTypes(this.R1_.R.type, this.K_.K.type)) {
          this.recordError(ErrorCode.ERR_TYPE_MISMATCH);
        }

        if (
          !this.checkTypes(this.R1_.R.type, int_) &&
          !this.checkTypes(this.R1_.R.type, string_)
        ) {
          this.recordError(ErrorCode.ERR_INVALID_TYPE);
        }

        this.R0_.R.type = this.R1_.R.type;
        this.R0_.nont = States.R;
        this.stack.push(this.R0_);
        this.addOut("\tADD\n");
        break;
      case Rules.R_MINUS_RULE:
        this.K_ = this.stack.top;
        this.stack.pop();
        this.R1_ = this.stack.top;
        this.stack.pop();

        if (!this.checkTypes(this.R1_.R.type, this.K_.K.type)) {
          this.recordError(ErrorCode.ERR_TYPE_MISMATCH);
        }

        if (!this.checkTypes(this.R1_.R.type, int_)) {
          this.recordError(ErrorCode.ERR_INVALID_TYPE);
        }

        this.R0_.R.type = this.R1_.R.type;
        this.R0_.nont = States.R;
        this.stack.push(this.R0_);
        this.addOut("\tSUB\n");
        break;
      case Rules.R_K_RULE:
        this.K_ = this.stack.top;
        this.stack.pop();
        this.R_.R.type = this.K_.K.type;
        this.R_.nont = States.R;
        this.stack.push(this.R_);
        break;
      case Rules.K_TIMES_RULE:
        this.F_ = this.stack.top;
        this.stack.pop();
        this.K1_ = this.stack.top;
        this.stack.pop();

        if (!this.checkTypes(this.K1_.K.type, this.F_.F.type)) {
          this.recordError(ErrorCode.ERR_TYPE_MISMATCH);
        }

        if (!this.checkTypes(this.K1_.K.type, int_)) {
          this.recordError(ErrorCode.ERR_INVALID_TYPE);
        }

        this.K0_.K.type = this.K1_.K.type;
        this.K0_.nont = States.K;
        this.stack.push(this.K0_);
        this.addOut("\tMUL\n");
        break;
      case Rules.K_DIVIDE_RULE:
        this.F_ = this.stack.top;
        this.stack.pop();
        this.K1_ = this.stack.top;
        this.stack.pop();

        if (!this.checkTypes(this.K1_.K.type, this.F_.F.type)) {
          this.recordError(ErrorCode.ERR_TYPE_MISMATCH);
        }

        if (!this.checkTypes(this.K1_.K.type, int_)) {
          this.recordError(ErrorCode.ERR_INVALID_TYPE);
        }

        this.K0_.K.type = this.K1_.K.type;
        this.K0_.nont = States.K;
        this.stack.push(this.K0_);
        this.addOut("\tDIV\n");
        break;
      case Rules.K_F_RULE:
        this.F_ = this.stack.top;
        this.stack.pop();
        this.K_.K.type = this.F_.F.type;
        this.K_.nont = States.K;
        this.stack.push(this.K_);
        break;
      case Rules.F_LV_RULE:
        this.LV_ = this.stack.top;
        this.stack.pop();

        this.n = this.LV_.LV.type.Type.nSize;

        this.F_.F.type = this.LV_.LV.type;
        this.F_.nont = States.F;
        this.stack.push(this.F_);
        this.addOut(`\tDE_REF ${this.n}\n`);
        break;
      case Rules.F_LEFT_PLUS_PLUS_RULE:
        this.LV_ = this.stack.top;
        this.stack.pop();
        this.t = this.LV_.LV.type;
        if (!this.checkTypes(this.t, int_)) {
          this.recordError(ErrorCode.ERR_INVALID_TYPE);
        }

        this.F_.F.type = int_;
        this.F_.nont = States.F;
        this.addOut("\tDUP\n\tDUP\n\tDE_REF 1\n");
        this.addOut("\tINC\n\tSTORE_REF 1\n\tDE_REF 1\n");
        this.stack.push(this.F_);
        break;
      case Rules.F_LEFT_MINUS_MINUS_RULE:
        this.LV_ = this.stack.top;
        this.stack.pop();
        this.t = this.LV_.LV.type;
        if (!this.checkTypes(this.t, int_)) {
          this.recordError(ErrorCode.ERR_INVALID_TYPE);
        }

        this.F_.F.type = this.LV_.LV.type;
        this.F_.nont = States.F;
        this.stack.push(this.F_);
        this.addOut("\tDUP\n\tDUP\n\tDE_REF 1\n");
        this.addOut("\tDEC\n\tSTORE_REF 1\n\tDE_REF 1\n");
        break;
      case Rules.F_RIGHT_PLUS_PLUS_RULE:
        this.LV_ = this.stack.top;
        this.stack.pop();
        this.t = this.LV_.LV.type;
        if (!this.checkTypes(this.t, int_)) {
          this.recordError(ErrorCode.ERR_INVALID_TYPE);
        }

        this.F_.F.type = this.LV_.LV.type;
        this.F_.nont = States.F;
        this.stack.push(this.F_);
        this.addOut("\tDUP\n\tDUP\n\tDE_REF 1\n");
        this.addOut("\tINC\n\tSTORE_REF 1\n\tDE_REF 1\n");
        this.addOut("\tDEC\n");
        break;
      case Rules.F_RIGHT_MINUS_MINUS_RULE:
        this.LV_ = this.stack.top;
        this.stack.pop();
        this.t = this.LV_.LV.type;
        if (!this.checkTypes(this.t, int_)) {
          this.recordError(ErrorCode.ERR_INVALID_TYPE);
        }

        this.F_.F.type = this.t;
        this.F_.nont = States.F;
        this.stack.push(this.F_);
        this.addOut("\tDUP\n\tDUP\n\tDE_REF 1\n");
        this.addOut("\tDEC\n\tSTORE_REF 1\n\tDE_REF 1\n");
        this.addOut("\tINC\n");
        break;
      case Rules.F_PARENTHESIS_E_RULE:
        this.E_ = this.stack.top;
        this.stack.pop();

        this.F_.F.type = this.E_.E.type;
        this.F_.nont = States.F;
        this.stack.push(this.F_);
        break;
      case Rules.F_MINUS_F_RULE:
        this.F1_ = this.stack.top;
        this.stack.pop();

        this.t = this.F1_.F.type;
        if (!this.checkTypes(this.t, int_)) {
          this.recordError(ErrorCode.ERR_INVALID_TYPE);
        }

        this.F0_.F.type = this.t;
        this.F0_.nont = States.F;
        this.stack.push(this.F0_);
        this.addOut("\tNEG\n");
        break;
      case Rules.F_NOT_F_RULE:
        this.F1_ = this.stack.top;
        this.stack.pop();

        this.t = this.F1_.F.type;
        if (!this.checkTypes(this.t, bool_)) {
          this.recordError(ErrorCode.ERR_INVALID_TYPE);
        }

        this.F0_.F.type = this.t;
        this.F0_.nont = States.F;
        this.stack.push(this.F0_);
        this.addOut("\tNOT\n");
        break;
      case Rules.F_TRUE_RULE:
        this.TRU_ = this.stack.top;
        this.stack.pop();
        this.F_.F.type = bool_;
        this.F_.nont = States.F;
        this.stack.push(this.F_);
        this.addOut("\tLOAD_TRUE\n");
        break;
      case Rules.F_FALSE_RULE:
        this.FALS_ = this.stack.top;
        this.stack.pop();
        this.F_.F.type = bool_;
        this.F_.nont = States.F;
        this.stack.push(this.F_);
        this.addOut("\tLOAD_FALSE\n");
        break;
      case Rules.F_CHR_RULE:
        this.CHR_ = this.stack.top;
        this.stack.pop();
        this.F_.F.type = char_;
        this.F_.nont = States.F;
        this.stack.push(this.F_);
        this.n = this.lexical.secondaryToken;
        this.addOut(`\tLOAD_CONST ${this.n}\n`);
        break;
      case Rules.F_STR_RULE:
        this.STR_ = this.stack.top;
        this.stack.pop();
        this.F_.F.type = string_;
        this.F_.nont = States.F;
        this.stack.push(this.F_);
        this.n = this.lexical.secondaryToken;
        this.addOut(`\tLOAD_CONST ${this.n}\n`);
        break;
      case Rules.F_NUM_RULE:
        this.STR_ = this.stack.top;
        this.stack.pop();
        this.F_.F.type = int_;
        this.F_.nont = States.F;
        this.stack.push(this.F_);
        this.n = this.lexical.secondaryToken;
        this.addOut(`\tLOAD_CONST ${this.n}\n`);
        break;
      case Rules.LV_DOT_RULE:
        this.ID_ = this.stack.top;
        this.stack.pop();
        this.LV1_ = this.stack.top;
        this.stack.pop();

        this.t = this.LV1_.LV.type;
        if (this.t.eKind != Kind.STRUCT_TYPE_) {
          if (this.t.eKind != Kind.UNIVERSAL_) {
            this.recordError(ErrorCode.ERR_KIND_NOT_STRUCT);
          }
          this.LV0_.LV.type = universal_;
        } else {
          this.p = this.t.Struct.pFields;
          while (this.p != null) {
            if (this.p.nName == this.ID_.ID.name) {
              break;
            }
            this.p = this.p.pNext;
          }
          if (this.p == null) {
            this.recordError(ErrorCode.ERR_FIELD_NOT_DECL);
            this.LV0_.LV.type = universal_;
          } else {
            this.LV0_.LV.type = this.p.Field.pType;
            this.LV0_.LV.type.Type.nSize = this.p.Field.nSize;
          }
        }

        this.LV0_.nont = States.LV;
        this.stack.push(this.LV0_);
        this.addOut(`\tADD ${this.p.Field.nIndex}\n`);
        break;
      case Rules.LV_SQUARE_RULE:
        this.E_ = this.stack.top;
        this.stack.pop();
        this.LV1_ = this.stack.top;
        this.stack.pop();

        this.t = this.LV1_.LV.type;
        if (this.t == string_) {
          this.LV0_.LV.type = char_;
        } else if (this.t.eKind != Kind.ARRAY_TYPE_) {
          if (this.t.eKind != Kind.UNIVERSAL_) {
            this.recordError(ErrorCode.ERR_KIND_NOT_ARRAY);
          }
          this.LV0_.LV.type = universal_;
        } else {
          this.LV0_.LV.type = this.t.Array.pElemType;
          this.n = this.t.Array.nSize / this.t.Array.nNumElems;
          this.addOut(`\tMUL ${this.n}\n\tADD\n`);
        }

        if (!this.checkTypes(this.E_.E.type, int_)) {
          this.recordError(ErrorCode.ERR_INVALID_INDEX_TYPE);
        }

        this.LV0_.nont = States.LV;
        this.stack.push(this.LV0_);
        break;
      case Rules.LV_IDU_RULE:
        this.IDU_ = this.stack.top;
        this.stack.pop();

        this.p = this.IDU_.ID.obj;
        if (this.p.eKind != Kind.VAR_ && this.p.eKind != Kind.PARAM_) {
          if (this.p.eKind != Kind.UNIVERSAL_) {
            this.recordError(ErrorCode.ERR_KIND_NOT_VAR);
          }
          this.LV_.LV.type = universal_;
        } else {
          this.LV_.LV.type = this.p.Var.pType;
          this.LV_.LV.type.Type.nSize = this.p.Var.nSize;
        }
        this.LV_.nont = States.LV;
        this.stack.push(this.LV_);
        this.addOut(`\tLOAD_REF ${this.p.Var.nIndex}\n`);
        break;
      case Rules.MA_RULE:
        this.addOut("\tDUP\n");
        break;
      case Rules.E_LV_EQUAL_RULE:
        this.E1_ = this.stack.top;
        this.stack.pop();
        this.LV_ = this.stack.top;
        this.stack.pop();
        if (!this.checkTypes(this.LV_.LV.type, this.E1_.E.type)) {
          this.recordError(ErrorCode.ERR_TYPE_MISMATCH);
        }

        this.E0_.F.type = this.E1_.E.type;
        this.stack.push(this.E0_);
        this.addOut(`\tSTORE_REF ${this.t.Type.nSize}`);
        this.addOut(`\tDE_REF ${this.t.Type.nSize}`);
        break;
      case Rules.MC_RULE:
        this.IDU_ = this.stack.top;
        this.f = this.IDU_.ID.obj;

        if (this.f.eKind != Kind.FUNCTION_) {
          this.recordError(ErrorCode.ERR_KIND_NOT_FUNCTION);
          this.MC_.MC.type = universal_;
          this.MC_.MC.param = null;
          this.MC_.MC.err = true;
        } else {
          this.MC_.MC.type = this.f.Function.pRetType;
          this.MC_.MC.param = this.f.Function.pParams;
          this.MC_.MC.err = false;
        }
        this.MC_.nont = States.MC;
        this.stack.push(this.MC_);
        break;
      case Rules.LE_E_RULE:
        this.E_ = this.stack.top;
        this.stack.pop();
        this.MC_ = this.stack.top;

        this.LE_.LE.param = null;
        this.LE_.LE.err = this.MC_.MC.err;
        this.n = 1;
        if (!this.MC_.MC.err) {
          this.p = this.MC_.MC.param;
          if (this.p == null) {
            this.recordError(ErrorCode.ERR_TOO_MANY_ARGS);
            this.LE_.LE.err = true;
          } else {
            if (!this.checkTypes(this.p.Param.pType, this.E_.E.type)) {
              this.recordError(ErrorCode.ERR_PARAM_TYPE);
            }
            this.LE_.LE.param = this.p.pNext;
            this.LE_.LE.this.n = this.n + 1;
          }
        }
        this.LE_.nont = States.LE;
        this.stack.push(this.LE_);
        break;
      case Rules.LE_LE_RULE:
        this.E_ = this.stack.top;
        this.stack.pop();
        this.LE1_ = this.stack.top;
        this.stack.pop();
        this.LE0_.LE.param = null;
        this.LE0_.LE.err = this.L1_.LE.err;

        this.n = this.LE1_.LE.n;
        if (!this.LE1_.LE.err) {
          this.p = this.LE1_.LE.param;
          if (this.p == null) {
            this.recordError(ErrorCode.ERR_TOO_MANY_ARGS);
            this.LE0_.LE.err = true;
          } else {
            if (!this.checkTypes(this.p.Param.pType, this.E_.E.type)) {
              this.recordError(ErrorCode.ERR_PARAM_TYPE);
            }
            this.LE0_.LE.param = this.p.pNext;
            this.LE0_.LE.this.n = this.n + 1;
          }
        }
        this.LE0_.nont = States.LE;
        this.stack.push(this.LE0_);
        break;
      case Rules.LE_EPSILON_RULE:
        this.MC_ = this.stack.top;
        if (this.MC_.MC.param != null) {
          this.LE_.LE.err = true;
        } else {
          this.LE_.LE.err = false;
        }
        this.LE_.LE.this.n = 0;
        this.LE_.LE.param = this.MC_.MC.param;
        this.LE_.LE.type = universal_;
        this.LE_.nont = States.LE;
        this.stack.push(this.LE_);
        break;
      case Rules.F_IDU_MC_RULE:
        this.LE_ = this.stack.top;
        this.stack.pop();
        this.MC_ = this.stack.top;
        this.stack.pop();
        this.IDU_ = this.stack.top;
        this.stack.pop();
        this.f = this.IDU_.ID.obj;
        this.F_.F.type = this.MC_.MC.type;
        if (!this.LE_.LE.err) {
          if (this.LE_.LE.n - 1 < this.f.Function.nParams) {
            this.recordError(ErrorCode.ERR_TOO_FEW_ARGS);
          } else if (this.LE_.LE.n - 1 > this.f.Function.nParams) {
            this.recordError(ErrorCode.ERR_TOO_MANY_ARGS);
          }
        }
        this.F_.nont = States.F;
        this.stack.push(this.F_);
        this.addOut(`\tCALL ${this.f.Function.nIndex}\n`);
        break;
      default:
        break;
    }
  }
}
