let app= new PIXI.Application({width:256,height:256});
document.body.appendChild(app.view);
PIXI.loader.add("images/dog.png").load(setup);

 function setup(){
    let dog= new PIXI.Sprite(PIXI.loader.resources["images/dog.png"].texture);
    app.stage.addChild(dog);
 }