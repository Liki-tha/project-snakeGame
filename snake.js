class Snake {
  
   constructor() {
     this.body = [];
     this.body[0] = createVector(floor(width/2), floor(height/2));
     this.xdir = 0;
     this.ydir = 0;
     this.length = 0;
   }
   
   setDir(x, y) {
    this.xdir = x;
     this.ydir = y;
   }
   
   update() {
      let body = this.body[this.body.length-1].copy();
     this.body.shift();
      body.x += this.xdir;
     body.y += this.ydir;
     this.body.push(body);
   }
   
   grow() {
     let body = this.body[this.body.length-1].copy();
     this.len++;
     this.body.push(body);
   }
   
   endGame() {
     let x = this.body[this.body.length-1].x;
     let y = this.body[this.body.length-1].y;
     if(x > width-1 || x < 0 || y > height-1 || y < 0) {
        return true;
     }
     for(let int = 0; int < this.body.length-1; int++) {
        let part = this.body[int];
       if(part.x == x && part.y == y) {
         return true;
       }
     }
   }
   
   eat(eater) {
     
      let x = this.body[this.body.length-1].x;
     let y = this.body[this.body.length-1].y;
     if(x == eater.x && y == eater.y) {
       this.grow();
       return true;
     }

   }
   
   show() {
      for(let i = 0; i < this.body.length; i++) {
        fill(29);
       noStroke();
       rect(this.body[i].x, this.body[i].y, 1, 1)
     }
   }
 
 }