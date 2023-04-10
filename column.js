const Characters =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";

export class Column {
  constructor(x, context, fontSize, canvasHeight) {
    this.x = x;
    this.y = 0;
    this.context = context;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
  }
  drawSymbol() {
    if (this.y === 0 && Math.random() < 0.98) {
      return;
    }

    const chracterIndex = Math.floor(Math.random() * Characters.length);
    const symbol = Characters[chracterIndex];

    this.context.fillText(symbol, this.x, this.y);

    if (this.y > this.canvasHeight) {
      this.y = 0;
    } else {
      this.y += this.fontSize;
    }
  }
}
