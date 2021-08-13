var mouseevent="empty";
canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="blue";
width_of_line=2;
radius=10;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("Colour");
    width=document.getElementById("width_of_line");
    radius=document.getElementById("radius");
    mouseevent="mouseDown";
   
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    positionx=e.clientX-canvas.offsetLeft;
    positiony=e.clientY-canvas.offsetTop;
    if(mouseevent=="mouseDown"){
        console.log("current position on mouse x and y=");
        console.log("x="+positionx+"y="+positiony);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(positionx,positiony,radius,0,2*Math.PI);
        ctx.strokeStyle();
        
    }

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="MouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="Mouseleave";