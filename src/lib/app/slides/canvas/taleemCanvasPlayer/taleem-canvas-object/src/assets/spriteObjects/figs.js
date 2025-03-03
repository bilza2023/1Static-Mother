import Sprite from "./Sprite";

const w = 90;
const h = 100;
let x = 0;
let y = 0;

import base64Image from "../sprite-sheets/figs.js"; // ✅ Import base64

export const figs = new Sprite("figs",base64Image);

// 12 rows of 8 columns  each = 95 figs (-1 last one is empty)

//====>>> Row 01 (8 cols)
figs.addItem("flower1"              ,0  , y, w, h);
figs.addItem("flower2"              ,w*1, y, w, h);
figs.addItem("flower3"              ,w*2, y, w, h);
figs.addItem("flowe4"               ,w*3, y, w, h);
figs.addItem("female_stick"         ,w*4, y, w, h);
figs.addItem("male_stick"           ,w*5, y, w, h);
figs.addItem("bear_face"            ,w*6, y, w, h);
figs.addItem("apple"                ,w*7, y, w, h);

//====>>> Row 02 (8 cols)
y = h * 1;
figs.addItem("plant_pot"            ,0  , y, w, h);
figs.addItem("penguin"              ,w*1, y, w, h);
figs.addItem("drum_face"            ,w*2, y, w, h);
figs.addItem("carrot"               ,w*3, y, w, h);
figs.addItem("dimond"               ,w*4, y, w, h);
figs.addItem("spring"               ,w*5, y, w, h);
figs.addItem("bomb"                 ,w*6, y, w, h);
figs.addItem("paw"                  ,w*7, y, w, h);

//====>>> Row 03 (8 cols)
y = h * 2;
figs.addItem("line_design1"         ,0  , y, w, h);
figs.addItem("line_design2"         ,w*1, y, w, h);
figs.addItem("line_design3"         ,w*2, y, w, h);
figs.addItem("line_design4"         ,w*3, y, w, h);
figs.addItem("line_design5"         ,w*4, y, w, h);
figs.addItem("line_design6"         ,w*5, y, w, h);
figs.addItem("line_design7"         ,w*6, y, w, h);
figs.addItem("line_design8"         ,w*7, y, w, h);

//====>>> Row 04 (8 cols)
y = h * 3;
figs.addItem("line_design9"         ,0  , y, w, h);
figs.addItem("leaf_left"            ,w*1, y, w, h);
figs.addItem("leaf_right"           ,w*2, y, w, h);
figs.addItem("cherry"               ,w*3, y, w, h);
figs.addItem("drop_face"            ,w*4, y, w, h);
figs.addItem("spring2"              ,w*5, y, w, h);
figs.addItem("clock"                ,w*6, y, w, h);
figs.addItem("water_tap_face"       ,w*7, y, w, h);

//====>>> Row 05 (8 cols)
y = h * 4;
figs.addItem("smily_face_right"    ,0  , y, w, h);
figs.addItem("frying_pan_right"    ,w*1, y, w, h);
figs.addItem("spatula_right"       ,w*2, y, w, h);
figs.addItem("fox_face_left"       ,w*3, y, w, h);
figs.addItem("evil_moon_face_left" ,w*4, y, w, h);
figs.addItem("telephone"           ,w*5, y, w, h);
figs.addItem("tram_right"          ,w*6, y, w, h);
figs.addItem("train"               ,w*7, y, w, h);
//====>>> Row 06 (8 cols)
y = h * 5;
figs.addItem("car_left"         ,0  , y, w, h);
figs.addItem("puff_right"       ,w*1, y, w, h);
figs.addItem("signal_right"     ,w*2, y, w, h);
figs.addItem("plane_right"      ,w*3, y, w, h);
figs.addItem("sun"              ,w*4, y, w, h);
figs.addItem("umbrella"         ,w*5, y, w, h);
figs.addItem("ice_man"          ,w*6, y, w, h);
figs.addItem("cat_face_normal"  ,w*7, y, w, h);
//====>>> Row 07 (8 cols)
y = h * 6;
figs.addItem("octopus_right"   ,0  , y, w, h);
figs.addItem("bow"             ,w*1, y, w, h);
figs.addItem("fish_right"      ,w*2, y, w, h);
figs.addItem("ant_left"        ,w*3, y, w, h);
figs.addItem("duck_left"       ,w*4, y, w, h);
figs.addItem("chicken_left"    ,w*5, y, w, h);
figs.addItem("heart"           ,w*6, y, w, h);
figs.addItem("mouse"           ,w*7, y, w, h);
//====>>> Row 08 (8 cols)
y = h * 7;
figs.addItem("mouse_right"      ,0  , y, w, h);
figs.addItem("ghost_left"       ,w*1, y, w, h);
figs.addItem("leaf_big_left"    ,w*2, y, w, h);
figs.addItem("pencil_right"     ,w*3, y, w, h);
figs.addItem("fork"             ,w*4, y, w, h);
figs.addItem("mickey_mouse_face",w*5, y, w, h);
figs.addItem("rabit_face"       ,w*6, y, w, h);
figs.addItem("crown"            ,w*7, y, w, h);
//====>>> Row 9 (8 cols)
y = h * 8;
figs.addItem("smily_face_left"               ,0  , y, w, h);
figs.addItem("frying_pan_left"               ,w*1, y, w, h);
figs.addItem("spatula_left"               ,w*2, y, w, h);
figs.addItem("fox_face_right"               ,w*3, y, w, h);
figs.addItem("evil_moon_face_right"               ,w*4, y, w, h);
figs.addItem("mobile_phone"               ,w*5, y, w, h);
figs.addItem("tram_left"               ,w*6, y, w, h);
figs.addItem("tv"               ,w*7, y, w, h);
//====>>> Row 10 (8 cols)
y = h * 9;
figs.addItem("car_right"        ,0  , y, w, h);
figs.addItem("puff_left"        ,w*1, y, w, h);
figs.addItem("signal_left"      ,w*2, y, w, h);
figs.addItem("plane_left"       ,w*3, y, w, h);
figs.addItem("cloud_face"       ,w*4, y, w, h);
figs.addItem("cloud_rain"       ,w*5, y, w, h);
figs.addItem("paw_big"          ,w*6, y, w, h);
figs.addItem("cat_face_evil"    ,w*7, y, w, h);
//====>>> Row 11 (8 cols)
y = h * 10;
figs.addItem("octopus_left"     ,0  , y, w, h);
figs.addItem("hot_tea"          ,w*1, y, w, h);
figs.addItem("fish_left"        ,w*2, y, w, h);
figs.addItem("ant_right"        ,w*3, y, w, h);
figs.addItem("duck_right"       ,w*4, y, w, h);
figs.addItem("chicken_right"    ,w*5, y, w, h);
figs.addItem("shinning_star"    ,w*6, y, w, h);
figs.addItem("robot"            ,w*7, y, w, h);
//====>>> Row 12 (8 cols)
y = h * 11;
figs.addItem("mouse_left"       ,0  , y, w, h);
figs.addItem("ghost_right"      ,w*1, y, w, h);
figs.addItem("leaf_big_right"   ,w*2, y, w, h);
figs.addItem("pencil_left"      ,w*3, y, w, h);
figs.addItem("spoon"            ,w*4, y, w, h);
figs.addItem("octopus_wave"     ,w*5, y, w, h);
figs.addItem("dimon2"           ,w*6, y, w, h);
