class Sand {
    constructor(x, y ,r) {
        
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.x=y;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x , this.y , (this.r-20)/2,options)
      World.add(world, this.body);

    }

    display()
    {
      
        var sandpos=this.body.position;
  
      push();
      translate(sandpos.x, sandpos.y);
      strokeWeight(3);
      stroke('black')
      fill('blue')
      rectMode(CENTER)
      ellipse(0,0,this.r,this.r)
      pop();
    };
  };