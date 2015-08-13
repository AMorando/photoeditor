class ImageUtils {

    static getCanvas(w, h) {
        var c = document.querySelector("canvas");
        c.width = w;
        c.height = h;
        return c;
    }

    static getPixels(img) {
        var c = ImageUtils.getCanvas(img.width, img.height);
        var ctx = c.getContext('2d');
        ctx.drawImage(img, 0, 0);
        return ctx.getImageData(0,0,c.width,c.height);
    }

    static putPixels(pixels, w, h) {
        var c = ImageUtils.getCanvas(w, h);
        var ctx = c.getContext('2d');
        ctx.putImageData(pixels, 0, 0);
    }

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function definitions here


$(document).ready(function() {
    var img = new Image();
    img.src = "img/cat.jpg";
    makeMoreBlue(img);
    //cutOffPicture(img);
});

function makeMoreBlue(img) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;
    for (var i = 0; i < length; i += 4) {
        data[i + 2] = data[i + 2] + 200;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function cutOffPicture(img){
    var pixels = ImageUtils.getPixels(img);
    var heightPixelsToHide = 100;
    for(var i = 0; i < img.width * heightPixelsToHide * 4; i++){
        pixels.data[i] = 255;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}