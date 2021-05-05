var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
dog = loadImage("dogImg.png");
happyDog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  var dog = createSprite(50,50,250,250);
  dog.setAnimation = "dog"

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();

}


function readStock(data)
{
  foodS = data.val();
}

function writeStock(x)
{

  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  
  database.ref('/').update({
    Food:x
  })
}


