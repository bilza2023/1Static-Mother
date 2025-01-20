


export default function getMouseData(e) {
    const canvas = e.target;
    const rect = canvas.getBoundingClientRect();
    
    // Account for the canvas's CSS scaling if any
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    // Get mouse position accounting for scroll and scale
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    return { x, y, canvas, rect };
}