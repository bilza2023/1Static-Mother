
import {db} from '$lib/db.js';

export default async function fetchPresentation(id) {
    const resp = await db.tcode.getOne(id);
    if (resp.ok) {
      return await resp.json();
    }
      return null;
  }
  