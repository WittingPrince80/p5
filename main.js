function preload()
{
   
}

function setup()
{
canvas = createCanvas(400, 400);
canvas.position(110.916,250);
video = createCapture(VIDEO);
video.hide();
tint_colour = "";

}

function draw()
{
    image(video, 0, 0, 640, 480 );
    tint(tint_colour);
}
  
function filter_tint(){
tint_colour= document.getElementById("CN").value;

}

