class particle {
    constructor(x,y,radius){
        options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color = this.color(random(0,225),random(0,225),random(0,225));
        world.add(World,this.body);
    }
}