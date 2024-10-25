function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1.5); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw(); 
}

function draw() {
  background("lightgray"); 
  noFill();
  stroke("darkred");
  drawMandala(); 
  drawMandalini(); 
}

function drawMandala() {
  let spacing = 100; 
  let margin = 100;
  let offsetX = (width - (margin * 2 + spacing * floor((width - margin * 2) / spacing))) / 2; 
  let offsetY = (height - (margin * 2 + spacing * floor((height - margin * 2) / spacing))) / 2; 

  for (let x = margin + offsetX; x < width - margin + offsetX; x += spacing) {
    for (let y = margin + offsetY; y < height - margin + offsetY; y += spacing) {
      let numShapes = floor(random(3, 50)); 
      let radius = random(5, 25); 

      for (let i = 0; i < numShapes; i++) {
        let angle = TWO_PI / numShapes * i; 
        let mandalaX = x + cos(angle) * radius; 
        let mandalaY = y + sin(angle) * radius; 

        ellipse(mandalaX, mandalaY, 10, 10); 
      }
    }
  }
}

function drawMandalini() {
  let spacing = 100; 
  let margin = 100; 
  let offsetX = (width - (margin * 2 + spacing * floor((width - margin * 2) / spacing))) / 2; 
  let offsetY = (height - (margin * 2 + spacing * floor((height - margin * 2) / spacing))) / 2; 

  for (let x = margin + offsetX; x < width - margin + offsetX; x += spacing) {
    for (let y = margin + offsetY; y < height - margin + offsetY; y += spacing) {
      let numShapes = floor(random(3, 50)); 
      let radius = random(5, 25); 

      for (let i = 0; i < numShapes; i++) {
        let angle = TWO_PI / numShapes * i; 
        let mandalaX = x + cos(angle) * radius; 
        let mandalaY = y + sin(angle) * radius; 

        ellipse(mandalaX, mandalaY, radius, radius); 
      }
    }
  }
}
