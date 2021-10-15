export const States = {
  ACCEPT: 63,
  END: 64,
  P: 65,
  LDE: 66,
  DE: 67,
  DF: 68,
  DT: 69,
  DC: 70,
  LI: 71,
  DV: 72,
  LP: 73,
  B: 74,
  LDV: 75,
  LS: 76,
  S: 77,
  E: 78,
  L: 79,
  R: 80,
  K: 81,
  F: 82,
  LE: 83,
  LV: 84,
  T: 85,
  TRU: 86,
  FALS: 87,
  CHR: 88,
  STR: 89,
  NUM: 90,
  IDD: 91,
  IDU: 92,
  ID: 93,
  NB: 94,
  MF: 95,
  MC: 96,
  NF: 97,
  MT: 98,
  ME: 99,
  MW: 100,
  MA: 101
};

export const Rules = {
  DF_RULE: 7,

  DT_STRUCT_RULE: 8,
  DT_ARRAY_RULE: 9,
  DT_ALIAS_RULE: 10,

  DC_DC_RULE: 11,
  DC_LI_RULE: 12,

  LI_COMMA_RULE: 13,
  LI_IDD_RULE: 14,

  DV_VAR_RULE: 15,

  LP_LP_RULE: 16,
  LP_IDD_RULE: 17,
  LP_EPSILON_RULE: 18,

  S_E_SEMICOLON: 27,
  S_BLOCK_RULE: 28,
  S_WHILE_RULE: 29,
  S_DO_WHILE_RULE: 30,
  S_IF_RULE: 31,
  S_IF_ELSE_RULE: 32,
  S_BREAK_RULE: 33,
  S_CONTINUE_RULE: 34,
  S_RETURN_RULE: 35,

  E_AND_RULE: 36,
  E_OR_RULE: 37,
  E_L_RULE: 38,
  E_LV_EQUAL_RULE: 39,

  L_LESS_THAN_RULE: 40,
  L_GREATER_THAN_RULE: 41,
  L_LESS_EQUAL_RULE: 42,
  L_GREATER_EQUAL_RULE: 43,
  L_EQUAL_EQUAL_RULE: 44,
  L_NOT_EQUAL_RULE: 45,
  L_R_RULE: 46,

  R_PLUS_RULE: 47,
  R_MINUS_RULE: 48,
  R_K_RULE: 49,

  K_TIMES_RULE: 50,
  K_DIVIDE_RULE: 51,
  K_F_RULE: 52,

  F_LV_RULE: 53,
  F_LEFT_PLUS_PLUS_RULE: 54,
  F_LEFT_MINUS_MINUS_RULE: 55,
  F_RIGHT_PLUS_PLUS_RULE: 56,
  F_RIGHT_MINUS_MINUS_RULE: 57,
  F_PARENTHESIS_E_RULE: 58,
  F_IDU_MC_RULE: 59,
  F_MINUS_F_RULE: 60,
  F_NOT_F_RULE: 61,
  F_TRUE_RULE: 62,
  F_FALSE_RULE: 63,
  F_CHR_RULE: 64,
  F_STR_RULE: 65,
  F_NUM_RULE: 66,

  LE_LE_RULE: 67,
  LE_E_RULE: 68,
  LE_EPSILON_RULE: 69,

  LV_DOT_RULE: 70,
  LV_SQUARE_RULE: 71,
  LV_IDU_RULE: 72,

  T_INTEGER_RULE: 73,
  T_CHAR_RULE: 74,
  T_BOOL_RULE: 75,
  T_STRING_RULE: 76,
  T_IDU_RULE: 77,

  TRUE_RULE: 78,
  FALSE_RULE: 79,
  CHR_RULE: 80,
  STR_RULE: 81,
  NUM_RULE: 82,

  IDD_RULE: 83,
  IDU_RULE: 84,
  ID_RULE: 85,
  NB_RULE: 86,

  MF_RULE: 87,
  MC_RULE: 88,
  NF_RULE: 89,
  MT_RULE: 90,
  ME_RULE: 91,
  MW_RULE: 92,
  MA_RULE: 93,
};

export const LEFT = [
  States.ACCEPT,States.P,States.LDE,States.LDE,States.DE,States.DE,States.DE,States.DF,States.DT,States.DT,States.DT,States.DC,States.DC,States.LI,States.LI,States.DV,States.LP,States.LP,States.LP,States.B,States.B,States.B,States.B,States.LDV,States.LDV,States.LS,States.LS,States.S,States.S,States.S,States.S,States.S,States.S,States.S,States.S,States.S,States.E,States.E,States.E,States.E,States.L,States.L,States.L,States.L,States.L,States.L,States.L,States.R,States.R,States.R,States.K,States.K,States.K,States.F,States.F,States.F,States.F,States.F,States.F,States.F,States.F,States.F,States.F,States.F,States.F,States.F,States.F,States.LE,States.LE,States.LE,States.LV,States.LV,States.LV,States.T,States.T,States.T,States.T,States.T,States.TRU,States.FALS,States.CHR,States.STR,States.NUM,States.IDD,States.IDU,States.ID,States.NB,States.MF,States.MC,States.NF,States.MT,States.ME,States.MW,States.MA
];

export const LEN = [
  2,2,2,1,1,1,1,10,9,10,5,5,3,3,1,5,5,3,0,4,3,3,2,2,1,2,1,2,2,7,8,6,9,2,2,3,3,3,1,4,3,3,3,3,3,3,1,3,3,1,3,3,1,1,2,2,2,2,3,5,2,2,1,1,1,1,1,3,1,0,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0
];
