function take_snapshot(){
    save("my image.png");
}

noseX=0;
noseY=0;

function preload(){
clown_nose=loadImage("https://i.postimg.cc/Zn0yZ6YJ/download-removebg-preview.png");
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,65,30);
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResult);

}
function modelLoaded(){
    console.log('model Loaded!');
}
function gotResult(results){
    if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x-15;
noseY=results[0].pose.nose.y-15;
console.log('nosex= '+ noseX);
console.log('nosey= '+ noseY);
    }

}