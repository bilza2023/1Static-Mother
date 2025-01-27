

import jwtGet from './jwtGet'; // Reuse the jwtGet function

export  default function isAdmin() {
  const role = jwtGet("role");
  return role === "admin"; // Check if the role is 'admin'
}

