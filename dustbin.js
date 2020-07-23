class DustBin {
    constructor (x,y,width,height) {
       
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png");
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER);
        fill("blue");
        stroke("white");
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}