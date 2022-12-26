class Pie{
    constructor(x,y){
        this.x=x; //x coordinate
        this.y=y; //y coordinate
        this.r=32; //radius
        this.yspeed=0;
        this.digit=floor(random(10));
        this.angle = random(TWO_PI);
    }

    //show pie on canvas
    show(){

        /* fill(255);
        circle(this.x, this.y, this.r*2);
        fill(0);

        //Numbers on Pies
        textSize(32);
        textAlign(CENTER,CENTER);
        text(this.digit, this.x, this.y); */


        //Actual Pies
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        stroke(255);
        strokeWeight(1);
        fill(177,176,180,200);
        circle(0, 0, this.r * 2);   
        
        //for (let i = 0; i < 9; i++) {
        let a = TWO_PI/9;
        let d = this.r * 2;
        for (let i = 0; i < this.digit; i++) {
            fill(255,0,255);
            stroke(255);
            strokeWeight(4);
            arc(0, 0, d, d, i*a, (i+1)*a, PIE);
        }
        pop();

    }

    //falling pie
    update(){
        this.y = this.y + this.yspeed + 2;
    }
}