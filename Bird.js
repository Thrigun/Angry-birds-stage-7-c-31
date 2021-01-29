class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");

    //this is an smokeImage for the animation part
    //loading the image
    this.smokeImage = loadImage("sprites/smoke.png");

    //this is an array named trajectory, which will store all positions of the bird
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    

    //this function tells us that if the bird body 'x' speed is more than 10 and also its position of 'x'
    //is more than 200 its position then its position should be stores in variable
    //named position 
  
    if(this.body.velocity.x > 10 && this.body.position.x > 200){

      //storing the x, y position of bird body in the variable named
      //position
      var position = [this.body.position.x, this.body.position.y];

      //add the position in to the trajectory array
      this.trajectory.push(position);
    }
   


    //show the smoke image wherever the bird moved in trajectory 
    //every time the smoke will have to go in a new x,y position
    //that we will retrieve with the help of for loop
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
