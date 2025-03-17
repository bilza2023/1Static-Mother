async function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = src;
    });
    }
    
    // We go over each item and if that item is "command.image" we load the inage in it
    async function loadImages() {
    //   debugger;
    for (let i = 0; i < currentSlide.items.length; i++) {
      const item = currentSlide.items[i];
    
      if (item.itemExtra.command == 'image' || item.itemExtra.command == 'image2') {
        try {
            const url =  item.itemExtra.src + '.' + item.itemExtra.ext;
            const img = await loadImage( url);
            item.itemExtra.image = img;
            
        }   catch (err) {
          // console.error('Error loading image:', err);
          // do nothing 
        }
      }
    }
    }