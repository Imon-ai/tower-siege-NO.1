class Polygon extends Block{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.image = loadImage("polygon.png");
    }
    display(){
       super.display();
       image(this.image,this.body.position.x - 20,this.body.position.y - 20,50,50);
    }
}