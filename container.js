class container{
    constructor(x, y, width, height){

        var option = {
            isStatic:true 
        }
        this.bodies=Bodies.rectangle(x, y, width, height, option);
        this.width=width;
        this.height=height;

        World.add(world, this.bodies);
    }
    display(){
        var pos = this.bodies.position;
        rectMode(CENTER);
        fill("blue");
        rectMode(0, 0, this.width, this.height);
}

}