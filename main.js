img ="";
status ="";

function preload(){
    img= loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img,50,50,640,420);
    fill("#db3236");
    text("Dog", 45,75);
    noFill();
    stroke("#db3236");
    rect(30,60,450,350);

    fill("#db3236");
    text("Cat", 320, 120);
    noFill();
    stroke('#db3236')
    rect(300,90,270,320);
}

function modelLoaded()
{
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error,results){
    if(error){
        console.log('error');
    }
    console.log(results);
}






