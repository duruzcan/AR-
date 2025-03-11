function setup() {
  createARCanvas(300, 300, P2D, { scale: 2, markerId: 5 });
}

function draw() {
  background(220);

  // Çarpma işlemini ortada göster
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(0);
  text("3 × 4 = 12", width / 2, height / 2);

  // Kalemin yörünge hareketi
  let angle = frameCount * 0.02;
  let orbitRadius = 80;
  let x = cos(angle) * orbitRadius + width / 2;
  let y = sin(angle) * orbitRadius + height / 2;

  // Kalemi çiz
  drawPencil(x, y);
}

function drawPencil(x, y) {
  // Kalemin gövdesi (sarı)
  fill(255, 204, 0);
  rect(x - 5, y, 10, 40);

  // Kalemin ucu (gri)
  fill(150);
  triangle(x - 5, y, x + 5, y, x, y - 10);

  // Silgi kısmı (kırmızı)
  fill(255, 100, 100);
  rect(x - 5, y + 40, 10, 5);
}
