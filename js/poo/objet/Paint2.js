"use strict";

const paint = {
  painting: false,
  filling: false,
  color: "#000000",
  size: 5,
  undoList: [],
  lastAction: [],
  redoList: [],
  canvas: document.createElement("canvas"),

  create() {
    this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
    window.addEventListener("resize", this.resize.bind(this));
    this.canvas.addEventListener("mousedown", (e) => this.startPosition(e));
    this.canvas.addEventListener("mouseup", () => this.finishedPosition());
    this.canvas.addEventListener("mousemove", (e) => this.draw(e));
    document.addEventListener("keypress", (e) => this.keyboard(e));
    this.canvas.addEventListener("click", (e) => {
      if (this.filling) {
        const mouse = this.getMousePos(e);
        const targetColorData = this.ctx.getImageData(
          mouse.x,
          mouse.y,
          1,
          1
        ).data;

        this.floodFill(mouse.x, mouse.y, targetColorData, this.color);
      }
    });
    this.resize();
    this.setContext();
    return this.canvas;
  },

  resize() {
    if (this.canvas.parentElement) {
      this.canvas.width = this.canvas.parentElement.offsetWidth;
      this.canvas.height = this.canvas.parentElement.offsetHeight;
    } else {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
    this.setContext();
  },

  setContext() {
    this.ctx.lineWidth = this.size;
    this.ctx.strokeStyle = this.color;
  },

  startPosition(e) {
    this.painting = true;
    this.draw(e);
  },

  finishedPosition() {
    this.painting = false;
    this.ctx.beginPath();
    this.undoList.push([...this.lastAction]);
    this.lastAction = [];
  },

  draw(e) {
    if (!this.painting || this.filling) return;
    this.ctx.lineWidth = this.size;
    this.ctx.lineCap = "round";
    let mouse = this.getMousePos(e);
    this.ctx.lineTo(mouse.x, mouse.y);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(mouse.x, mouse.y);
    this.lastAction.push({
      x: mouse.x,
      y: mouse.y,
      color: this.color,
      size: this.size,
    });
  },

  getMousePos(evt) {
    var rect = this.canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  },

  redraw(tab) {
    tab.forEach((action) => {
      action.forEach((move) => {
        this.ctx.beginPath();
        this.ctx.strokeStyle = move.color;
        this.ctx.lineWidth = move.size;
        this.ctx.lineTo(move.x, move.y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(move.x, move.y);
      });
    });
    this.ctx.beginPath();
  },

  keyboard(e) {
    e.preventDefault();
    if (!this.canvas.parentElement) return;
    switch (e.key) {
      case "s":
        this.save();
        break;
      case "l":
        this.load();
        break;
      case "c":
        this.chooseColor();
        break;
      case "z":
        this.undo();
        break;
      case "y":
        this.redo();
        break;
      case "+":
        this.size++;
        console.log(this.size);
        break;
      case "-":
        this.size = this.size <= 1 ? 1 : --this.size;
        console.log(this.size);
        break;
      case "f":
        this.toggleFilling();
        break;
    }
    this.setContext();
  },
  toggleFilling() {
    this.filling = !this.filling;

    if (this.filling) {
     
      this.canvas.style.cursor = 'url(./cursor.png), auto';
    } else {
      
      this.canvas.style.cursor = 'auto';
    }
  },
  load() {
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();
    let that = this;
    input.oninput = function (e) {
      let reader = new FileReader();
      reader.onload = function (event) {
        let img = new Image();
        img.onload = function () {
          that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
          that.ctx.drawImage(img, 0, 0);
        };

        img.src = event.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    };
  },

  save() {
    let png = this.canvas.toDataURL("image/png");

    png = png.replace("image/png", "application/octet-stream");
    let link = document.createElement("a");
    link.setAttribute("download", "SauvegardeCanvas.png");
    link.setAttribute("href", png);
    link.click();
  },

  chooseColor() {
    let input = document.createElement("input");
    input.setAttribute("type", "color");
    input.click();
    input.oninput = (e) => {
      this.color = e.target.value;
      this.setContext();
    };
  },

  undo() {
    if (!this.undoList.length) return;
    let redoAction = this.undoList.pop();
    this.redoList.push(redoAction);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.redraw(this.undoList);
  },

  redo() {
    if (!this.redoList.length) return;
    let redoAction = this.redoList.pop();
    this.undoList.push(redoAction);
    this.redraw([redoAction]);
  },

  floodFill(x, y, targetColorData, fillColor) {
    console.log(this);
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const visited = new Array(this.canvas.width * this.canvas.height).fill(false);
    const stack = [{ x, y }];
    const color = [];

    const pixelPos = (y * this.canvas.width + x) * 4;

    const rgbaTargetColor = [
      imageData.data[pixelPos],
      imageData.data[pixelPos + 1],
      imageData.data[pixelPos + 2],
      imageData.data[pixelPos + 3],
    ];

    
    const convertColor = () => {
      color.push(parseInt(fillColor.slice(1, 3), 16));
      color.push(parseInt(fillColor.slice(3, 5), 16));
      color.push(parseInt(fillColor.slice(5, 7), 16));
      color.push(255);
    };
    convertColor()

    const isSameColor = (pixelPos) => {
      for (let i = 0; i < 4; i++) {
        if (rgbaTargetColor[i] !== imageData.data[pixelPos + i]) {
          return false;
        }
      }
      return true;
    };

    const setPixelColor = (pixelPos) => {
      for (let i = 0; i < 4; i++) {
        imageData.data[pixelPos + i] = color[i];
      }
    };

    const getPixelPos = (x, y) => {
      return (y * this.canvas.width + x) * 4;
    };

    while (stack.length > 0) {
      const { x, y } = stack.pop();

      if (x < 0 || x >= this.canvas.width || y < 0 || y >= this.canvas.height) {
        continue;
      }

      const pixelPos = getPixelPos(x, y);

      if (visited[pixelPos] || !isSameColor(pixelPos)) {
        continue;
      }

      visited[pixelPos] = true;
      setPixelColor(pixelPos);

      stack.push({ x: x + 1, y });
      stack.push({ x: x - 1, y });
      stack.push({ x, y: y + 1 });
      stack.push({ x, y: y - 1 });
    }

    this.ctx.putImageData(imageData, 0, 0);
  },
};

export default paint;
