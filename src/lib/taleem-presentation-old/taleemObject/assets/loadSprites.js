
export default async function loadSprites() {
    const spriteConfigs = [
        { name: 'students' },
        { name: 'figs' },
        { name: 'alphabets' },
        { name: 'people' }
    ];

    async function loadSingleSprite({ name }) {
        try {
            // Import the base64 data
            const { default: fileData } = await import(`./sprites/${name}.js`);
            
            // Import and execute the sprite configuration to get the configured sprite
            const { [name]: spriteInstance } = await import(`./sprite/${name}.js`);
            
            return new Promise((resolve, reject) => {
                const img = new Image();
                
                img.onload = () => {
                    // Assign the loaded image to the sprite instance
                    spriteInstance.img = img;
                    resolve(spriteInstance);
                };
                
                img.onerror = () => reject(new Error(`Failed to load sprite: ${name}`));
                
                // Use the base64 data as the image source instead of the url
                img.src = fileData;
            });
        } catch (error) {
            throw new Error(`Failed to load sprite ${name}: ${error.message}`);
        }
    }

    try {
        return await Promise.all(
            spriteConfigs.map(sprite => loadSingleSprite(sprite))
        );
    } catch (error) {
        console.error('Error loading sprites:', error);
        throw error;
    }
}