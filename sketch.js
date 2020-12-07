//Create variables here
var dog
var happyDog
var database
var foods
var foodStock
function preload()
{
  //load images here
  dog_img=loadImage("images/dogImg.png")
  dog2_img=loadImage("images/dogImg1.png")
}

function setup() {

  database = firebase.database();
  
	createCanvas(500, 500);
  dog=createSprite(250,250)
  dog.addImage("dog1",dog_img)
  dog.scale=0.2

  

  foodStock=database.ref("food")
  foodStock.on("value",readStock);
 
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}



function draw() {  

  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foods)
  dog.addImage(dog2_img)
}




  drawSprites();
  //add styles here

}

function readStock(data)
{
  foods=data.val()
}



