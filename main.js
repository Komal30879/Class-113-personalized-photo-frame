function preload(){

}

function setup(){
    canvas = createCanvas(740,580);
    canvas.position(350,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,540,380);
    rect(0,0,55,55,20);
    circle(27,75,40);
    rect(0,95,55,55,20);
    circle(27,170,40);
    rect(0,190,55,55,20);
    circle(27,265,40);
    rect(0,285,55,55,20);
    circle(27,360,40);
    rect(47,325,55,55,20);
    circle(122,360,40);
    rect(142,325,55,55,20);
    circle(217,360,40);
    rect(237,325,55,55,20);
    circle(312,360,40);
    rect(332,325,55,55,20);
    circle(407,360,40);
    rect(427,325,55,55,20);
    circle(502,360,40);
    rect(485,285,55,55,20);
    circle(512,265,40);
    rect(485,190,55,55,20);
    circle(512,170,40);
    rect(485,95,55,55,20);
    circle(512,75,40);
    rect(485,0,55,55,20);
    circle(465,20,40);
    rect(390,0,55,55,20);
    circle(370,20,40);
    rect(295,0,55,55,20);
    circle(275,20,40);
    rect(200,0,55,55,20);
    circle(180,20,40);
    rect(105,0,55,55,20);
    circle(80,20,40);
}

function take_snapshot(){
    save('komal.png');
}