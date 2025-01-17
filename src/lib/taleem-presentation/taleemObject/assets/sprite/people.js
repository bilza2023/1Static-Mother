import Sprite from "./Sprite";


export const people = new Sprite("people","/sprites/people.png");

// 12 rows of 8 columns  each = 95 people (-1 last one is empty)

//====>>> Row 01 
people.addItem("man_tblt_stndg",0,0, 115, 258);
people.addItem("mf_wlk_biz",150,0,200,250);
people.addItem("mf_stnd_read",380,0,180,240);
people.addItem("gp_selfy",570,0,250,250);
people.addItem("boy_googles",860,0,130,250);
people.addItem("mf_travellers",0,280,200,250);

people.addItem("m_h_phone_wlk",225,275,125,255);
people.addItem("crowd",355,250,400,280);
people.addItem("mf_mbl_wlk",530,260,230,270);
people.addItem("old_cpl_jog",800,270,200,260);
people.addItem("mom_kids_study",0,530,315,250);
people.addItem("sofa_3people_rdng",335,550,400,240);
people.addItem("3teen_Students",760,530,230,260);
people.addItem("f_lazy_chair_tblt",5,800,184,218);
people.addItem("biz_dnr",230,790,420,228);
people.addItem("sun_bathing",650,800,347,221);
