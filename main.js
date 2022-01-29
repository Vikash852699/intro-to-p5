function preload() {

}

function setup() {
    canvas = createCanvas(560, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 560, 500);
    tint(tint_color);
}

function takesnapshot(){
    save('student_name.png');
}


function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}