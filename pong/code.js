var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6e78b26c-5aa3-4ba8-8a4b-dd1cacae9209","91072f46-b217-4d35-85f3-4a9b76f60da6","1a16623f-19ec-4b2a-a855-6651b5cb9706"],"propsByKey":{"6e78b26c-5aa3-4ba8-8a4b-dd1cacae9209":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/uoZwcPJapKhZIATHFDR107Ylx1bV1j8k/category_sports/baseball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":false,"frameDelay":60,"version":"uoZwcPJapKhZIATHFDR107Ylx1bV1j8k","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/uoZwcPJapKhZIATHFDR107Ylx1bV1j8k/category_sports/baseball.png"},"91072f46-b217-4d35-85f3-4a9b76f60da6":{"name":"fox","sourceUrl":"assets/api/v1/animation-library/gamelab/i.TOUie12cy0KbasjKdp6IWoFSTZDYCk/category_animals/animalhead_fox.png","frameSize":{"x":306,"y":316},"frameCount":1,"looping":true,"frameDelay":2,"version":"i.TOUie12cy0KbasjKdp6IWoFSTZDYCk","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":306,"y":316},"rootRelativePath":"assets/api/v1/animation-library/gamelab/i.TOUie12cy0KbasjKdp6IWoFSTZDYCk/category_animals/animalhead_fox.png"},"1a16623f-19ec-4b2a-a855-6651b5cb9706":{"name":"mono","sourceUrl":"assets/api/v1/animation-library/gamelab/hj3pdrtW9.qD8_mUB8ER3kwpAXPXMCoc/category_animals/animalhead_chimp.png","frameSize":{"x":392,"y":350},"frameCount":1,"looping":true,"frameDelay":2,"version":"hj3pdrtW9.qD8_mUB8ER3kwpAXPXMCoc","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":350},"rootRelativePath":"assets/api/v1/animation-library/gamelab/hj3pdrtW9.qD8_mUB8ER3kwpAXPXMCoc/category_animals/animalhead_chimp.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----
createCanvas (400,400)

var player= createSprite(360,200,10,100)
player.shapeColor="red";


var computer= createSprite(40,200,10,100)
computer.shapeColor="green";


var pelota= createSprite(200,200,10,10);
pelota.shapeColor="blue";



function draw() {
  background(220);
  
  if (keyDown("up")) {
    player.y=player.y-10;
  }
  
  if (keyDown("down")) {
    player.y=player.y+10;
  }
  
  if(keyDown("ENTER"))
  {
     pelota.velocityX=5;
     pelota.velocityY=3;
  }
  
  computer.y=pelota.y;

  drawnet();



    
  createEdgeSprites();
  pelota.bounceOff(topEdge);
  pelota.bounceOff(bottomEdge);
  pelota.bounceOff(computer);
  pelota.bounceOff(player);
  drawSprites();




}

function drawnet()
{  
  for(var num=0;num<400;num=num+20)
  {
    line(200,num,200,num+10);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
