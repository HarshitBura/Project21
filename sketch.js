var canvas;
var music;
var box,box2,box3,box4,box5;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,500);
 box = createSprite(random(20,750),25,50,50);
 box.velocityX=2;
 box.velocityY=2;
  box.shapeColor="white";  
 box2 = createSprite(60,480,140,20);
 box2.shapeColor = "red";

 box3 = createSprite(220,480,140,20);
 box3.shapeColor = "blue";

 box4 = createSprite(380,480,140,20);
 box4.shapeColor = "green";

 box5 = createSprite(540,480,140,20);
 box5.shapeColor = "purple";
    //create box sprite and give velocity

}

function draw() {
    
    background(rgb(169,169,169));
    //create edgeSprite
    music.play();
    edges=createEdgeSprites();
    box.bounceOff(edges);

   if(box2.isTouching(box) && box.bounceOff(box2)){
       box.shapeColor="red";
   }
   
    
   if(box5.isTouching(box) && box.bounceOff(box5)){
    box.shapeColor="purple";
}

   if(box3.isTouching(box) && box.bounceOff(box3)){
    box.shapeColor="blue";
}

 
    if(box4.isTouching(box)){
  box.velocityX=0;
  box.velocityY=0;
  box.shapeColor="white";
 

    }
   drawSprites();

    //add condition to check if box touching surface and make it box
}

