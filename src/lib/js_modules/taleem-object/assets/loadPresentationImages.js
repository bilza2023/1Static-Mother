export default async function loadPresentationImages(imagesUrl, imageNames, isEditorMode = false) {
    if (!Array.isArray(imageNames) || typeof imagesUrl !== 'string') {
        throw new Error('Invalid arguments: imageNames must be an array, and imagesUrl must be a string.');
    }

    const presentationImages = new Map();

    await Promise.all(
        imageNames.map(imageName =>
            loadSingleImage(imageName, imagesUrl, isEditorMode)
                .then(({ name, img }) => {
                    if (img) presentationImages.set(name, img);
                })
                .catch(error => {
                    if (!isEditorMode) throw error;
                    console.warn(`Skipping image in editor mode: ${error.message}`);
                })
        )
    );

    return presentationImages;
}

async function loadSingleImage(imageName, imagesUrl, isEditorMode) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => resolve({ name: imageName, img });
        img.onerror = () => {
            const errorMsg = `Failed to load image: ${imagesUrl}${imageName}`;
            if (isEditorMode) {
                console.warn(errorMsg);
                resolve({ name: imageName, img: null });
            } else {
                reject(new Error(errorMsg));
            }
        };
        img.src = `${imagesUrl}${imageName}`;
    });
}
