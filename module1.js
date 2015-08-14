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
// function definitions here

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeMoreBlue(img, adjustment) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;
    for (var i = 0; i < length; i += 4) {
        data[i + 2] = data[i + 2] + adjustment;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function makeMoreGreen(img, adjustment){
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;
    for (var i = 0; i < length; i += 4) {
        data[i + 1] = data[i + 1] + adjustment;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function makeMoreRed(img, adjustment){
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;
    for (var i = 0; i < length; i += 4) {
        data[i] = data[i] + adjustment;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function cutOffPicture(img){
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var heightPixelsToHide = 100;
    for(var i = 0; i < img.width * heightPixelsToHide * 4; i++){
        pixels.data[i] = 255;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function brighten(img, adjustment){
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i] = data[i] + adjustment;
        data[i + 1] = data[i + 1] + adjustment;
        data[i + 2] = data[i + 2] + adjustment;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function makeInvert(img){
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function makeNoise(img, level1, level2, level3){
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4){
        var adjustment1 = getRandomInt(-level1, level1);
        var adjustment2 = getRandomInt(-level2, level2);
        var adjustment3 = getRandomInt(-level3, level3);

        data[i] = data[i] + adjustment1;
        data[i+1] = data[i+1] + adjustment2;
        data[i+2] = data[i+2] + adjustment3;

    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function makeFunky(img){
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length/2; i += 2) {
        var temp = data[i];
        data[i] = data[length - i];
        data[length - i] = temp;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

function makeNoiseFunky(img, level1, level2, level3){
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length/2; i += 2) {
        var temp = data[i];
        data[i] = data[length - i];
        data[length - i] = temp;

    var adjustment1 = getRandomInt(-level1, level1);
    var adjustment2 = getRandomInt(-level2, level2);
    var adjustment3 = getRandomInt(-level3, level3);

    data[i] = data[i] + adjustment1;
    data[i+1] = data[i+1] + adjustment2;
    data[i+2] = data[i+2] + adjustment3;
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}

//function changeOpacity(img, value){
    //var pixels = ImageUtils.getPixels(img);
    //var length = pixels.data.length;
    //var data = pixels.data;

    //for (var i = 3; i &lt; length; i += 4) {
        //data[i] = value;
    //}
    //ImageUtils.putPixels(pixels, img.width, img.height);
//}

function makeInvertCutOff(img){
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;
    //var upByFour = 4

    var heightPixelsToHide = 100;
    for(var i = 0; i < img.width * heightPixelsToHide * 4; i++){
        pixels.data[i] = 255;
            //changeOpacity(img, 100);
        }
        for (var i = 0; i < length; i += 4) {
            data[i] = 255 - data[i];
            data[i + 1] = 255 - data[i + 1];
            data[i + 2] = 255 - data[i + 2];

        }
    //var heightPixelsToHide = 100;
    //for(var i = 0; i < img.width * heightPixelsToHide * 4; i++) {
        //pixels.data[i] = 0;
        //changeOpacity(img, 50)

    ImageUtils.putPixels(pixels, img.width, img.height);
}



$(document).ready(function() {
    var img = new Image();
    img.src = "img/catburnededges.jpg";
    //makeMoreRed(img, 200);
    //makeMoreGreen(img, 100);
    //makeMoreBlue(img, 200);
    //cutOffPicture(img);
    //brighten(img, 50);
    //makeInvert(img);
    //makeNoise(img, 100, 200, 150);
    //makeFunky(img);
    //makeNoiseFunky(img, 100, 200, 150);
    makeInvertCutOff(img);
});
