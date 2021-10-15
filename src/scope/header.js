export const ErrorCode = {
  ERR_REDCL: 0,
  ERR_NO_DECL: 1,
  ERR_TYPE_EXPECTED: 2,
  ERR_BOOL_TYPE_EXPECTED: 3,
  ERR_TYPE_MISMATCH: 4,
  ERR_INVALID_TYPE: 5,
  ERR_KIND_NOT_STRUCT: 6,
  ERR_FIELD_NOT_DECL: 7,
  ERR_KIND_NOT_ARRAY: 8,
  ERR_INVALID_INDEX_TYPE: 9,
  ERR_KIND_NOT_VAR: 10,
  ERR_KIND_NOT_FUNCTION: 11,
  ERR_TOO_MANY_ARGS: 12,
  ERR_PARAM_TYPE: 13,
  ERR_TOO_FEW_ARGS: 14,
  ERR_RETURN_TYPE_MISMATCH: 15,
};

/*List of Available Types*/
export const Kind = {
  NO_KIND_DEF: -1,
  VAR_: 0,
  PARAM_: 1,
  FUNCTION_: 2,
  FIELD_: 3,
  ARRAY_TYPE_: 4,
  STRUCT_TYPE_: 5,
  ALIAS_TYPE_: 6,
  SCALAR_TYPE_: 7,
  UNIVERSAL_: 8,
};

export class ObjectStruct {
  nName = null;
  pNext = null;
  eKind = null;

  Var = {
    pType: null,
    nIndex: null,
    nSize: null,
  };
  Param = {
    pType: null,
    nIndex: null,
    nSize: null,
  };
  Field = {
    pType: null,
    nIndex: null,
    nSize: null,
  };

  Function = {
    pRetType: null,
    pParams: null,
    nIndex: null,
    nParams: null,
    nVars: null,
  };

  Array = {
    pElemType: null,
    nNumElems: null,
    nSize: null,
  };

  Struct = {
    pFields: null,
    nSize: null,
  };

  Alias = {
    pBaseType: null,
    nSize: null,
  };
  Type = {
    pBaseType: null,
    nSize: null,
  };
}

export class Attr {
  nont = null;
  nSize = null;

  ID = {
    obj: null,
    name: null,
  };

  T = {
    type: null,
  };
  E = {
    type: null,
  };
  L = {
    type: null,
  };
  R = {
    type: null,
  };
  K = {
    type: null,
  };
  F = {
    type: null,
  };
  LV = {
    type: null,
  };

  MC = {
    type: null,
    param: null,
    err: null,
  };

  MT = {
    label: null,
  };
  ME = {
    label: null,
  };
  MW = {
    label: null,
  };
  MA = {
    label: null,
  };

  LE = {
    type: null,
    param: null,
    err: null,
    n: null,
  };

  LI = {
    list: null,
  };
  DC = {
    list: null,
  };
  LP = {
    list: null,
  };

  TRU = {
    type: null,
    val: null,
  };
  FALS = {
    type: null,
    val: null,
  };

  CHR = {
    type: null,
    pos: null,
    val: null,
  };
  STR = {
    type: null,
    pos: null,
    val: null,
  };

  NUM = {
    type: null,
    pos: null,
    val: null,
  };
}

// Int
export const int_ = new ObjectStruct();
int_.nName = -1;
int_.pNext = null;
int_.eKind = Kind.SCALAR_TYPE_;

// Char
export const char_ = new ObjectStruct();
char_.nName = -1;
char_.pNext = null;
char_.eKind = Kind.SCALAR_TYPE_;

// Bool
export const bool_ = new ObjectStruct();
bool_.nName = -1;
bool_.pNext = null;
bool_.eKind = Kind.SCALAR_TYPE_;

// String
export const string_ = new ObjectStruct();
string_.nName = -1;
string_.pNext = null;
string_.eKind = Kind.SCALAR_TYPE_;

// Universal
export const universal_ = new ObjectStruct();
universal_.nName = -1;
universal_.pNext = null;
universal_.eKind = Kind.UNIVERSAL_;
