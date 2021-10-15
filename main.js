music1="";
music2="";

function preload()
{
    music1=loadSound("music.mp3");
    music2=loadSound("music2.mp3");
}

function setup()
{
    canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose", getPoses);

}
song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0

function modelLoaded()
{
console.log("Model is loaded");
}

function getPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        console.log("the x position of your left wrist is : " + leftWristX);
        leftWristY=results[0].pose.leftWrist.y;
        console.log("the y position of your left wrist is : " + leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        console.log("the x position of your right wrist is : " + rightWristX);
        rightWristY=results[0].pose.rightWrist.y;
        console.log("the y position of your right wrist is : " + rightWristY);
    }
}

function draw()
{
image(video, 0, 0, 400, 400)
}