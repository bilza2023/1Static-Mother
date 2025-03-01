class W {
  constructor(t, e, i = {}, s) {
    this.ctx = t, this.canvas = e, this.slideExtra = { ...this.getSlideExtra(), ...i }, this.assets = s;
  }
  getSlideExtra() {
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
      showGrid: !1,
      gridLineWidth: 1,
      gridLineColor: "gray"
    };
  }
  clear() {
    const { ctx: t, canvas: e, slideExtra: i } = this, s = i.backgroundColor || "gray";
    t.clearRect(0, 0, e.width, e.height), t.fillStyle = s, t.fillRect(0, 0, e.width, e.height);
  }
  drawBackground() {
    this.slideExtra.bgGlobalAlpha || (this.slideExtra.bgGlobalAlpha = 1), this.clear(), this.drawBackgroundImage(), this.slideExtra.showGrid && this.drawGrid();
  }
  drawBackgroundImage() {
    const { slideExtra: t, assets: e } = this;
    if (t.bgImg && e.bgImages) {
      for (const i of e.bgImages)
        if (i.name === t.bgImg) {
          this.bgImage(i.img, t.bgGlobalAlpha);
          break;
        }
    }
  }
  bgImage(t, e = 1) {
    const { ctx: i, canvas: s } = this;
    i.globalAlpha = e, i.drawImage(t, 0, 0, s.width, s.height), i.globalAlpha = 1;
  }
  drawGrid() {
    const { ctx: t, canvas: e, slideExtra: i } = this, {
      cellWidth: s = 100,
      cellHeight: a = 100,
      gridLineWidth: h = 2,
      gridLineColor: n = "black"
    } = i;
    t.save(), t.translate(0.5, 0.5), t.imageSmoothingEnabled = !1, t.strokeStyle = n, t.lineWidth = h;
    for (let r = s; r < e.width; r += s)
      t.beginPath(), t.moveTo(r, 0), t.lineTo(r, e.height), t.stroke();
    for (let r = a; r < e.height; r += a)
      t.beginPath(), t.moveTo(0, r), t.lineTo(e.width, r), t.stroke();
    t.restore();
  }
  drawItems(t = []) {
    const { ctx: e, assets: i } = this;
    t.forEach((s) => {
      typeof s.draw == "function" && s.draw(e, i);
    });
  }
  draw(t = []) {
    this.drawBackground(), this.drawItems(t);
  }
}
class M {
  constructor(t, e) {
    this.canvas = t, this.items = e, this.callbacks = {
      click: null,
      dblclick: null,
      mousedown: null,
      mousemove: null,
      mouseup: null
    }, this.initListeners();
  }
  initListeners() {
    this.canvas.addEventListener("click", (t) => this.handleEvent(t, "click")), this.canvas.addEventListener("dblclick", (t) => this.handleEvent(t, "dblclick")), this.canvas.addEventListener("mousedown", (t) => this.handleEvent(t, "mousedown")), this.canvas.addEventListener("mousemove", (t) => this.handleEvent(t, "mousemove")), this.canvas.addEventListener("mouseup", (t) => this.handleEvent(t, "mouseup"));
  }
  handleEvent(t, e) {
    const i = this.canvas.getBoundingClientRect(), s = t.clientX - i.left, a = t.clientY - i.top;
    let h = null;
    for (let n of this.items)
      if (n.isHit(s, a)) {
        h = n;
        break;
      }
    this.callbacks[e] && this.callbacks[e](t, h);
  }
  on(t, e) {
    this.callbacks[t] !== void 0 && (this.callbacks[t] = e);
  }
}
class D {
  constructor() {
    this.callbacks = {
      keydown: null,
      keyup: null
    }, this.initListeners();
  }
  initListeners() {
    document.addEventListener("keydown", (t) => this.handleEvent(t, "keydown")), document.addEventListener("keyup", (t) => this.handleEvent(t, "keyup"));
  }
  handleEvent(t, e) {
    this.callbacks[e] && this.callbacks[e](t);
  }
  on(t, e) {
    this.callbacks[t] !== void 0 && (this.callbacks[t] = e);
  }
}
class l {
  constructor(t = {}) {
    this.itemExtra = t;
  }
  // Subclasses should override this to provide their default properties.
  static itemExtraData() {
    return {};
  }
  // Abstract method: subclasses must implement their own drawing.
  draw(t) {
    throw new Error("draw() must be implemented by subclasses");
  }
  // Returns the bounding rectangle using standardized methods
  getBoundingRectangle() {
    return {
      x: this.boundingRectangleX(),
      y: this.boundingRectangleY(),
      width: this.boundingRectangleWidth(),
      height: this.boundingRectangleHeight()
    };
  }
  // Default bounding rectangle calculations. Override in subclasses if needed.
  boundingRectangleX() {
    return this.x;
  }
  boundingRectangleY() {
    return this.y;
  }
  boundingRectangleWidth() {
    return this.width;
  }
  boundingRectangleHeight() {
    return this.height;
  }
  // Standardized hit detection based on bounding rectangle.
  // Only override if an item cannot define an accurate bounding rectangle.
  isHit(t, e) {
    const { x: i, y: s, width: a, height: h } = this.getBoundingRectangle();
    return t >= i && t <= i + a && e >= s && e <= s + h;
  }
  // Basic property accessors—subclasses can override these to implement shape-specific logic.
  get x() {
    return this.itemExtra.x || 0;
  }
  set x(t) {
    this.itemExtra.x = t;
  }
  get y() {
    return this.itemExtra.y || 0;
  }
  set y(t) {
    this.itemExtra.y = t;
  }
  get width() {
    return this.itemExtra.width || 0;
  }
  set width(t) {
    this.itemExtra.width = t;
  }
  get height() {
    return this.itemExtra.height || 0;
  }
  set height(t) {
    this.itemExtra.height = t;
  }
  set(t, e) {
    return t in this.itemExtra ? (this.itemExtra[t] = e, e) : !1;
  }
  ///////////////////////////////////
  align(t, e = 0, i = 0) {
    if (!this.env) {
      console.warn("Environment is not set for this item.");
      return;
    }
    const s = l.env.getCanvasWidth(), a = l.env.getCanvasHeight();
    switch (t) {
      case "top":
        this.x = (s - this.width) / 2 + e, this.y = 0 + i;
        break;
      case "bottom":
        this.x = (s - this.width) / 2 + e, this.y = a - this.height + i;
        break;
      case "left":
        this.x = 0 + e, this.y = (a - this.height) / 2 + i;
        break;
      case "right":
        this.x = s - this.width + e, this.y = (a - this.height) / 2 + i;
        break;
      case "center":
        this.x = (s - this.width) / 2 + e, this.y = (a - this.height) / 2 + i;
        break;
      case "top-left":
        this.x = 0 + e, this.y = 0 + i;
        break;
      case "top-right":
        this.x = s - this.width + e, this.y = 0 + i;
        break;
      case "bottom-left":
        this.x = 0 + e, this.y = a - this.height + i;
        break;
      case "bottom-right":
        this.x = s - this.width + e, this.y = a - this.height + i;
        break;
      default:
        console.warn(`Invalid alignment: ${t}`);
        break;
    }
  }
  ///////////////////////////////////
}
function o() {
  const d = () => Math.floor(Math.random() * 16).toString(16);
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = d();
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
class c extends l {
  constructor(t) {
    super(t || c.itemExtraData());
  }
  static itemExtraData() {
    return {
      uuid: o(),
      type: "rectangle",
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      filled: !0,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }
  draw(t, e = {}) {
    t.save(), t.lineWidth = this.itemExtra.lineWidth, t.globalAlpha = this.itemExtra.globalAlpha, this.itemExtra.dash > 0 || this.itemExtra.gap > 0 ? t.setLineDash([this.itemExtra.dash, this.itemExtra.gap]) : t.setLineDash([]), this.itemExtra.filled ? (t.fillStyle = this.itemExtra.color, t.fillRect(this.x, this.y, this.width, this.height)) : (t.strokeStyle = this.itemExtra.color, t.strokeRect(this.x, this.y, this.width, this.height)), t.restore();
  }
}
class E extends l {
  constructor(t) {
    super(t || E.itemExtraData());
  }
  static itemExtraData() {
    return {
      uuid: o(),
      type: "circle",
      x: 150,
      y: 150,
      radius: 50,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      filled: !1,
      color: "gray",
      globalAlpha: 1
    };
  }
  boundingRectangleWidth() {
    return this.itemExtra.radius * 2;
  }
  boundingRectangleHeight() {
    return this.itemExtra.radius * 2;
  }
  // Override bounding calculations for a circle.
  boundingRectangleX() {
    return this.x - this.itemExtra.radius;
  }
  boundingRectangleY() {
    return this.y - this.itemExtra.radius;
  }
  // Use radius to compute width and height.
  get width() {
    return this.itemExtra.radius * 2;
  }
  set width(t) {
    this.itemExtra.radius = t / 2;
  }
  get height() {
    return this.itemExtra.radius * 2;
  }
  set height(t) {
    this.itemExtra.radius = t / 2;
  }
  draw(t, e = {}) {
    t.save(), t.lineWidth = this.itemExtra.lineWidth, t.globalAlpha = this.itemExtra.globalAlpha, t.beginPath(), t.arc(this.x, this.y, this.itemExtra.radius, this.itemExtra.startAngle, this.itemExtra.endAngle), this.itemExtra.filled ? (t.fillStyle = this.itemExtra.color, t.fill()) : (t.strokeStyle = this.itemExtra.color, t.stroke()), t.restore();
  }
}
class b extends l {
  constructor(t) {
    super(t || b.itemExtraData());
  }
  static itemExtraData() {
    return {
      uuid: o(),
      type: "ellipse",
      x: 100,
      y: 100,
      radiusX: 50,
      radiusY: 75,
      rotation: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      lineWidth: 1,
      filled: !1,
      color: "red",
      globalAlpha: 1
    };
  }
  boundingRectangleWidth() {
    return this.itemExtra.radiusX * 2;
  }
  boundingRectangleHeight() {
    return this.itemExtra.radiusY * 2;
  }
  // Override bounding calculations using respective radii.
  boundingRectangleX() {
    return this.x - this.itemExtra.radiusX;
  }
  boundingRectangleY() {
    return this.y - this.itemExtra.radiusY;
  }
  // Use radii to compute width and height.
  get width() {
    return this.itemExtra.radiusX * 2;
  }
  set width(t) {
    this.itemExtra.radiusX = t / 2;
  }
  get height() {
    return this.itemExtra.radiusY * 2;
  }
  set height(t) {
    this.itemExtra.radiusY = t / 2;
  }
  draw(t, e = {}) {
    t.save(), t.lineWidth = this.itemExtra.lineWidth, t.globalAlpha = this.itemExtra.globalAlpha, t.beginPath(), t.ellipse(this.x, this.y, this.itemExtra.radiusX, this.itemExtra.radiusY, this.itemExtra.rotation, this.itemExtra.startAngle, this.itemExtra.endAngle), this.itemExtra.filled ? (t.fillStyle = this.itemExtra.color, t.fill()) : (t.strokeStyle = this.itemExtra.color, t.stroke()), t.restore();
  }
}
class w extends l {
  constructor(t) {
    super(t || w.itemExtraData());
  }
  static itemExtraData() {
    return {
      uuid: o(),
      type: "line",
      x1: 100,
      y1: 100,
      x2: 300,
      y2: 200,
      lineWidth: 2,
      dash: 0,
      gap: 0,
      color: "blue",
      globalAlpha: 1
    };
  }
  boundingRectangleWidth() {
    return this.width;
  }
  boundingRectangleHeight() {
    return this.height;
  }
  boundingRectangleX() {
    return Math.min(this.itemExtra.x1, this.itemExtra.x2);
  }
  boundingRectangleY() {
    return Math.min(this.itemExtra.y1, this.itemExtra.y2);
  }
  get width() {
    return Math.abs(this.itemExtra.x2 - this.itemExtra.x1);
  }
  set width(t) {
    this.itemExtra.x2 = this.itemExtra.x1 + t;
  }
  get height() {
    return Math.abs(this.itemExtra.y2 - this.itemExtra.y1);
  }
  set height(t) {
    this.itemExtra.y2 = this.itemExtra.y1 + t;
  }
  draw(t) {
    t.save(), t.lineWidth = this.itemExtra.lineWidth, t.globalAlpha = this.itemExtra.globalAlpha, t.strokeStyle = this.itemExtra.color, t.setLineDash([this.itemExtra.dash, this.itemExtra.gap]), t.beginPath(), t.moveTo(this.x, this.y), t.lineTo(this.x + this.width, this.y + this.height), t.stroke(), t.restore();
  }
}
class y extends l {
  constructor(t) {
    super(t || y.itemExtraData());
  }
  static itemExtraData() {
    return {
      uuid: o(),
      type: "ray",
      x1: 150,
      y1: 150,
      x2: 350,
      y2: 250,
      arrowWidth: 8,
      arrowHeight: 12,
      startArrow: !0,
      endArrow: !0,
      lineWidth: 2,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }
  boundingRectangleWidth() {
    return this.width;
  }
  boundingRectangleHeight() {
    return this.height;
  }
  boundingRectangleX() {
    return Math.min(this.itemExtra.x1, this.itemExtra.x2);
  }
  boundingRectangleY() {
    return Math.min(this.itemExtra.y1, this.itemExtra.y2);
  }
  get width() {
    return Math.abs(this.itemExtra.x2 - this.itemExtra.x1);
  }
  set width(t) {
    this.itemExtra.x2 = this.itemExtra.x1 + t;
  }
  get height() {
    return Math.abs(this.itemExtra.y2 - this.itemExtra.y1);
  }
  set height(t) {
    this.itemExtra.y2 = this.itemExtra.y1 + t;
  }
  draw(t) {
    t.save(), t.lineWidth = this.itemExtra.lineWidth, t.globalAlpha = this.itemExtra.globalAlpha, t.strokeStyle = this.itemExtra.color, t.fillStyle = this.itemExtra.color, t.setLineDash([this.itemExtra.dash, this.itemExtra.gap]), t.beginPath(), t.moveTo(this.x, this.y), t.lineTo(this.x + this.width, this.y + this.height), t.stroke(), this.itemExtra.startArrow && this.drawArrowHead(t, this.itemExtra.x2, this.itemExtra.y2, this.itemExtra.x1, this.itemExtra.y1), this.itemExtra.endArrow && this.drawArrowHead(t, this.itemExtra.x1, this.itemExtra.y1, this.itemExtra.x2, this.itemExtra.y2), t.restore();
  }
  drawArrowHead(t, e, i, s, a) {
    const h = Math.atan2(a - i, s - e), n = this.itemExtra.arrowWidth, r = this.itemExtra.arrowHeight;
    t.save(), t.translate(s, a), t.rotate(h), t.beginPath(), t.moveTo(0, 0), t.lineTo(-r, n / 2), t.lineTo(-r, -n / 2), t.closePath(), t.fill(), t.stroke(), t.restore();
  }
}
class p extends l {
  constructor(t) {
    super(t || p.itemExtraData());
  }
  static itemExtraData() {
    return {
      uuid: o(),
      type: "triangle",
      x1: 100,
      y1: 100,
      x2: 50,
      y2: 200,
      x3: 200,
      y3: 200,
      lineWidth: 2,
      filled: !1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    };
  }
  boundingRectangleWidth() {
    return Math.max(this.itemExtra.x1, this.itemExtra.x2, this.itemExtra.x3) - this.boundingRectangleX();
  }
  boundingRectangleHeight() {
    return Math.max(this.itemExtra.y1, this.itemExtra.y2, this.itemExtra.y3) - this.boundingRectangleY();
  }
  get width() {
    return this.boundingRectangleWidth();
  }
  get height() {
    return this.boundingRectangleHeight();
  }
  boundingRectangleX() {
    return Math.min(this.itemExtra.x1, this.itemExtra.x2, this.itemExtra.x3);
  }
  boundingRectangleY() {
    return Math.min(this.itemExtra.y1, this.itemExtra.y2, this.itemExtra.y3);
  }
  get width() {
    return Math.max(this.itemExtra.x1, this.itemExtra.x2, this.itemExtra.x3) - this.boundingRectangleX();
  }
  get height() {
    return Math.max(this.itemExtra.y1, this.itemExtra.y2, this.itemExtra.y3) - this.boundingRectangleY();
  }
  draw(t) {
    t.save(), t.lineWidth = this.itemExtra.lineWidth, t.globalAlpha = this.itemExtra.globalAlpha, t.strokeStyle = this.itemExtra.color, t.fillStyle = this.itemExtra.color, t.setLineDash([this.itemExtra.dash, this.itemExtra.gap]), t.beginPath(), t.moveTo(this.itemExtra.x1, this.itemExtra.y1), t.lineTo(this.itemExtra.x2, this.itemExtra.y2), t.lineTo(this.itemExtra.x3, this.itemExtra.y3), t.closePath(), this.itemExtra.filled && t.fill(), t.stroke(), t.restore();
  }
}
class f extends l {
  constructor(t) {
    super(t || f.itemExtraData());
  }
  static itemExtraData() {
    return {
      uuid: o(),
      type: "image",
      x: 50,
      y: 50,
      src: "wood.jpg",
      // This is just the reference name
      width: 200,
      height: 200,
      globalAlpha: 1
    };
  }
  draw(t) {
    t.save(), t.globalAlpha = this.itemExtra.globalAlpha;
    const e = this.env.assets.getImage(this.itemExtra.src), i = e ? e.img : null;
    i ? t.drawImage(
      i,
      this.x,
      this.y,
      this.width,
      this.height
    ) : (t.fillStyle = "gray", t.fillRect(
      this.x,
      this.y,
      this.width,
      this.height
    ), t.fillStyle = "white", t.font = "16px Arial", t.textAlign = "center", t.fillText(`${this.itemExtra.src}: not found`, this.x + this.width / 2, this.y + this.height / 2)), t.restore();
  }
  boundingRectangleX() {
    return this.x;
  }
  boundingRectangleY() {
    return this.y;
  }
  boundingRectangleWidth() {
    return this.width;
  }
  boundingRectangleHeight() {
    return this.height;
  }
}
function H() {
  const d = () => Math.floor(Math.random() * 16).toString(16);
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = d();
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
class v extends l {
  constructor(t) {
    super(t || v.itemExtraData());
  }
  // Default properties remain static.
  static itemExtraData() {
    return {
      uuid: H(),
      type: "text",
      x: 100,
      y: 100,
      text: "Add text..",
      fontSize: 30,
      fontFamily: "Arial",
      color: "black",
      globalAlpha: 1,
      width: 0,
      height: 0
    };
  }
  // Instance draw method: uses the environment (this.env) to get ctx.
  draw(t, e = {}) {
    this.itemExtra.fontSize || (this.itemExtra.fontSize = 40), this.itemExtra.fontFamily || (this.itemExtra.fontFamily = "Arial"), t.save();
    const { text: i, x: s, y: a, globalAlpha: h, color: n, fontSize: r, fontFamily: m } = this.itemExtra;
    t.shadowOffsetX = 0, t.shadowOffsetY = 0, t.shadowBlur = 0, t.globalAlpha = h, t.fillStyle = n, t.font = `${r}px ${m}`, t.textBaseline = "top", t.fillText(i, s, a), t.restore();
  }
  // Use the environment's text measurement function for width.
  get width() {
    return this.itemExtra.width === 0 && (this.itemExtra.width = this.env.getTextWidth(
      this.itemExtra.text,
      this.itemExtra.fontSize,
      this.itemExtra.fontFamily
    )), this.itemExtra.width;
  }
  get height() {
    return this.env.getTextWidth("W", this.itemExtra.fontSize, this.itemExtra.fontFamily);
  }
  boundingRectangleX() {
    return this.x;
  }
  boundingRectangleY() {
    return this.y;
  }
  boundingRectangleWidth() {
    return this.width;
  }
  boundingRectangleHeight() {
    return this.height;
  }
  // Setters that adjust the fontSize, then reset cached dimensions.
  set width(t) {
    this.itemExtra.fontSize += t / 10, this.itemExtra.width = 0;
  }
  set height(t) {
    this.itemExtra.fontSize += t / 10, this.itemExtra.height = 0;
  }
}
class u extends l {
  constructor(t) {
    super(t || u.itemExtraData());
  }
  static itemExtraData() {
    return {
      uuid: o(),
      type: "list",
      x: 100,
      y: 100,
      listArray: [
        "First item",
        "Second item",
        "Third item"
      ],
      fontSize: 20,
      fontFamily: "Arial",
      color: "black",
      lineGap: 5,
      indentation: 5,
      globalAlpha: 1
    };
  }
  draw(t) {
    t.save(), t.globalAlpha = this.itemExtra.globalAlpha, t.fillStyle = this.itemExtra.color, t.font = `${this.itemExtra.fontSize}px ${this.itemExtra.fontFamily}`;
    let { x: e, y: i, listArray: s, lineGap: a, indentation: h } = this.itemExtra, n = 0, r = this.itemExtra.fontSize + a;
    s.forEach((m, g) => {
      t.fillText(m, e + n, i + g * r), n += h;
    }), t.restore();
  }
}
class A extends l {
  constructor(t) {
    super(t || A.itemExtraData());
  }
  static itemExtraData() {
    return {
      uuid: o(),
      type: "piechart",
      x: 200,
      y: 200,
      radius: 100,
      data: [
        { label: "A", percentage: 30, color: "red" },
        { label: "B", percentage: 50, color: "blue" },
        { label: "C", percentage: 20, color: "green" }
      ],
      showLabels: !0,
      labelFontSize: 14,
      labelColor: "black",
      globalAlpha: 1
    };
  }
  draw(t) {
    t.save(), t.globalAlpha = this.itemExtra.globalAlpha;
    let { x: e, y: i, radius: s, data: a, showLabels: h, labelFontSize: n, labelColor: r } = this.itemExtra, m = 0;
    a.forEach((g) => {
      let x = g.percentage / 100 * 2 * Math.PI;
      if (t.beginPath(), t.moveTo(e, i), t.arc(e, i, s, m, m + x), t.closePath(), t.fillStyle = g.color, t.fill(), t.stroke(), h) {
        let R = m + x / 2, S = e + Math.cos(R) * (s * 0.7), I = i + Math.sin(R) * (s * 0.7);
        t.fillStyle = r, t.font = `${n}px Arial`, t.textAlign = "center", t.textBaseline = "middle", t.fillText(g.label, S, I);
      }
      m += x;
    }), t.restore();
  }
}
class k extends l {
  constructor(t) {
    super(t || k.itemExtraData()), this.setDefaultSelectedItem();
  }
  static itemExtraData() {
    return {
      uuid: o(),
      type: "sprite",
      src: "unknown",
      // Default until set dynamically
      selectedItem: null,
      width: 200,
      height: 200,
      globalAlpha: 1
    };
  }
  setDefaultSelectedItem() {
    if (!this.env || !this.env.assets) return;
    const t = this.env.assets.getSprite(this.itemExtra.src);
    t && t.data.length > 0 && this.setSelectedItem(t.data[0].name);
  }
  getAvailableItems() {
    if (!this.env || !this.env.assets) return [];
    const t = this.env.assets.getSprite(this.itemExtra.src);
    return t ? t.data.map((e) => e.name) : [];
  }
  setSelectedItem(t) {
    if (!this.env || !this.env.assets) return;
    const e = this.env.assets.getSprite(this.itemExtra.src);
    e && (e.applyItem(t), this.itemExtra.selectedItem = e.selectedData);
  }
  draw(t) {
    if (t.save(), t.globalAlpha = this.itemExtra.globalAlpha, !this.env || !this.env.assets) {
      console.warn("Cannot draw sprite: environment or assets missing.");
      return;
    }
    const e = this.env.assets.getSprite(this.itemExtra.src), i = e ? e.img : null;
    if (e && !this.itemExtra.selectedItem && e.data.length > 0 && this.setSelectedItem(e.data[0].name), i && this.itemExtra.selectedItem) {
      const { sx: s, sy: a, sw: h, sh: n } = this.itemExtra.selectedItem;
      t.drawImage(i, s, a, h, n, this.x, this.y, this.width, this.height);
    } else
      t.fillStyle = "gray", t.fillRect(this.x, this.y, this.width, this.height), t.fillStyle = "white", t.font = "16px Arial", t.textAlign = "center", t.fillText(`${this.itemExtra.src}: not found`, this.x + this.width / 2, this.y + this.height / 2);
    t.restore();
  }
}
class T {
  constructor(t, e) {
    this.items = t, this.env = e;
  }
  sprite() {
    const t = new k();
    return t.env = this.env, this.items.push(t), t;
  }
  piechart() {
    const t = new A();
    return t.env = this.env, this.items.push(t), t;
  }
  list() {
    const t = new u();
    return t.env = this.env, this.items.push(t), t;
  }
  list() {
    const t = new u();
    return t.env = this.env, this.items.push(t), t;
  }
  rectangle() {
    const t = new c();
    return t.env = this.env, this.items.push(t), t;
  }
  circle() {
    const t = new E();
    return t.env = this.env, this.items.push(t), t;
  }
  ellipse() {
    const t = new b();
    return t.env = this.env, this.items.push(t), t;
  }
  line() {
    const t = new w();
    return t.env = this.env, this.items.push(t), t;
  }
  ray() {
    const t = new y();
    return t.env = this.env, this.items.push(t), t;
  }
  triangle() {
    const t = new p();
    return t.env = this.env, this.items.push(t), t;
  }
  image() {
    const t = new f();
    return t.env = this.env, this.items.push(t), t;
  }
  text() {
    const t = new v();
    return t.env = this.env, this.items.push(t), t;
  }
}
class L {
  constructor(t, e) {
    this.ctx = t, this.assets = e;
  }
  getAssets() {
    return this.assets;
  }
  getTextWidth(t, e, i) {
    return this.ctx.font = `${e}px ${i}`, this.ctx.measureText(t).width;
  }
  getCanvasWidth() {
    return this.ctx.canvas.width;
  }
  getCanvasHeight() {
    return this.ctx.canvas.height;
  }
}
class C {
  constructor(t, e, i = {}, s = [], a = {}, h = 1e3, n = 360) {
    if (!t || !e)
      throw console.error("TaleemCanvas requires both a canvas element and a 2D rendering context."), new Error("TaleemCanvas requires both `canvas` and `ctx`.");
    this.canvas = t, this.ctx = e, this.width = h, this.height = n, this.canvas.width = this.width, this.canvas.height = this.height, this.items = s;
    const r = new L(this.ctx, i);
    this.add = new T(this.items, r), this.drawModule = new W(this.ctx, this.canvas, a, i), this.eventModule = new M(this.canvas, this.items), this.inputModule = new D(), this._isRunning = !1, this._frameId = null;
  }
  onMouse(t, e) {
    this.eventModule.on(t, e);
  }
  onKey(t, e) {
    this.inputModule.on(t, e);
  }
  draw() {
    this.drawModule.draw(this.items);
  }
  start() {
    if (this._isRunning) return;
    this._isRunning = !0;
    const t = () => {
      this._isRunning && (this.draw(), this._frameId = requestAnimationFrame(t));
    };
    t();
  }
  stop() {
    this._isRunning = !1, this._frameId && (cancelAnimationFrame(this._frameId), this._frameId = null);
  }
  // Add an array of itemExtra objects to the canvas.
  // Checks that each has a "type" field, and adds a uuid if missing.
  addItems(t) {
    for (let e of t) {
      if (!e.type)
        throw console.error("Item extra data missing 'type' field:", e), new Error("Missing 'type' field in itemExtra.");
      if (e.uuid || (e.uuid = o()), typeof this.add[e.type] != "function")
        throw console.error(`No Add method found for type: ${e.type}`), new Error(`No Add method for type: ${e.type}`);
      let i = this.add[e.type]();
      i.itemExtra = e;
    }
    this.draw();
  }
  // Delete a single item using the item (BaseItem object).
  deleteItem(t) {
    const e = this.items.findIndex((i) => i.itemExtra.uuid === t.itemExtra.uuid);
    e !== -1 && (this.items.splice(e, 1), this.draw());
  }
  // Remove all items.
  deleteAllItems() {
    this.items.splice(0, this.items.length), this.draw();
  }
  // Clone an item: deep copy its itemExtra, generate a new uuid,
  // then create a new item using the appropriate Add.js method.
  cloneItem(t) {
    const e = JSON.parse(JSON.stringify(t.itemExtra));
    if (e.uuid = o(), !e.type)
      throw console.error("Original item missing type for clone:", t), new Error("Missing 'type' in original item's itemExtra.");
    if (typeof this.add[e.type] != "function")
      throw console.error(`No Add method for type: ${e.type}`), new Error(`No Add method for type: ${e.type}`);
    let i = this.add[e.type]();
    return i.itemExtra = e, this.draw(), i;
  }
  // Log the itemExtra data to the console.
  logItem(t) {
    console.log(t.itemExtra);
  }
  // Save returns an array of itemExtra objects that can be used with addItems.
  save() {
    return this.items.map((t) => t.itemExtra);
  }
}
export {
  C as default
};
