class Rope{

    constructor(objA,objB,offX,offY) {
        
        var options = 
        {
            bodyA:objA.body,
            bodyB:objB.body,
            pointB:{x:offX,y:offY},
            stiffness:0.05,
            length:400

        }

        this.posA = objA.body.position;
        this.posB = objB.body.position;
        this.oX = offX;
        this.oY = offY;

        this.connection = Constraint.create(options);
        World.add(world,this.connection);
    }


    display(){
        
        strokeWeight(3)
        stroke("black")
        line(this.posA.x,this.posA.y,this.posB.x + this.oX,this.posB.y + this.oY)
    }

}