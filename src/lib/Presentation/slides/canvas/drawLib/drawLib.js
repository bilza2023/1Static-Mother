
//@ts-nocheck
// import ray from "./ray";
/**
 * DrawLib is a very thin class over an html5 canvas element. keep it light with no state other than width,height,bg-color , ref etc.
 */ 

export default class DrawLib {
constructor(canvas, ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this._backgroundColor = 'white'; // Default background color
    this._width = canvas.width;
    this._height = canvas.height;
}

get backgroundColor() {
    return this._backgroundColor;
}

set backgroundColor(color) {
    this._backgroundColor = color;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

get width() {
    return this._width;
}

set width(value) {
    this._width = value;
    this.canvas.width = value;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.backgroundColor = this.backgroundColor; // Redraw background
}

get height() {
    return this._height;
}

set height(value) {
    this._height = value;
    this.canvas.height = value;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.backgroundColor = this.backgroundColor; // Redraw background
}

 //  rect     
rect(x, y, width, height, color = 'white', filled = true, dash = 0, gap = 0,lineWidth=1,globalAlpha=1) {
    // debugger;
    this.ctx.save(); // Save the current context state
    this.ctx.lineWidth = lineWidth;
    this.ctx.globalAlpha = globalAlpha; // Set the global alpha

    if (dash === 0 && gap === 0) {
        this.ctx.setLineDash([]); // Set line dash pattern
    } else {
        this.ctx.setLineDash([dash, gap]); // Set line dash pattern
    }

    if (filled) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    } else {
        this.ctx.strokeStyle = color;
        this.ctx.strokeRect(x, y, width, height); // Changed to strokeRect for unfilled rectangle
    }
    
    this.ctx.restore(); // Restore the context state
}


line(x1, y1, x2, y2, color = 'black', lineWidth = 1, dash = 0, gap = 0,globalAlpha=1) {
    
    
    this.ctx.save(); // Save the current context state
    
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = color;
    this.ctx.globalAlpha = globalAlpha;

    if (dash === 0 && gap === 0) {
        this.ctx.setLineDash([]); // Set line dash pattern
    } else {
        this.ctx.setLineDash([dash, gap]); // Set line dash pattern
    }

    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
    
    this.ctx.restore(); // Restore the context state
}

circle(x, y, radius, color = 'black', fill = false, startingAngle = 0, endingAngle = Math.PI * 2, dash = 0, gap = 0,lineWidth=1,globalAlpha=1) {
    // debugger;
    this.ctx.save(); // Save the current context state
    this.ctx.lineWidth = lineWidth;
    this.ctx.globalAlpha = globalAlpha; 
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, startingAngle, endingAngle);

    if (fill) {
        this.ctx.fillStyle = color;
        this.ctx.fill();
    } else {
        this.ctx.strokeStyle = color;
        
        if (dash === 0 && gap === 0) {
            this.ctx.setLineDash([]); // Set line dash pattern
        } else {
            this.ctx.setLineDash([dash, gap]); // Set line dash pattern
        }

        this.ctx.stroke();
    }
    
    this.ctx.restore(); // Restore the context state
}

ellipse(x, y, radiusX, radiusY, color = 'black', fill = false, rotation = 0, startAngle = 0, endAngle = Math.PI * 2,lineWidth=1, dash = 0, gap = 0,globalAlpha) {

    this.ctx.save(); // Save the current context state
    
    this.ctx.lineWidth = lineWidth;
    this.ctx.globalAlpha = globalAlpha;
    this.ctx.beginPath();
    this.ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);

    if (fill) {
        this.ctx.fillStyle = color;
        this.ctx.fill();
    } else {
        this.ctx.strokeStyle = color;
        
        if (dash === 0 && gap === 0) {
            this.ctx.setLineDash([]); // Set line dash pattern
        } else {
            this.ctx.setLineDash([dash, gap]); // Set line dash pattern
        }

        this.ctx.stroke();
    }
    
    this.ctx.restore(); // Restore the context state
}

polygon(points, color = 'black', filled = true, dash = 0, gap = 0,lineWidth=1) {
    this.ctx.save(); // Save the current context state
    
    if (points.length % 2 !== 0 || points.length < 6) {
        throw new Error('Invalid number of points for a polygon.');
    }
    this.ctx.lineWidth = lineWidth;
    this.ctx.beginPath();
    this.ctx.moveTo(points[0], points[1]);

    for (let i = 2; i < points.length; i += 2) {
        this.ctx.lineTo(points[i], points[i + 1]);
    }

    if (filled) {
        this.ctx.fillStyle = color;
        this.ctx.fill();
    } else {
        this.ctx.strokeStyle = color;
        
        if (dash === 0 && gap === 0) {
            this.ctx.setLineDash([]); // Set line dash pattern
        } else {
            this.ctx.setLineDash([dash, gap]); // Set line dash pattern
        }

        this.ctx.stroke();
    }
    
    this.ctx.restore(); // Restore the context state
}

triangle(x1, y1, x2, y2, x3, y3, color = 'black', filled = true, lineWidth = 2, dash = 0, gap = 0,globalAlpha=1) {
    // debugger;
    this.ctx.save(); // Save the current context state
    
    this.ctx.lineWidth = lineWidth;
    this.ctx.globalAlpha = globalAlpha;
    this.ctx.strokeStyle = color;

    if (dash === 0 && gap === 0) {
        this.ctx.setLineDash([]); // Set line dash pattern
    } else {
        this.ctx.setLineDash([dash, gap]); // Set line dash pattern
    }

    if (filled) {
        this.polygon([x1, y1, x2, y2, x3, y3], color, true); // Draw filled triangle
    } else {
        // Draw triangle outline with dashed line
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.lineTo(x3, y3);
        this.ctx.closePath();
        this.ctx.stroke();
    }

    this.ctx.restore(); // Restore the context state
}

ray(x0, y0, x1, y1, lineColor = 'black', lineWidth = 2, arrowWidth = 5, arrowHeight = 8, startArrow = true, endArrow = true, dash = 0, gap = 0,globalAlpha=1) {
    // debugger; 
    this.ctx.save(); // Save the current context state
    var dx = x1 - x0;
    var dy = y1 - y0;
    var angle = Math.atan2(dy, dx);
    var length = Math.sqrt(dx * dx + dy * dy);

    this.ctx.lineWidth = lineWidth;
    this.ctx.globalAlpha = globalAlpha;
    this.ctx.strokeStyle = lineColor;

    if (dash === 0 && gap === 0) {
        this.ctx.setLineDash([]); // Set line dash pattern
    } else {
        this.ctx.setLineDash([dash, gap]); // Set line dash pattern
    }

    this.ctx.translate(x0, y0);
    this.ctx.rotate(angle);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(length, 0);

    if (startArrow) {
        this.ctx.moveTo(arrowHeight, -arrowWidth);
        this.ctx.lineTo(0, 0);
        this.ctx.lineTo(arrowHeight, arrowWidth);
    }

    if (endArrow) {
        this.ctx.moveTo(length - arrowHeight, -arrowWidth);
        this.ctx.lineTo(length, 0);
        this.ctx.lineTo(length - arrowHeight, arrowWidth);
    }
    this.ctx.stroke();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    
    this.ctx.restore(); // Restore the context state
}


shape(points, color = 'white', closed = true) {
    if (points.length % 2 !== 0) {
        throw new Error('Number of points should be even (x, y pairs).');
    }

    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(points[0], points[1]);

    for (let i = 2; i < points.length; i += 2) {
        this.ctx.lineTo(points[i], points[i + 1]);
    }

    if (closed) {
        this.ctx.closePath();
    }

    this.ctx.fill();
}

bezier(x, y, x1, y1, x2, y2, color = "red", lineWidth = 1, globalAlpha = 1, showHandle = false, dash = 0, gap = 0) {
this.ctx.save(); // Save the current context state

this.ctx.lineWidth = lineWidth;
this.ctx.strokeStyle = color;
this.ctx.globalAlpha = globalAlpha;

if (dash === 0 && gap === 0) {
    this.ctx.setLineDash([]); // Set line dash pattern
} else {
    this.ctx.setLineDash([dash, gap]); // Set line dash pattern
}

this.ctx.beginPath();
this.ctx.moveTo(x, y);
this.ctx.bezierCurveTo(x1, y1, x2, y2, x2, y2); // Use x2, y2 as control point
this.ctx.stroke();

if (showHandle) {
    this.ctx.fillStyle = 'yellow'; // Handle color
    this.ctx.fillRect(x1 - 2, y1 - 2, 4, 4); // Adjust handle size
    // this.ctx.fillRect(x2 - 2, y2 - 2, 4, 4); // Adjust handle size
}

this.ctx.restore(); // Restore the context state
}

////////////////////////////////////////////////////////////
/////////////////////===TEXT PARA=====//////////////////////
////////////////////////////////////////////////////////////
text(text, x, y, color = 'black', font = '12px Arial', shadowOffsetX = 0, shadowOffsetY = 0, shadowBlur = 4, shadowColor = 'gray',globalAlpha = 1) {
    
    this.ctx.save(); 

    this.ctx.shadowOffsetX = shadowOffsetX;
    this.ctx.shadowOffsetY = shadowOffsetY;
    this.ctx.shadowBlur = shadowBlur;
    this.ctx.shadowColor = shadowColor;

    this.ctx.fillStyle = color;
    this.ctx.font = font;
    this.ctx.textBaseline = 'top';

    this.ctx.globalAlpha = globalAlpha;

    this.ctx.fillText(text, x, y);

    this.ctx.restore(); // Restore the context state
}
para(text, x, y, color = 'black', font = '12px Arial', shadowOffsetX = 0, shadowOffsetY = 0, shadowBlur = 4, shadowColor = 'gray', globalAlpha = 1, lineHeightOffset = 0, xOffset = 0) {
    this.ctx.save(); // Save the current context state

    // Set shadow properties
    this.ctx.shadowOffsetX = shadowOffsetX;
    this.ctx.shadowOffsetY = shadowOffsetY;
    this.ctx.shadowBlur = shadowBlur;
    this.ctx.shadowColor = shadowColor;

    this.ctx.fillStyle = color;
    this.ctx.font = font;
    this.ctx.textBaseline = 'top';

    this.ctx.globalAlpha = globalAlpha;

    const lines = text.split('\n'); // Split text into lines based on line breaks

    // Loop over each line
    lines.forEach((line, index) => {
        // Calculate y position for each line, adjusting for line height offset
        const lineHeight = parseInt(font, 10) + lineHeightOffset; // Adjusted line height
        const yPos = y + (index * lineHeight);

        // Calculate x position for each line, adjusting for xOffset
        const xPos = x + (index * xOffset);

        // Call the text method for each line with adjusted positions
        this.text(line, xPos, yPos, color, font, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalAlpha);
    });

    this.ctx.restore(); // Restore the context state
}

//////////////////////////////////////////////////////////////

// Image drawing method
image(image, x, y, width, height,globalAlpha=1) {
    // debugger;
    this.ctx.save(); // Save the current context state
    this.ctx.globalAlpha = globalAlpha; // Set the global alpha
    this.ctx.drawImage(image, x, y, width, height);
    this.ctx.restore();
}

// Clear canvas method
clear(backgroundColor='gray') {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = backgroundColor; 
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); 
}
    

// Gradient drawing method (Linear Gradient)
linearGradient(x1, y1, x2, y2, colorStops) {
    const gradient = this.ctx.createLinearGradient(x1, y1, x2, y2);
    for (const [stop, color] of colorStops) {
        gradient.addColorStop(stop, color);
    }
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

grid(cellWidth = 100, cellHeight = 100, lineWidth = 2, lineColor = 'black') {
    this.ctx.save(); // Save the current context state

    // Adjust canvas settings for sharp lines
    this.ctx.translate(0.5, 0.5);
    this.ctx.imageSmoothingEnabled = false;

    this.ctx.strokeStyle = lineColor;
    this.ctx.lineWidth = lineWidth;

    // Draw vertical lines
    for (let x = cellWidth; x < this.canvas.width; x += cellWidth) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, 0);
        this.ctx.lineTo(x, this.canvas.height);
        this.ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = cellHeight; y < this.canvas.height; y += cellHeight) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(this.canvas.width, y);
        this.ctx.stroke();
    }

    this.ctx.restore(); // Restore the context state
}

//gridDot
gridDot(cellWidth = 100, cellHeight = 100, dotSize = 2, dotColor = 'black') {
        this.ctx.fillStyle = dotColor;
    
        // Draw dots at the intersection of grid lines
        for (let x = cellWidth; x < this.canvas.width; x += cellWidth) {
            for (let y = cellHeight; y < this.canvas.height; y += cellHeight) {
                this.ctx.beginPath();
                this.ctx.arc(x, y, dotSize, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }
    }


dot(x, y,label = '',dot_width = 10,text_size=16 ,color = 'red', text_color = 'black',globalAlpha=1) {
// debugger;
    this.ctx.save(); 
    this.ctx.globalAlpha = globalAlpha;
    //  debugger;
    this.circle(x, y, dot_width / 2, color, true);
    this.text(label, parseInt(x)  - parseInt(dot_width / 2), parseInt(y) + parseInt(dot_width*2), text_color, `${text_size}px Arial` );

    this.ctx.restore(); // Restore the context state
}

repeatText(textArray, initialX=0, initialY=0, xFactor = 50, yFactor = 0,color = 'white', font = '20px Arial') {
    // debugger;
    let currentX = initialX;
    let currentY = initialY;

    for (const text of textArray) {
        this.text(text, currentX, currentY, color, font);
        currentX += xFactor;
        currentY += yFactor;
    }
}
// Inside the DrawLib class

repeatDot(numberOfDots = 10, initialX=0, initialY=0, xFactor = 50, yFactor = 0, width = 10, color = 'red') {
    // debugger;
    let currentX = initialX;
    let currentY = initialY;

    for (let i = 0; i < numberOfDots; i++) {
        this.dot(currentX, currentY, '', width,16, color);
        currentX += xFactor;
        currentY += yFactor;
    }
}
// Add this method to your DrawLib class

roundRect(x, y, width, height, radius, color = 'black', filled = false, lineWidth = 1, dash = 0, gap = 0, globalAlpha = 1) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.moveTo(x + radius, y);
    this.ctx.lineTo(x + width - radius, y);
    this.ctx.arcTo(x + width, y, x + width, y + radius, radius);
    this.ctx.lineTo(x + width, y + height - radius);
    this.ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    this.ctx.lineTo(x + radius, y + height);
    this.ctx.arcTo(x, y + height, x, y + height - radius, radius);
    this.ctx.lineTo(x, y + radius);
    this.ctx.arcTo(x, y, x + radius, y, radius);
    this.ctx.closePath();

    this.ctx.globalAlpha = globalAlpha;
    this.ctx.lineWidth = lineWidth;

    if (dash === 0 && gap === 0) {
        this.ctx.setLineDash([]);
    } else {
        this.ctx.setLineDash([dash, gap]);
    }

    if (filled) {
        this.ctx.fillStyle = color;
        this.ctx.fill();
    } else {
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }

    this.ctx.restore();
}
regularPolygon(x, y, radius, sides, color = 'black', filled = true) {
    const points = [];
    for (let i = 0; i < sides; i++) {
        const angle = (Math.PI * 2 * i) / sides;
        const px = x + radius * Math.cos(angle);
        const py = y + radius * Math.sin(angle);
        points.push(px, py);
    }
    this.polygon(points, color, filled);
}
regularStar(x, y, outerRadius, innerRadius, points, color = 'black', filled = true) {
    const starPoints = [];
    const angleStep = Math.PI / points;

    for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = angleStep * i;
        const px = x + radius * Math.cos(angle);
        const py = y + radius * Math.sin(angle);
        starPoints.push(px, py);
    }

    this.polygon(starPoints, color, filled);
}
drawAngleSymbol(x, y, radius, ticks, startAngle = 0, endAngle = Math.PI * 2, color = 'black', lineWidth = 1, showOrigin = false) {
    // Save the current drawing state
    this.ctx.save();

    // Set the color and line width
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = lineWidth;

    // Draw the circle's circumference
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, startAngle, endAngle);
    this.ctx.stroke();

    // Draw the angle ticks
    const angleStep = (endAngle - startAngle) / (ticks + 1);
    for (let i = 1; i <= ticks; i++) {
        const angle = startAngle + i * angleStep;
        const startX = x + Math.cos(angle) * (radius - 5);
        const startY = y + Math.sin(angle) * (radius - 5);
        const endX = x + Math.cos(angle) * (radius + 10);
        const endY = y + Math.sin(angle) * (radius + 10);

        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }

    // Draw the origin circle if showOrigin is true
    if (showOrigin) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 2, 0, Math.PI * 2); // Very small circle
        this.ctx.fillStyle = color; // Use the same color as the arc
        this.ctx.fill();
    }

    // Restore the previous drawing state
    this.ctx.restore();
}

drawPerpendSymbol(x, y, x1, y1, x2, y2, lineWidth = 1, color = 'black') {
    // debugger;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x1, y1);
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x2, y2);
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = color;
    this.ctx.stroke();
}


// image: The image element containing the sprite.
// sx: The x-coordinate of the top-left corner of the sub-rectangle of the source image to draw.
// sy: The y-coordinate of the top-left corner of the sub-rectangle of the source image to draw.
// sWidth: The width of the sub-rectangle of the source image to draw.
// sHeight: The height of the sub-rectangle of the source image to draw.
// dx: The x-coordinate in the destination canvas at which to place the top-left corner of the source image.
// dy: The y-coordinate in the destination canvas at which to place the top-left corner of the source image.
// dWidth: The width to draw the image in the destination canvas.
// dHeight: The height to draw the image in the destination canvas.
// sprite(image={}, sx=0, sy=0, sWidth=100, sHeight=100, dx=0, dy=0, dWidth=100, dHeight=100) {
sprite(sprite,item) {
    // debugger;
    this.ctx.drawImage(sprite.img,
        sprite.selectedData.sx, //x on source image
        sprite.selectedData.sy, //y on source image
        sprite.selectedData.sw, //width on source image
        sprite.selectedData.sh, //height on source image
        item.x,//x on destination image
        item.y,//y on destination image
        sprite.selectedData.sw * Math.abs(item.wFactor), //width on source image
        sprite.selectedData.sh * Math.abs(item.hFactor) //height on source image
    );
}
pieChart(centerX , centerY,radius, pies, options = { drawLabelsOutside: false }) {
    
    let startAngle = 0;

    pies.forEach(pie => {
        // Draw pie slice
        const endAngle = startAngle + (pie.percent / 100) * 2 * Math.PI;
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, centerY);
        this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        this.ctx.closePath();
        this.ctx.fillStyle = pie.color || '#000'; // default color
        this.ctx.fill();

        // Draw pie title
        const midAngle = startAngle + (endAngle - startAngle) / 2;
        const textX = centerX + Math.cos(midAngle) * (options.drawLabelsOutside ? radius + 20 : radius / 2);
        const textY = centerY + Math.sin(midAngle) * (options.drawLabelsOutside ? radius + 20 : radius / 2);

        this.ctx.fillStyle = '#000'; // default text color
        this.ctx.font = '14px Arial';
        this.ctx.fillText(pie.title, textX, textY);

        startAngle = endAngle; // update startAngle for next pie
    });
}

bgImage(image,bgGlobalAlpha=1) {
    this.ctx.globalAlpha = bgGlobalAlpha;    
        this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.globalAlpha = 1;    
    }
        
        
}
