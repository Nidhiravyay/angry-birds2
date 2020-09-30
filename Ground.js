class Ground {
    constructor(x,y,width,height) {
      this.image1=loadImage("sprites/base.png");
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
     push(); 
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image1,pos.x, pos.y, this.width, this.height);
      pop ();
    }

  };