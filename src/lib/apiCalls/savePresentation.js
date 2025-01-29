
import { db } from '$lib/db.js';
import { toast } from '$lib/util';

//////////////////////////////////////////////////////////////////
export default async function savePresentation(presentation, slides) {
  if (presentation.name && presentation.name !== '') {
    presentation.name = convertToUrlFriendlyName(presentation.name);
  }
  if (slides && slides.length > 0) {
    slides[0].startTime = 0;
  }

  presentation.slides = slides;
  const resp = await db.tcode.update(presentation._id, presentation);
  if (resp.ok) {
    toast.push("Saved...!");
    return true;
  } else {
    toast.push("Failed to save...");
    return false;
  }
}

///////////////////////////////////////////////////////////////////
function convertToUrlFriendlyName(name) {
    const urlFriendlyName = name.replace(/\s+/g, '_');
    return urlFriendlyName.replace(/[^\w\d_]/g, '');
}