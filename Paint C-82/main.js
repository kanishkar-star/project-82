canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
mouseEvent = "empty";
var last_position_of_mouse_X, last_position_of_mouse_Y;

color = "red";
width_of_line = 1;
radius = 35;

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
mouseEvent = "mouseleave";
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent = "mousedown";
    color = document.getElementById("color_input").value;
    width_of_line = document.getElementById("width_input").value;
    radius = document.getElementById("radius_input").value;
    console.log("my_mousedown");
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        //console.log("last Position of X and Y co-ordinates =");
        // console.log("X -" + last_position_of_mouse_X + "Y -" + last_position_of_mouse_Y);
        console.log("my_mousemove");

        console.log("Current Position of X and Y co-ordinates =");
         console.log("X -" + current_position_of_mouse_X + "Y -" + current_position_of_mouse_Y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = width_of_line;
        ctx.arc(current_position_of_mouse_X, current_position_of_mouse_Y, radius, 0, 2*Math.PI);
        ctx.stroke();
        
    }
    //last_position_of_mouse_X = current_position_of_mouse_X;
    //last_position_of_mouse_Y = current_position_of_mouse_Y;
}