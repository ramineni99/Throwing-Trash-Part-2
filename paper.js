class Paper {
constructor(x,y,radius){
    var options = {
        'restitution':0.2,
        'friction':0.5,
        'density':1.2,
    }
    this.body = Bodies.circle(x, y,radius,options);
    this.radius = radius;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
}

display(){
var pos = this.body.position;
console.log(pos.y);
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    fill("white");
    stroke("black");
    image(this.image,0,0, this.radius,this.radius);
    pop();
}

}