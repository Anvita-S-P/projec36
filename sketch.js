//Create variables here


var dog ,happyDog ,database , food,foodStock;
var dogImage,happyDogImage;
var feedPet,addFood,lastFed,feedTime,foodObj;







function preload()
{
  //load images here
  
 dogImage = loadImage("images/dogImg.png");
 happyDogImage = loadImage("images/dogImg1.png");





}

function setup() {
  createCanvas(500,500);
  
   dog=createSprite(250,250,20,20);
   dog.addImage(dogImage);
   dog.scale=0.2;
   database=firebase.database();
   foodStock=database.ref("food");
   foodStock.on("value",readStock);


foodObj=new Food();

feed=createButton("feed the dog");
feed.position(300,20);
feed.mousePressed(feedDog);

add=createButton("add Food")
add.position(800,20);
add.mousePressed(addFood);




  
}


function draw() {  

  background(46,139,87);
  //add styles here

  
  drawSprites();
  textSize(20);
  fill ("black");
  text("FOOD STOCK REMAINING : "+food,120,180);
  

  text("press UP_ARROW key to feed watkins",100,20);
  textSize(20);
  fill("black");

  foodObj.display();

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("last fed : " +lastFed%12 + "PM" ,350,30);

  }
  else if(lastFed===0){
    text("last fed : 12AM",350,30);

  }
  else{
    text ("last fed : " + lastFed+"AM",350,30);

  }
  feedTime=database.ref("feedTime");
  feedTime.on("value",function(data){
    lastFed=data.val();
  })

  
}


function readStock(data){
  food=data.val();
  foodObj.foodStock = food;
}


function writeStock(x){


  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref("/").update({
    food:x
  })
}


function addFood(){
  
    food++
    database.ref('/').update({
        food:food
    })
     
  
}

function feedDog(){
  dog.addImage(dogImage);
  foodObj.foodStock = foodObj.foodStock - 1;
  database.ref('/').update({
    food:foodObj.foodStock,
    feedTime:hour()
  })
}















