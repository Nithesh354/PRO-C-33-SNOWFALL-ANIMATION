class Snows
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.snowimage=loadImage("snow4.webp");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
		this.trajectory=[]

	}
	display()
	{
			
			var snowpos=this.body.position;		

			push()
			translate(snowpos.x, snowpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.snowimage, 0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
     
			

			for(var i=0; i<this.trajectory.length; i++){
				image(this.snowimage, this.trajectory[i][0], this.trajectory[i][1]);
				}	
				
			}
}