canvas = document.getElementById("myCanvas");
blue= canvas.getContext("2d");
blue.beginPath();
blue.strokeStyle="blue";
blue.lineWidth=10;
blue.arc(130, 200, 50,0, 2*Math.PI);
blue.stroke();

yellow= canvas.getContext("2d");
yellow.beginPath();
yellow.strokeStyle="yellow";
yellow.lineWidth=10;
yellow.arc(200, 250, 50,0, 2*Math.PI);
yellow.stroke();

black= canvas.getContext("2d");
black.beginPath();
black.strokeStyle="black";
black.lineWidth=10;
black.arc(250, 200, 50,0, 2*Math.PI);
black.stroke();

green= canvas.getContext("2d");
green.beginPath();
green.strokeStyle="green";
green.lineWidth=10;
green.arc(320, 250, 50,0, 2*Math.PI);
green.stroke();

red= canvas.getContext("2d");
red.beginPath();
red.strokeStyle="red";
red.lineWidth=10;
red.arc(370, 200, 50,0, 2*Math.PI);
red.stroke();