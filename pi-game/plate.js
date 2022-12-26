class Plate{
    constructor(x,w) {
        this.x = x; //x coordinate
        this.w = w; //width
        this.h = 10; //height
        this.y = height - this.h; //y coordinate = height of canvas - this.h
    }

    catches(pie) {

        //x is center of plate (mouse)
        //check if pie is falling within plate dimensions (x-w/2 is left side of plate and x+w/2 is right side.)
        if(pie.y + pie.r >= this.y && pie.x > this.x-this.w/2 && pie.x < this.x+this.w/2) {
            return true;
        } else {
            return false;
        }
        
    }

    show() {
        fill(255);
        //plate aligned to mouse center
        rectMode(CENTER);
        //plate
        rect(this.x, this.y, this.w, this.h);
    }
}