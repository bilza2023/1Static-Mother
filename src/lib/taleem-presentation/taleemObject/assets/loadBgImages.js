export default async function loadBgImages() {
  const imageConfigs = [
      'paper01',
      'drywall',
      'black_board',
      'black_board_mat',
      'wood',
      'tinted',
      'black_mat',
      'white_mat',
      'granite',
      'gray_marble',
      'brown_stone',
      'gray_stone',
      'design_old',
      'blue_waves',
      'wall'
  ];
  // Helper function to load a single base64 image
  async function loadSingleImage(imageName) {
      try {
          const { default: fileData } = await import(`./bgImages/${imageName}.js`);
          
          return new Promise((resolve, reject) => {
              const img = new Image();
              
              img.onload = () => resolve({
                  name: imageName,  // Just using the image name without path
                  img
              });
              
              img.onerror = () => reject(new Error(`Failed to load image: ${imageName}`));
              
              // Set the base64 data as the image source
              img.src = fileData;
          });
      } catch (error) {
          throw new Error(`Failed to import base64 file for ${imageName}: ${error.message}`);
      }
  }

  try {
      // Load all images concurrently and return results
      return await Promise.all(
          imageConfigs.map(imageName => loadSingleImage(imageName))
      );
  } catch (error) {
      console.error('Error loading background images:', error);
      throw error;
  }
}