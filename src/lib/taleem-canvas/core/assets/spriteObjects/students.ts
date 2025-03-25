import Sprite from "./Sprite";


import base64Image from "../sprite-sheets/students.js"; // ✅ Import base64
export const students = new Sprite("students",base64Image);

students.addItem("student_w_tablet",183, 317, 225, 350);
students.addItem("student_red",254,0,275,250); //527,254
students.addItem("student_female",424,288,220,250); //646,542
// students.addItem("three_students",0,0,799,250); //646,542
students.addItem("student_black",540,0,260,266); //
