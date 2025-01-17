import { c as create_ssr_component, v as validate_component, e as each, b as escape, m as missing_component, d as add_attribute, j as createEventDispatcher } from './ssr-DE9ggXra.js';
import './katex-DO6cVBGF.js';
import 'howler';
import './client-CQ5E_ugM.js';
import './SvelteToast.svelte_svelte_type_style_lang-2g20M6Vi.js';
import './db-D9Ne72g6.js';
import { N as Nav } from './Nav-DCgBi2Om.js';
import './exports-DuWZopOC.js';
import './index-f6ahsRDI.js';
import 'simplerestclient2';
import './config-C86t3E_A.js';
import './icons-DxTmeO1G.js';

function uuid$1() {
  const randomHex = () => Math.floor(Math.random() * 16).toString(16);
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = randomHex();
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
class TextObject {
  static data() {
    return {
      uuid: uuid$1(),
      type: "text",
      x: 100,
      y: 100,
      text: "Add text..",
      fontSize: 30,
      fontFamily: "Arial",
      color: "black",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "text", type: "Text", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "fontSize", type: "Number", config: { min: 0, max: 200, step: 1 } });
    dialogueBox.push({ name: "fontFamily", type: "FontFamily", config: {} });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    if (!itemExtra.fontSize) {
      itemExtra.fontSize = 40;
    }
    if (!itemExtra.fontFamily) {
      itemExtra.fontFamily = "Arial";
    }
    ctx.save();
    const text2 = itemExtra.text;
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.globalAlpha = itemExtra.globalAlpha;
    ctx.fillStyle = itemExtra.color;
    ctx.font = `${itemExtra.fontSize}px ${itemExtra.fontFamily}`;
    ctx.textBaseline = "top";
    ctx.fillText(text2, x, y2);
    ctx.restore();
  }
}
class Rectangle {
  static data() {
    return {
      uuid: uuid$1(),
      type: "rectangle",
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "width", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "height", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "filled", type: "Boolean", config: {} });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "dash", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "gap", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    const width = itemExtra.width;
    const height = itemExtra.height;
    const color = itemExtra.color ?? "white";
    const filled = itemExtra.filled;
    const dash = itemExtra.dash ?? 0;
    const gap = itemExtra.gap ?? 0;
    const lineWidth = itemExtra.lineWidth ?? 1;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = itemExtra.globalAlpha;
    if (dash === 0 && gap === 0) {
      ctx.setLineDash([]);
    } else {
      ctx.setLineDash([dash, gap]);
    }
    if (filled) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y2, width, height);
    } else {
      ctx.strokeStyle = color;
      ctx.strokeRect(x, y2, width, height);
    }
    ctx.restore();
  }
}
class Ellipse {
  static data() {
    return {
      uuid: uuid$1(),
      type: "ellipse",
      x: 100,
      y: 100,
      radiusX: 50,
      radiusY: 75,
      rotation: 0,
      startAngle: 0,
      endAngle: 360,
      lineWidth: 1,
      filled: false,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "radiusX", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "radiusY", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "rotation", type: "Float", config: { min: 0, max: 360, step: 0.1 } });
    dialogueBox.push({ name: "startAngle", type: "Float", config: { min: -360, max: 360, step: 0.1 } });
    dialogueBox.push({ name: "endAngle", type: "Float", config: { min: -360, max: 360, step: 0.1 } });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "filled", type: "Boolean", config: {} });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    const radiusX = itemExtra.radiusX;
    const radiusY = itemExtra.radiusY;
    const color = itemExtra.color || "black";
    const filled = itemExtra.filled || false;
    const rotation = itemExtra.rotation || 0 * (Math.PI / 180);
    const startAngle = itemExtra.startAngle || 0 * (Math.PI / 180);
    const endAngle = itemExtra.endAngle || 360 * (Math.PI / 180);
    const lineWidth = itemExtra.lineWidth || 1;
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const globalAlpha = itemExtra.globalAlpha || 1;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = globalAlpha;
    ctx.beginPath();
    ctx.ellipse(x, y2, radiusX, radiusY, rotation, startAngle, endAngle);
    if (filled) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      if (dash === 0 && gap === 0) {
        ctx.setLineDash([]);
      } else {
        ctx.setLineDash([dash, gap]);
      }
      ctx.stroke();
    }
    ctx.restore();
  }
}
class Angle {
  static data() {
    return {
      uuid: uuid$1(),
      type: "angle",
      x: 100,
      y: 100,
      radius: 25,
      ticks: 3,
      startAngle: -90,
      endAngle: 0,
      lineWidth: 1,
      showOrigin: true,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "radius", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "ticks", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "startAngle", type: "Float", config: { min: -360, max: 360, step: 1 } });
    dialogueBox.push({ name: "endAngle", type: "Float", config: { min: -360, max: 360, step: 1 } });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 10, step: 1 } });
    dialogueBox.push({ name: "showOrigin", type: "Boolean", config: { min: 0, max: 10, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    const startAngle = itemExtra.startAngle * (Math.PI / 180);
    const endAngle = itemExtra.endAngle * (Math.PI / 180);
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    const radius = itemExtra.radius;
    const ticks = itemExtra.ticks;
    const color = itemExtra.color;
    const lineWidth = itemExtra.lineWidth;
    const showOrigin = itemExtra.showOrigin;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = itemExtra.globalAlpha;
    ctx.beginPath();
    ctx.arc(x, y2, radius, startAngle, endAngle);
    ctx.stroke();
    const angleStep = (endAngle - startAngle) / (ticks + 1);
    for (let i = 1; i <= ticks; i++) {
      const angle = startAngle + i * angleStep;
      const startX = x + Math.cos(angle) * (radius - 5);
      const startY = y2 + Math.sin(angle) * (radius - 5);
      const endX = x + Math.cos(angle) * (radius + 10);
      const endY = y2 + Math.sin(angle) * (radius + 10);
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
    if (showOrigin) {
      ctx.beginPath();
      ctx.arc(x, y2, 2, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
    ctx.restore();
  }
}
class Circle {
  static data() {
    return {
      uuid: uuid$1(),
      type: "circle",
      x: 150,
      y: 150,
      radius: 50,
      startAngle: 0,
      endAngle: 360,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      filled: false,
      color: "gray",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "radius", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "startAngle", type: "Number", config: { min: 0, max: 360, step: 1 } });
    dialogueBox.push({ name: "endAngle", type: "Number", config: { min: 0, max: 360, step: 1 } });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 100, step: 1 } });
    dialogueBox.push({ name: "dash", type: "Number", config: { min: 0, max: 10, step: 1 } });
    dialogueBox.push({ name: "gap", type: "Number", config: { min: 0, max: 10, step: 1 } });
    dialogueBox.push({ name: "filled", type: "Boolean", config: {} });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    const radius = itemExtra.radius;
    const color = itemExtra.color || "black";
    const filled = itemExtra.filled;
    const startAngle = (itemExtra.startAngle || 0) * (Math.PI / 180);
    const endAngle = (itemExtra.endAngle || 360) * (Math.PI / 180);
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const lineWidth = itemExtra.lineWidth || 1;
    const globalAlpha = itemExtra.globalAlpha || 1;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = globalAlpha;
    ctx.beginPath();
    ctx.arc(x, y2, radius, startAngle, endAngle);
    if (filled) {
      ctx.fillStyle = color;
      ctx.fill();
    } else {
      ctx.strokeStyle = color;
      if (dash === 0 && gap === 0) {
        ctx.setLineDash([]);
      } else {
        ctx.setLineDash([dash, gap]);
      }
      ctx.stroke();
    }
    ctx.restore();
  }
}
class Dot {
  static data() {
    return {
      uuid: uuid$1(),
      type: "dot",
      x: 100,
      y: 100,
      label: "label",
      dot_width: 25,
      text_color: "yellowbezier",
      text_size: 40,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "label", type: "Text", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "dot_width", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "text_color", type: "Color", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "text_size", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    const {
      x,
      y: y2,
      label,
      dot_width,
      text_size,
      color,
      text_color,
      globalAlpha
    } = itemExtra;
    ctx.save();
    ctx.globalAlpha = globalAlpha;
    ctx.beginPath();
    ctx.arc(
      x,
      y2,
      dot_width / 2,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = color;
    ctx.fill();
    ctx.font = `${text_size}px Arial`;
    ctx.fillStyle = text_color;
    ctx.fillText(
      label,
      parseInt(x) - parseInt(dot_width) / 2,
      parseInt(y2) + parseInt(dot_width) * 2
    );
    ctx.restore();
  }
}
class Icon {
  static data() {
    return {
      uuid: uuid$1(),
      type: "icon",
      x: 100,
      y: 100,
      text: "This is Heading",
      fontSize: 28,
      iconSize: 100,
      fontFamily: "Arial",
      icon: "🦏",
      showBg: false,
      iconOnTop: true,
      iconErrorX: 0,
      iconErrorY: 0,
      bgColor: "gray",
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "text", type: "Text", config: {} });
    dialogueBox.push({ name: "fontSize", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "iconSize", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "fontFamily", type: "FontFamily", config: {} });
    dialogueBox.push({ name: "showBg", type: "Boolean", config: {} });
    dialogueBox.push({ name: "iconErrorX", type: "Number", config: {} });
    dialogueBox.push({ name: "iconErrorY", type: "Number", config: {} });
    dialogueBox.push({ name: "bgColor", type: "Color", config: {} });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    const percent_rect_extra = 20;
    ctx.font = itemExtra.fontSize + "px " + itemExtra.fontFamily;
    const textWidth = ctx.measureText(itemExtra.text).width;
    const textHeight = ctx.measureText("W").width;
    ctx.font = itemExtra.iconSize + "px Arial";
    const iconWidth = ctx.measureText(itemExtra.icon).width;
    const iconHeight = ctx.measureText("W").width;
    const largerWidth = Math.max(textWidth, iconWidth);
    const extraWidth = percent_rect_extra * (largerWidth / 100);
    const rectangleWidth = largerWidth + extraWidth;
    const rectangleHeight = textHeight + iconHeight;
    const textXAdjust = Math.abs((rectangleWidth - textWidth) / 3);
    const iconXAdjust = Math.abs((iconWidth - rectangleWidth) / 2);
    if (itemExtra.showBg) {
      roundRect(
        ctx,
        itemExtra.x,
        itemExtra.y,
        rectangleWidth,
        rectangleHeight + 30 * rectangleHeight / 100,
        30,
        itemExtra.bgColor,
        true,
        1,
        0,
        0,
        itemExtra.globalAlpha
      );
    }
    ctx.globalAlpha = itemExtra.globalAlpha;
    text(
      ctx,
      itemExtra.icon,
      itemExtra.x + iconXAdjust + itemExtra.iconErrorX,
      itemExtra.y + itemExtra.iconErrorY,
      itemExtra.color,
      itemExtra.iconSize + "px Arial",
      0,
      0,
      0,
      "black",
      itemExtra.globalAlpha
    );
    ctx.globalAlpha = itemExtra.globalAlpha;
    text(
      ctx,
      itemExtra.text,
      itemExtra.x + textXAdjust,
      itemExtra.y + (iconHeight + 20 * iconHeight / 100),
      itemExtra.color,
      itemExtra.fontSize + "px " + itemExtra.fontFamily,
      0,
      0,
      0,
      "black",
      itemExtra.globalAlpha
    );
    ctx.restore();
  }
}
function roundRect(ctx, x, y2, width, height, radius, color = "black", filled = false, lineWidth = 1, dash = 0, gap = 0, globalAlpha = 1) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + radius, y2);
  ctx.lineTo(x + width - radius, y2);
  ctx.arcTo(x + width, y2, x + width, y2 + radius, radius);
  ctx.lineTo(x + width, y2 + height - radius);
  ctx.arcTo(x + width, y2 + height, x + width - radius, y2 + height, radius);
  ctx.lineTo(x + radius, y2 + height);
  ctx.arcTo(x, y2 + height, x, y2 + height - radius, radius);
  ctx.lineTo(x, y2 + radius);
  ctx.arcTo(x, y2, x + radius, y2, radius);
  ctx.closePath();
  ctx.globalAlpha = globalAlpha;
  ctx.lineWidth = lineWidth;
  if (dash === 0 && gap === 0) {
    ctx.setLineDash([]);
  } else {
    ctx.setLineDash([dash, gap]);
  }
  if (filled) {
    ctx.fillStyle = color;
    ctx.fill();
  } else {
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  ctx.restore();
}
function text(ctx, text2, x, y2, color = "black", font = "12px Arial", shadowOffsetX = 0, shadowOffsetY = 0, shadowBlur = 4, shadowColor = "gray", globalAlpha = 1) {
  ctx.save();
  ctx.shadowOffsetX = shadowOffsetX;
  ctx.shadowOffsetY = shadowOffsetY;
  ctx.shadowBlur = shadowBlur;
  ctx.shadowColor = shadowColor;
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = "top";
  ctx.globalAlpha = globalAlpha;
  ctx.fillText(text2, x, y2);
  ctx.restore();
}
class Image {
  static data() {
    return {
      uuid: uuid$1(),
      type: "image",
      x: 50,
      y: 50,
      src: "",
      //????
      image: null,
      //????
      width: 200,
      height: 200,
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "src", type: "Text", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "width", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "height", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    ctx.globalAlpha = itemExtra.globalAlpha;
    if (!itemExtra.image || itemExtra.image == null) {
      return;
    }
    ctx.save();
    ctx.globalAlpha = itemExtra.globalAlpha;
    ctx.drawImage(itemExtra.image, itemExtra.x, itemExtra.y, itemExtra.width, itemExtra.height);
    ctx.restore();
  }
}
class Piechart {
  static data() {
    return {
      uuid: uuid$1(),
      type: "piechart",
      x: 100,
      y: 100,
      radius: 50,
      data: '[{"title": "A", "percent": 30, "color": "red"}, {"title": "B", "percent": 50, "color": "blue"}, {"title": "C", "percent": 20, "color": "green"}]',
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "data", type: "TextArea", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "radius", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    const radius = itemExtra.radius;
    const data = JSON.parse(itemExtra.data);
    let startAngle = 0;
    const centerX = x;
    const centerY = y2;
    ctx.save();
    ctx.globalAlpha = itemExtra.globalAlpha;
    data.forEach((pie) => {
      const endAngle = startAngle + pie.percent / 100 * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = pie.color || "#000";
      ctx.fill();
      const midAngle = startAngle + (endAngle - startAngle) / 2;
      const textX = centerX + Math.cos(midAngle) * (radius / 2);
      const textY = centerY + Math.sin(midAngle) * (radius / 2);
      ctx.fillStyle = "#000";
      ctx.font = "14px Arial";
      ctx.fillText(pie.title, textX, textY);
      startAngle = endAngle;
    });
    ctx.restore();
  }
}
class Ray {
  static data() {
    return {
      uuid: uuid$1(),
      type: "ray",
      x1: 100,
      y1: 100,
      x2: 300,
      y2: 300,
      arrowWidth: 8,
      arrowHeight: 12,
      startArrow: true,
      endArrow: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x1", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y1", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "x2", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y2", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "arrowWidth", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "arrowHeight", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "startArrow", type: "Boolean", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "endArrow", type: "Boolean", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "dash", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "gap", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  // static draw(ctx, itemExtra) {
  //   // Save the current context state
  //   ctx.save();
  //   // Extract values
  //   const x1 = itemExtra.x1;
  //   const y1 = itemExtra.y1;
  //   const x2 = itemExtra.x2;
  //   const y2 = itemExtra.y2;
  //   const color = itemExtra.color || 'black';
  //   const lineWidth = itemExtra.lineWidth || 1;
  //   const dash = itemExtra.dash || 0;
  //   const gap = itemExtra.gap || 0;
  //   const globalAlpha = itemExtra.globalAlpha || 1;
  //   // Set properties
  //   ctx.lineWidth = lineWidth;
  //   ctx.strokeStyle = color;
  //   ctx.globalAlpha = globalAlpha;
  //   // Set line dash pattern
  //   if (dash === 0 && gap === 0) {
  //       ctx.setLineDash([]);
  //   } else {
  //       ctx.setLineDash([dash, gap]);
  //   }
  //   // Draw the line
  //   ctx.beginPath();
  //   ctx.moveTo(x1, y1);
  //   ctx.lineTo(x2, y2);
  //   ctx.stroke();
  //   // Restore the context state
  //   ctx.restore();
  // }
  static draw(ctx, itemExtra) {
    ctx.save();
    const x1 = itemExtra.x1;
    const y1 = itemExtra.y1;
    const x2 = itemExtra.x2;
    const y2 = itemExtra.y2;
    const color = itemExtra.color || "black";
    const lineWidth = itemExtra.lineWidth || 1;
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const globalAlpha = itemExtra.globalAlpha || 1;
    const arrowWidth = itemExtra.arrowWidth || 8;
    const arrowHeight = itemExtra.arrowHeight || 12;
    const startArrow = itemExtra.startArrow || false;
    const endArrow = itemExtra.endArrow || false;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.globalAlpha = globalAlpha;
    if (dash === 0 && gap === 0) {
      ctx.setLineDash([]);
    } else {
      ctx.setLineDash([dash, gap]);
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    if (startArrow) {
      drawArrowHead(ctx, x2, y2, x1, y1, arrowWidth, arrowHeight);
    }
    if (endArrow) {
      drawArrowHead(ctx, x1, y1, x2, y2, arrowWidth, arrowHeight);
    }
    ctx.restore();
  }
}
function drawArrowHead(ctx, x1, y1, x2, y2, arrowWidth, arrowHeight) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(
    x2 - arrowHeight * Math.cos(angle) + arrowWidth * Math.sin(angle),
    y2 - arrowHeight * Math.sin(angle) - arrowWidth * Math.cos(angle)
  );
  ctx.lineTo(
    x2 - arrowHeight * Math.cos(angle) - arrowWidth * Math.sin(angle),
    y2 - arrowHeight * Math.sin(angle) + arrowWidth * Math.cos(angle)
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
let Sprite$1 = class Sprite {
  static data() {
    return {
      uuid: uuid$1(),
      type: "sprite",
      x: 100,
      y: 100,
      spriteId: "000",
      sheet: "students",
      sheetItem: "student_w_tablet",
      width: 0.5,
      height: 0.5,
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "spriteId", type: "Text", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "sheet", type: "Text", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "sheetItem", type: "Text", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "width", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "height", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra, assets) {
    try {
      ctx.save();
      let sprite;
      for (let i = 0; i < assets.spriteImages.length; i++) {
        const element = assets.spriteImages[i];
        if (element.name == itemExtra.sheet) {
          sprite = element;
          break;
        }
      }
      if (!sprite) {
        throw Error("Sprite not found");
      }
      sprite.applyItem(itemExtra.sheetItem);
      if (!sprite.selectedData) {
        console.warn("sheetItem not found");
        return;
      }
      ctx.globalAlpha = itemExtra.globalAlpha;
      ctx.drawImage(
        sprite.img,
        sprite.selectedData.sx,
        //x on source image
        sprite.selectedData.sy,
        //y on source image
        sprite.selectedData.sw,
        //width on source image
        sprite.selectedData.sh,
        //height on source image
        itemExtra.x,
        //x on destination image
        itemExtra.y,
        //y on destination image
        sprite.selectedData.sw * Math.abs(itemExtra.width),
        //width on source image
        sprite.selectedData.sh * Math.abs(itemExtra.height)
        //height on source image
      );
      ctx.restore();
    } catch (error) {
    }
  }
};
class Triangle {
  static data() {
    return {
      uuid: uuid$1(),
      type: "triangle",
      x1: 100,
      y1: 100,
      x2: 50,
      y2: 200,
      x3: 200,
      y3: 200,
      lineWidth: 2,
      filled: false,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x1", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "y1", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "x2", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "y2", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "x3", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "y3", type: "Number", config: { min: 0, max: 2e3, step: 1 } });
    dialogueBox.push({ name: "filled", type: "Boolean", config: {} });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "dash", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "gap", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    const x1 = itemExtra.x1;
    const y1 = itemExtra.y1;
    const x2 = itemExtra.x2;
    const y2 = itemExtra.y2;
    const x3 = itemExtra.x3;
    const y3 = itemExtra.y3;
    const color = itemExtra.color || "black";
    const filled = itemExtra.filled;
    const lineWidth = itemExtra.lineWidth || 2;
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const globalAlpha = itemExtra.globalAlpha || 1;
    ctx.lineWidth = lineWidth;
    ctx.globalAlpha = globalAlpha;
    ctx.strokeStyle = color;
    if (dash > 0 && gap > 0) {
      ctx.setLineDash([dash, gap]);
    } else {
      ctx.setLineDash([]);
    }
    if (filled) {
      ctx.stroke();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.stroke();
    }
    ctx.restore();
  }
}
class Line {
  static data() {
    return {
      uuid: uuid$1(),
      type: "line",
      x1: 100,
      y1: 100,
      x2: 300,
      y2: 300,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x1", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y1", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "x2", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y2", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "lineWidth", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "dash", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "gap", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    const x1 = itemExtra.x1;
    const y1 = itemExtra.y1;
    const x2 = itemExtra.x2;
    const y2 = itemExtra.y2;
    const color = itemExtra.color || "black";
    const lineWidth = itemExtra.lineWidth || 1;
    const dash = itemExtra.dash || 0;
    const gap = itemExtra.gap || 0;
    const globalAlpha = itemExtra.globalAlpha || 1;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.globalAlpha = globalAlpha;
    if (dash === 0 && gap === 0) {
      ctx.setLineDash([]);
    } else {
      ctx.setLineDash([dash, gap]);
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }
}
class Lines {
  static data() {
    return {
      uuid: uuid$1(),
      type: "lines",
      x: 100,
      y: 100,
      drawBorder: false,
      filled: true,
      fillBg: false,
      bgColor: "red",
      width: 300,
      height: 200,
      lines: [
        { x: 0, y: 35 },
        { x: 70, y: 35 },
        { x: 70, y: 20 },
        { x: 100, y: 50 },
        { x: 70, y: 80 },
        { x: 70, y: 65 },
        { x: 0, y: 65 },
        { x: 0, y: 35 }
      ],
      color: "yellow",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "drawBorder", type: "Boolean", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "filled", type: "Boolean", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "fillBg", type: "Boolean", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "bgColor", type: "Color", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "width", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "height", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    const x = itemExtra.x;
    const y2 = itemExtra.y;
    const width = itemExtra.width;
    const height = itemExtra.height;
    const drawBorder = itemExtra.drawBorder;
    const fill = itemExtra.filled;
    const color = itemExtra.color;
    const fillBg = itemExtra.fillBg;
    const bgColor = itemExtra.bgColor;
    const lines = itemExtra.lines;
    const percentToPixel = (percent, dimension) => Math.round(percent / 100 * dimension);
    if (!isShapeClosed(lines)) {
      console.error("The shape is not closed. Unable to fill.");
      return;
    }
    ctx.save();
    ctx.globalAlpha = itemExtra.globalAlpha;
    if (fillBg) {
      ctx.fillStyle = bgColor;
      ctx.fillRect(x, y2, width, height);
    }
    ctx.beginPath();
    const startX = x + percentToPixel(lines[0].x, width);
    const startY = y2 + percentToPixel(lines[0].y, height);
    ctx.moveTo(startX, startY);
    for (let i = 1; i < lines.length; i++) {
      const lineX = x + percentToPixel(lines[i].x, width);
      const lineY = y2 + percentToPixel(lines[i].y, height);
      ctx.lineTo(lineX, lineY);
    }
    ctx.closePath();
    if (fill) {
      ctx.fillStyle = color;
      ctx.fill();
    }
    ctx.strokeStyle = color;
    ctx.stroke();
    if (drawBorder) {
      ctx.strokeStyle = bgColor;
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y2, width, height);
    }
    ctx.restore();
  }
}
function isShapeClosed(lines) {
  if (lines.length < 3)
    return false;
  const firstPoint = lines[0];
  const lastPoint = lines[lines.length - 1];
  return firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y;
}
class List {
  static data() {
    return {
      uuid: uuid$1(),
      type: "list",
      x: 100,
      y: 100,
      text: `Hello 
Hello
Hello`,
      fontSize: 20,
      fontFamily: "Arial",
      lineHeightOffset: 10,
      xOffset: 25,
      color: "blue",
      globalAlpha: 1
    };
  }
  static dialogueBox() {
    let dialogueBox = [];
    dialogueBox.push({ name: "x", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "y", type: "Number", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "text", type: "TextArea", config: { min: 0, max: 1e3, step: 1 } });
    dialogueBox.push({ name: "fontSize", type: "Number", config: { min: 0, max: 200, step: 1 } });
    dialogueBox.push({ name: "fontFamily", type: "FontFamily", config: {} });
    dialogueBox.push({ name: "lineHeightOffset", type: "Number", config: { min: 0, max: 100, step: 1 } });
    dialogueBox.push({ name: "xOffset", type: "Number", config: { min: 0, max: 100, step: 1 } });
    dialogueBox.push({ name: "color", type: "Color", config: {} });
    dialogueBox.push({ name: "globalAlpha", type: "Float", config: { min: 0, max: 1, step: 0.01 } });
    return dialogueBox;
  }
  static draw(ctx, itemExtra) {
    ctx.save();
    ctx.shadowOffsetX = itemExtra.shadowOffsetX;
    ctx.shadowOffsetY = itemExtra.shadowOffsetY;
    ctx.shadowBlur = itemExtra.shadowBlur;
    ctx.shadowColor = itemExtra.shadowColor;
    ctx.fillStyle = itemExtra.color;
    ctx.font = itemExtra.fontSize + "px  " + itemExtra.fontFamily;
    ctx.textBaseline = "top";
    ctx.globalAlpha = itemExtra.globalAlpha;
    const lines = itemExtra.text.split("\n");
    lines.forEach((line, index) => {
      const lineHeight = parseInt(itemExtra.fontSize, 10) + itemExtra.lineHeightOffset;
      const yPos = itemExtra.y + index * lineHeight;
      const xPos = itemExtra.x + index * itemExtra.xOffset;
      ctx.fillText(line, xPos, yPos);
    });
    ctx.restore();
  }
}
const ItemsMap = /* @__PURE__ */ new Map();
ItemsMap.set("rectangle", Rectangle);
ItemsMap.set("ellipse", Ellipse);
ItemsMap.set("circle", Circle);
ItemsMap.set("dot", Dot);
ItemsMap.set("piechart", Piechart);
ItemsMap.set("triangle", Triangle);
ItemsMap.set("text", TextObject);
ItemsMap.set("angle", Angle);
ItemsMap.set("icon", Icon);
ItemsMap.set("ray", Ray);
ItemsMap.set("line", Line);
ItemsMap.set("lines", Lines);
ItemsMap.set("list", List);
ItemsMap.set("sprite", Sprite$1);
ItemsMap.set("image", Image);
const Slide = {
  "uuid": "b1e8eb94-cbbd-4133-87ba-ccea71e3f5e3",
  "version": "basic",
  "startTime": 0,
  "endTime": 10,
  "type": "canvas",
  "template": "",
  "items": [
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "1",
        "x": 52.941565746806965,
        "y": 24.3536865779314,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "14",
        "x": 889.4183045463569,
        "y": 205.4180520051605,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "13",
        "x": 749.6525709747866,
        "y": 185.2997891799128,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "12",
        "x": 568.5924161207067,
        "y": 217.06546732504071,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "11",
        "x": 501.88604327973,
        "y": 208.59461981967328,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "10",
        "x": 389.6499238964992,
        "y": 216.0066113868698,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "9",
        "x": 228.7075640262061,
        "y": 193.77063668528027,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "8",
        "x": 52.941565746806965,
        "y": 226.5951707685791,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "7",
        "x": 857.6533650982728,
        "y": 15.882839072563955,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "6",
        "x": 744.3584144001059,
        "y": 27.53025439244419,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "5",
        "x": 624.7104758123221,
        "y": 34.9422459596407,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "4",
        "x": 472.2387664615181,
        "y": 30.706822206956982,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "3",
        "x": 340.94368340943686,
        "y": 28.58911033061512,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "6c05f98d-7bc1-43b5-aad4-df8735e54443",
      "name": "text_950cf2fd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "e605e8cf-66dd-4127-ac80-f88d04384f10",
        "text": "2",
        "x": 202.2367811528026,
        "y": 24.3536865779314,
        "type": "text",
        "fontSize": 60.70682220695698,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#05f5e5",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "e36b1568-bb90-418e-8cfa-af2e78223081",
      "name": "piechart_56df63e4",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "0178487f-e75f-40aa-8803-97f0ea513e3f",
        "type": "piechart",
        "x": 908.5944014294223,
        "y": 111.29538158866629,
        "radius": 50,
        "data": '[{"title": "A", "percent": 30, "color": "red"}, {"title": "B", "percent": 50, "color": "blue"}, {"title": "C", "percent": 20, "color": "green"}]',
        "color": "black",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "1128c022-262e-41cc-b2e0-09d9040dedda",
      "name": "image_6945f262",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "bdd2265d-b7af-4a0e-8758-4ab1369de834",
        "type": "image",
        "src": "/system_images/gen/wood.jpg",
        "image": {},
        "x": 757.0643901793395,
        "y": 263.65512860456164,
        "ext": "jpg",
        "width": 200,
        "height": 78.2315671103431,
        "color": "black",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "720aa277-b8d3-492d-92df-3aca62f774df",
      "name": "sprite_9638a5bc",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "01a059e0-f0cc-4368-9ee9-9fa0486e0d8e",
        "type": "sprite",
        "spriteId": "000",
        "sheet": "students",
        "sheetItem": "student_w_tablet",
        "x": 643.7694394811726,
        "y": 180.00550948905817,
        "width": 0.5,
        "height": 0.5,
        "color": "red",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "5959903f-20c2-440c-8fa8-022dbc1deb31",
      "name": "lines_b8e3e7a2",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "ba83d12b-7b44-4211-89b9-005d865df29c",
        "type": "lines",
        "x": 567.5335848057706,
        "y": 258.360848913707,
        "drawBorder": false,
        "fill": true,
        "color": "yellow",
        "fillBg": false,
        "bgColor": "red",
        "width": 79.763086493283,
        "height": 73.99614335765926,
        "lines": [
          {
            "x": 0,
            "y": 35
          },
          {
            "x": 70,
            "y": 35
          },
          {
            "x": 70,
            "y": 20
          },
          {
            "x": 100,
            "y": 50
          },
          {
            "x": 70,
            "y": 80
          },
          {
            "x": 70,
            "y": 65
          },
          {
            "x": 0,
            "y": 65
          },
          {
            "x": 0,
            "y": 35
          }
        ],
        "globalAlpha": 1
      }
    },
    {
      "uuid": "b229a174-0f77-4fde-80c8-e8cf28af72e9",
      "name": "angle_c594ae1e",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "1c650f5c-1306-4789-8f6f-6c8a557f10ec",
        "type": "angle",
        "x": 523.1212361855602,
        "y": 298.65512860456164,
        "radius": 25,
        "ticks": 3,
        "startAngle": -90,
        "endAngle": 0,
        "lineWidth": 1,
        "showOrigin": true,
        "color": "red",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "df1737b4-c369-43f4-ac73-06d6495b90de",
      "name": "dot_fef218c6",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "b61bc8c8-22b7-4601-831b-a128e191cff6",
        "type": "dot",
        "x": 406.5912249354775,
        "y": 292.2442389351768,
        "label": "label",
        "dot_width": 25,
        "text_color": "yellowbezier",
        "text_size": 40,
        "fill": true,
        "color": "red",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "cd1065f9-0f71-4661-9d54-a3dbd73af18f",
      "name": "icon_07743bcd",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "6ed84827-d0ab-4f17-aed5-4a87edad5636",
        "type": "icon",
        "text": "This is Heading",
        "x": 167.29534775991,
        "y": 240.3602979648012,
        "fontSize": 24.823506055191615,
        "iconSize": 78.8228812365814,
        "fontFamily": "Arial",
        "icon": "🦏",
        "showBg": false,
        "iconOnTop": true,
        "iconErrorX": 0,
        "iconErrorY": 0,
        "bgColor": "gray",
        "color": "red",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "eaf1eb60-ceba-4f4f-8aca-6953881bacf4",
      "name": "ray_d56168ca",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "611375bb-959c-4ea0-abdd-e096de37a159",
        "type": "ray",
        "x0": 15.882469724042089,
        "y0": 286.94995924432214,
        "x1": 129.289921249421,
        "y1": 339.7689838385629,
        "lineWidth": 2,
        "arrowWidth": 8,
        "arrowHeight": 12,
        "startArrow": true,
        "endArrow": true,
        "color": "yellow",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "ee1f44a5-2afd-4a8f-9479-0268ca90f1d2",
      "name": "triangle_c4355189",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "781e770f-e829-4900-946a-5ab85286e0b8",
        "type": "triangle",
        "x1": 731.8873668188737,
        "y1": 58.23707659940117,
        "x2": 681.8873668188737,
        "y2": 158.23707659940135,
        "x3": 831.8873668188737,
        "y3": 158.23707659940135,
        "lineWidth": 2,
        "filled": false,
        "color": "red",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "8a5033b2-aa6d-41d1-abd5-02f9b0e618b2",
      "name": "line_20ad1e9b",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "725dc53b-1071-4790-8c52-ddb15cf4cfcc",
        "type": "line",
        "x1": 591.8867050493018,
        "y1": 40.23652565049535,
        "x2": 666.9446098868374,
        "y2": 159.76347434950463,
        "lineWidth": 1,
        "color": "red",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "11dea328-a4b6-4b06-9907-c6ae420d18f2",
      "name": "list_46ea2ceb",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "d804b09f-9e6e-44c9-804b-d9c27714387e",
        "type": "list",
        "text": "Hello \nHello\nHello",
        "x": 473.29759777645427,
        "y": 99.53245818806745,
        "font": "20px Arial",
        "fontSize": 20,
        "fontFamily": "Arial",
        "lineHeightOffset": 10,
        "xOffset": 25,
        "color": "#ee1111",
        "globalAlpha": 1
      }
    },
    {
      "uuid": "354edd99-186b-40fc-8f0a-3e776145a617",
      "name": "text_5dcd46b9",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "b9a578d5-cddf-49bb-8bb0-8451011e78e3",
        "text": "Add text..",
        "x": 309.17874396135267,
        "y": 104.8267378789221,
        "type": "text",
        "fontSize": 30,
        "fontFamily": "Arial",
        "font": "30px Arial",
        "color": "#060eea",
        "globalAlpha": 1,
        "shadowOffsetX": 0,
        "shadowOffsetY": 0,
        "shadowBlur": 0
      }
    },
    {
      "uuid": "d09b2465-60c2-48f6-8947-70a7e5879e90",
      "name": "ellipse_53d0265f",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "d05d745d-15c1-4ec7-8620-485972e77c8b",
        "type": "ellipse",
        "x": 220.23691350671697,
        "y": 111.17987350794769,
        "radiusX": 50,
        "radiusY": 27.351482782308157,
        "rotation": 0,
        "startAngle": 0,
        "endAngle": 360,
        "lineWidth": 1,
        "fill": true,
        "color": "#f9e50b",
        "showAt": 0,
        "globalAlpha": 1
      }
    },
    {
      "uuid": "fb86d48e-30c2-4d0c-9f9d-5259a81e6ec2",
      "name": "rectangle_53091652",
      "content": "",
      "showAt": 0,
      "hideAt": null,
      "itemExtra": {
        "uuid": "87bcd7c9-d214-482b-8edf-b56145f515f9",
        "type": "rectangle",
        "x": 24.3531202435312,
        "y": 86.82618693001629,
        "width": 100,
        "height": 47.05720309145349,
        "filled": true,
        "lineWidth": 1,
        "color": "red",
        "globalAlpha": 1
      }
    }
  ],
  "slideExtra": {
    "backgroundColor": "#efebb8",
    "canvasWidth": 1e3,
    "canvasHeight": 360,
    "cellHeight": 25,
    "cellWidth": 25,
    "bgImg": "system_images/bg_images/black_mat.jpg",
    "bgGlobalAlpha": 1,
    "xFactor": 0,
    "yFactor": 0,
    "showGrid": false,
    "gridLineWidth": 1,
    "gridLineColor": "gray"
  }
};
function uuid() {
  const randomHex = () => Math.floor(Math.random() * 16).toString(16);
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = randomHex();
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function getNewItem(itemExtra = {}, name = "", content = "") {
  if (!name) {
    const uuidValue = uuid();
    const firstSegment = uuidValue.split("-")[0];
    name = firstSegment;
  }
  return {
    uuid: uuid(),
    //added on 31-may 2024 --not used yet 
    name,
    content,
    showAt: 0,
    hideAt: null,
    //added on 31-may 2024 --not used yet
    itemExtra
  };
}
function getNewSlide(type, slideExtra = {}) {
  if (!slideExtra.imagesUrl) {
    slideExtra.imagesUrl = "https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/";
  }
  return {
    uuid: uuid(),
    name: "New Slide",
    version: "basic",
    startTime: 0,
    endTime: 10,
    type,
    template: "",
    items: [],
    slideExtra
  };
}
class Canvas {
  static ItemsMap = Object.freeze(new Map(ItemsMap));
  static getDemoSlide() {
    return Slide;
  }
  static getDynamicDemoSlide() {
    let xx = 10;
    let yy = 50;
    let dynSlide = Canvas.getNewSlide();
    for (const itemType of ItemsMap.keys()) {
      try {
        const newItem = Canvas.getCanvasNewItem(itemType);
        newItem.itemExtra.x = xx;
        newItem.itemExtra.y = yy;
        xx += 50;
        yy += 4;
        dynSlide.items.push(newItem);
      } catch (error) {
        console.error(`Error creating item of type ${itemType}:`, error);
      }
    }
    return dynSlide;
  }
  static getCanvasNewItem(itemType) {
    const newItemExtra = ItemsMap.get(itemType).data();
    const newItem = Canvas.getNewItem(newItemExtra);
    return newItem;
  }
  static getNewItem(itemExtra = {}, name = "", content = "") {
    return getNewItem(itemExtra, name, content);
  }
  /**
   * 9-Dec-2024 the reason we need seperate newSlide for canvas and are not using the SlideObject.newSlide is that we also have to add the slideExtra of the canvas slide. The difference between 2 slide types is not only the slide.type but also slide.slideExtra.
   * 
   */
  static getNewSlide() {
    const slideExtra = Canvas.getSlideExtra();
    return getNewSlide("canvas", slideExtra);
  }
  static getSlideExtra() {
    return {
      backgroundColor: "#efebb8",
      canvasWidth: 1e3,
      canvasHeight: 360,
      cellHeight: 25,
      cellWidth: 25,
      bgImg: "black_mat",
      bgGlobalAlpha: 1,
      xFactor: 0,
      yFactor: 0,
      ///////////////////
      showGrid: false,
      gridLineWidth: 1,
      gridLineColor: "gray"
    };
  }
  static getAllItemsExtras() {
    const itemsExtras = [];
    for (const [key, ItemClass] of ItemsMap.entries()) {
      if (typeof ItemClass.data === "function") {
        const itemExtra = ItemClass.data();
        itemsExtras.push({
          type: key,
          ...itemExtra
        });
      }
    }
    return itemsExtras;
  }
}
class Sprite2 {
  constructor(name, url) {
    this.name = name;
    this.url = url;
    this.data = [];
    this.selectedData = null;
  }
  addItem(name, sx, sy, sw, sh) {
    this.data.push({
      name,
      sx,
      sy,
      sw,
      sh
    });
  }
  applyItem(name) {
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (item.name == name) {
        this.selectedData = item;
        return;
      }
    }
  }
}
const students = new Sprite2("students", "/sprites/students.png");
students.addItem("student_w_tablet", 183, 317, 225, 350);
students.addItem("student_red", 254, 0, 275, 250);
students.addItem("student_female", 424, 288, 220, 250);
students.addItem("student_black", 540, 0, 260, 266);
const w$1 = 90;
const h$1 = 100;
let y$1 = 0;
const figs = new Sprite2("figs", "/sprites/figs.png");
figs.addItem("flower1", 0, y$1, w$1, h$1);
figs.addItem("flower2", w$1 * 1, y$1, w$1, h$1);
figs.addItem("flower3", w$1 * 2, y$1, w$1, h$1);
figs.addItem("flowe4", w$1 * 3, y$1, w$1, h$1);
figs.addItem("female_stick", w$1 * 4, y$1, w$1, h$1);
figs.addItem("male_stick", w$1 * 5, y$1, w$1, h$1);
figs.addItem("bear_face", w$1 * 6, y$1, w$1, h$1);
figs.addItem("apple", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 1;
figs.addItem("plant_pot", 0, y$1, w$1, h$1);
figs.addItem("penguin", w$1 * 1, y$1, w$1, h$1);
figs.addItem("drum_face", w$1 * 2, y$1, w$1, h$1);
figs.addItem("carrot", w$1 * 3, y$1, w$1, h$1);
figs.addItem("dimond", w$1 * 4, y$1, w$1, h$1);
figs.addItem("spring", w$1 * 5, y$1, w$1, h$1);
figs.addItem("bomb", w$1 * 6, y$1, w$1, h$1);
figs.addItem("paw", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 2;
figs.addItem("line_design1", 0, y$1, w$1, h$1);
figs.addItem("line_design2", w$1 * 1, y$1, w$1, h$1);
figs.addItem("line_design3", w$1 * 2, y$1, w$1, h$1);
figs.addItem("line_design4", w$1 * 3, y$1, w$1, h$1);
figs.addItem("line_design5", w$1 * 4, y$1, w$1, h$1);
figs.addItem("line_design6", w$1 * 5, y$1, w$1, h$1);
figs.addItem("line_design7", w$1 * 6, y$1, w$1, h$1);
figs.addItem("line_design8", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 3;
figs.addItem("line_design9", 0, y$1, w$1, h$1);
figs.addItem("leaf_left", w$1 * 1, y$1, w$1, h$1);
figs.addItem("leaf_right", w$1 * 2, y$1, w$1, h$1);
figs.addItem("cherry", w$1 * 3, y$1, w$1, h$1);
figs.addItem("drop_face", w$1 * 4, y$1, w$1, h$1);
figs.addItem("spring2", w$1 * 5, y$1, w$1, h$1);
figs.addItem("clock", w$1 * 6, y$1, w$1, h$1);
figs.addItem("water_tap_face", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 4;
figs.addItem("smily_face_right", 0, y$1, w$1, h$1);
figs.addItem("frying_pan_right", w$1 * 1, y$1, w$1, h$1);
figs.addItem("spatula_right", w$1 * 2, y$1, w$1, h$1);
figs.addItem("fox_face_left", w$1 * 3, y$1, w$1, h$1);
figs.addItem("evil_moon_face_left", w$1 * 4, y$1, w$1, h$1);
figs.addItem("telephone", w$1 * 5, y$1, w$1, h$1);
figs.addItem("tram_right", w$1 * 6, y$1, w$1, h$1);
figs.addItem("train", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 5;
figs.addItem("car_left", 0, y$1, w$1, h$1);
figs.addItem("puff_right", w$1 * 1, y$1, w$1, h$1);
figs.addItem("signal_right", w$1 * 2, y$1, w$1, h$1);
figs.addItem("plane_right", w$1 * 3, y$1, w$1, h$1);
figs.addItem("sun", w$1 * 4, y$1, w$1, h$1);
figs.addItem("umbrella", w$1 * 5, y$1, w$1, h$1);
figs.addItem("ice_man", w$1 * 6, y$1, w$1, h$1);
figs.addItem("cat_face_normal", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 6;
figs.addItem("octopus_right", 0, y$1, w$1, h$1);
figs.addItem("bow", w$1 * 1, y$1, w$1, h$1);
figs.addItem("fish_right", w$1 * 2, y$1, w$1, h$1);
figs.addItem("ant_left", w$1 * 3, y$1, w$1, h$1);
figs.addItem("duck_left", w$1 * 4, y$1, w$1, h$1);
figs.addItem("chicken_left", w$1 * 5, y$1, w$1, h$1);
figs.addItem("heart", w$1 * 6, y$1, w$1, h$1);
figs.addItem("mouse", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 7;
figs.addItem("mouse_right", 0, y$1, w$1, h$1);
figs.addItem("ghost_left", w$1 * 1, y$1, w$1, h$1);
figs.addItem("leaf_big_left", w$1 * 2, y$1, w$1, h$1);
figs.addItem("pencil_right", w$1 * 3, y$1, w$1, h$1);
figs.addItem("fork", w$1 * 4, y$1, w$1, h$1);
figs.addItem("mickey_mouse_face", w$1 * 5, y$1, w$1, h$1);
figs.addItem("rabit_face", w$1 * 6, y$1, w$1, h$1);
figs.addItem("crown", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 8;
figs.addItem("smily_face_left", 0, y$1, w$1, h$1);
figs.addItem("frying_pan_left", w$1 * 1, y$1, w$1, h$1);
figs.addItem("spatula_left", w$1 * 2, y$1, w$1, h$1);
figs.addItem("fox_face_right", w$1 * 3, y$1, w$1, h$1);
figs.addItem("evil_moon_face_right", w$1 * 4, y$1, w$1, h$1);
figs.addItem("mobile_phone", w$1 * 5, y$1, w$1, h$1);
figs.addItem("tram_left", w$1 * 6, y$1, w$1, h$1);
figs.addItem("tv", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 9;
figs.addItem("car_right", 0, y$1, w$1, h$1);
figs.addItem("puff_left", w$1 * 1, y$1, w$1, h$1);
figs.addItem("signal_left", w$1 * 2, y$1, w$1, h$1);
figs.addItem("plane_left", w$1 * 3, y$1, w$1, h$1);
figs.addItem("cloud_face", w$1 * 4, y$1, w$1, h$1);
figs.addItem("cloud_rain", w$1 * 5, y$1, w$1, h$1);
figs.addItem("paw_big", w$1 * 6, y$1, w$1, h$1);
figs.addItem("cat_face_evil", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 10;
figs.addItem("octopus_left", 0, y$1, w$1, h$1);
figs.addItem("hot_tea", w$1 * 1, y$1, w$1, h$1);
figs.addItem("fish_left", w$1 * 2, y$1, w$1, h$1);
figs.addItem("ant_right", w$1 * 3, y$1, w$1, h$1);
figs.addItem("duck_right", w$1 * 4, y$1, w$1, h$1);
figs.addItem("chicken_right", w$1 * 5, y$1, w$1, h$1);
figs.addItem("shinning_star", w$1 * 6, y$1, w$1, h$1);
figs.addItem("robot", w$1 * 7, y$1, w$1, h$1);
y$1 = h$1 * 11;
figs.addItem("mouse_left", 0, y$1, w$1, h$1);
figs.addItem("ghost_right", w$1 * 1, y$1, w$1, h$1);
figs.addItem("leaf_big_right", w$1 * 2, y$1, w$1, h$1);
figs.addItem("pencil_left", w$1 * 3, y$1, w$1, h$1);
figs.addItem("spoon", w$1 * 4, y$1, w$1, h$1);
figs.addItem("octopus_wave", w$1 * 5, y$1, w$1, h$1);
figs.addItem("dimon2", w$1 * 6, y$1, w$1, h$1);
const w = 80;
const h = 75;
let y = 0;
const alphabets = new Sprite2("alphabets", "/sprites/alphabets.png");
alphabets.addItem("A", w * 0, y, w, h);
alphabets.addItem("B", w * 1, y, w, h);
alphabets.addItem("C", w * 2, y, w, h);
alphabets.addItem("D", w * 3, y, w, h);
alphabets.addItem("E", w * 4, y, w, h);
alphabets.addItem("F", w * 5, y, w, h);
alphabets.addItem("G", w * 6, y, w, h);
alphabets.addItem("H", w * 7, y, w, h);
alphabets.addItem("I", w * 8, y, w, h);
alphabets.addItem("J", w * 9, y, w, h);
alphabets.addItem("K", w * 10, y, w, h);
alphabets.addItem("L", w * 11, y, w, h);
y = h * 1;
alphabets.addItem("M", w * 0, y, w, h);
alphabets.addItem("N", w * 1, y, w, h);
alphabets.addItem("O", w * 2, y, w, h);
alphabets.addItem("P", w * 3, y, w, h);
alphabets.addItem("Q", w * 4, y, w, h);
alphabets.addItem("R", w * 5, y, w, h);
alphabets.addItem("S", w * 6, y, w, h);
alphabets.addItem("T", w * 7, y, w, h);
alphabets.addItem("U", w * 8, y, w, h);
alphabets.addItem("V", w * 9, y, w, h);
alphabets.addItem("W", w * 10, y, w, h);
alphabets.addItem("X", w * 11, y, w, h);
y = h * 2;
alphabets.addItem("Y", w * 0, y, w, h);
alphabets.addItem("Z", w * 1, y, w, h);
alphabets.addItem("a", w * 2, y, w, h);
alphabets.addItem("b", w * 3, y, w, h);
alphabets.addItem("c", w * 4, y, w, h);
alphabets.addItem("d", w * 5, y, w, h);
alphabets.addItem("e", w * 6, y, w, h);
alphabets.addItem("f", w * 7, y, w, h);
alphabets.addItem("g", w * 8, y, w, h);
alphabets.addItem("h", w * 9, y, w, h);
alphabets.addItem("i", w * 10, y, w, h);
alphabets.addItem("j", w * 11, y, w, h);
y = h * 3;
alphabets.addItem("k", w * 0, y, w, h);
alphabets.addItem("l", w * 1, y, w, h);
alphabets.addItem("m", w * 2, y, w, h);
alphabets.addItem("n", w * 3, y, w, h);
alphabets.addItem("o", w * 4, y, w, h);
alphabets.addItem("p", w * 5, y, w, h);
alphabets.addItem("q", w * 6, y, w, h);
alphabets.addItem("r", w * 7, y, w, h);
alphabets.addItem("s", w * 8, y, w, h);
alphabets.addItem("t", w * 9, y, w, h);
alphabets.addItem("u", w * 10, y, w, h);
alphabets.addItem("v", w * 11, y, w, h);
y = h * 4;
alphabets.addItem("w", w * 0, y, w, h);
alphabets.addItem("x", w * 1, y, w, h);
alphabets.addItem("y", w * 2, y, w, h);
alphabets.addItem("z", w * 3, y, w, h);
alphabets.addItem("0", w * 4, y, w, h);
alphabets.addItem("1", w * 5, y, w, h);
alphabets.addItem("2", w * 6, y, w, h);
alphabets.addItem("3", w * 7, y, w, h);
alphabets.addItem("4", w * 8, y, w, h);
alphabets.addItem("5", w * 9, y, w, h);
alphabets.addItem("6", w * 10, y, w, h);
alphabets.addItem("7", w * 11, y, w, h);
y = h * 5;
y += 5;
alphabets.addItem("8", w * 0, y, w, h);
alphabets.addItem("9", w * 1, y, w, h);
alphabets.addItem("fullstio", w * 2, y, w, h);
alphabets.addItem("comma", w * 3, y, w, h);
alphabets.addItem("semi_colon", w * 4, y, w, h);
alphabets.addItem("colon", w * 5, y, w, h);
alphabets.addItem("question_mark", w * 6, y, w, h);
alphabets.addItem("exclamation", w * 7, y, w, h);
alphabets.addItem("dash", w * 8, y, w, h);
alphabets.addItem("pound", w * 9, y, w, h);
alphabets.addItem("double_quote", w * 10, y, w, h);
alphabets.addItem("single_quote", w * 11, y, w, h);
y = h * 6;
alphabets.addItem("ampersand", w * 0, y, w, h);
alphabets.addItem("left_bracket", w * 1, y, w, h);
alphabets.addItem("right_bracket", w * 2, y, w, h);
alphabets.addItem("right_angle_bracket", w * 3, y, w, h);
alphabets.addItem("left_angle_bracket", w * 4, y, w, h);
alphabets.addItem("tilda", w * 5, y, w, h);
alphabets.addItem("backslash", w * 6, y, w, h);
alphabets.addItem("frontslash", w * 7, y, w, h);
alphabets.addItem("registered", w * 8, y, w, h);
alphabets.addItem("foot_mark", w * 9, y, w, h);
alphabets.addItem("degree_mark", w * 10, y, w, h);
alphabets.addItem("plus", w * 11, y, w, h);
y = h * 7;
alphabets.addItem("isequal", w * 0, y, w, h);
alphabets.addItem("multiply", w * 1, y, w, h);
alphabets.addItem("dollar", w * 2, y, w, h);
alphabets.addItem("greatherThan", w * 3, y, w, h);
alphabets.addItem("smallerThan", w * 4, y, w, h);
alphabets.addItem("divide", w * 5, y, w, h);
const people = new Sprite2("people", "/sprites/people.png");
people.addItem("man_tblt_stndg", 0, 0, 115, 258);
people.addItem("mf_wlk_biz", 150, 0, 200, 250);
people.addItem("mf_stnd_read", 380, 0, 180, 240);
people.addItem("gp_selfy", 570, 0, 250, 250);
people.addItem("boy_googles", 860, 0, 130, 250);
people.addItem("mf_travellers", 0, 280, 200, 250);
people.addItem("m_h_phone_wlk", 225, 275, 125, 255);
people.addItem("crowd", 355, 250, 400, 280);
people.addItem("mf_mbl_wlk", 530, 260, 230, 270);
people.addItem("old_cpl_jog", 800, 270, 200, 260);
people.addItem("mom_kids_study", 0, 530, 315, 250);
people.addItem("sofa_3people_rdng", 335, 550, 400, 240);
people.addItem("3teen_Students", 760, 530, 230, 260);
people.addItem("f_lazy_chair_tblt", 5, 800, 184, 218);
people.addItem("biz_dnr", 230, 790, 420, 228);
people.addItem("sun_bathing", 650, 800, 347, 221);
class SlideRegistry {
  constructor() {
    if (SlideRegistry.instance) {
      return SlideRegistry.instance;
    }
    SlideRegistry.instance = this;
    this.slideTypes = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    if (!SlideRegistry.instance) {
      SlideRegistry.instance = new SlideRegistry();
    }
    return SlideRegistry.instance;
  }
  registerSlideType(slideModule) {
    this.slideTypes.set(slideModule.type, slideModule);
  }
  getPlayerComponent(type) {
    return this.slideTypes.get(type)?.PlayerComponent;
  }
  getEditorComponent(type) {
    return this.slideTypes.get(type)?.EditorComponent;
  }
}
SlideRegistry.getInstance();
const InputNumber = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let valueWithoutDecimal;
  let { value } = $$props;
  let { config } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  valueWithoutDecimal = value ? Math.trunc(value) : value;
  return `  <input type="number"${add_attribute("min", config.min, 0)}${add_attribute("max", config.max, 0)}${add_attribute("step", config.step, 0)}${add_attribute("value", valueWithoutDecimal, 0)} class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500 text-xs">`;
});
const InputFloat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formattedValue;
  let { value } = $$props;
  let { config } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  formattedValue = value === null || value === void 0 ? "" : value.toFixed(2);
  return `<input type="number"${add_attribute("min", config?.min || 0, 0)}${add_attribute("max", config?.max || 1, 0)}${add_attribute("step", config?.step || 0.01, 0)}${add_attribute("value", formattedValue, 0)} class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500 text-xs">`;
});
const InputText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `  <input type="text" class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500"${add_attribute("value", value, 0)}>`;
});
const InputTextArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value } = $$props;
  let { redraw } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.redraw === void 0 && $$bindings.redraw && redraw !== void 0)
    $$bindings.redraw(redraw);
  return `  <textarea class="bg-gray-900 text-white text-sm p-1 rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500">${escape(value || "")}</textarea>`;
});
const InputCheckbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { redraw } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.redraw === void 0 && $$bindings.redraw && redraw !== void 0)
    $$bindings.redraw(redraw);
  return `  <input type="checkbox" ${value ? "checked" : ""} class="bg-gray-900 text-white rounded-md border border-gray-600 focus:ring-1 focus:ring-pink-500">`;
});
const InputColor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { value } = $$props;
  let { redraw } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.redraw === void 0 && $$bindings.redraw && redraw !== void 0)
    $$bindings.redraw(redraw);
  return `  <input type="color" class="bg-gray-900 text-white rounded-md border border-gray-600 p-1 focus:ring-1 focus:ring-pink-500"${add_attribute("value", value, 0)}>`;
});
const FontFamilyDD = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  const options = [
    "Times New Roman",
    "Courier New",
    "Georgia",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Impact",
    "Gill Sans"
  ];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<select class="bg-gray-900 text-white text-xs"><option value="" data-svelte-h="svelte-lzn8xl">Select Font</option>${each(options, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(option)}</option>`;
  })}</select>`;
});
const PresnetationStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  const options = ["empty", "filled", "locked", "final"];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<select class="bg-gray-900 text-white text-xs"><option value="" data-svelte-h="svelte-jpeleo">Select</option>${each(options, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(option)}</option>`;
  })}</select>`;
});
const PresnetationType = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  const options = ["paid", "login", "free"];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<select class="bg-gray-900 text-white text-xs"><option value="" data-svelte-h="svelte-jpeleo">Select</option>${each(options, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(option)}</option>`;
  })}</select>`;
});
const DialogueBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let { dialogueBox } = $$props;
  const componentMap = {
    number: InputNumber,
    float: InputFloat,
    textArea: InputTextArea,
    text: InputText,
    boolean: InputCheckbox,
    color: InputColor,
    fontFamily: FontFamilyDD,
    presnetationType: PresnetationType,
    presnetationStatus: PresnetationStatus
  };
  const isValidType = (type) => Object.keys(componentMap).includes(type);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.dialogueBox === void 0 && $$bindings.dialogueBox && dialogueBox !== void 0)
    $$bindings.dialogueBox(dialogueBox);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${item ? `<div class="flex flex-col overflow-y-auto max-h-[70vh] rounded-lg shadow mx-2 my-2"><div class="border-b border-gray-700">${each(dialogueBox, (dialogueItem) => {
      return `${isValidType(dialogueItem.type) && item.hasOwnProperty(dialogueItem.fieldName) ? `<div class="border border-gray-700 px-2 text-[10px] text-yellow-200 text-left">${escape(dialogueItem.title)}</div> <div class="border border-gray-700 px-2 py-1">${validate_component(componentMap[dialogueItem.type] || missing_component, "svelte:component").$$render(
        $$result,
        {
          config: dialogueItem.config || {},
          value: item[dialogueItem.fieldName]
        },
        {
          value: ($$value) => {
            item[dialogueItem.fieldName] = $$value;
            $$settled = false;
          }
        },
        {}
      )} </div>` : `${!isValidType(dialogueItem.type) ? `<div class="text-red-500 text-xs px-2">Invalid type: ${escape(dialogueItem.type)}</div>` : `<div class="text-red-500 text-xs px-2">Missing field: ${escape(dialogueItem.fieldName)}</div>`}`}`;
    })}</div></div>` : `<h6 class="text-sm text-gray-400" data-svelte-h="svelte-14jc0mw">No item selected</h6>`}`;
  } while (!$$settled);
  return $$rendered;
});
const SlideEditBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  const dialogueBox = [
    {
      fieldName: "questionType",
      title: "Type",
      type: "presnetationType"
    },
    {
      fieldName: "status",
      title: "Status",
      type: "presnetationStatus"
    },
    {
      fieldName: "chapter",
      title: "Chapter",
      type: "number"
    },
    {
      fieldName: "exercise",
      title: "Exercise",
      type: "text"
    },
    {
      fieldName: "questionNo",
      title: "Question Number",
      type: "number"
    },
    {
      fieldName: "part",
      title: "Part",
      type: "number"
    }
  ];
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `<h1 data-svelte-h="svelte-eob74h">Edit Slide</h1> ${validate_component(DialogueBox, "DialogueBox").$$render($$result, { item, dialogueBox }, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let presentation;
  let showSlideEditBox = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Nav, "Nav").$$render(
      $$result,
      { presentation, showSlideEditBox },
      {
        showSlideEditBox: ($$value) => {
          showSlideEditBox = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${showSlideEditBox ? ` ${validate_component(SlideEditBox, "SlideEditBox").$$render(
      $$result,
      { item: presentation },
      {
        item: ($$value) => {
          presentation = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div class="w-full bg-gray-800">${``}</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-iSogBz81.js.map
