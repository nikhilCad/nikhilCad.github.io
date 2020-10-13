let Application = PIXI.Application,
	loader = PIXI.loader,
	Sprite = PIXI.Sprite;

let app= new Application({width:256,height:256});
document.body.appendChild(app.view);
loader.add("images/dog.png").load(setup);

 function setup(){
    let dog= new Sprite(loader.resources["images/dog.png"].texture);
    dog.x=50;
    dog.y=50;
    dog.scale.x=4;
    dog.scale.y=4;
    app.stage.addChild(dog);
 }