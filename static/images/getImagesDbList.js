
// const fs = require('fs');
// const path = require('path');
import fs from "fs";
import path from "path";

function getFilesWithExtension(folderPath="./", extensions=['.jpg', '.png']) {
  try {
    const files = fs.readdirSync(folderPath);
    const filteredFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return extensions.includes(ext);
    });
    return filteredFiles;
  } catch (error) {
    console.error('Error reading folder:', error);
    return [];
  }
}

// // Example usage:
// const folderPath = './my_images_folder'; // Replace with your folder path
// const extensionsToFind = ['.jpg', '.png'];

const imageFiles = getFilesWithExtension();

console.log('Image files:', imageFiles);

//Example of creating the folder and files for testing.
//Uncomment if you want to create the test folder and files.

/*
function createTestFiles(folder, files) {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
  files.forEach((file) => {
    fs.writeFileSync(path.join(folder, file), 'test content');
  });
}

const testFiles = [
  'atom.png',
  'baloons.png',
  'activity1.jpg',
  'drops.png',
  'document.txt',
  'data.json',
];

createTestFiles(folderPath, testFiles);
*/