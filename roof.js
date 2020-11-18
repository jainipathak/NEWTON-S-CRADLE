class Roof {
    constructor(x,y,width,height){
        var options={
        isStatic:true,
     }
this.body= Bodies.circle(x,y,this.width,this.height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
};

display(){
var pos=this.body.position;
pos.x=400;
pos.y=350;
// var angle=this.body.angle;
push();
translate(pos.x,pos.y);
// rotate(angle);
rectMode(CENTER);
// circle(0,0,30);
pop();
}
}