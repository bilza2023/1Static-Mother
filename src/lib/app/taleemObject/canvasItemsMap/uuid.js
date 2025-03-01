//@ts-nocheck

export default function uuid() {
  // Generate a random 32-character hexadecimal string
  const randomHex = () => Math.floor(Math.random() * 16).toString(16);

  // Generate a UUID with the pattern "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = randomHex();
    const v = c === 'x' ? r : (r & 0x3) | 0x8; // For the 4th character, ensure it's 4
    return v.toString(16);
  });
}
