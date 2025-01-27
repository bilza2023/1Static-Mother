import Cookies from 'js-cookie';
import {jwtDecode} from "jwt-decode"; // Use default import for jwt-decode

export default function chqLogin() {
  try {
    const token = Cookies.get("token");
    if (!token) {
      return false; // No token found
    }

    const payload = jwtDecode(token);

    // Check if required fields exist in the payload
    if (payload.role && payload.email) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Invalid or missing token:", error);
    return false; // Invalid token or decoding failed
  }
}
