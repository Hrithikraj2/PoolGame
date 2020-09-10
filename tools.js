let pictures = {};
let toolStillLoad = 0;

function toolsLoadingLoop(callback){
    if(toolStillLoad){
        requestAnimationFrame(toolsLoadingLoop.bind(this, callback));
    }
    else {
         callback();
    }

}

function loadTools(callback){

    function loadPicture(fileName){
        toolStillLoad++;

        let pictureImage = new Image();
        pictureImage.src = "./pictures/" + fileName;

        pictureImage.onload = function(){
            toolStillLoad--;
        }
      return pictureImage;
    }
    pictures.background = loadPicture('background2.png');
    pictures.stick = loadPicture('stick.png');
    pictures.whiteBall = loadPicture('ball.png');

    toolsLoadingLoop(callback);
}