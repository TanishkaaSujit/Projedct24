class Rubber {
    constructor(x, y ,r) {
        
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.x=y;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x , this.y , (this.r-20)/2, options)
      World.add(world, this.body);

    }

    display()
    {
      
        var rubberpos=this.body.position;
  
      push();
      translate(rubberpos.x, rubberpos.y);
      strokeWeight(3);
      stroke('black')
      fill('brown')
      rectMode(CENTER)
      rect(0, 0, this.r, this.r);
      ellipse(0,0,this.r,this.r)
      pop();
    };
  };
  