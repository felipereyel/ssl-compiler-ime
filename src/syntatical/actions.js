import { Tokens } from "../lexical/header";
import { States } from "./header";

const Actions = {};
//STATE0
Actions[0] = {};
Actions[0][States.P] = 1;
Actions[0][States.LDE] = 2;
Actions[0][States.DE] = 3;
Actions[0][States.DF] = 4;
Actions[0][States.DT] = 5;
Actions[0][States.DV] = 6;
Actions[0][Tokens.FUNCTION] = 7;
Actions[0][Tokens.TYPE] = 8;
Actions[0][Tokens.VAR] = 9;

//STATE1
Actions[1] = {};
Actions[1][Tokens.EOF] = 1;

//STATE2
Actions[2] = {};
Actions[2][Tokens.EOF] = 10;
Actions[2][States.DE] = 11;
Actions[2][States.DF] = 4;
Actions[2][States.DT] = 5;
Actions[2][States.DV] = 6;
Actions[2][Tokens.FUNCTION] = 7;
Actions[2][Tokens.TYPE] = 8;
Actions[2][Tokens.VAR] = 9;

//STATE3
Actions[3] = {};
Actions[3][Tokens.EOF] = -3;
Actions[3][Tokens.FUNCTION] = -3;
Actions[3][Tokens.TYPE] = -3;
Actions[3][Tokens.VAR] = -3;

//STATE4
Actions[4] = {};
Actions[4][Tokens.EOF] = -4;
Actions[4][Tokens.FUNCTION] = -4;
Actions[4][Tokens.TYPE] = -4;
Actions[4][Tokens.VAR] = -4;

//STATE5
Actions[5] = {};
Actions[5][Tokens.EOF] = -5;
Actions[5][Tokens.FUNCTION] = -5;
Actions[5][Tokens.TYPE] = -5;
Actions[5][Tokens.VAR] = -5;

//STATE6
Actions[6] = {};
Actions[6][Tokens.EOF] = -6;
Actions[6][Tokens.FUNCTION] = -6;
Actions[6][Tokens.TYPE] = -6;
Actions[6][Tokens.VAR] = -6;

//STATE7
Actions[7] = {};
Actions[7][States.IDD] = 12;
Actions[7][Tokens.IDT] = 13;

//STATE8
Actions[8] = {};
Actions[8][States.IDD] = 14;
Actions[8][Tokens.IDT] = 13;

//STATE9
Actions[9] = {};
Actions[9][States.IDD] = 16;
Actions[9][States.LI] = 15;
Actions[9][Tokens.IDT] = 13;

//STATE10
Actions[10] = {};
Actions[10][Tokens.EOF] = -1;

//STATE11
Actions[11] = {};
Actions[11][Tokens.EOF] = -2;
Actions[11][Tokens.FUNCTION] = -2;
Actions[11][Tokens.TYPE] = -2;
Actions[11][Tokens.VAR] = -2;

//STATE12
Actions[12] = {};
Actions[12][States.NF] = 17;
Actions[12][Tokens.LEFT_PARENTHESIS] = -89;

//STATE13
Actions[13] = {};
Actions[13][Tokens.LEFT_PARENTHESIS] = -83;
Actions[13][Tokens.COLON] = -83;
Actions[13][Tokens.EQUALS] = -83;
Actions[13][Tokens.COMMA] = -83;

//STATE14
Actions[14] = {};
Actions[14][Tokens.EQUALS] = 18;

//STATE15
Actions[15] = {};
Actions[15][Tokens.COLON] = 19;
Actions[15][Tokens.COMMA] = 20;

//STATE16
Actions[16] = {};
Actions[16][Tokens.COLON] = -14;
Actions[16][Tokens.COMMA] = -14;

//STATE17
Actions[17] = {};
Actions[17][Tokens.LEFT_PARENTHESIS] = 21;

//STATE18
Actions[18] = {};
Actions[18][States.T] = 24;
Actions[18][Tokens.STRUCT] = 22;
Actions[18][Tokens.ARRAY] = 23;
Actions[18][States.IDU] = 29;
Actions[18][Tokens.INTEGER] = 25;
Actions[18][Tokens.CHAR] = 26;
Actions[18][Tokens.BOOLEAN] = 27;
Actions[18][Tokens.STRING] = 28;
Actions[18][Tokens.IDT] = 30;

//STATE19
Actions[19] = {};
Actions[19][States.T] = 31;
Actions[19][States.IDU] = 29;
Actions[19][Tokens.INTEGER] = 25;
Actions[19][Tokens.CHAR] = 26;
Actions[19][Tokens.BOOLEAN] = 27;
Actions[19][Tokens.STRING] = 28;
Actions[19][Tokens.IDT] = 30;

//STATE20
Actions[20] = {};
Actions[20][States.IDD] = 32;
Actions[20][Tokens.IDT] = 13;

//STATE21
Actions[21] = {};
Actions[21][States.IDD] = 34;
Actions[21][States.LP] = 33;
Actions[21][Tokens.RIGHT_PARENTHESIS] = -18;
Actions[21][Tokens.COMMA] = -18;
Actions[21][Tokens.IDT] = 13;

//STATE22
Actions[22] = {};
Actions[22][States.NB] = 35;
Actions[22][Tokens.LEFT_BRACES] = -86;

//STATE23
Actions[23] = {};
Actions[23][Tokens.LEFT_SQUARE] = 36;

//STATE24
Actions[24] = {};
Actions[24][Tokens.SEMI_COLON] = 37;

//STATE25
Actions[25] = {};
Actions[25][Tokens.RIGHT_PARENTHESIS] = -73;
Actions[25][Tokens.LEFT_BRACES] = -73;
Actions[25][Tokens.RIGHT_BRACES] = -73;
Actions[25][Tokens.SEMI_COLON] = -73;
Actions[25][Tokens.COMMA] = -73;

//STATE26
Actions[26] = {};
Actions[26][Tokens.RIGHT_PARENTHESIS] = -74;
Actions[26][Tokens.LEFT_BRACES] = -74;
Actions[26][Tokens.RIGHT_BRACES] = -74;
Actions[26][Tokens.SEMI_COLON] = -74;
Actions[26][Tokens.COMMA] = -74;

//STATE27
Actions[27] = {};
Actions[27][Tokens.RIGHT_PARENTHESIS] = -75;
Actions[27][Tokens.LEFT_BRACES] = -75;
Actions[27][Tokens.RIGHT_BRACES] = -75;
Actions[27][Tokens.SEMI_COLON] = -75;
Actions[27][Tokens.COMMA] = -75;

//STATE28
Actions[28] = {};
Actions[28][Tokens.RIGHT_PARENTHESIS] = -76;
Actions[28][Tokens.LEFT_BRACES] = -76;
Actions[28][Tokens.RIGHT_BRACES] = -76;
Actions[28][Tokens.SEMI_COLON] = -76;
Actions[28][Tokens.COMMA] = -76;

//STATE29
Actions[29] = {};
Actions[29][Tokens.RIGHT_PARENTHESIS] = -77;
Actions[29][Tokens.LEFT_BRACES] = -77;
Actions[29][Tokens.RIGHT_BRACES] = -77;
Actions[29][Tokens.SEMI_COLON] = -77;
Actions[29][Tokens.COMMA] = -77;

//STATE30
Actions[30] = {};
Actions[30][Tokens.LEFT_PARENTHESIS] = -84;
Actions[30][Tokens.RIGHT_PARENTHESIS] = -84;
Actions[30][Tokens.EQUALS] = -84;
Actions[30][Tokens.LEFT_BRACES] = -84;
Actions[30][Tokens.RIGHT_BRACES] = -84;
Actions[30][Tokens.SEMI_COLON] = -84;
Actions[30][Tokens.LEFT_SQUARE] = -84;
Actions[30][Tokens.RIGHT_SQUARE] = -84;
Actions[30][Tokens.COMMA] = -84;
Actions[30][Tokens.AND] = -84;
Actions[30][Tokens.OR] = -84;
Actions[30][Tokens.LESS_THAN] = -84;
Actions[30][Tokens.GREATER_THAN] = -84;
Actions[30][Tokens.LESS_OR_EQUAL] = -84;
Actions[30][Tokens.GREATER_OR_EQUAL] = -84;
Actions[30][Tokens.EQUAL_EQUAL] = -84;
Actions[30][Tokens.NOT_EQUAL] = -84;
Actions[30][Tokens.PLUS] = -84;
Actions[30][Tokens.MINUS] = -84;
Actions[30][Tokens.TIMES] = -84;
Actions[30][Tokens.DIVIDE] = -84;
Actions[30][Tokens.PLUS_PLUS] = -84;
Actions[30][Tokens.MINUS_MINUS] = -84;
Actions[30][Tokens.DOT] = -84;

//STATE31
Actions[31] = {};
Actions[31][Tokens.SEMI_COLON] = 38;

//STATE32
Actions[32] = {};
Actions[32][Tokens.COLON] = -13;
Actions[32][Tokens.COMMA] = -13;

//STATE33
Actions[33] = {};
Actions[33][Tokens.RIGHT_PARENTHESIS] = 39;
Actions[33][Tokens.COMMA] = 40;

//STATE34
Actions[34] = {};
Actions[34][Tokens.COLON] = 41;

//STATE35
Actions[35] = {};
Actions[35][Tokens.LEFT_BRACES] = 42;

//STATE36
Actions[36] = {};
Actions[36][States.NUM] = 43;
Actions[36][Tokens.NUMERAL] = 44;

//STATE37
Actions[37] = {};
Actions[37][Tokens.EOF] = -10;
Actions[37][Tokens.FUNCTION] = -10;
Actions[37][Tokens.TYPE] = -10;
Actions[37][Tokens.VAR] = -10;

//STATE38
Actions[38] = {};
Actions[38][Tokens.EOF] = -15;
Actions[38][Tokens.FUNCTION] = -15;
Actions[38][Tokens.LEFT_PARENTHESIS] = -15;
Actions[38][Tokens.TYPE] = -15;
Actions[38][Tokens.LEFT_BRACES] = -15;
Actions[38][Tokens.RIGHT_BRACES] = -15;
Actions[38][Tokens.VAR] = -15;
Actions[38][Tokens.WHILE] = -15;
Actions[38][Tokens.DO] = -15;
Actions[38][Tokens.IF] = -15;
Actions[38][Tokens.BREAK] = -15;
Actions[38][Tokens.CONTINUE] = -15;
Actions[38][Tokens.RETURN] = -15;
Actions[38][Tokens.MINUS] = -15;
Actions[38][Tokens.PLUS_PLUS] = -15;
Actions[38][Tokens.MINUS_MINUS] = -15;
Actions[38][Tokens.NOT] = -15;
Actions[38][Tokens.TRUE] = -15;
Actions[38][Tokens.FALSE] = -15;
Actions[38][Tokens.CHARACTER] = -15;
Actions[38][Tokens.STRINGVAL] = -15;
Actions[38][Tokens.NUMERAL] = -15;
Actions[38][Tokens.IDT] = -15;

//STATE39
Actions[39] = {};
Actions[39][Tokens.COLON] = 45;

//STATE40
Actions[40] = {};
Actions[40][States.IDD] = 46;
Actions[40][Tokens.IDT] = 13;

//STATE41
Actions[41] = {};
Actions[41][States.T] = 47;
Actions[41][States.IDU] = 29;
Actions[41][Tokens.INTEGER] = 25;
Actions[41][Tokens.CHAR] = 26;
Actions[41][Tokens.BOOLEAN] = 27;
Actions[41][Tokens.STRING] = 28;
Actions[41][Tokens.IDT] = 30;

//STATE42
Actions[42] = {};
Actions[42][States.IDD] = 16;
Actions[42][States.DC] = 48;
Actions[42][States.LI] = 49;
Actions[42][Tokens.IDT] = 13;

//STATE43
Actions[43] = {};
Actions[43][Tokens.RIGHT_SQUARE] = 50;

//STATE44
Actions[44] = {};
Actions[44][Tokens.RIGHT_PARENTHESIS] = -82;
Actions[44][Tokens.SEMI_COLON] = -82;
Actions[44][Tokens.RIGHT_SQUARE] = -82;
Actions[44][Tokens.COMMA] = -82;
Actions[44][Tokens.AND] = -82;
Actions[44][Tokens.OR] = -82;
Actions[44][Tokens.LESS_THAN] = -82;
Actions[44][Tokens.GREATER_THAN] = -82;
Actions[44][Tokens.LESS_OR_EQUAL] = -82;
Actions[44][Tokens.GREATER_OR_EQUAL] = -82;
Actions[44][Tokens.EQUAL_EQUAL] = -82;
Actions[44][Tokens.NOT_EQUAL] = -82;
Actions[44][Tokens.PLUS] = -82;
Actions[44][Tokens.MINUS] = -82;
Actions[44][Tokens.TIMES] = -82;
Actions[44][Tokens.DIVIDE] = -82;

//STATE45
Actions[45] = {};
Actions[45][States.T] = 51;
Actions[45][States.IDU] = 29;
Actions[45][Tokens.INTEGER] = 25;
Actions[45][Tokens.CHAR] = 26;
Actions[45][Tokens.BOOLEAN] = 27;
Actions[45][Tokens.STRING] = 28;
Actions[45][Tokens.IDT] = 30;

//STATE46
Actions[46] = {};
Actions[46][Tokens.COLON] = 52;

//STATE47
Actions[47] = {};
Actions[47][Tokens.RIGHT_PARENTHESIS] = -17;
Actions[47][Tokens.COMMA] = -17;

//STATE48
Actions[48] = {};
Actions[48][Tokens.RIGHT_BRACES] = 53;
Actions[48][Tokens.SEMI_COLON] = 54;

//STATE49
Actions[49] = {};
Actions[49][Tokens.COLON] = 55;
Actions[49][Tokens.COMMA] = 20;

//STATE50
Actions[50] = {};
Actions[50][States.OF] = 56;

//STATE51
Actions[51] = {};
Actions[51][States.MF] = 57;
Actions[51][Tokens.LEFT_BRACES] = -87;

//STATE52
Actions[52] = {};
Actions[52][States.T] = 58;
Actions[52][States.IDU] = 29;
Actions[52][Tokens.INTEGER] = 25;
Actions[52][Tokens.CHAR] = 26;
Actions[52][Tokens.BOOLEAN] = 27;
Actions[52][Tokens.STRING] = 28;
Actions[52][Tokens.IDT] = 30;

//STATE53
Actions[53] = {};
Actions[53][Tokens.SEMI_COLON] = 59;

//STATE54
Actions[54] = {};
Actions[54][States.IDD] = 16;
Actions[54][States.LI] = 60;
Actions[54][Tokens.IDT] = 13;

//STATE55
Actions[55] = {};
Actions[55][States.T] = 61;
Actions[55][States.IDU] = 29;
Actions[55][Tokens.INTEGER] = 25;
Actions[55][Tokens.CHAR] = 26;
Actions[55][Tokens.BOOLEAN] = 27;
Actions[55][Tokens.STRING] = 28;
Actions[55][Tokens.IDT] = 30;

//STATE56
Actions[56] = {};
Actions[56][States.T] = 62;
Actions[56][States.IDU] = 29;
Actions[56][Tokens.INTEGER] = 25;
Actions[56][Tokens.CHAR] = 26;
Actions[56][Tokens.BOOLEAN] = 27;
Actions[56][Tokens.STRING] = 28;
Actions[56][Tokens.IDT] = 30;

//STATE57
Actions[57] = {};
Actions[57][States.B] = 63;
Actions[57][Tokens.LEFT_BRACES] = 64;

//STATE58
Actions[58] = {};
Actions[58][Tokens.RIGHT_PARENTHESIS] = -16;
Actions[58][Tokens.COMMA] = -16;

//STATE59
Actions[59] = {};
Actions[59][Tokens.EOF] = -8;
Actions[59][Tokens.FUNCTION] = -8;
Actions[59][Tokens.TYPE] = -8;
Actions[59][Tokens.VAR] = -8;

//STATE60
Actions[60] = {};
Actions[60][Tokens.COLON] = 65;
Actions[60][Tokens.COMMA] = 20;

//STATE61
Actions[61] = {};
Actions[61][Tokens.RIGHT_BRACES] = -12;
Actions[61][Tokens.SEMI_COLON] = -12;

//STATE62
Actions[62] = {};
Actions[62][Tokens.SEMI_COLON] = 66;

//STATE63
Actions[63] = {};
Actions[63][Tokens.EOF] = -7;
Actions[63][Tokens.FUNCTION] = -7;
Actions[63][Tokens.TYPE] = -7;
Actions[63][Tokens.VAR] = -7;

//STATE64
Actions[64] = {};
Actions[64][States.DV] = 70;
Actions[64][Tokens.LEFT_PARENTHESIS] = 88;
Actions[64][States.NB] = 73;
Actions[64][Tokens.LEFT_BRACES] = -86;
Actions[64][Tokens.RIGHT_BRACES] = 69;
Actions[64][States.NUM] = 95;
Actions[64][Tokens.VAR] = 9;
Actions[64][States.LDV] = 67;
Actions[64][States.LS] = 68;
Actions[64][States.S] = 71;
Actions[64][States.E] = 72;
Actions[64][Tokens.WHILE] = 74;
Actions[64][Tokens.DO] = 75;
Actions[64][Tokens.IF] = 76;
Actions[64][Tokens.BREAK] = 77;
Actions[64][Tokens.CONTINUE] = 78;
Actions[64][Tokens.RETURN] = 79;
Actions[64][States.L] = 80;
Actions[64][States.LV] = 81;
Actions[64][States.R] = 82;
Actions[64][States.K] = 84;
Actions[64][Tokens.MINUS] = 89;
Actions[64][States.F] = 85;
Actions[64][Tokens.PLUS_PLUS] = 86;
Actions[64][Tokens.MINUS_MINUS] = 87;
Actions[64][States.IDU] = 83;
Actions[64][Tokens.NOT] = 90;
Actions[64][States.TRU] = 91;
Actions[64][States.FALS] = 92;
Actions[64][States.CHR] = 93;
Actions[64][States.STR] = 94;
Actions[64][Tokens.TRUE] = 96;
Actions[64][Tokens.FALSE] = 97;
Actions[64][Tokens.CHARACTER] = 98;
Actions[64][Tokens.STRINGVAL] = 99;
Actions[64][Tokens.NUMERAL] = 44;
Actions[64][Tokens.IDT] = 30;

//STATE65
Actions[65] = {};
Actions[65][States.T] = 100;
Actions[65][States.IDU] = 29;
Actions[65][Tokens.INTEGER] = 25;
Actions[65][Tokens.CHAR] = 26;
Actions[65][Tokens.BOOLEAN] = 27;
Actions[65][Tokens.STRING] = 28;
Actions[65][Tokens.IDT] = 30;

//STATE66
Actions[66] = {};
Actions[66][Tokens.EOF] = -9;
Actions[66][Tokens.FUNCTION] = -9;
Actions[66][Tokens.TYPE] = -9;
Actions[66][Tokens.VAR] = -9;

//STATE67
Actions[67] = {};
Actions[67][States.DV] = 103;
Actions[67][Tokens.LEFT_PARENTHESIS] = 88;
Actions[67][States.NB] = 73;
Actions[67][Tokens.LEFT_BRACES] = -86;
Actions[67][Tokens.RIGHT_BRACES] = 102;
Actions[67][States.NUM] = 95;
Actions[67][Tokens.VAR] = 9;
Actions[67][States.LS] = 101;
Actions[67][States.S] = 71;
Actions[67][States.E] = 72;
Actions[67][Tokens.WHILE] = 74;
Actions[67][Tokens.DO] = 75;
Actions[67][Tokens.IF] = 76;
Actions[67][Tokens.BREAK] = 77;
Actions[67][Tokens.CONTINUE] = 78;
Actions[67][Tokens.RETURN] = 79;
Actions[67][States.L] = 80;
Actions[67][States.LV] = 81;
Actions[67][States.R] = 82;
Actions[67][States.K] = 84;
Actions[67][Tokens.MINUS] = 89;
Actions[67][States.F] = 85;
Actions[67][Tokens.PLUS_PLUS] = 86;
Actions[67][Tokens.MINUS_MINUS] = 87;
Actions[67][States.IDU] = 83;
Actions[67][Tokens.NOT] = 90;
Actions[67][States.TRU] = 91;
Actions[67][States.FALS] = 92;
Actions[67][States.CHR] = 93;
Actions[67][States.STR] = 94;
Actions[67][Tokens.TRUE] = 96;
Actions[67][Tokens.FALSE] = 97;
Actions[67][Tokens.CHARACTER] = 98;
Actions[67][Tokens.STRINGVAL] = 99;
Actions[67][Tokens.NUMERAL] = 44;
Actions[67][Tokens.IDT] = 30;

//STATE68
Actions[68] = {};
Actions[68][Tokens.LEFT_PARENTHESIS] = 88;
Actions[68][States.NB] = 73;
Actions[68][Tokens.LEFT_BRACES] = -86;
Actions[68][Tokens.RIGHT_BRACES] = 104;
Actions[68][States.NUM] = 95;
Actions[68][States.S] = 105;
Actions[68][States.E] = 72;
Actions[68][Tokens.WHILE] = 74;
Actions[68][Tokens.DO] = 75;
Actions[68][Tokens.IF] = 76;
Actions[68][Tokens.BREAK] = 77;
Actions[68][Tokens.CONTINUE] = 78;
Actions[68][Tokens.RETURN] = 79;
Actions[68][States.L] = 80;
Actions[68][States.LV] = 81;
Actions[68][States.R] = 82;
Actions[68][States.K] = 84;
Actions[68][Tokens.MINUS] = 89;
Actions[68][States.F] = 85;
Actions[68][Tokens.PLUS_PLUS] = 86;
Actions[68][Tokens.MINUS_MINUS] = 87;
Actions[68][States.IDU] = 83;
Actions[68][Tokens.NOT] = 90;
Actions[68][States.TRU] = 91;
Actions[68][States.FALS] = 92;
Actions[68][States.CHR] = 93;
Actions[68][States.STR] = 94;
Actions[68][Tokens.TRUE] = 96;
Actions[68][Tokens.FALSE] = 97;
Actions[68][Tokens.CHARACTER] = 98;
Actions[68][Tokens.STRINGVAL] = 99;
Actions[68][Tokens.NUMERAL] = 44;
Actions[68][Tokens.IDT] = 30;

//STATE69
Actions[69] = {};
Actions[69][Tokens.EOF] = -22;
Actions[69][Tokens.FUNCTION] = -22;
Actions[69][Tokens.LEFT_PARENTHESIS] = -22;
Actions[69][Tokens.TYPE] = -22;
Actions[69][Tokens.LEFT_BRACES] = -22;
Actions[69][Tokens.RIGHT_BRACES] = -22;
Actions[69][Tokens.VAR] = -22;
Actions[69][Tokens.WHILE] = -22;
Actions[69][Tokens.DO] = -22;
Actions[69][Tokens.IF] = -22;
Actions[69][Tokens.ELSE] = -22;
Actions[69][Tokens.BREAK] = -22;
Actions[69][Tokens.CONTINUE] = -22;
Actions[69][Tokens.RETURN] = -22;
Actions[69][Tokens.MINUS] = -22;
Actions[69][Tokens.PLUS_PLUS] = -22;
Actions[69][Tokens.MINUS_MINUS] = -22;
Actions[69][Tokens.NOT] = -22;
Actions[69][Tokens.TRUE] = -22;
Actions[69][Tokens.FALSE] = -22;
Actions[69][Tokens.CHARACTER] = -22;
Actions[69][Tokens.STRINGVAL] = -22;
Actions[69][Tokens.NUMERAL] = -22;
Actions[69][Tokens.IDT] = -22;

//STATE70
Actions[70] = {};
Actions[70][Tokens.LEFT_PARENTHESIS] = -24;
Actions[70][Tokens.LEFT_BRACES] = -24;
Actions[70][Tokens.RIGHT_BRACES] = -24;
Actions[70][Tokens.VAR] = -24;
Actions[70][Tokens.WHILE] = -24;
Actions[70][Tokens.DO] = -24;
Actions[70][Tokens.IF] = -24;
Actions[70][Tokens.BREAK] = -24;
Actions[70][Tokens.CONTINUE] = -24;
Actions[70][Tokens.RETURN] = -24;
Actions[70][Tokens.MINUS] = -24;
Actions[70][Tokens.PLUS_PLUS] = -24;
Actions[70][Tokens.MINUS_MINUS] = -24;
Actions[70][Tokens.NOT] = -24;
Actions[70][Tokens.TRUE] = -24;
Actions[70][Tokens.FALSE] = -24;
Actions[70][Tokens.CHARACTER] = -24;
Actions[70][Tokens.STRINGVAL] = -24;
Actions[70][Tokens.NUMERAL] = -24;
Actions[70][Tokens.IDT] = -24;

//STATE71
Actions[71] = {};
Actions[71][Tokens.LEFT_PARENTHESIS] = -26;
Actions[71][Tokens.LEFT_BRACES] = -26;
Actions[71][Tokens.RIGHT_BRACES] = -26;
Actions[71][Tokens.WHILE] = -26;
Actions[71][Tokens.DO] = -26;
Actions[71][Tokens.IF] = -26;
Actions[71][Tokens.BREAK] = -26;
Actions[71][Tokens.CONTINUE] = -26;
Actions[71][Tokens.RETURN] = -26;
Actions[71][Tokens.MINUS] = -26;
Actions[71][Tokens.PLUS_PLUS] = -26;
Actions[71][Tokens.MINUS_MINUS] = -26;
Actions[71][Tokens.NOT] = -26;
Actions[71][Tokens.TRUE] = -26;
Actions[71][Tokens.FALSE] = -26;
Actions[71][Tokens.CHARACTER] = -26;
Actions[71][Tokens.STRINGVAL] = -26;
Actions[71][Tokens.NUMERAL] = -26;
Actions[71][Tokens.IDT] = -26;

//STATE72
Actions[72] = {};
Actions[72][Tokens.SEMI_COLON] = 106;
Actions[72][Tokens.AND] = 107;
Actions[72][Tokens.OR] = 108;

//STATE73
Actions[73] = {};
Actions[73][States.B] = 109;
Actions[73][Tokens.LEFT_BRACES] = 64;

//STATE74
Actions[74] = {};
Actions[74][Tokens.LEFT_PARENTHESIS] = -92;
Actions[74][States.MW] = 110;

//STATE75
Actions[75] = {};
Actions[75][Tokens.LEFT_PARENTHESIS] = -92;
Actions[75][Tokens.LEFT_BRACES] = -92;
Actions[75][Tokens.WHILE] = -92;
Actions[75][States.MW] = 111;
Actions[75][Tokens.DO] = -92;
Actions[75][Tokens.IF] = -92;
Actions[75][Tokens.BREAK] = -92;
Actions[75][Tokens.CONTINUE] = -92;
Actions[75][Tokens.RETURN] = -92;
Actions[75][Tokens.MINUS] = -92;
Actions[75][Tokens.PLUS_PLUS] = -92;
Actions[75][Tokens.MINUS_MINUS] = -92;
Actions[75][Tokens.NOT] = -92;
Actions[75][Tokens.TRUE] = -92;
Actions[75][Tokens.FALSE] = -92;
Actions[75][Tokens.CHARACTER] = -92;
Actions[75][Tokens.STRINGVAL] = -92;
Actions[75][Tokens.NUMERAL] = -92;
Actions[75][Tokens.IDT] = -92;

//STATE76
Actions[76] = {};
Actions[76][Tokens.LEFT_PARENTHESIS] = 112;

//STATE77
Actions[77] = {};
Actions[77][Tokens.SEMI_COLON] = 113;

//STATE78
Actions[78] = {};
Actions[78][Tokens.SEMI_COLON] = 114;

//STATE79
Actions[79] = {};
Actions[79][Tokens.LEFT_PARENTHESIS] = 88;
Actions[79][States.NUM] = 95;
Actions[79][States.E] = 115;
Actions[79][States.L] = 80;
Actions[79][States.LV] = 81;
Actions[79][States.R] = 82;
Actions[79][States.K] = 84;
Actions[79][Tokens.MINUS] = 89;
Actions[79][States.F] = 85;
Actions[79][Tokens.PLUS_PLUS] = 86;
Actions[79][Tokens.MINUS_MINUS] = 87;
Actions[79][States.IDU] = 83;
Actions[79][Tokens.NOT] = 90;
Actions[79][States.TRU] = 91;
Actions[79][States.FALS] = 92;
Actions[79][States.CHR] = 93;
Actions[79][States.STR] = 94;
Actions[79][Tokens.TRUE] = 96;
Actions[79][Tokens.FALSE] = 97;
Actions[79][Tokens.CHARACTER] = 98;
Actions[79][Tokens.STRINGVAL] = 99;
Actions[79][Tokens.NUMERAL] = 44;
Actions[79][Tokens.IDT] = 30;

//STATE80
Actions[80] = {};
Actions[80][Tokens.RIGHT_PARENTHESIS] = -38;
Actions[80][Tokens.SEMI_COLON] = -38;
Actions[80][Tokens.RIGHT_SQUARE] = -38;
Actions[80][Tokens.COMMA] = -38;
Actions[80][Tokens.AND] = -38;
Actions[80][Tokens.OR] = -38;
Actions[80][Tokens.LESS_THAN] = 116;
Actions[80][Tokens.GREATER_THAN] = 117;
Actions[80][Tokens.LESS_OR_EQUAL] = 118;
Actions[80][Tokens.GREATER_OR_EQUAL] = 119;
Actions[80][Tokens.EQUAL_EQUAL] = 120;
Actions[80][Tokens.NOT_EQUAL] = 121;

//STATE81
Actions[81] = {};
Actions[81][Tokens.RIGHT_PARENTHESIS] = -53;
Actions[81][Tokens.EQUALS] = -93;
Actions[81][Tokens.SEMI_COLON] = -53;
Actions[81][Tokens.LEFT_SQUARE] = 124;
Actions[81][Tokens.RIGHT_SQUARE] = -53;
Actions[81][Tokens.COMMA] = -53;
Actions[81][Tokens.AND] = -53;
Actions[81][Tokens.OR] = -53;
Actions[81][States.MA] = 122;
Actions[81][Tokens.LESS_THAN] = -53;
Actions[81][Tokens.GREATER_THAN] = -53;
Actions[81][Tokens.LESS_OR_EQUAL] = -53;
Actions[81][Tokens.GREATER_OR_EQUAL] = -53;
Actions[81][Tokens.EQUAL_EQUAL] = -53;
Actions[81][Tokens.NOT_EQUAL] = -53;
Actions[81][Tokens.PLUS] = -53;
Actions[81][Tokens.MINUS] = -53;
Actions[81][Tokens.TIMES] = -53;
Actions[81][Tokens.DIVIDE] = -53;
Actions[81][Tokens.PLUS_PLUS] = 125;
Actions[81][Tokens.MINUS_MINUS] = 126;
Actions[81][Tokens.DOT] = 123;

//STATE82
Actions[82] = {};
Actions[82][Tokens.RIGHT_PARENTHESIS] = -46;
Actions[82][Tokens.SEMI_COLON] = -46;
Actions[82][Tokens.RIGHT_SQUARE] = -46;
Actions[82][Tokens.COMMA] = -46;
Actions[82][Tokens.AND] = -46;
Actions[82][Tokens.OR] = -46;
Actions[82][Tokens.LESS_THAN] = -46;
Actions[82][Tokens.GREATER_THAN] = -46;
Actions[82][Tokens.LESS_OR_EQUAL] = -46;
Actions[82][Tokens.GREATER_OR_EQUAL] = -46;
Actions[82][Tokens.EQUAL_EQUAL] = -46;
Actions[82][Tokens.NOT_EQUAL] = -46;
Actions[82][Tokens.PLUS] = 127;
Actions[82][Tokens.MINUS] = 128;

//STATE83
Actions[83] = {};
Actions[83][Tokens.LEFT_PARENTHESIS] = -88;
Actions[83][Tokens.RIGHT_PARENTHESIS] = -72;
Actions[83][Tokens.EQUALS] = -72;
Actions[83][Tokens.SEMI_COLON] = -72;
Actions[83][Tokens.LEFT_SQUARE] = -72;
Actions[83][Tokens.RIGHT_SQUARE] = -72;
Actions[83][Tokens.COMMA] = -72;
Actions[83][Tokens.AND] = -72;
Actions[83][Tokens.OR] = -72;
Actions[83][Tokens.LESS_THAN] = -72;
Actions[83][Tokens.GREATER_THAN] = -72;
Actions[83][Tokens.LESS_OR_EQUAL] = -72;
Actions[83][Tokens.GREATER_OR_EQUAL] = -72;
Actions[83][Tokens.EQUAL_EQUAL] = -72;
Actions[83][Tokens.NOT_EQUAL] = -72;
Actions[83][Tokens.PLUS] = -72;
Actions[83][Tokens.MINUS] = -72;
Actions[83][Tokens.TIMES] = -72;
Actions[83][Tokens.DIVIDE] = -72;
Actions[83][Tokens.PLUS_PLUS] = -72;
Actions[83][Tokens.MINUS_MINUS] = -72;
Actions[83][States.MC] = 129;
Actions[83][Tokens.DOT] = -72;

//STATE84
Actions[84] = {};
Actions[84][Tokens.RIGHT_PARENTHESIS] = -49;
Actions[84][Tokens.SEMI_COLON] = -49;
Actions[84][Tokens.RIGHT_SQUARE] = -49;
Actions[84][Tokens.COMMA] = -49;
Actions[84][Tokens.AND] = -49;
Actions[84][Tokens.OR] = -49;
Actions[84][Tokens.LESS_THAN] = -49;
Actions[84][Tokens.GREATER_THAN] = -49;
Actions[84][Tokens.LESS_OR_EQUAL] = -49;
Actions[84][Tokens.GREATER_OR_EQUAL] = -49;
Actions[84][Tokens.EQUAL_EQUAL] = -49;
Actions[84][Tokens.NOT_EQUAL] = -49;
Actions[84][Tokens.PLUS] = -49;
Actions[84][Tokens.MINUS] = -49;
Actions[84][Tokens.TIMES] = 130;
Actions[84][Tokens.DIVIDE] = 131;

//STATE85
Actions[85] = {};
Actions[85][Tokens.RIGHT_PARENTHESIS] = -52;
Actions[85][Tokens.SEMI_COLON] = -52;
Actions[85][Tokens.RIGHT_SQUARE] = -52;
Actions[85][Tokens.COMMA] = -52;
Actions[85][Tokens.AND] = -52;
Actions[85][Tokens.OR] = -52;
Actions[85][Tokens.LESS_THAN] = -52;
Actions[85][Tokens.GREATER_THAN] = -52;
Actions[85][Tokens.LESS_OR_EQUAL] = -52;
Actions[85][Tokens.GREATER_OR_EQUAL] = -52;
Actions[85][Tokens.EQUAL_EQUAL] = -52;
Actions[85][Tokens.NOT_EQUAL] = -52;
Actions[85][Tokens.PLUS] = -52;
Actions[85][Tokens.MINUS] = -52;
Actions[85][Tokens.TIMES] = -52;
Actions[85][Tokens.DIVIDE] = -52;

//STATE86
Actions[86] = {};
Actions[86][States.LV] = 132;
Actions[86][States.IDU] = 133;
Actions[86][Tokens.IDT] = 30;

//STATE87
Actions[87] = {};
Actions[87][States.LV] = 134;
Actions[87][States.IDU] = 133;
Actions[87][Tokens.IDT] = 30;

//STATE88
Actions[88] = {};
Actions[88][Tokens.LEFT_PARENTHESIS] = 88;
Actions[88][States.NUM] = 95;
Actions[88][States.E] = 135;
Actions[88][States.L] = 80;
Actions[88][States.LV] = 81;
Actions[88][States.R] = 82;
Actions[88][States.K] = 84;
Actions[88][Tokens.MINUS] = 89;
Actions[88][States.F] = 85;
Actions[88][Tokens.PLUS_PLUS] = 86;
Actions[88][Tokens.MINUS_MINUS] = 87;
Actions[88][States.IDU] = 83;
Actions[88][Tokens.NOT] = 90;
Actions[88][States.TRU] = 91;
Actions[88][States.FALS] = 92;
Actions[88][States.CHR] = 93;
Actions[88][States.STR] = 94;
Actions[88][Tokens.TRUE] = 96;
Actions[88][Tokens.FALSE] = 97;
Actions[88][Tokens.CHARACTER] = 98;
Actions[88][Tokens.STRINGVAL] = 99;
Actions[88][Tokens.NUMERAL] = 44;
Actions[88][Tokens.IDT] = 30;

//STATE89
Actions[89] = {};
Actions[89][Tokens.LEFT_PARENTHESIS] = 88;
Actions[89][States.NUM] = 95;
Actions[89][States.LV] = 137;
Actions[89][Tokens.MINUS] = 89;
Actions[89][States.F] = 136;
Actions[89][Tokens.PLUS_PLUS] = 86;
Actions[89][Tokens.MINUS_MINUS] = 87;
Actions[89][States.IDU] = 83;
Actions[89][Tokens.NOT] = 90;
Actions[89][States.TRU] = 91;
Actions[89][States.FALS] = 92;
Actions[89][States.CHR] = 93;
Actions[89][States.STR] = 94;
Actions[89][Tokens.TRUE] = 96;
Actions[89][Tokens.FALSE] = 97;
Actions[89][Tokens.CHARACTER] = 98;
Actions[89][Tokens.STRINGVAL] = 99;
Actions[89][Tokens.NUMERAL] = 44;
Actions[89][Tokens.IDT] = 30;

//STATE90
Actions[90] = {};
Actions[90][Tokens.LEFT_PARENTHESIS] = 88;
Actions[90][States.NUM] = 95;
Actions[90][States.LV] = 137;
Actions[90][Tokens.MINUS] = 89;
Actions[90][States.F] = 138;
Actions[90][Tokens.PLUS_PLUS] = 86;
Actions[90][Tokens.MINUS_MINUS] = 87;
Actions[90][States.IDU] = 83;
Actions[90][Tokens.NOT] = 90;
Actions[90][States.TRU] = 91;
Actions[90][States.FALS] = 92;
Actions[90][States.CHR] = 93;
Actions[90][States.STR] = 94;
Actions[90][Tokens.TRUE] = 96;
Actions[90][Tokens.FALSE] = 97;
Actions[90][Tokens.CHARACTER] = 98;
Actions[90][Tokens.STRINGVAL] = 99;
Actions[90][Tokens.NUMERAL] = 44;
Actions[90][Tokens.IDT] = 30;

//STATE91
Actions[91] = {};
Actions[91][Tokens.RIGHT_PARENTHESIS] = -62;
Actions[91][Tokens.SEMI_COLON] = -62;
Actions[91][Tokens.RIGHT_SQUARE] = -62;
Actions[91][Tokens.COMMA] = -62;
Actions[91][Tokens.AND] = -62;
Actions[91][Tokens.OR] = -62;
Actions[91][Tokens.LESS_THAN] = -62;
Actions[91][Tokens.GREATER_THAN] = -62;
Actions[91][Tokens.LESS_OR_EQUAL] = -62;
Actions[91][Tokens.GREATER_OR_EQUAL] = -62;
Actions[91][Tokens.EQUAL_EQUAL] = -62;
Actions[91][Tokens.NOT_EQUAL] = -62;
Actions[91][Tokens.PLUS] = -62;
Actions[91][Tokens.MINUS] = -62;
Actions[91][Tokens.TIMES] = -62;
Actions[91][Tokens.DIVIDE] = -62;

//STATE92
Actions[92] = {};
Actions[92][Tokens.RIGHT_PARENTHESIS] = -63;
Actions[92][Tokens.SEMI_COLON] = -63;
Actions[92][Tokens.RIGHT_SQUARE] = -63;
Actions[92][Tokens.COMMA] = -63;
Actions[92][Tokens.AND] = -63;
Actions[92][Tokens.OR] = -63;
Actions[92][Tokens.LESS_THAN] = -63;
Actions[92][Tokens.GREATER_THAN] = -63;
Actions[92][Tokens.LESS_OR_EQUAL] = -63;
Actions[92][Tokens.GREATER_OR_EQUAL] = -63;
Actions[92][Tokens.EQUAL_EQUAL] = -63;
Actions[92][Tokens.NOT_EQUAL] = -63;
Actions[92][Tokens.PLUS] = -63;
Actions[92][Tokens.MINUS] = -63;
Actions[92][Tokens.TIMES] = -63;
Actions[92][Tokens.DIVIDE] = -63;

//STATE93
Actions[93] = {};
Actions[93][Tokens.RIGHT_PARENTHESIS] = -64;
Actions[93][Tokens.SEMI_COLON] = -64;
Actions[93][Tokens.RIGHT_SQUARE] = -64;
Actions[93][Tokens.COMMA] = -64;
Actions[93][Tokens.AND] = -64;
Actions[93][Tokens.OR] = -64;
Actions[93][Tokens.LESS_THAN] = -64;
Actions[93][Tokens.GREATER_THAN] = -64;
Actions[93][Tokens.LESS_OR_EQUAL] = -64;
Actions[93][Tokens.GREATER_OR_EQUAL] = -64;
Actions[93][Tokens.EQUAL_EQUAL] = -64;
Actions[93][Tokens.NOT_EQUAL] = -64;
Actions[93][Tokens.PLUS] = -64;
Actions[93][Tokens.MINUS] = -64;
Actions[93][Tokens.TIMES] = -64;
Actions[93][Tokens.DIVIDE] = -64;

//STATE94
Actions[94] = {};
Actions[94][Tokens.RIGHT_PARENTHESIS] = -65;
Actions[94][Tokens.SEMI_COLON] = -65;
Actions[94][Tokens.RIGHT_SQUARE] = -65;
Actions[94][Tokens.COMMA] = -65;
Actions[94][Tokens.AND] = -65;
Actions[94][Tokens.OR] = -65;
Actions[94][Tokens.LESS_THAN] = -65;
Actions[94][Tokens.GREATER_THAN] = -65;
Actions[94][Tokens.LESS_OR_EQUAL] = -65;
Actions[94][Tokens.GREATER_OR_EQUAL] = -65;
Actions[94][Tokens.EQUAL_EQUAL] = -65;
Actions[94][Tokens.NOT_EQUAL] = -65;
Actions[94][Tokens.PLUS] = -65;
Actions[94][Tokens.MINUS] = -65;
Actions[94][Tokens.TIMES] = -65;
Actions[94][Tokens.DIVIDE] = -65;

//STATE95
Actions[95] = {};
Actions[95][Tokens.RIGHT_PARENTHESIS] = -66;
Actions[95][Tokens.SEMI_COLON] = -66;
Actions[95][Tokens.RIGHT_SQUARE] = -66;
Actions[95][Tokens.COMMA] = -66;
Actions[95][Tokens.AND] = -66;
Actions[95][Tokens.OR] = -66;
Actions[95][Tokens.LESS_THAN] = -66;
Actions[95][Tokens.GREATER_THAN] = -66;
Actions[95][Tokens.LESS_OR_EQUAL] = -66;
Actions[95][Tokens.GREATER_OR_EQUAL] = -66;
Actions[95][Tokens.EQUAL_EQUAL] = -66;
Actions[95][Tokens.NOT_EQUAL] = -66;
Actions[95][Tokens.PLUS] = -66;
Actions[95][Tokens.MINUS] = -66;
Actions[95][Tokens.TIMES] = -66;
Actions[95][Tokens.DIVIDE] = -66;

//STATE96
Actions[96] = {};
Actions[96][Tokens.RIGHT_PARENTHESIS] = -78;
Actions[96][Tokens.SEMI_COLON] = -78;
Actions[96][Tokens.RIGHT_SQUARE] = -78;
Actions[96][Tokens.COMMA] = -78;
Actions[96][Tokens.AND] = -78;
Actions[96][Tokens.OR] = -78;
Actions[96][Tokens.LESS_THAN] = -78;
Actions[96][Tokens.GREATER_THAN] = -78;
Actions[96][Tokens.LESS_OR_EQUAL] = -78;
Actions[96][Tokens.GREATER_OR_EQUAL] = -78;
Actions[96][Tokens.EQUAL_EQUAL] = -78;
Actions[96][Tokens.NOT_EQUAL] = -78;
Actions[96][Tokens.PLUS] = -78;
Actions[96][Tokens.MINUS] = -78;
Actions[96][Tokens.TIMES] = -78;
Actions[96][Tokens.DIVIDE] = -78;

//STATE97
Actions[97] = {};
Actions[97][Tokens.RIGHT_PARENTHESIS] = -79;
Actions[97][Tokens.SEMI_COLON] = -79;
Actions[97][Tokens.RIGHT_SQUARE] = -79;
Actions[97][Tokens.COMMA] = -79;
Actions[97][Tokens.AND] = -79;
Actions[97][Tokens.OR] = -79;
Actions[97][Tokens.LESS_THAN] = -79;
Actions[97][Tokens.GREATER_THAN] = -79;
Actions[97][Tokens.LESS_OR_EQUAL] = -79;
Actions[97][Tokens.GREATER_OR_EQUAL] = -79;
Actions[97][Tokens.EQUAL_EQUAL] = -79;
Actions[97][Tokens.NOT_EQUAL] = -79;
Actions[97][Tokens.PLUS] = -79;
Actions[97][Tokens.MINUS] = -79;
Actions[97][Tokens.TIMES] = -79;
Actions[97][Tokens.DIVIDE] = -79;

//STATE98
Actions[98] = {};
Actions[98][Tokens.RIGHT_PARENTHESIS] = -80;
Actions[98][Tokens.SEMI_COLON] = -80;
Actions[98][Tokens.RIGHT_SQUARE] = -80;
Actions[98][Tokens.COMMA] = -80;
Actions[98][Tokens.AND] = -80;
Actions[98][Tokens.OR] = -80;
Actions[98][Tokens.LESS_THAN] = -80;
Actions[98][Tokens.GREATER_THAN] = -80;
Actions[98][Tokens.LESS_OR_EQUAL] = -80;
Actions[98][Tokens.GREATER_OR_EQUAL] = -80;
Actions[98][Tokens.EQUAL_EQUAL] = -80;
Actions[98][Tokens.NOT_EQUAL] = -80;
Actions[98][Tokens.PLUS] = -80;
Actions[98][Tokens.MINUS] = -80;
Actions[98][Tokens.TIMES] = -80;
Actions[98][Tokens.DIVIDE] = -80;

//STATE99
Actions[99] = {};
Actions[99][Tokens.RIGHT_PARENTHESIS] = -81;
Actions[99][Tokens.SEMI_COLON] = -81;
Actions[99][Tokens.RIGHT_SQUARE] = -81;
Actions[99][Tokens.COMMA] = -81;
Actions[99][Tokens.AND] = -81;
Actions[99][Tokens.OR] = -81;
Actions[99][Tokens.LESS_THAN] = -81;
Actions[99][Tokens.GREATER_THAN] = -81;
Actions[99][Tokens.LESS_OR_EQUAL] = -81;
Actions[99][Tokens.GREATER_OR_EQUAL] = -81;
Actions[99][Tokens.EQUAL_EQUAL] = -81;
Actions[99][Tokens.NOT_EQUAL] = -81;
Actions[99][Tokens.PLUS] = -81;
Actions[99][Tokens.MINUS] = -81;
Actions[99][Tokens.TIMES] = -81;
Actions[99][Tokens.DIVIDE] = -81;

//STATE100
Actions[100] = {};
Actions[100][Tokens.RIGHT_BRACES] = -11;
Actions[100][Tokens.SEMI_COLON] = -11;

//STATE101
Actions[101] = {};
Actions[101][Tokens.LEFT_PARENTHESIS] = 88;
Actions[101][States.NB] = 73;
Actions[101][Tokens.LEFT_BRACES] = -86;
Actions[101][Tokens.RIGHT_BRACES] = 139;
Actions[101][States.NUM] = 95;
Actions[101][States.S] = 105;
Actions[101][States.E] = 72;
Actions[101][Tokens.WHILE] = 74;
Actions[101][Tokens.DO] = 75;
Actions[101][Tokens.IF] = 76;
Actions[101][Tokens.BREAK] = 77;
Actions[101][Tokens.CONTINUE] = 78;
Actions[101][Tokens.RETURN] = 79;
Actions[101][States.L] = 80;
Actions[101][States.LV] = 81;
Actions[101][States.R] = 82;
Actions[101][States.K] = 84;
Actions[101][Tokens.MINUS] = 89;
Actions[101][States.F] = 85;
Actions[101][Tokens.PLUS_PLUS] = 86;
Actions[101][Tokens.MINUS_MINUS] = 87;
Actions[101][States.IDU] = 83;
Actions[101][Tokens.NOT] = 90;
Actions[101][States.TRU] = 91;
Actions[101][States.FALS] = 92;
Actions[101][States.CHR] = 93;
Actions[101][States.STR] = 94;
Actions[101][Tokens.TRUE] = 96;
Actions[101][Tokens.FALSE] = 97;
Actions[101][Tokens.CHARACTER] = 98;
Actions[101][Tokens.STRINGVAL] = 99;
Actions[101][Tokens.NUMERAL] = 44;
Actions[101][Tokens.IDT] = 30;

//STATE102
Actions[102] = {};
Actions[102][Tokens.EOF] = -20;
Actions[102][Tokens.FUNCTION] = -20;
Actions[102][Tokens.LEFT_PARENTHESIS] = -20;
Actions[102][Tokens.TYPE] = -20;
Actions[102][Tokens.LEFT_BRACES] = -20;
Actions[102][Tokens.RIGHT_BRACES] = -20;
Actions[102][Tokens.VAR] = -20;
Actions[102][Tokens.WHILE] = -20;
Actions[102][Tokens.DO] = -20;
Actions[102][Tokens.IF] = -20;
Actions[102][Tokens.ELSE] = -20;
Actions[102][Tokens.BREAK] = -20;
Actions[102][Tokens.CONTINUE] = -20;
Actions[102][Tokens.RETURN] = -20;
Actions[102][Tokens.MINUS] = -20;
Actions[102][Tokens.PLUS_PLUS] = -20;
Actions[102][Tokens.MINUS_MINUS] = -20;
Actions[102][Tokens.NOT] = -20;
Actions[102][Tokens.TRUE] = -20;
Actions[102][Tokens.FALSE] = -20;
Actions[102][Tokens.CHARACTER] = -20;
Actions[102][Tokens.STRINGVAL] = -20;
Actions[102][Tokens.NUMERAL] = -20;
Actions[102][Tokens.IDT] = -20;

//STATE103
Actions[103] = {};
Actions[103][Tokens.LEFT_PARENTHESIS] = -23;
Actions[103][Tokens.LEFT_BRACES] = -23;
Actions[103][Tokens.RIGHT_BRACES] = -23;
Actions[103][Tokens.VAR] = -23;
Actions[103][Tokens.WHILE] = -23;
Actions[103][Tokens.DO] = -23;
Actions[103][Tokens.IF] = -23;
Actions[103][Tokens.BREAK] = -23;
Actions[103][Tokens.CONTINUE] = -23;
Actions[103][Tokens.RETURN] = -23;
Actions[103][Tokens.MINUS] = -23;
Actions[103][Tokens.PLUS_PLUS] = -23;
Actions[103][Tokens.MINUS_MINUS] = -23;
Actions[103][Tokens.NOT] = -23;
Actions[103][Tokens.TRUE] = -23;
Actions[103][Tokens.FALSE] = -23;
Actions[103][Tokens.CHARACTER] = -23;
Actions[103][Tokens.STRINGVAL] = -23;
Actions[103][Tokens.NUMERAL] = -23;
Actions[103][Tokens.IDT] = -23;

//STATE104
Actions[104] = {};
Actions[104][Tokens.EOF] = -21;
Actions[104][Tokens.FUNCTION] = -21;
Actions[104][Tokens.LEFT_PARENTHESIS] = -21;
Actions[104][Tokens.TYPE] = -21;
Actions[104][Tokens.LEFT_BRACES] = -21;
Actions[104][Tokens.RIGHT_BRACES] = -21;
Actions[104][Tokens.VAR] = -21;
Actions[104][Tokens.WHILE] = -21;
Actions[104][Tokens.DO] = -21;
Actions[104][Tokens.IF] = -21;
Actions[104][Tokens.ELSE] = -21;
Actions[104][Tokens.BREAK] = -21;
Actions[104][Tokens.CONTINUE] = -21;
Actions[104][Tokens.RETURN] = -21;
Actions[104][Tokens.MINUS] = -21;
Actions[104][Tokens.PLUS_PLUS] = -21;
Actions[104][Tokens.MINUS_MINUS] = -21;
Actions[104][Tokens.NOT] = -21;
Actions[104][Tokens.TRUE] = -21;
Actions[104][Tokens.FALSE] = -21;
Actions[104][Tokens.CHARACTER] = -21;
Actions[104][Tokens.STRINGVAL] = -21;
Actions[104][Tokens.NUMERAL] = -21;
Actions[104][Tokens.IDT] = -21;

//STATE105
Actions[105] = {};
Actions[105][Tokens.LEFT_PARENTHESIS] = -25;
Actions[105][Tokens.LEFT_BRACES] = -25;
Actions[105][Tokens.RIGHT_BRACES] = -25;
Actions[105][Tokens.WHILE] = -25;
Actions[105][Tokens.DO] = -25;
Actions[105][Tokens.IF] = -25;
Actions[105][Tokens.BREAK] = -25;
Actions[105][Tokens.CONTINUE] = -25;
Actions[105][Tokens.RETURN] = -25;
Actions[105][Tokens.MINUS] = -25;
Actions[105][Tokens.PLUS_PLUS] = -25;
Actions[105][Tokens.MINUS_MINUS] = -25;
Actions[105][Tokens.NOT] = -25;
Actions[105][Tokens.TRUE] = -25;
Actions[105][Tokens.FALSE] = -25;
Actions[105][Tokens.CHARACTER] = -25;
Actions[105][Tokens.STRINGVAL] = -25;
Actions[105][Tokens.NUMERAL] = -25;
Actions[105][Tokens.IDT] = -25;

//STATE106
Actions[106] = {};
Actions[106][Tokens.LEFT_PARENTHESIS] = -27;
Actions[106][Tokens.LEFT_BRACES] = -27;
Actions[106][Tokens.RIGHT_BRACES] = -27;
Actions[106][Tokens.WHILE] = -27;
Actions[106][Tokens.DO] = -27;
Actions[106][Tokens.IF] = -27;
Actions[106][Tokens.ELSE] = -27;
Actions[106][Tokens.BREAK] = -27;
Actions[106][Tokens.CONTINUE] = -27;
Actions[106][Tokens.RETURN] = -27;
Actions[106][Tokens.MINUS] = -27;
Actions[106][Tokens.PLUS_PLUS] = -27;
Actions[106][Tokens.MINUS_MINUS] = -27;
Actions[106][Tokens.NOT] = -27;
Actions[106][Tokens.TRUE] = -27;
Actions[106][Tokens.FALSE] = -27;
Actions[106][Tokens.CHARACTER] = -27;
Actions[106][Tokens.STRINGVAL] = -27;
Actions[106][Tokens.NUMERAL] = -27;
Actions[106][Tokens.IDT] = -27;

//STATE107
Actions[107] = {};
Actions[107][Tokens.LEFT_PARENTHESIS] = 88;
Actions[107][States.NUM] = 95;
Actions[107][States.L] = 140;
Actions[107][States.LV] = 137;
Actions[107][States.R] = 82;
Actions[107][States.K] = 84;
Actions[107][Tokens.MINUS] = 89;
Actions[107][States.F] = 85;
Actions[107][Tokens.PLUS_PLUS] = 86;
Actions[107][Tokens.MINUS_MINUS] = 87;
Actions[107][States.IDU] = 83;
Actions[107][Tokens.NOT] = 90;
Actions[107][States.TRU] = 91;
Actions[107][States.FALS] = 92;
Actions[107][States.CHR] = 93;
Actions[107][States.STR] = 94;
Actions[107][Tokens.TRUE] = 96;
Actions[107][Tokens.FALSE] = 97;
Actions[107][Tokens.CHARACTER] = 98;
Actions[107][Tokens.STRINGVAL] = 99;
Actions[107][Tokens.NUMERAL] = 44;
Actions[107][Tokens.IDT] = 30;

//STATE108
Actions[108] = {};
Actions[108][Tokens.LEFT_PARENTHESIS] = 88;
Actions[108][States.NUM] = 95;
Actions[108][States.L] = 141;
Actions[108][States.LV] = 137;
Actions[108][States.R] = 82;
Actions[108][States.K] = 84;
Actions[108][Tokens.MINUS] = 89;
Actions[108][States.F] = 85;
Actions[108][Tokens.PLUS_PLUS] = 86;
Actions[108][Tokens.MINUS_MINUS] = 87;
Actions[108][States.IDU] = 83;
Actions[108][Tokens.NOT] = 90;
Actions[108][States.TRU] = 91;
Actions[108][States.FALS] = 92;
Actions[108][States.CHR] = 93;
Actions[108][States.STR] = 94;
Actions[108][Tokens.TRUE] = 96;
Actions[108][Tokens.FALSE] = 97;
Actions[108][Tokens.CHARACTER] = 98;
Actions[108][Tokens.STRINGVAL] = 99;
Actions[108][Tokens.NUMERAL] = 44;
Actions[108][Tokens.IDT] = 30;

//STATE109
Actions[109] = {};
Actions[109][Tokens.LEFT_PARENTHESIS] = -28;
Actions[109][Tokens.LEFT_BRACES] = -28;
Actions[109][Tokens.RIGHT_BRACES] = -28;
Actions[109][Tokens.WHILE] = -28;
Actions[109][Tokens.DO] = -28;
Actions[109][Tokens.IF] = -28;
Actions[109][Tokens.ELSE] = -28;
Actions[109][Tokens.BREAK] = -28;
Actions[109][Tokens.CONTINUE] = -28;
Actions[109][Tokens.RETURN] = -28;
Actions[109][Tokens.MINUS] = -28;
Actions[109][Tokens.PLUS_PLUS] = -28;
Actions[109][Tokens.MINUS_MINUS] = -28;
Actions[109][Tokens.NOT] = -28;
Actions[109][Tokens.TRUE] = -28;
Actions[109][Tokens.FALSE] = -28;
Actions[109][Tokens.CHARACTER] = -28;
Actions[109][Tokens.STRINGVAL] = -28;
Actions[109][Tokens.NUMERAL] = -28;
Actions[109][Tokens.IDT] = -28;

//STATE110
Actions[110] = {};
Actions[110][Tokens.LEFT_PARENTHESIS] = 142;

//STATE111
Actions[111] = {};
Actions[111][Tokens.LEFT_PARENTHESIS] = 88;
Actions[111][States.NB] = 73;
Actions[111][Tokens.LEFT_BRACES] = -86;
Actions[111][States.NUM] = 95;
Actions[111][States.S] = 143;
Actions[111][States.E] = 72;
Actions[111][Tokens.WHILE] = 74;
Actions[111][Tokens.DO] = 75;
Actions[111][Tokens.IF] = 76;
Actions[111][Tokens.BREAK] = 77;
Actions[111][Tokens.CONTINUE] = 78;
Actions[111][Tokens.RETURN] = 79;
Actions[111][States.L] = 80;
Actions[111][States.LV] = 81;
Actions[111][States.R] = 82;
Actions[111][States.K] = 84;
Actions[111][Tokens.MINUS] = 89;
Actions[111][States.F] = 85;
Actions[111][Tokens.PLUS_PLUS] = 86;
Actions[111][Tokens.MINUS_MINUS] = 87;
Actions[111][States.IDU] = 83;
Actions[111][Tokens.NOT] = 90;
Actions[111][States.TRU] = 91;
Actions[111][States.FALS] = 92;
Actions[111][States.CHR] = 93;
Actions[111][States.STR] = 94;
Actions[111][Tokens.TRUE] = 96;
Actions[111][Tokens.FALSE] = 97;
Actions[111][Tokens.CHARACTER] = 98;
Actions[111][Tokens.STRINGVAL] = 99;
Actions[111][Tokens.NUMERAL] = 44;
Actions[111][Tokens.IDT] = 30;

//STATE112
Actions[112] = {};
Actions[112][Tokens.LEFT_PARENTHESIS] = 88;
Actions[112][States.NUM] = 95;
Actions[112][States.E] = 144;
Actions[112][States.L] = 80;
Actions[112][States.LV] = 81;
Actions[112][States.R] = 82;
Actions[112][States.K] = 84;
Actions[112][Tokens.MINUS] = 89;
Actions[112][States.F] = 85;
Actions[112][Tokens.PLUS_PLUS] = 86;
Actions[112][Tokens.MINUS_MINUS] = 87;
Actions[112][States.IDU] = 83;
Actions[112][Tokens.NOT] = 90;
Actions[112][States.TRU] = 91;
Actions[112][States.FALS] = 92;
Actions[112][States.CHR] = 93;
Actions[112][States.STR] = 94;
Actions[112][Tokens.TRUE] = 96;
Actions[112][Tokens.FALSE] = 97;
Actions[112][Tokens.CHARACTER] = 98;
Actions[112][Tokens.STRINGVAL] = 99;
Actions[112][Tokens.NUMERAL] = 44;
Actions[112][Tokens.IDT] = 30;

//STATE113
Actions[113] = {};
Actions[113][Tokens.LEFT_PARENTHESIS] = -33;
Actions[113][Tokens.LEFT_BRACES] = -33;
Actions[113][Tokens.RIGHT_BRACES] = -33;
Actions[113][Tokens.WHILE] = -33;
Actions[113][Tokens.DO] = -33;
Actions[113][Tokens.IF] = -33;
Actions[113][Tokens.ELSE] = -33;
Actions[113][Tokens.BREAK] = -33;
Actions[113][Tokens.CONTINUE] = -33;
Actions[113][Tokens.RETURN] = -33;
Actions[113][Tokens.MINUS] = -33;
Actions[113][Tokens.PLUS_PLUS] = -33;
Actions[113][Tokens.MINUS_MINUS] = -33;
Actions[113][Tokens.NOT] = -33;
Actions[113][Tokens.TRUE] = -33;
Actions[113][Tokens.FALSE] = -33;
Actions[113][Tokens.CHARACTER] = -33;
Actions[113][Tokens.STRINGVAL] = -33;
Actions[113][Tokens.NUMERAL] = -33;
Actions[113][Tokens.IDT] = -33;

//STATE114
Actions[114] = {};
Actions[114][Tokens.LEFT_PARENTHESIS] = -34;
Actions[114][Tokens.LEFT_BRACES] = -34;
Actions[114][Tokens.RIGHT_BRACES] = -34;
Actions[114][Tokens.WHILE] = -34;
Actions[114][Tokens.DO] = -34;
Actions[114][Tokens.IF] = -34;
Actions[114][Tokens.ELSE] = -34;
Actions[114][Tokens.BREAK] = -34;
Actions[114][Tokens.CONTINUE] = -34;
Actions[114][Tokens.RETURN] = -34;
Actions[114][Tokens.MINUS] = -34;
Actions[114][Tokens.PLUS_PLUS] = -34;
Actions[114][Tokens.MINUS_MINUS] = -34;
Actions[114][Tokens.NOT] = -34;
Actions[114][Tokens.TRUE] = -34;
Actions[114][Tokens.FALSE] = -34;
Actions[114][Tokens.CHARACTER] = -34;
Actions[114][Tokens.STRINGVAL] = -34;
Actions[114][Tokens.NUMERAL] = -34;
Actions[114][Tokens.IDT] = -34;

//STATE115
Actions[115] = {};
Actions[115][Tokens.SEMI_COLON] = 145;
Actions[115][Tokens.AND] = 107;
Actions[115][Tokens.OR] = 108;

//STATE116
Actions[116] = {};
Actions[116][Tokens.LEFT_PARENTHESIS] = 88;
Actions[116][States.NUM] = 95;
Actions[116][States.LV] = 137;
Actions[116][States.R] = 146;
Actions[116][States.K] = 84;
Actions[116][Tokens.MINUS] = 89;
Actions[116][States.F] = 85;
Actions[116][Tokens.PLUS_PLUS] = 86;
Actions[116][Tokens.MINUS_MINUS] = 87;
Actions[116][States.IDU] = 83;
Actions[116][Tokens.NOT] = 90;
Actions[116][States.TRU] = 91;
Actions[116][States.FALS] = 92;
Actions[116][States.CHR] = 93;
Actions[116][States.STR] = 94;
Actions[116][Tokens.TRUE] = 96;
Actions[116][Tokens.FALSE] = 97;
Actions[116][Tokens.CHARACTER] = 98;
Actions[116][Tokens.STRINGVAL] = 99;
Actions[116][Tokens.NUMERAL] = 44;
Actions[116][Tokens.IDT] = 30;

//STATE117
Actions[117] = {};
Actions[117][Tokens.LEFT_PARENTHESIS] = 88;
Actions[117][States.NUM] = 95;
Actions[117][States.LV] = 137;
Actions[117][States.R] = 147;
Actions[117][States.K] = 84;
Actions[117][Tokens.MINUS] = 89;
Actions[117][States.F] = 85;
Actions[117][Tokens.PLUS_PLUS] = 86;
Actions[117][Tokens.MINUS_MINUS] = 87;
Actions[117][States.IDU] = 83;
Actions[117][Tokens.NOT] = 90;
Actions[117][States.TRU] = 91;
Actions[117][States.FALS] = 92;
Actions[117][States.CHR] = 93;
Actions[117][States.STR] = 94;
Actions[117][Tokens.TRUE] = 96;
Actions[117][Tokens.FALSE] = 97;
Actions[117][Tokens.CHARACTER] = 98;
Actions[117][Tokens.STRINGVAL] = 99;
Actions[117][Tokens.NUMERAL] = 44;
Actions[117][Tokens.IDT] = 30;

//STATE118
Actions[118] = {};
Actions[118][Tokens.LEFT_PARENTHESIS] = 88;
Actions[118][States.NUM] = 95;
Actions[118][States.LV] = 137;
Actions[118][States.R] = 148;
Actions[118][States.K] = 84;
Actions[118][Tokens.MINUS] = 89;
Actions[118][States.F] = 85;
Actions[118][Tokens.PLUS_PLUS] = 86;
Actions[118][Tokens.MINUS_MINUS] = 87;
Actions[118][States.IDU] = 83;
Actions[118][Tokens.NOT] = 90;
Actions[118][States.TRU] = 91;
Actions[118][States.FALS] = 92;
Actions[118][States.CHR] = 93;
Actions[118][States.STR] = 94;
Actions[118][Tokens.TRUE] = 96;
Actions[118][Tokens.FALSE] = 97;
Actions[118][Tokens.CHARACTER] = 98;
Actions[118][Tokens.STRINGVAL] = 99;
Actions[118][Tokens.NUMERAL] = 44;
Actions[118][Tokens.IDT] = 30;

//STATE119
Actions[119] = {};
Actions[119][Tokens.LEFT_PARENTHESIS] = 88;
Actions[119][States.NUM] = 95;
Actions[119][States.LV] = 137;
Actions[119][States.R] = 149;
Actions[119][States.K] = 84;
Actions[119][Tokens.MINUS] = 89;
Actions[119][States.F] = 85;
Actions[119][Tokens.PLUS_PLUS] = 86;
Actions[119][Tokens.MINUS_MINUS] = 87;
Actions[119][States.IDU] = 83;
Actions[119][Tokens.NOT] = 90;
Actions[119][States.TRU] = 91;
Actions[119][States.FALS] = 92;
Actions[119][States.CHR] = 93;
Actions[119][States.STR] = 94;
Actions[119][Tokens.TRUE] = 96;
Actions[119][Tokens.FALSE] = 97;
Actions[119][Tokens.CHARACTER] = 98;
Actions[119][Tokens.STRINGVAL] = 99;
Actions[119][Tokens.NUMERAL] = 44;
Actions[119][Tokens.IDT] = 30;

//STATE120
Actions[120] = {};
Actions[120][Tokens.LEFT_PARENTHESIS] = 88;
Actions[120][States.NUM] = 95;
Actions[120][States.LV] = 137;
Actions[120][States.R] = 150;
Actions[120][States.K] = 84;
Actions[120][Tokens.MINUS] = 89;
Actions[120][States.F] = 85;
Actions[120][Tokens.PLUS_PLUS] = 86;
Actions[120][Tokens.MINUS_MINUS] = 87;
Actions[120][States.IDU] = 83;
Actions[120][Tokens.NOT] = 90;
Actions[120][States.TRU] = 91;
Actions[120][States.FALS] = 92;
Actions[120][States.CHR] = 93;
Actions[120][States.STR] = 94;
Actions[120][Tokens.TRUE] = 96;
Actions[120][Tokens.FALSE] = 97;
Actions[120][Tokens.CHARACTER] = 98;
Actions[120][Tokens.STRINGVAL] = 99;
Actions[120][Tokens.NUMERAL] = 44;
Actions[120][Tokens.IDT] = 30;

//STATE121
Actions[121] = {};
Actions[121][Tokens.LEFT_PARENTHESIS] = 88;
Actions[121][States.NUM] = 95;
Actions[121][States.LV] = 137;
Actions[121][States.R] = 151;
Actions[121][States.K] = 84;
Actions[121][Tokens.MINUS] = 89;
Actions[121][States.F] = 85;
Actions[121][Tokens.PLUS_PLUS] = 86;
Actions[121][Tokens.MINUS_MINUS] = 87;
Actions[121][States.IDU] = 83;
Actions[121][Tokens.NOT] = 90;
Actions[121][States.TRU] = 91;
Actions[121][States.FALS] = 92;
Actions[121][States.CHR] = 93;
Actions[121][States.STR] = 94;
Actions[121][Tokens.TRUE] = 96;
Actions[121][Tokens.FALSE] = 97;
Actions[121][Tokens.CHARACTER] = 98;
Actions[121][Tokens.STRINGVAL] = 99;
Actions[121][Tokens.NUMERAL] = 44;
Actions[121][Tokens.IDT] = 30;

//STATE122
Actions[122] = {};
Actions[122][Tokens.EQUALS] = 152;

//STATE123
Actions[123] = {};
Actions[123][States.ID] = 153;
Actions[123][Tokens.IDT] = 154;

//STATE124
Actions[124] = {};
Actions[124][Tokens.LEFT_PARENTHESIS] = 88;
Actions[124][States.NUM] = 95;
Actions[124][States.E] = 155;
Actions[124][States.L] = 80;
Actions[124][States.LV] = 81;
Actions[124][States.R] = 82;
Actions[124][States.K] = 84;
Actions[124][Tokens.MINUS] = 89;
Actions[124][States.F] = 85;
Actions[124][Tokens.PLUS_PLUS] = 86;
Actions[124][Tokens.MINUS_MINUS] = 87;
Actions[124][States.IDU] = 83;
Actions[124][Tokens.NOT] = 90;
Actions[124][States.TRU] = 91;
Actions[124][States.FALS] = 92;
Actions[124][States.CHR] = 93;
Actions[124][States.STR] = 94;
Actions[124][Tokens.TRUE] = 96;
Actions[124][Tokens.FALSE] = 97;
Actions[124][Tokens.CHARACTER] = 98;
Actions[124][Tokens.STRINGVAL] = 99;
Actions[124][Tokens.NUMERAL] = 44;
Actions[124][Tokens.IDT] = 30;

//STATE125
Actions[125] = {};
Actions[125][Tokens.RIGHT_PARENTHESIS] = -56;
Actions[125][Tokens.SEMI_COLON] = -56;
Actions[125][Tokens.RIGHT_SQUARE] = -56;
Actions[125][Tokens.COMMA] = -56;
Actions[125][Tokens.AND] = -56;
Actions[125][Tokens.OR] = -56;
Actions[125][Tokens.LESS_THAN] = -56;
Actions[125][Tokens.GREATER_THAN] = -56;
Actions[125][Tokens.LESS_OR_EQUAL] = -56;
Actions[125][Tokens.GREATER_OR_EQUAL] = -56;
Actions[125][Tokens.EQUAL_EQUAL] = -56;
Actions[125][Tokens.NOT_EQUAL] = -56;
Actions[125][Tokens.PLUS] = -56;
Actions[125][Tokens.MINUS] = -56;
Actions[125][Tokens.TIMES] = -56;
Actions[125][Tokens.DIVIDE] = -56;

//STATE126
Actions[126] = {};
Actions[126][Tokens.RIGHT_PARENTHESIS] = -57;
Actions[126][Tokens.SEMI_COLON] = -57;
Actions[126][Tokens.RIGHT_SQUARE] = -57;
Actions[126][Tokens.COMMA] = -57;
Actions[126][Tokens.AND] = -57;
Actions[126][Tokens.OR] = -57;
Actions[126][Tokens.LESS_THAN] = -57;
Actions[126][Tokens.GREATER_THAN] = -57;
Actions[126][Tokens.LESS_OR_EQUAL] = -57;
Actions[126][Tokens.GREATER_OR_EQUAL] = -57;
Actions[126][Tokens.EQUAL_EQUAL] = -57;
Actions[126][Tokens.NOT_EQUAL] = -57;
Actions[126][Tokens.PLUS] = -57;
Actions[126][Tokens.MINUS] = -57;
Actions[126][Tokens.TIMES] = -57;
Actions[126][Tokens.DIVIDE] = -57;

//STATE127
Actions[127] = {};
Actions[127][Tokens.LEFT_PARENTHESIS] = 88;
Actions[127][States.NUM] = 95;
Actions[127][States.LV] = 137;
Actions[127][States.K] = 156;
Actions[127][Tokens.MINUS] = 89;
Actions[127][States.F] = 85;
Actions[127][Tokens.PLUS_PLUS] = 86;
Actions[127][Tokens.MINUS_MINUS] = 87;
Actions[127][States.IDU] = 83;
Actions[127][Tokens.NOT] = 90;
Actions[127][States.TRU] = 91;
Actions[127][States.FALS] = 92;
Actions[127][States.CHR] = 93;
Actions[127][States.STR] = 94;
Actions[127][Tokens.TRUE] = 96;
Actions[127][Tokens.FALSE] = 97;
Actions[127][Tokens.CHARACTER] = 98;
Actions[127][Tokens.STRINGVAL] = 99;
Actions[127][Tokens.NUMERAL] = 44;
Actions[127][Tokens.IDT] = 30;

//STATE128
Actions[128] = {};
Actions[128][Tokens.LEFT_PARENTHESIS] = 88;
Actions[128][States.NUM] = 95;
Actions[128][States.LV] = 137;
Actions[128][States.K] = 157;
Actions[128][Tokens.MINUS] = 89;
Actions[128][States.F] = 85;
Actions[128][Tokens.PLUS_PLUS] = 86;
Actions[128][Tokens.MINUS_MINUS] = 87;
Actions[128][States.IDU] = 83;
Actions[128][Tokens.NOT] = 90;
Actions[128][States.TRU] = 91;
Actions[128][States.FALS] = 92;
Actions[128][States.CHR] = 93;
Actions[128][States.STR] = 94;
Actions[128][Tokens.TRUE] = 96;
Actions[128][Tokens.FALSE] = 97;
Actions[128][Tokens.CHARACTER] = 98;
Actions[128][Tokens.STRINGVAL] = 99;
Actions[128][Tokens.NUMERAL] = 44;
Actions[128][Tokens.IDT] = 30;

//STATE129
Actions[129] = {};
Actions[129][Tokens.LEFT_PARENTHESIS] = 158;

//STATE130
Actions[130] = {};
Actions[130][Tokens.LEFT_PARENTHESIS] = 88;
Actions[130][States.NUM] = 95;
Actions[130][States.LV] = 137;
Actions[130][Tokens.MINUS] = 89;
Actions[130][States.F] = 159;
Actions[130][Tokens.PLUS_PLUS] = 86;
Actions[130][Tokens.MINUS_MINUS] = 87;
Actions[130][States.IDU] = 83;
Actions[130][Tokens.NOT] = 90;
Actions[130][States.TRU] = 91;
Actions[130][States.FALS] = 92;
Actions[130][States.CHR] = 93;
Actions[130][States.STR] = 94;
Actions[130][Tokens.TRUE] = 96;
Actions[130][Tokens.FALSE] = 97;
Actions[130][Tokens.CHARACTER] = 98;
Actions[130][Tokens.STRINGVAL] = 99;
Actions[130][Tokens.NUMERAL] = 44;
Actions[130][Tokens.IDT] = 30;

//STATE131
Actions[131] = {};
Actions[131][Tokens.LEFT_PARENTHESIS] = 88;
Actions[131][States.NUM] = 95;
Actions[131][States.LV] = 137;
Actions[131][Tokens.MINUS] = 89;
Actions[131][States.F] = 160;
Actions[131][Tokens.PLUS_PLUS] = 86;
Actions[131][Tokens.MINUS_MINUS] = 87;
Actions[131][States.IDU] = 83;
Actions[131][Tokens.NOT] = 90;
Actions[131][States.TRU] = 91;
Actions[131][States.FALS] = 92;
Actions[131][States.CHR] = 93;
Actions[131][States.STR] = 94;
Actions[131][Tokens.TRUE] = 96;
Actions[131][Tokens.FALSE] = 97;
Actions[131][Tokens.CHARACTER] = 98;
Actions[131][Tokens.STRINGVAL] = 99;
Actions[131][Tokens.NUMERAL] = 44;
Actions[131][Tokens.IDT] = 30;

//STATE132
Actions[132] = {};
Actions[132][Tokens.RIGHT_PARENTHESIS] = -54;
Actions[132][Tokens.SEMI_COLON] = -54;
Actions[132][Tokens.LEFT_SQUARE] = 124;
Actions[132][Tokens.RIGHT_SQUARE] = -54;
Actions[132][Tokens.COMMA] = -54;
Actions[132][Tokens.AND] = -54;
Actions[132][Tokens.OR] = -54;
Actions[132][Tokens.LESS_THAN] = -54;
Actions[132][Tokens.GREATER_THAN] = -54;
Actions[132][Tokens.LESS_OR_EQUAL] = -54;
Actions[132][Tokens.GREATER_OR_EQUAL] = -54;
Actions[132][Tokens.EQUAL_EQUAL] = -54;
Actions[132][Tokens.NOT_EQUAL] = -54;
Actions[132][Tokens.PLUS] = -54;
Actions[132][Tokens.MINUS] = -54;
Actions[132][Tokens.TIMES] = -54;
Actions[132][Tokens.DIVIDE] = -54;
Actions[132][Tokens.DOT] = 123;

//STATE133
Actions[133] = {};
Actions[133][Tokens.RIGHT_PARENTHESIS] = -72;
Actions[133][Tokens.SEMI_COLON] = -72;
Actions[133][Tokens.LEFT_SQUARE] = -72;
Actions[133][Tokens.RIGHT_SQUARE] = -72;
Actions[133][Tokens.COMMA] = -72;
Actions[133][Tokens.AND] = -72;
Actions[133][Tokens.OR] = -72;
Actions[133][Tokens.LESS_THAN] = -72;
Actions[133][Tokens.GREATER_THAN] = -72;
Actions[133][Tokens.LESS_OR_EQUAL] = -72;
Actions[133][Tokens.GREATER_OR_EQUAL] = -72;
Actions[133][Tokens.EQUAL_EQUAL] = -72;
Actions[133][Tokens.NOT_EQUAL] = -72;
Actions[133][Tokens.PLUS] = -72;
Actions[133][Tokens.MINUS] = -72;
Actions[133][Tokens.TIMES] = -72;
Actions[133][Tokens.DIVIDE] = -72;
Actions[133][Tokens.DOT] = -72;

//STATE134
Actions[134] = {};
Actions[134][Tokens.RIGHT_PARENTHESIS] = -55;
Actions[134][Tokens.SEMI_COLON] = -55;
Actions[134][Tokens.LEFT_SQUARE] = 124;
Actions[134][Tokens.RIGHT_SQUARE] = -55;
Actions[134][Tokens.COMMA] = -55;
Actions[134][Tokens.AND] = -55;
Actions[134][Tokens.OR] = -55;
Actions[134][Tokens.LESS_THAN] = -55;
Actions[134][Tokens.GREATER_THAN] = -55;
Actions[134][Tokens.LESS_OR_EQUAL] = -55;
Actions[134][Tokens.GREATER_OR_EQUAL] = -55;
Actions[134][Tokens.EQUAL_EQUAL] = -55;
Actions[134][Tokens.NOT_EQUAL] = -55;
Actions[134][Tokens.PLUS] = -55;
Actions[134][Tokens.MINUS] = -55;
Actions[134][Tokens.TIMES] = -55;
Actions[134][Tokens.DIVIDE] = -55;
Actions[134][Tokens.DOT] = 123;

//STATE135
Actions[135] = {};
Actions[135][Tokens.RIGHT_PARENTHESIS] = 161;
Actions[135][Tokens.AND] = 107;
Actions[135][Tokens.OR] = 108;

//STATE136
Actions[136] = {};
Actions[136][Tokens.RIGHT_PARENTHESIS] = -60;
Actions[136][Tokens.SEMI_COLON] = -60;
Actions[136][Tokens.RIGHT_SQUARE] = -60;
Actions[136][Tokens.COMMA] = -60;
Actions[136][Tokens.AND] = -60;
Actions[136][Tokens.OR] = -60;
Actions[136][Tokens.LESS_THAN] = -60;
Actions[136][Tokens.GREATER_THAN] = -60;
Actions[136][Tokens.LESS_OR_EQUAL] = -60;
Actions[136][Tokens.GREATER_OR_EQUAL] = -60;
Actions[136][Tokens.EQUAL_EQUAL] = -60;
Actions[136][Tokens.NOT_EQUAL] = -60;
Actions[136][Tokens.PLUS] = -60;
Actions[136][Tokens.MINUS] = -60;
Actions[136][Tokens.TIMES] = -60;
Actions[136][Tokens.DIVIDE] = -60;

//STATE137
Actions[137] = {};
Actions[137][Tokens.RIGHT_PARENTHESIS] = -53;
Actions[137][Tokens.SEMI_COLON] = -53;
Actions[137][Tokens.LEFT_SQUARE] = 124;
Actions[137][Tokens.RIGHT_SQUARE] = -53;
Actions[137][Tokens.COMMA] = -53;
Actions[137][Tokens.AND] = -53;
Actions[137][Tokens.OR] = -53;
Actions[137][Tokens.LESS_THAN] = -53;
Actions[137][Tokens.GREATER_THAN] = -53;
Actions[137][Tokens.LESS_OR_EQUAL] = -53;
Actions[137][Tokens.GREATER_OR_EQUAL] = -53;
Actions[137][Tokens.EQUAL_EQUAL] = -53;
Actions[137][Tokens.NOT_EQUAL] = -53;
Actions[137][Tokens.PLUS] = -53;
Actions[137][Tokens.MINUS] = -53;
Actions[137][Tokens.TIMES] = -53;
Actions[137][Tokens.DIVIDE] = -53;
Actions[137][Tokens.PLUS_PLUS] = 125;
Actions[137][Tokens.MINUS_MINUS] = 126;
Actions[137][Tokens.DOT] = 123;

//STATE138
Actions[138] = {};
Actions[138][Tokens.RIGHT_PARENTHESIS] = -61;
Actions[138][Tokens.SEMI_COLON] = -61;
Actions[138][Tokens.RIGHT_SQUARE] = -61;
Actions[138][Tokens.COMMA] = -61;
Actions[138][Tokens.AND] = -61;
Actions[138][Tokens.OR] = -61;
Actions[138][Tokens.LESS_THAN] = -61;
Actions[138][Tokens.GREATER_THAN] = -61;
Actions[138][Tokens.LESS_OR_EQUAL] = -61;
Actions[138][Tokens.GREATER_OR_EQUAL] = -61;
Actions[138][Tokens.EQUAL_EQUAL] = -61;
Actions[138][Tokens.NOT_EQUAL] = -61;
Actions[138][Tokens.PLUS] = -61;
Actions[138][Tokens.MINUS] = -61;
Actions[138][Tokens.TIMES] = -61;
Actions[138][Tokens.DIVIDE] = -61;

//STATE139
Actions[139] = {};
Actions[139][Tokens.EOF] = -19;
Actions[139][Tokens.FUNCTION] = -19;
Actions[139][Tokens.LEFT_PARENTHESIS] = -19;
Actions[139][Tokens.TYPE] = -19;
Actions[139][Tokens.LEFT_BRACES] = -19;
Actions[139][Tokens.RIGHT_BRACES] = -19;
Actions[139][Tokens.VAR] = -19;
Actions[139][Tokens.WHILE] = -19;
Actions[139][Tokens.DO] = -19;
Actions[139][Tokens.IF] = -19;
Actions[139][Tokens.ELSE] = -19;
Actions[139][Tokens.BREAK] = -19;
Actions[139][Tokens.CONTINUE] = -19;
Actions[139][Tokens.RETURN] = -19;
Actions[139][Tokens.MINUS] = -19;
Actions[139][Tokens.PLUS_PLUS] = -19;
Actions[139][Tokens.MINUS_MINUS] = -19;
Actions[139][Tokens.NOT] = -19;
Actions[139][Tokens.TRUE] = -19;
Actions[139][Tokens.FALSE] = -19;
Actions[139][Tokens.CHARACTER] = -19;
Actions[139][Tokens.STRINGVAL] = -19;
Actions[139][Tokens.NUMERAL] = -19;
Actions[139][Tokens.IDT] = -19;

//STATE140
Actions[140] = {};
Actions[140][Tokens.RIGHT_PARENTHESIS] = -36;
Actions[140][Tokens.SEMI_COLON] = -36;
Actions[140][Tokens.RIGHT_SQUARE] = -36;
Actions[140][Tokens.COMMA] = -36;
Actions[140][Tokens.AND] = -36;
Actions[140][Tokens.OR] = -36;
Actions[140][Tokens.LESS_THAN] = 116;
Actions[140][Tokens.GREATER_THAN] = 117;
Actions[140][Tokens.LESS_OR_EQUAL] = 118;
Actions[140][Tokens.GREATER_OR_EQUAL] = 119;
Actions[140][Tokens.EQUAL_EQUAL] = 120;
Actions[140][Tokens.NOT_EQUAL] = 121;

//STATE141
Actions[141] = {};
Actions[141][Tokens.RIGHT_PARENTHESIS] = -37;
Actions[141][Tokens.SEMI_COLON] = -37;
Actions[141][Tokens.RIGHT_SQUARE] = -37;
Actions[141][Tokens.COMMA] = -37;
Actions[141][Tokens.AND] = -37;
Actions[141][Tokens.OR] = -37;
Actions[141][Tokens.LESS_THAN] = 116;
Actions[141][Tokens.GREATER_THAN] = 117;
Actions[141][Tokens.LESS_OR_EQUAL] = 118;
Actions[141][Tokens.GREATER_OR_EQUAL] = 119;
Actions[141][Tokens.EQUAL_EQUAL] = 120;
Actions[141][Tokens.NOT_EQUAL] = 121;

//STATE142
Actions[142] = {};
Actions[142][Tokens.LEFT_PARENTHESIS] = 88;
Actions[142][States.NUM] = 95;
Actions[142][States.E] = 162;
Actions[142][States.L] = 80;
Actions[142][States.LV] = 81;
Actions[142][States.R] = 82;
Actions[142][States.K] = 84;
Actions[142][Tokens.MINUS] = 89;
Actions[142][States.F] = 85;
Actions[142][Tokens.PLUS_PLUS] = 86;
Actions[142][Tokens.MINUS_MINUS] = 87;
Actions[142][States.IDU] = 83;
Actions[142][Tokens.NOT] = 90;
Actions[142][States.TRU] = 91;
Actions[142][States.FALS] = 92;
Actions[142][States.CHR] = 93;
Actions[142][States.STR] = 94;
Actions[142][Tokens.TRUE] = 96;
Actions[142][Tokens.FALSE] = 97;
Actions[142][Tokens.CHARACTER] = 98;
Actions[142][Tokens.STRINGVAL] = 99;
Actions[142][Tokens.NUMERAL] = 44;
Actions[142][Tokens.IDT] = 30;

//STATE143
Actions[143] = {};
Actions[143][Tokens.WHILE] = 163;

//STATE144
Actions[144] = {};
Actions[144][Tokens.RIGHT_PARENTHESIS] = 164;
Actions[144][Tokens.AND] = 107;
Actions[144][Tokens.OR] = 108;

//STATE145
Actions[145] = {};
Actions[145][Tokens.LEFT_PARENTHESIS] = -35;
Actions[145][Tokens.LEFT_BRACES] = -35;
Actions[145][Tokens.RIGHT_BRACES] = -35;
Actions[145][Tokens.WHILE] = -35;
Actions[145][Tokens.DO] = -35;
Actions[145][Tokens.IF] = -35;
Actions[145][Tokens.ELSE] = -35;
Actions[145][Tokens.BREAK] = -35;
Actions[145][Tokens.CONTINUE] = -35;
Actions[145][Tokens.RETURN] = -35;
Actions[145][Tokens.MINUS] = -35;
Actions[145][Tokens.PLUS_PLUS] = -35;
Actions[145][Tokens.MINUS_MINUS] = -35;
Actions[145][Tokens.NOT] = -35;
Actions[145][Tokens.TRUE] = -35;
Actions[145][Tokens.FALSE] = -35;
Actions[145][Tokens.CHARACTER] = -35;
Actions[145][Tokens.STRINGVAL] = -35;
Actions[145][Tokens.NUMERAL] = -35;
Actions[145][Tokens.IDT] = -35;

//STATE146
Actions[146] = {};
Actions[146][Tokens.RIGHT_PARENTHESIS] = -40;
Actions[146][Tokens.SEMI_COLON] = -40;
Actions[146][Tokens.RIGHT_SQUARE] = -40;
Actions[146][Tokens.COMMA] = -40;
Actions[146][Tokens.AND] = -40;
Actions[146][Tokens.OR] = -40;
Actions[146][Tokens.LESS_THAN] = -40;
Actions[146][Tokens.GREATER_THAN] = -40;
Actions[146][Tokens.LESS_OR_EQUAL] = -40;
Actions[146][Tokens.GREATER_OR_EQUAL] = -40;
Actions[146][Tokens.EQUAL_EQUAL] = -40;
Actions[146][Tokens.NOT_EQUAL] = -40;
Actions[146][Tokens.PLUS] = 127;
Actions[146][Tokens.MINUS] = 128;

//STATE147
Actions[147] = {};
Actions[147][Tokens.RIGHT_PARENTHESIS] = -41;
Actions[147][Tokens.SEMI_COLON] = -41;
Actions[147][Tokens.RIGHT_SQUARE] = -41;
Actions[147][Tokens.COMMA] = -41;
Actions[147][Tokens.AND] = -41;
Actions[147][Tokens.OR] = -41;
Actions[147][Tokens.LESS_THAN] = -41;
Actions[147][Tokens.GREATER_THAN] = -41;
Actions[147][Tokens.LESS_OR_EQUAL] = -41;
Actions[147][Tokens.GREATER_OR_EQUAL] = -41;
Actions[147][Tokens.EQUAL_EQUAL] = -41;
Actions[147][Tokens.NOT_EQUAL] = -41;
Actions[147][Tokens.PLUS] = 127;
Actions[147][Tokens.MINUS] = 128;

//STATE148
Actions[148] = {};
Actions[148][Tokens.RIGHT_PARENTHESIS] = -42;
Actions[148][Tokens.SEMI_COLON] = -42;
Actions[148][Tokens.RIGHT_SQUARE] = -42;
Actions[148][Tokens.COMMA] = -42;
Actions[148][Tokens.AND] = -42;
Actions[148][Tokens.OR] = -42;
Actions[148][Tokens.LESS_THAN] = -42;
Actions[148][Tokens.GREATER_THAN] = -42;
Actions[148][Tokens.LESS_OR_EQUAL] = -42;
Actions[148][Tokens.GREATER_OR_EQUAL] = -42;
Actions[148][Tokens.EQUAL_EQUAL] = -42;
Actions[148][Tokens.NOT_EQUAL] = -42;
Actions[148][Tokens.PLUS] = 127;
Actions[148][Tokens.MINUS] = 128;

//STATE149
Actions[149] = {};
Actions[149][Tokens.RIGHT_PARENTHESIS] = -43;
Actions[149][Tokens.SEMI_COLON] = -43;
Actions[149][Tokens.RIGHT_SQUARE] = -43;
Actions[149][Tokens.COMMA] = -43;
Actions[149][Tokens.AND] = -43;
Actions[149][Tokens.OR] = -43;
Actions[149][Tokens.LESS_THAN] = -43;
Actions[149][Tokens.GREATER_THAN] = -43;
Actions[149][Tokens.LESS_OR_EQUAL] = -43;
Actions[149][Tokens.GREATER_OR_EQUAL] = -43;
Actions[149][Tokens.EQUAL_EQUAL] = -43;
Actions[149][Tokens.NOT_EQUAL] = -43;
Actions[149][Tokens.PLUS] = 127;
Actions[149][Tokens.MINUS] = 128;

//STATE150
Actions[150] = {};
Actions[150][Tokens.RIGHT_PARENTHESIS] = -44;
Actions[150][Tokens.SEMI_COLON] = -44;
Actions[150][Tokens.RIGHT_SQUARE] = -44;
Actions[150][Tokens.COMMA] = -44;
Actions[150][Tokens.AND] = -44;
Actions[150][Tokens.OR] = -44;
Actions[150][Tokens.LESS_THAN] = -44;
Actions[150][Tokens.GREATER_THAN] = -44;
Actions[150][Tokens.LESS_OR_EQUAL] = -44;
Actions[150][Tokens.GREATER_OR_EQUAL] = -44;
Actions[150][Tokens.EQUAL_EQUAL] = -44;
Actions[150][Tokens.NOT_EQUAL] = -44;
Actions[150][Tokens.PLUS] = 127;
Actions[150][Tokens.MINUS] = 128;

//STATE151
Actions[151] = {};
Actions[151][Tokens.RIGHT_PARENTHESIS] = -45;
Actions[151][Tokens.SEMI_COLON] = -45;
Actions[151][Tokens.RIGHT_SQUARE] = -45;
Actions[151][Tokens.COMMA] = -45;
Actions[151][Tokens.AND] = -45;
Actions[151][Tokens.OR] = -45;
Actions[151][Tokens.LESS_THAN] = -45;
Actions[151][Tokens.GREATER_THAN] = -45;
Actions[151][Tokens.LESS_OR_EQUAL] = -45;
Actions[151][Tokens.GREATER_OR_EQUAL] = -45;
Actions[151][Tokens.EQUAL_EQUAL] = -45;
Actions[151][Tokens.NOT_EQUAL] = -45;
Actions[151][Tokens.PLUS] = 127;
Actions[151][Tokens.MINUS] = 128;

//STATE152
Actions[152] = {};
Actions[152][Tokens.LEFT_PARENTHESIS] = 88;
Actions[152][States.NUM] = 95;
Actions[152][States.E] = 165;
Actions[152][States.L] = 80;
Actions[152][States.LV] = 81;
Actions[152][States.R] = 82;
Actions[152][States.K] = 84;
Actions[152][Tokens.MINUS] = 89;
Actions[152][States.F] = 85;
Actions[152][Tokens.PLUS_PLUS] = 86;
Actions[152][Tokens.MINUS_MINUS] = 87;
Actions[152][States.IDU] = 83;
Actions[152][Tokens.NOT] = 90;
Actions[152][States.TRU] = 91;
Actions[152][States.FALS] = 92;
Actions[152][States.CHR] = 93;
Actions[152][States.STR] = 94;
Actions[152][Tokens.TRUE] = 96;
Actions[152][Tokens.FALSE] = 97;
Actions[152][Tokens.CHARACTER] = 98;
Actions[152][Tokens.STRINGVAL] = 99;
Actions[152][Tokens.NUMERAL] = 44;
Actions[152][Tokens.IDT] = 30;

//STATE153
Actions[153] = {};
Actions[153][Tokens.RIGHT_PARENTHESIS] = -70;
Actions[153][Tokens.EQUALS] = -70;
Actions[153][Tokens.SEMI_COLON] = -70;
Actions[153][Tokens.LEFT_SQUARE] = -70;
Actions[153][Tokens.RIGHT_SQUARE] = -70;
Actions[153][Tokens.COMMA] = -70;
Actions[153][Tokens.AND] = -70;
Actions[153][Tokens.OR] = -70;
Actions[153][Tokens.LESS_THAN] = -70;
Actions[153][Tokens.GREATER_THAN] = -70;
Actions[153][Tokens.LESS_OR_EQUAL] = -70;
Actions[153][Tokens.GREATER_OR_EQUAL] = -70;
Actions[153][Tokens.EQUAL_EQUAL] = -70;
Actions[153][Tokens.NOT_EQUAL] = -70;
Actions[153][Tokens.PLUS] = -70;
Actions[153][Tokens.MINUS] = -70;
Actions[153][Tokens.TIMES] = -70;
Actions[153][Tokens.DIVIDE] = -70;
Actions[153][Tokens.PLUS_PLUS] = -70;
Actions[153][Tokens.MINUS_MINUS] = -70;
Actions[153][Tokens.DOT] = -70;

//STATE154
Actions[154] = {};
Actions[154][Tokens.RIGHT_PARENTHESIS] = -85;
Actions[154][Tokens.EQUALS] = -85;
Actions[154][Tokens.SEMI_COLON] = -85;
Actions[154][Tokens.LEFT_SQUARE] = -85;
Actions[154][Tokens.RIGHT_SQUARE] = -85;
Actions[154][Tokens.COMMA] = -85;
Actions[154][Tokens.AND] = -85;
Actions[154][Tokens.OR] = -85;
Actions[154][Tokens.LESS_THAN] = -85;
Actions[154][Tokens.GREATER_THAN] = -85;
Actions[154][Tokens.LESS_OR_EQUAL] = -85;
Actions[154][Tokens.GREATER_OR_EQUAL] = -85;
Actions[154][Tokens.EQUAL_EQUAL] = -85;
Actions[154][Tokens.NOT_EQUAL] = -85;
Actions[154][Tokens.PLUS] = -85;
Actions[154][Tokens.MINUS] = -85;
Actions[154][Tokens.TIMES] = -85;
Actions[154][Tokens.DIVIDE] = -85;
Actions[154][Tokens.PLUS_PLUS] = -85;
Actions[154][Tokens.MINUS_MINUS] = -85;
Actions[154][Tokens.DOT] = -85;

//STATE155
Actions[155] = {};
Actions[155][Tokens.RIGHT_SQUARE] = 166;
Actions[155][Tokens.AND] = 107;
Actions[155][Tokens.OR] = 108;

//STATE156
Actions[156] = {};
Actions[156][Tokens.RIGHT_PARENTHESIS] = -47;
Actions[156][Tokens.SEMI_COLON] = -47;
Actions[156][Tokens.RIGHT_SQUARE] = -47;
Actions[156][Tokens.COMMA] = -47;
Actions[156][Tokens.AND] = -47;
Actions[156][Tokens.OR] = -47;
Actions[156][Tokens.LESS_THAN] = -47;
Actions[156][Tokens.GREATER_THAN] = -47;
Actions[156][Tokens.LESS_OR_EQUAL] = -47;
Actions[156][Tokens.GREATER_OR_EQUAL] = -47;
Actions[156][Tokens.EQUAL_EQUAL] = -47;
Actions[156][Tokens.NOT_EQUAL] = -47;
Actions[156][Tokens.PLUS] = -47;
Actions[156][Tokens.MINUS] = -47;
Actions[156][Tokens.TIMES] = 130;
Actions[156][Tokens.DIVIDE] = 131;

//STATE157
Actions[157] = {};
Actions[157][Tokens.RIGHT_PARENTHESIS] = -48;
Actions[157][Tokens.SEMI_COLON] = -48;
Actions[157][Tokens.RIGHT_SQUARE] = -48;
Actions[157][Tokens.COMMA] = -48;
Actions[157][Tokens.AND] = -48;
Actions[157][Tokens.OR] = -48;
Actions[157][Tokens.LESS_THAN] = -48;
Actions[157][Tokens.GREATER_THAN] = -48;
Actions[157][Tokens.LESS_OR_EQUAL] = -48;
Actions[157][Tokens.GREATER_OR_EQUAL] = -48;
Actions[157][Tokens.EQUAL_EQUAL] = -48;
Actions[157][Tokens.NOT_EQUAL] = -48;
Actions[157][Tokens.PLUS] = -48;
Actions[157][Tokens.MINUS] = -48;
Actions[157][Tokens.TIMES] = 130;
Actions[157][Tokens.DIVIDE] = 131;

//STATE158
Actions[158] = {};
Actions[158][Tokens.LEFT_PARENTHESIS] = 88;
Actions[158][Tokens.RIGHT_PARENTHESIS] = -69;
Actions[158][States.NUM] = 95;
Actions[158][Tokens.COMMA] = -69;
Actions[158][States.E] = 168;
Actions[158][States.L] = 80;
Actions[158][States.LV] = 81;
Actions[158][States.R] = 82;
Actions[158][States.K] = 84;
Actions[158][Tokens.MINUS] = 89;
Actions[158][States.F] = 85;
Actions[158][Tokens.PLUS_PLUS] = 86;
Actions[158][Tokens.MINUS_MINUS] = 87;
Actions[158][States.IDU] = 83;
Actions[158][States.LE] = 167;
Actions[158][Tokens.NOT] = 90;
Actions[158][States.TRU] = 91;
Actions[158][States.FALS] = 92;
Actions[158][States.CHR] = 93;
Actions[158][States.STR] = 94;
Actions[158][Tokens.TRUE] = 96;
Actions[158][Tokens.FALSE] = 97;
Actions[158][Tokens.CHARACTER] = 98;
Actions[158][Tokens.STRINGVAL] = 99;
Actions[158][Tokens.NUMERAL] = 44;
Actions[158][Tokens.IDT] = 30;

//STATE159
Actions[159] = {};
Actions[159][Tokens.RIGHT_PARENTHESIS] = -50;
Actions[159][Tokens.SEMI_COLON] = -50;
Actions[159][Tokens.RIGHT_SQUARE] = -50;
Actions[159][Tokens.COMMA] = -50;
Actions[159][Tokens.AND] = -50;
Actions[159][Tokens.OR] = -50;
Actions[159][Tokens.LESS_THAN] = -50;
Actions[159][Tokens.GREATER_THAN] = -50;
Actions[159][Tokens.LESS_OR_EQUAL] = -50;
Actions[159][Tokens.GREATER_OR_EQUAL] = -50;
Actions[159][Tokens.EQUAL_EQUAL] = -50;
Actions[159][Tokens.NOT_EQUAL] = -50;
Actions[159][Tokens.PLUS] = -50;
Actions[159][Tokens.MINUS] = -50;
Actions[159][Tokens.TIMES] = -50;
Actions[159][Tokens.DIVIDE] = -50;

//STATE160
Actions[160] = {};
Actions[160][Tokens.RIGHT_PARENTHESIS] = -51;
Actions[160][Tokens.SEMI_COLON] = -51;
Actions[160][Tokens.RIGHT_SQUARE] = -51;
Actions[160][Tokens.COMMA] = -51;
Actions[160][Tokens.AND] = -51;
Actions[160][Tokens.OR] = -51;
Actions[160][Tokens.LESS_THAN] = -51;
Actions[160][Tokens.GREATER_THAN] = -51;
Actions[160][Tokens.LESS_OR_EQUAL] = -51;
Actions[160][Tokens.GREATER_OR_EQUAL] = -51;
Actions[160][Tokens.EQUAL_EQUAL] = -51;
Actions[160][Tokens.NOT_EQUAL] = -51;
Actions[160][Tokens.PLUS] = -51;
Actions[160][Tokens.MINUS] = -51;
Actions[160][Tokens.TIMES] = -51;
Actions[160][Tokens.DIVIDE] = -51;

//STATE161
Actions[161] = {};
Actions[161][Tokens.RIGHT_PARENTHESIS] = -58;
Actions[161][Tokens.SEMI_COLON] = -58;
Actions[161][Tokens.RIGHT_SQUARE] = -58;
Actions[161][Tokens.COMMA] = -58;
Actions[161][Tokens.AND] = -58;
Actions[161][Tokens.OR] = -58;
Actions[161][Tokens.LESS_THAN] = -58;
Actions[161][Tokens.GREATER_THAN] = -58;
Actions[161][Tokens.LESS_OR_EQUAL] = -58;
Actions[161][Tokens.GREATER_OR_EQUAL] = -58;
Actions[161][Tokens.EQUAL_EQUAL] = -58;
Actions[161][Tokens.NOT_EQUAL] = -58;
Actions[161][Tokens.PLUS] = -58;
Actions[161][Tokens.MINUS] = -58;
Actions[161][Tokens.TIMES] = -58;
Actions[161][Tokens.DIVIDE] = -58;

//STATE162
Actions[162] = {};
Actions[162][Tokens.RIGHT_PARENTHESIS] = 169;
Actions[162][Tokens.AND] = 107;
Actions[162][Tokens.OR] = 108;

//STATE163
Actions[163] = {};
Actions[163][Tokens.LEFT_PARENTHESIS] = 170;

//STATE164
Actions[164] = {};
Actions[164][Tokens.LEFT_PARENTHESIS] = -90;
Actions[164][Tokens.LEFT_BRACES] = -90;
Actions[164][Tokens.WHILE] = -90;
Actions[164][States.MT] = 171;
Actions[164][Tokens.DO] = -90;
Actions[164][Tokens.IF] = -90;
Actions[164][Tokens.BREAK] = -90;
Actions[164][Tokens.CONTINUE] = -90;
Actions[164][Tokens.RETURN] = -90;
Actions[164][Tokens.MINUS] = -90;
Actions[164][Tokens.PLUS_PLUS] = -90;
Actions[164][Tokens.MINUS_MINUS] = -90;
Actions[164][Tokens.NOT] = -90;
Actions[164][Tokens.TRUE] = -90;
Actions[164][Tokens.FALSE] = -90;
Actions[164][Tokens.CHARACTER] = -90;
Actions[164][Tokens.STRINGVAL] = -90;
Actions[164][Tokens.NUMERAL] = -90;
Actions[164][Tokens.IDT] = -90;

//STATE165
Actions[165] = {};
Actions[165][Tokens.RIGHT_PARENTHESIS] = -39;
Actions[165][Tokens.SEMI_COLON] = -39;
Actions[165][Tokens.RIGHT_SQUARE] = -39;
Actions[165][Tokens.COMMA] = -39;
Actions[165][Tokens.AND] = 107;
Actions[165][Tokens.OR] = 108;

//STATE166
Actions[166] = {};
Actions[166][Tokens.RIGHT_PARENTHESIS] = -71;
Actions[166][Tokens.EQUALS] = -71;
Actions[166][Tokens.SEMI_COLON] = -71;
Actions[166][Tokens.LEFT_SQUARE] = -71;
Actions[166][Tokens.RIGHT_SQUARE] = -71;
Actions[166][Tokens.COMMA] = -71;
Actions[166][Tokens.AND] = -71;
Actions[166][Tokens.OR] = -71;
Actions[166][Tokens.LESS_THAN] = -71;
Actions[166][Tokens.GREATER_THAN] = -71;
Actions[166][Tokens.LESS_OR_EQUAL] = -71;
Actions[166][Tokens.GREATER_OR_EQUAL] = -71;
Actions[166][Tokens.EQUAL_EQUAL] = -71;
Actions[166][Tokens.NOT_EQUAL] = -71;
Actions[166][Tokens.PLUS] = -71;
Actions[166][Tokens.MINUS] = -71;
Actions[166][Tokens.TIMES] = -71;
Actions[166][Tokens.DIVIDE] = -71;
Actions[166][Tokens.PLUS_PLUS] = -71;
Actions[166][Tokens.MINUS_MINUS] = -71;
Actions[166][Tokens.DOT] = -71;

//STATE167
Actions[167] = {};
Actions[167][Tokens.RIGHT_PARENTHESIS] = 172;
Actions[167][Tokens.COMMA] = 173;

//STATE168
Actions[168] = {};
Actions[168][Tokens.RIGHT_PARENTHESIS] = -68;
Actions[168][Tokens.COMMA] = -68;
Actions[168][Tokens.AND] = 107;
Actions[168][Tokens.OR] = 108;

//STATE169
Actions[169] = {};
Actions[169][Tokens.LEFT_PARENTHESIS] = -90;
Actions[169][Tokens.LEFT_BRACES] = -90;
Actions[169][Tokens.WHILE] = -90;
Actions[169][States.MT] = 174;
Actions[169][Tokens.DO] = -90;
Actions[169][Tokens.IF] = -90;
Actions[169][Tokens.BREAK] = -90;
Actions[169][Tokens.CONTINUE] = -90;
Actions[169][Tokens.RETURN] = -90;
Actions[169][Tokens.MINUS] = -90;
Actions[169][Tokens.PLUS_PLUS] = -90;
Actions[169][Tokens.MINUS_MINUS] = -90;
Actions[169][Tokens.NOT] = -90;
Actions[169][Tokens.TRUE] = -90;
Actions[169][Tokens.FALSE] = -90;
Actions[169][Tokens.CHARACTER] = -90;
Actions[169][Tokens.STRINGVAL] = -90;
Actions[169][Tokens.NUMERAL] = -90;
Actions[169][Tokens.IDT] = -90;

//STATE170
Actions[170] = {};
Actions[170][Tokens.LEFT_PARENTHESIS] = 88;
Actions[170][States.NUM] = 95;
Actions[170][States.E] = 175;
Actions[170][States.L] = 80;
Actions[170][States.LV] = 81;
Actions[170][States.R] = 82;
Actions[170][States.K] = 84;
Actions[170][Tokens.MINUS] = 89;
Actions[170][States.F] = 85;
Actions[170][Tokens.PLUS_PLUS] = 86;
Actions[170][Tokens.MINUS_MINUS] = 87;
Actions[170][States.IDU] = 83;
Actions[170][Tokens.NOT] = 90;
Actions[170][States.TRU] = 91;
Actions[170][States.FALS] = 92;
Actions[170][States.CHR] = 93;
Actions[170][States.STR] = 94;
Actions[170][Tokens.TRUE] = 96;
Actions[170][Tokens.FALSE] = 97;
Actions[170][Tokens.CHARACTER] = 98;
Actions[170][Tokens.STRINGVAL] = 99;
Actions[170][Tokens.NUMERAL] = 44;
Actions[170][Tokens.IDT] = 30;

//STATE171
Actions[171] = {};
Actions[171][Tokens.LEFT_PARENTHESIS] = 88;
Actions[171][States.NB] = 73;
Actions[171][Tokens.LEFT_BRACES] = -86;
Actions[171][States.NUM] = 95;
Actions[171][States.S] = 176;
Actions[171][States.E] = 72;
Actions[171][Tokens.WHILE] = 74;
Actions[171][Tokens.DO] = 75;
Actions[171][Tokens.IF] = 76;
Actions[171][Tokens.BREAK] = 77;
Actions[171][Tokens.CONTINUE] = 78;
Actions[171][Tokens.RETURN] = 79;
Actions[171][States.L] = 80;
Actions[171][States.LV] = 81;
Actions[171][States.R] = 82;
Actions[171][States.K] = 84;
Actions[171][Tokens.MINUS] = 89;
Actions[171][States.F] = 85;
Actions[171][Tokens.PLUS_PLUS] = 86;
Actions[171][Tokens.MINUS_MINUS] = 87;
Actions[171][States.IDU] = 83;
Actions[171][Tokens.NOT] = 90;
Actions[171][States.TRU] = 91;
Actions[171][States.FALS] = 92;
Actions[171][States.CHR] = 93;
Actions[171][States.STR] = 94;
Actions[171][Tokens.TRUE] = 96;
Actions[171][Tokens.FALSE] = 97;
Actions[171][Tokens.CHARACTER] = 98;
Actions[171][Tokens.STRINGVAL] = 99;
Actions[171][Tokens.NUMERAL] = 44;
Actions[171][Tokens.IDT] = 30;

//STATE172
Actions[172] = {};
Actions[172][Tokens.RIGHT_PARENTHESIS] = -59;
Actions[172][Tokens.SEMI_COLON] = -59;
Actions[172][Tokens.RIGHT_SQUARE] = -59;
Actions[172][Tokens.COMMA] = -59;
Actions[172][Tokens.AND] = -59;
Actions[172][Tokens.OR] = -59;
Actions[172][Tokens.LESS_THAN] = -59;
Actions[172][Tokens.GREATER_THAN] = -59;
Actions[172][Tokens.LESS_OR_EQUAL] = -59;
Actions[172][Tokens.GREATER_OR_EQUAL] = -59;
Actions[172][Tokens.EQUAL_EQUAL] = -59;
Actions[172][Tokens.NOT_EQUAL] = -59;
Actions[172][Tokens.PLUS] = -59;
Actions[172][Tokens.MINUS] = -59;
Actions[172][Tokens.TIMES] = -59;
Actions[172][Tokens.DIVIDE] = -59;

//STATE173
Actions[173] = {};
Actions[173][Tokens.LEFT_PARENTHESIS] = 88;
Actions[173][States.NUM] = 95;
Actions[173][States.E] = 177;
Actions[173][States.L] = 80;
Actions[173][States.LV] = 81;
Actions[173][States.R] = 82;
Actions[173][States.K] = 84;
Actions[173][Tokens.MINUS] = 89;
Actions[173][States.F] = 85;
Actions[173][Tokens.PLUS_PLUS] = 86;
Actions[173][Tokens.MINUS_MINUS] = 87;
Actions[173][States.IDU] = 83;
Actions[173][Tokens.NOT] = 90;
Actions[173][States.TRU] = 91;
Actions[173][States.FALS] = 92;
Actions[173][States.CHR] = 93;
Actions[173][States.STR] = 94;
Actions[173][Tokens.TRUE] = 96;
Actions[173][Tokens.FALSE] = 97;
Actions[173][Tokens.CHARACTER] = 98;
Actions[173][Tokens.STRINGVAL] = 99;
Actions[173][Tokens.NUMERAL] = 44;
Actions[173][Tokens.IDT] = 30;

//STATE174
Actions[174] = {};
Actions[174][Tokens.LEFT_PARENTHESIS] = 88;
Actions[174][States.NB] = 73;
Actions[174][Tokens.LEFT_BRACES] = -86;
Actions[174][States.NUM] = 95;
Actions[174][States.S] = 178;
Actions[174][States.E] = 72;
Actions[174][Tokens.WHILE] = 74;
Actions[174][Tokens.DO] = 75;
Actions[174][Tokens.IF] = 76;
Actions[174][Tokens.BREAK] = 77;
Actions[174][Tokens.CONTINUE] = 78;
Actions[174][Tokens.RETURN] = 79;
Actions[174][States.L] = 80;
Actions[174][States.LV] = 81;
Actions[174][States.R] = 82;
Actions[174][States.K] = 84;
Actions[174][Tokens.MINUS] = 89;
Actions[174][States.F] = 85;
Actions[174][Tokens.PLUS_PLUS] = 86;
Actions[174][Tokens.MINUS_MINUS] = 87;
Actions[174][States.IDU] = 83;
Actions[174][Tokens.NOT] = 90;
Actions[174][States.TRU] = 91;
Actions[174][States.FALS] = 92;
Actions[174][States.CHR] = 93;
Actions[174][States.STR] = 94;
Actions[174][Tokens.TRUE] = 96;
Actions[174][Tokens.FALSE] = 97;
Actions[174][Tokens.CHARACTER] = 98;
Actions[174][Tokens.STRINGVAL] = 99;
Actions[174][Tokens.NUMERAL] = 44;
Actions[174][Tokens.IDT] = 30;

//STATE175
Actions[175] = {};
Actions[175][Tokens.RIGHT_PARENTHESIS] = 179;
Actions[175][Tokens.AND] = 107;
Actions[175][Tokens.OR] = 108;

//STATE176
Actions[176] = {};
Actions[176][Tokens.LEFT_PARENTHESIS] = -31;
Actions[176][Tokens.LEFT_BRACES] = -31;
Actions[176][Tokens.RIGHT_BRACES] = -31;
Actions[176][Tokens.WHILE] = -31;
Actions[176][Tokens.DO] = -31;
Actions[176][Tokens.IF] = -31;
Actions[176][Tokens.ELSE] = 180;
Actions[176][Tokens.BREAK] = -31;
Actions[176][Tokens.CONTINUE] = -31;
Actions[176][Tokens.RETURN] = -31;
Actions[176][Tokens.MINUS] = -31;
Actions[176][Tokens.PLUS_PLUS] = -31;
Actions[176][Tokens.MINUS_MINUS] = -31;
Actions[176][Tokens.NOT] = -31;
Actions[176][Tokens.TRUE] = -31;
Actions[176][Tokens.FALSE] = -31;
Actions[176][Tokens.CHARACTER] = -31;
Actions[176][Tokens.STRINGVAL] = -31;
Actions[176][Tokens.NUMERAL] = -31;
Actions[176][Tokens.IDT] = -31;

//STATE177
Actions[177] = {};
Actions[177][Tokens.RIGHT_PARENTHESIS] = -67;
Actions[177][Tokens.COMMA] = -67;
Actions[177][Tokens.AND] = 107;
Actions[177][Tokens.OR] = 108;

//STATE178
Actions[178] = {};
Actions[178][Tokens.LEFT_PARENTHESIS] = -29;
Actions[178][Tokens.LEFT_BRACES] = -29;
Actions[178][Tokens.RIGHT_BRACES] = -29;
Actions[178][Tokens.WHILE] = -29;
Actions[178][Tokens.DO] = -29;
Actions[178][Tokens.IF] = -29;
Actions[178][Tokens.ELSE] = -29;
Actions[178][Tokens.BREAK] = -29;
Actions[178][Tokens.CONTINUE] = -29;
Actions[178][Tokens.RETURN] = -29;
Actions[178][Tokens.MINUS] = -29;
Actions[178][Tokens.PLUS_PLUS] = -29;
Actions[178][Tokens.MINUS_MINUS] = -29;
Actions[178][Tokens.NOT] = -29;
Actions[178][Tokens.TRUE] = -29;
Actions[178][Tokens.FALSE] = -29;
Actions[178][Tokens.CHARACTER] = -29;
Actions[178][Tokens.STRINGVAL] = -29;
Actions[178][Tokens.NUMERAL] = -29;
Actions[178][Tokens.IDT] = -29;

//STATE179
Actions[179] = {};
Actions[179][Tokens.SEMI_COLON] = 181;

//STATE180
Actions[180] = {};
Actions[180][Tokens.LEFT_PARENTHESIS] = -91;
Actions[180][Tokens.LEFT_BRACES] = -91;
Actions[180][Tokens.WHILE] = -91;
Actions[180][Tokens.DO] = -91;
Actions[180][Tokens.IF] = -91;
Actions[180][States.ME] = 182;
Actions[180][Tokens.BREAK] = -91;
Actions[180][Tokens.CONTINUE] = -91;
Actions[180][Tokens.RETURN] = -91;
Actions[180][Tokens.MINUS] = -91;
Actions[180][Tokens.PLUS_PLUS] = -91;
Actions[180][Tokens.MINUS_MINUS] = -91;
Actions[180][Tokens.NOT] = -91;
Actions[180][Tokens.TRUE] = -91;
Actions[180][Tokens.FALSE] = -91;
Actions[180][Tokens.CHARACTER] = -91;
Actions[180][Tokens.STRINGVAL] = -91;
Actions[180][Tokens.NUMERAL] = -91;
Actions[180][Tokens.IDT] = -91;

//STATE181
Actions[181] = {};
Actions[181][Tokens.LEFT_PARENTHESIS] = -30;
Actions[181][Tokens.LEFT_BRACES] = -30;
Actions[181][Tokens.RIGHT_BRACES] = -30;
Actions[181][Tokens.WHILE] = -30;
Actions[181][Tokens.DO] = -30;
Actions[181][Tokens.IF] = -30;
Actions[181][Tokens.ELSE] = -30;
Actions[181][Tokens.BREAK] = -30;
Actions[181][Tokens.CONTINUE] = -30;
Actions[181][Tokens.RETURN] = -30;
Actions[181][Tokens.MINUS] = -30;
Actions[181][Tokens.PLUS_PLUS] = -30;
Actions[181][Tokens.MINUS_MINUS] = -30;
Actions[181][Tokens.NOT] = -30;
Actions[181][Tokens.TRUE] = -30;
Actions[181][Tokens.FALSE] = -30;
Actions[181][Tokens.CHARACTER] = -30;
Actions[181][Tokens.STRINGVAL] = -30;
Actions[181][Tokens.NUMERAL] = -30;
Actions[181][Tokens.IDT] = -30;

//STATE182
Actions[182] = {};
Actions[182][Tokens.LEFT_PARENTHESIS] = 88;
Actions[182][States.NB] = 73;
Actions[182][Tokens.LEFT_BRACES] = -86;
Actions[182][States.NUM] = 95;
Actions[182][States.S] = 183;
Actions[182][States.E] = 72;
Actions[182][Tokens.WHILE] = 74;
Actions[182][Tokens.DO] = 75;
Actions[182][Tokens.IF] = 76;
Actions[182][Tokens.BREAK] = 77;
Actions[182][Tokens.CONTINUE] = 78;
Actions[182][Tokens.RETURN] = 79;
Actions[182][States.L] = 80;
Actions[182][States.LV] = 81;
Actions[182][States.R] = 82;
Actions[182][States.K] = 84;
Actions[182][Tokens.MINUS] = 89;
Actions[182][States.F] = 85;
Actions[182][Tokens.PLUS_PLUS] = 86;
Actions[182][Tokens.MINUS_MINUS] = 87;
Actions[182][States.IDU] = 83;
Actions[182][Tokens.NOT] = 90;
Actions[182][States.TRU] = 91;
Actions[182][States.FALS] = 92;
Actions[182][States.CHR] = 93;
Actions[182][States.STR] = 94;
Actions[182][Tokens.TRUE] = 96;
Actions[182][Tokens.FALSE] = 97;
Actions[182][Tokens.CHARACTER] = 98;
Actions[182][Tokens.STRINGVAL] = 99;
Actions[182][Tokens.NUMERAL] = 44;
Actions[182][Tokens.IDT] = 30;

//STATE183
Actions[183] = {};
Actions[183][Tokens.LEFT_PARENTHESIS] = -32;
Actions[183][Tokens.LEFT_BRACES] = -32;
Actions[183][Tokens.RIGHT_BRACES] = -32;
Actions[183][Tokens.WHILE] = -32;
Actions[183][Tokens.DO] = -32;
Actions[183][Tokens.IF] = -32;
Actions[183][Tokens.ELSE] = -32;
Actions[183][Tokens.BREAK] = -32;
Actions[183][Tokens.CONTINUE] = -32;
Actions[183][Tokens.RETURN] = -32;
Actions[183][Tokens.MINUS] = -32;
Actions[183][Tokens.PLUS_PLUS] = -32;
Actions[183][Tokens.MINUS_MINUS] = -32;
Actions[183][Tokens.NOT] = -32;
Actions[183][Tokens.TRUE] = -32;
Actions[183][Tokens.FALSE] = -32;
Actions[183][Tokens.CHARACTER] = -32;
Actions[183][Tokens.STRINGVAL] = -32;
Actions[183][Tokens.NUMERAL] = -32;
Actions[183][Tokens.IDT] = -32;

export default Actions;