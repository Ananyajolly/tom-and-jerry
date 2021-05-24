var canvas,bg
var tom ,toming1,toming2,toming3
var jerry,jerrying1,jerrying2,jerrying3
function preload() {
    //load the images her
    toming1= loadImage("images/cat1.png")
    toming2= loadImage("images/cat2.png","images/cat3.png")
    toming3= loadImage("images/cat4.png")
    jerrying1=loadImage("images/mouse1.png")
    jerrying2=loadImage("images/mouse2.png","images/mouse3.png")
    jerrying3=loadImage("images/mouse4.png")
    bg=loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600)
    tom.addAnimation("tomSleeping",toming1)
    tom.scale=0.2
    jerry=createSprite(200,600)
    jerry.addAnimation("jerryStanding",jerrying1)
    jerry.scale=0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX=0
    tom.addAnimation("tomLastImage",toming3)
    tom.x=300
    tom.scale=0.2
    tom.changeAnimation("tomLastImage")
    jerry.addAnimation("jerryLastImage",jerrying3)
    jerry.scale=0.15
    jerry.changeAnimation("jerryLastImage")


}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===Right_ARROW){
    jerry.x=jerry.x+20

}

}
