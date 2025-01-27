
import {goto } from '$lib/util';

import Cookies from 'js-cookie';

export default function logout() {
  Cookies.remove("token"); // Removes the token cookie
  goto('/login');
}
