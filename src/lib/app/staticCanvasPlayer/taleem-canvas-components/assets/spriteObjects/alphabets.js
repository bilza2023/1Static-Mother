import Sprite from "./Sprite";

const w = 80;
const h = 75;
let x = 0;
let y = 0;

import base64Image from "../sprite-sheets/alphabets.js"; // ✅ Import base64

export const alphabets = new Sprite("alphabets", base64Image); // ✅ Use base64 as the source

//====>>> Row 01 
alphabets.addItem("A"              ,w*0  , y, w, h);
alphabets.addItem("B"              ,w*1  , y, w, h);
alphabets.addItem("C"              ,w*2  , y, w, h);
alphabets.addItem("D"              ,w*3  , y, w, h);
alphabets.addItem("E"              ,w*4  , y, w, h);
alphabets.addItem("F"              ,w*5  , y, w, h);
alphabets.addItem("G"              ,w*6  , y, w, h);
alphabets.addItem("H"              ,w*7  , y, w, h);
alphabets.addItem("I"              ,w*8  , y, w, h);
alphabets.addItem("J"              ,w*9  , y, w, h);
alphabets.addItem("K"              ,w*10  , y, w, h);
alphabets.addItem("L"              ,w*11  , y, w, h);

//====>>> Row 02 
y = h * 1;
alphabets.addItem("M"              ,w*0  , y, w, h);
alphabets.addItem("N"              ,w*1  , y, w, h);
alphabets.addItem("O"              ,w*2  , y, w, h);
alphabets.addItem("P"              ,w*3  , y, w, h);
alphabets.addItem("Q"              ,w*4  , y, w, h);
alphabets.addItem("R"              ,w*5  , y, w, h);
alphabets.addItem("S"              ,w*6  , y, w, h);
alphabets.addItem("T"              ,w*7  , y, w, h);
alphabets.addItem("U"              ,w*8  , y, w, h);
alphabets.addItem("V"              ,w*9  , y, w, h);
alphabets.addItem("W"              ,w*10  , y, w, h);
alphabets.addItem("X"              ,w*11  , y, w, h);

//====>>> Row 03 
y = h * 2;
alphabets.addItem("Y"              ,w*0  , y, w, h);
alphabets.addItem("Z"              ,w*1  , y, w, h);
alphabets.addItem("a"              ,w*2  , y, w, h);
alphabets.addItem("b"              ,w*3  , y, w, h);
alphabets.addItem("c"              ,w*4  , y, w, h);
alphabets.addItem("d"              ,w*5  , y, w, h);
alphabets.addItem("e"              ,w*6  , y, w, h);
alphabets.addItem("f"              ,w*7  , y, w, h);
alphabets.addItem("g"              ,w*8  , y, w, h);
alphabets.addItem("h"              ,w*9  , y, w, h);
alphabets.addItem("i"              ,w*10  , y, w, h);
alphabets.addItem("j"              ,w*11  , y, w, h);

//====>>> Row 04 
y = h * 3;
alphabets.addItem("k"              ,w*0  , y, w, h);
alphabets.addItem("l"              ,w*1  , y, w, h);
alphabets.addItem("m"              ,w*2  , y, w, h);
alphabets.addItem("n"              ,w*3  , y, w, h);
alphabets.addItem("o"              ,w*4  , y, w, h);
alphabets.addItem("p"              ,w*5  , y, w, h);
alphabets.addItem("q"              ,w*6  , y, w, h);
alphabets.addItem("r"              ,w*7  , y, w, h);
alphabets.addItem("s"              ,w*8  , y, w, h);
alphabets.addItem("t"              ,w*9  , y, w, h);
alphabets.addItem("u"              ,w*10  , y, w, h);
alphabets.addItem("v"              ,w*11  , y, w, h);

//====>>> Row 05
y = h * 4;
alphabets.addItem("w"              ,w*0  , y, w, h);
alphabets.addItem("x"              ,w*1  , y, w, h);
alphabets.addItem("y"              ,w*2  , y, w, h);
alphabets.addItem("z"              ,w*3  , y, w, h);
alphabets.addItem("0"              ,w*4  , y, w, h);
alphabets.addItem("1"              ,w*5  , y, w, h);
alphabets.addItem("2"              ,w*6  , y, w, h);
alphabets.addItem("3"              ,w*7  , y, w, h);
alphabets.addItem("4"              ,w*8  , y, w, h);
alphabets.addItem("5"              ,w*9  , y, w, h);
alphabets.addItem("6"              ,w*10  , y, w, h);
alphabets.addItem("7"              ,w*11  , y, w, h);

//====>>> Row 06
y = h * 5;
y +=5; //5 pix error
alphabets.addItem("8"               ,w*0  , y, w, h);
alphabets.addItem("9"               ,w*1  , y, w, h);
alphabets.addItem("fullstio"        ,w*2  , y, w, h);
alphabets.addItem("comma"           ,w*3  , y, w, h);
alphabets.addItem("semi_colon"      ,w*4  , y, w, h);
alphabets.addItem("colon"           ,w*5  , y, w, h);
alphabets.addItem("question_mark"   ,w*6  , y, w, h);
alphabets.addItem("exclamation"     ,w*7  , y, w, h);
alphabets.addItem("dash"            ,w*8  , y, w, h);
alphabets.addItem("pound"           ,w*9  , y, w, h);
alphabets.addItem("double_quote"    ,w*10  , y, w, h);
alphabets.addItem("single_quote"    ,w*11  , y, w, h);

//====>>> Row 07
y = h * 6;

alphabets.addItem("ampersand"          ,w*0  , y, w, h);
alphabets.addItem("left_bracket"       ,w*1  , y, w, h);
alphabets.addItem("right_bracket"      ,w*2  , y, w, h);
alphabets.addItem("right_angle_bracket",w*3  , y, w, h);
alphabets.addItem("left_angle_bracket" ,w*4  , y, w, h);
alphabets.addItem("tilda"              ,w*5  , y, w, h);
alphabets.addItem("backslash"          ,w*6  , y, w, h);
alphabets.addItem("frontslash"         ,w*7  , y, w, h);
alphabets.addItem("registered"         ,w*8  , y, w, h);
alphabets.addItem("foot_mark"          ,w*9  , y, w, h);
alphabets.addItem("degree_mark"        ,w*10  , y, w, h);
alphabets.addItem("plus"               ,w*11  , y, w, h);


//====>>> Row 08
y = h * 7;

alphabets.addItem("isequal"          ,w*0  , y, w, h);
alphabets.addItem("multiply"         ,w*1  , y, w, h);
alphabets.addItem("dollar"           ,w*2  , y, w, h);
alphabets.addItem("greatherThan"     ,w*3  , y, w, h);
alphabets.addItem("smallerThan"      ,w*4  , y, w, h);
alphabets.addItem("divide"           ,w*5  , y, w, h);
