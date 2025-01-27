

import Cookies from 'js-cookie';
import {jwtDecode} from "jwt-decode"; // Default import for jwt-decode

export default function jwtGet(field) {
  try {
    const token = Cookies.get("token");
    if (!token) {
      return null; // No token found
    }

    const payload = jwtDecode(token);

    // Return the requested field if it exists, otherwise null
    return payload[field] || null;
  } catch (error) {
    console.error("Invalid or missing token:", error);
    return null; // Invalid token or decoding failed
  }
}
