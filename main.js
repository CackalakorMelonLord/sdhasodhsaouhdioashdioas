var canvas = new fabric.Canvas('canvas1');

playerx = 10;

playery = 10;

blockimagewidth = 30;

blockimageheight = 30;

var playerobject = "";

var blockimageobject = "";

function player_update() {
    fabric.Image.fromURL("281-2813402_download-download-png-spider-man-homecoming-headphones-removebg-preview.png", function(Img) {
        playerobject = Img;

        playerobject.scaleToWidth(150);

        playerobject.scaleToHeight(140);

        playerobject.set({
            top:playery,
            left:playerx
        });

        canvas.add(playerobject);
    });
}

function newImage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        blockimageobject = Img;

        blockimageobject.scaleToWidth(blockimagewidth);

        blockimageobject.scaleToWidth(blockimageheight);

        blockimageobject.set ({
           top:playery,
           left:playerx 
        });

        canvas.add(blockimageobject);
    });
}

