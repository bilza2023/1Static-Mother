//@ts-nocheck


export default function getItemByName(arr, nameToFind) {
  const foundItem = arr.find(item => item.name === nameToFind);
  return foundItem ? foundItem.value : null;
}