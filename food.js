class Food{
     
    constructor(){
         this.foodStock=null;
         this.lastFed=null;
         
         this.img=loadImage("images/Milk.png");

    }
    
    
    display(){
         var x=80,y=100;
     imageMode(CENTER);
     image(this.img,420,220,20,20);
         
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;

                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }


}