let Application = PIXI.Application,
	loader = PIXI.loader,
	Sprite = PIXI.Sprite,
	TextStyle = PIXI.TextStyle,
	Text = PIXI.Text;

//makes pixel art crisp
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

let app= new Application({width:256,height:256});
document.body.appendChild(app.view);
loader.add("images/dog.png")
	  .add("images/box.png")
	  .load(setup);

let timeFromStart = 0;
let dog=null;
let box=null;

 function setup(){

    dog = new Sprite(loader.resources["images/dog.png"].texture);
    dog.x=100;  dog.y=120;
    dog.scale.x=4;  dog.scale.y=4;
    dog.anchor.x=0.5;  dog.anchor.y=0.5;
    dog.rotation=0.5;
    app.stage.addChild(dog);

    let style = new TextStyle({
				  fontFamily: "Arial",
				  fontSize: 36,
				  fill: "yellow",
				  stroke: '#ff3300',
				  strokeThickness: 4,
				});

    let message = new Text("DISCO DOG!",style);
    message.x=24;
    message.y=96;
	app.stage.addChild(message);

 }

function gameLoop(){
	requestAnimationFrame(gameLoop);//gets called 60 times per second, infinite loop
	//NOTE: Pixi tells websites to run at 60FPS, so you don't need to do the
	//deltaTime wizardry here(unless someone has an insanely slow computer)
	
	timeFromStart = timeFromStart + 1;
	dog.rotation = 3.14159*Math.sin(timeFromStart*0.05);
	dog.x += Math.sin(timeFromStart*0.05);
	dog.y += 4*Math.sin(timeFromStart*0.25);

}

gameLoop();//calling it for first time here

//Math.abs(Math.sin(num))

//COPY PASTE FUNCTIONS!!!

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Usage:let keyObject = keyboard(keyValue)
////Possible keyValue => https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
//keyObject.press = () => {
//};
//keyObject.release = () => {
//};
// After all done => keyObject.unsubscribe();
function keyboard(value) {
  let key = {};
  key.value = value;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = event => {
    if (event.key === key.value) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
      event.preventDefault();
    }
  };

  //The `upHandler`
  key.upHandler = event => {
    if (event.key === key.value) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
      event.preventDefault();
    }
  };

  //Attach event listeners
  const downListener = key.downHandler.bind(key);
  const upListener = key.upHandler.bind(key);
  
  window.addEventListener(
    "keydown", downListener, false
  );
  window.addEventListener(
    "keyup", upListener, false
  );
  
  // Detach event listeners
  key.unsubscribe = () => {
    window.removeEventListener("keydown", downListener);
    window.removeEventListener("keyup", upListener);
  };
  
  return key;
}
