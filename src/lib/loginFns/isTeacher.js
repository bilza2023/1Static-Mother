

import jwtGet from './jwtGet'; // Reuse the jwtGet function


export  default function isTeacher() {
    const role = jwtGet("role");
    return role === "teacher"; // Check if the role is 'teacher'
  }
  
  