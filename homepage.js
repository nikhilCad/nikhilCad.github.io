let Application = PIXI.Application,
	loader = PIXI.loader,
	Sprite = PIXI.Sprite;

//makes pixel art crisp
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

let app= new Application({width:256,height:256});
document.body.appendChild(app.view);
loader.add("images/dog.png").load(setup);

let timeFromStart = 0;
let dog;

 function setup(){
    dog= new Sprite(loader.resources["images/dog.png"].texture);
    dog.x=100;  dog.y=100;
    dog.scale.x=4;  dog.scale.y=4;
    dog.anchor.x=0.5;  dog.anchor.y=0.5;
    dog.rotation=0.5;
    app.stage.addChild(dog);

    app.ticker.add(delta=> gameLoop(delta))//60 FPS
 }

function gameLoop(delta){
	timeFromStart = timeFromStart + 1;
	dog.rotation = 3.14159*Math.sin(timeFromStart*0.05);
}

//Math.abs(Math.sin(num))

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}