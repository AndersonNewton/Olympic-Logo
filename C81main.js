Canvas=document.getElementById("canvas_1");
Context=Canvas.getContext("2d");


Context.beginPath();
Context.strokeStyle="blue";
Context.lineWidth=5;
Context.arc(200,200,50,0,2*Math.PI);
Context.stroke();

Context.beginPath();
Context.strokeStyle="black";
Context.lineWidth=5;
Context.arc(320,200,50,0,2*Math.PI);
Context.stroke();

Context.beginPath();
Context.strokeStyle="red";
Context.lineWidth=5;
Context.arc(440,200,50,0,2*Math.PI);
Context.stroke();

Context.beginPath();
Context.strokeStyle="yellow";
Context.lineWidth=5;
Context.arc(260,250,50,0,2*Math.PI);
Context.stroke();

Context.beginPath();
Context.strokeStyle="Green";
Context.lineWidth=5;
Context.arc(380,250,50,0,2*Math.PI);
Context.stroke();



