var bola;
function setup() {

  createCanvas(400,400);
  bola = createSprite (100,100,50,50);
}

function draw() 
{
  background("yellow");
  //Seta para cima
  if (keyIsDown(UP_ARROW)){
    bola.y = bola.y-5;
background ("Pink");

  }
  //Seta para baixo
  if (keyIsDown(DOWN_ARROW)){
    bola.y = bola.y+5;
    background ("green");
  }
  //Seta para a esquerda
  if (keyIsDown(LEFT_ARROW)){
    bola.x = bola.x-5;
    background ("blue");
  }
  //Seta para a direita
  if (keyIsDown(RIGHT_ARROW)){
    bola.x = bola.x+5;
    background ("red")
  }
drawSprites ();


}




