class roof
{
	constructor(x,y,w,h)
	{
    var options={
	isStatic:true			
	}
	this.x=x;
	this.y=y;
	this.w=w
	this.h=h
	this.body=Bodies.rectangle(x, y, w, h , options);
 	World.add(world, this.body);

	}
	display()
	{

    var groundPos=this.body.position;

    push()
    translate(groundPos=this.body.position)
    rectMode(CENTER)
    strokeWeight(5)
    fill(128,128,128)
    rect(0,4,this.body.w,this.body.h)
    pop()
    }
}