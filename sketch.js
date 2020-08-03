//Create variables here
var dog,dogimg,hpdogimg;
var foodS,foodStock;
 var database;
function preload()
{
dogimg = loadImage("images/dogImg.png")
hpdogimg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

 database = firebase.database();

foodStock= database.ref('Food')
foodStock.on("value",readStock);
dog = createSprite(250,250,100,100);
 dog.addImage(dogimg);
 dog.scale = 0.2;

}
function draw() {  
background(46,139,87);

if(keyWentDown())
  drawSprites();
  
};
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

