function setup() {
    createCanvas(1200, 1200);
  }
  
  a = 0
  
  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      a = 1;
    } else if (keyCode === RIGHT_ARROW) {
      a = 2;
    }
  }
  
  
  function draw() {
    
    color = [[255,0,0],[0,255,0],[0,0,255]]
    
    if(mouseIsPressed) {
      
      if (keyCode === UP_ARROW) {
        
        fill(color[a][0],color[a][1],color[a][2])
        rect(mouseX, mouseY, 20, 20);
        
    } else if (keyCode === DOWN_ARROW) {
      
        fill(color[a][0],color[a][1],color[a][2])
        ellipse(mouseX,mouseY,20,20);
      
    }
  
      }
      else {
        
        fill(255)
        
        }
  }
  