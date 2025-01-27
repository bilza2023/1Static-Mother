

import jwtGet from './jwtGet'; // Reuse the jwtGet function


export default  function isStudent() {
    const role = jwtGet("role");
    return role === "student"; // Check if the role is 'student'
}
