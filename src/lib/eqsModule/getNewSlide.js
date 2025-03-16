


export default function getNewSlide(type,slideExtra ={}){
    if(!slideExtra.imagesUrl){
        slideExtra.imagesUrl = 'https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/';
    }
    return {
        uuid: uuid(),
        name: 'New Slide',
        version: 'basic',
        startTime: 0,
        endTime: 10,
        type ,  
        template: '',
        items: [],
        slideExtra,
    }

}
//////////
function uuid() {
    // Generate a random 32-character hexadecimal string
    const randomHex = () => Math.floor(Math.random() * 16).toString(16);
  
    // Generate a UUID with the pattern "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = randomHex();
      const v = c === 'x' ? r : (r & 0x3) | 0x8; // For the 4th character, ensure it's 4
      return v.toString(16);
    });
  }