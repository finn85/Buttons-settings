var butTextVal,
	butFontSizeVal = "25",
	butColVal = "0",
	butHeightVal = "50",
	butWidthVal = "250";

window.onload = writeCSS();

buttonText.addEventListener("keyup",changeButText);

buttonColor.addEventListener("input",changeButColor);
buttonColor.addEventListener("input",writeCSS);

buttonFontSize.addEventListener("input",changeFontSize);
buttonFontSize.addEventListener("input",writeCSS);

buttonHeight.addEventListener("input",changeHeight);
buttonHeight.addEventListener("input",writeCSS);

buttonWidth.addEventListener("input",changeWidth);
buttonWidth.addEventListener("input",writeCSS);

function changeButText() {
	butTextVal = document.getElementById("buttonText").value;
	button.innerHTML = butTextVal;
}

function changeButColor() {
	butColVal = document.getElementById("buttonColor").value;
	button.style.background = "hsl("+butColVal+",100%,40%)";
	button.style.borderColor = "hsl("+butColVal+",100%,20%)";
	button.style.boxShadow = "inset 0 "+(-butHeightVal*0.06)+"px 0 0 hsl("+butColVal+",100%,48%)," +
		"inset 0 "+(-butHeightVal*.6)+"px "+(butHeightVal*.3)+"px "+(-butHeightVal*.4)+"px hsl("+butColVal+",100%,44%)," +
		"inset 0 "+(-butHeightVal*.8)+"px "+(butHeightVal*.3)+"px "+(-butHeightVal*.4)+"px hsl("+butColVal+",100%,40%)," +
		"inset 0 "+(-butHeightVal*.22)+"px "+(butHeightVal*.01)+"px "+(butHeightVal*.22)+"px hsl("+butColVal+",100%,36%)," +
		"inset 0 "+(butHeightVal*.2)+"px "+(butHeightVal*.8)+"px "+(-butHeightVal*.1)+"px white," +
		"0 "+(butHeightVal*.08)+"px "+(butHeightVal*.02)+"px 0 hsla("+butColVal+",100%,20%,.5)," +
		"0 0 "+(butHeightVal*.08)+"px "+(butHeightVal*.01)+"px rgba(0,0,0,.5)";
}

function changeFontSize(argument) {
	butFontSizeVal = document.getElementById("buttonFontSize").value;
	button.style.fontSize = butFontSizeVal + "px";
}

function changeHeight() {
	butHeightVal = document.getElementById("buttonHeight").value;
	button.style.height = butHeightVal + "px";
	button.style.lineHeight = butHeightVal + "px";
	button.style.borderWidth = butHeightVal*.025 + "px";
	button.style.borderRadius = butHeightVal*.5 + "px";
	button.style.boxShadow = "inset 0 "+(-butHeightVal*0.06)+"px 0 0 hsl("+butColVal+",100%,48%)," +
		"inset 0 "+(-butHeightVal*.6)+"px "+(butHeightVal*.3)+"px "+(-butHeightVal*.4)+"px hsl("+butColVal+",100%,44%)," +
		"inset 0 "+(-butHeightVal*.8)+"px "+(butHeightVal*.3)+"px "+(-butHeightVal*.4)+"px hsl("+butColVal+",100%,40%)," +
		"inset 0 "+(-butHeightVal*.22)+"px "+(butHeightVal*.01)+"px "+(butHeightVal*.22)+"px hsl("+butColVal+",100%,36%)," +
		"inset 0 "+(butHeightVal*.2)+"px "+(butHeightVal*.8)+"px "+(-butHeightVal*.1)+"px white," +
		"0 "+(butHeightVal*.08)+"px "+(butHeightVal*.02)+"px 0 hsla("+butColVal+",100%,20%,.5)," +
		"0 0 "+(butHeightVal*.08)+"px "+(butHeightVal*.01)+"px rgba(0,0,0,.5)";
}

function changeWidth() {
	butWidthVal = document.getElementById("buttonWidth").value;
	button.style.width = butWidthVal + "px";
}

function writeCSS() {
	cssCode.innerHTML = butFontSizeVal + " " + butColVal + " " + butHeightVal + " " + butWidthVal;
	cssCode.innerHTML = ".button { <br>" +
	"	position: relative;<br>" +
	"	display: inline-block;<br>" +
	"	user-select: none;<br>" +
	"	color: rgba(255,255,255,0.8);<br>" +
	"	font-family: Arial;<br>" +
	"	font-size: " + butFontSizeVal + "px;<br>" +
	"	font-weight: 700;<br>" +
	"	text-align: center;<br>" +
	"	vertical-align: middle;<br>" +
	"	line-height:" + butHeightVal + "px;<br>" +
	"	height: " + butHeightVal + "px;<br>" +
	"	width: " + butWidthVal + "px;<br>" +
	"	margin: auto;<br>" +
	"	border: " + Math.round(butHeightVal*.025*10)/10 + "px solid hsl(" + butColVal + ",100%,20%);<br>" +
	"	border-radius: " + Math.round(butHeightVal*.5) + "px;<br>" +
	"	background: hsl(" + butColVal + ",100%,40%);<br>" +
	"	box-sizing: border-box;<br>" +
	"	box-shadow:<br>" +
	"		inset 0 -" + Math.round(butHeightVal*.06*10)/10 + "px 0 0 hsl(" + butColVal + ",100%,48%),<br>" +
	"		inset 0 -" + Math.round(butHeightVal*.6) + "px " + Math.round(butHeightVal*.3) + "px -" + Math.round(butHeightVal*.4) + "px hsl(" + butColVal + ",100%,44%),<br>" +
	"		inset 0 -" + Math.round(butHeightVal*.8) + "px " + Math.round(butHeightVal*.3) + "px -" + Math.round(butHeightVal*.4) + "px hsl(" + butColVal + ",100%,40%),<br>" +
	"		inset 0 -" + Math.round(butHeightVal*.22) + "px " + Math.round(butHeightVal*.01*10)/10 + "px " + Math.round(butHeightVal*.22) + "px hsl(" + butColVal + ",100%,36%),<br>" +
	"		inset 0 " + Math.round(butHeightVal*.2) + "px " + Math.round(butHeightVal*.8) + "px -" + Math.round(butHeightVal*.1) + "px white,<br>" +
	"		0 " + Math.round(butHeightVal*.08*10)/10 + "px " + Math.round(butHeightVal*.02*10)/10 + "px 0 hsla(" + butColVal + ",100%,20%,0.5),<br>" +
	"		0 0 " + Math.round(butHeightVal*.08*10)/10 + "px " + Math.round(butHeightVal*.01*10)/10 + "px rgba(0,0,0,0.5);<br>" +
	"}<br>" +
	".button:hover {<br>" +
	"	cursor: pointer;<br>" +
	"	text-shadow: 0 0 10px white;<br>" +
	"}<br>" +
	".button:active {<br>" +
	"	box-shadow:<br>" +
	"		inset 0 " + Math.round(butHeightVal*.04*10)/10 + "px " + Math.round(butHeightVal*.02*10)/10 + "px 0 hsla(" + butColVal + ",100%,20%,.5),<br>" +
	"		inset 0 0 " + Math.round(butHeightVal*.4) + "px " + Math.round(butHeightVal*.4) + "px hsla(" + butColVal + ",100%,40%,.2),<br>" +
	"		inset 0 -" + Math.round(butHeightVal*.06*10)/10 + "px 0 0 hsl(" + butColVal + ",100%,48%),<br>" +
	"		inset 0 -" + Math.round(butHeightVal*.6) + "px " + Math.round(butHeightVal*.3) + "px -" + Math.round(butHeightVal*.4) + "px hsl(" + butColVal + ",100%,44%),<br>" +
	"		inset 0 -" + Math.round(butHeightVal*.8) + "px " + Math.round(butHeightVal*.3) + "px -" + Math.round(butHeightVal*.4) + "px hsl(" + butColVal + ",100%,40%),<br>" +
	"		inset 0 -" + Math.round(butHeightVal*.22) + "px " + Math.round(butHeightVal*.01*10)/10 + "px " + Math.round(butHeightVal*.22) + "px hsl(" + butColVal + ",100%,36%),<br>" +
	"		inset 0 " + Math.round(butHeightVal*.2) +"px " + Math.round(butHeightVal*.8) + "px -" + Math.round(butHeightVal*.1*10)/10 + "px white,<br>" +
	"		0 0 " + Math.round(butHeightVal*.08*10)/10 + "px " + Math.round(butHeightVal*.01*10)/10 + "px rgba(0,0,0,.5);<br>" +
	"}";
}

button.addEventListener("mousedown", function () {
	button.style.boxShadow = "inset 0 "+(butHeightVal*0.04)+"px "+(butHeightVal*0.02)+"px 0 hsla("+butColVal+",100%,20%,.5)," +
		"inset 0 0 "+(butHeightVal*.4)+"px "+(butHeightVal*.4)+"px hsla("+butColVal+",100%,40%,.2)," +
		"inset 0 "+(-butHeightVal*0.06)+"px 0 0 hsl("+butColVal+",100%,48%)," +
		"inset 0 "+(-butHeightVal*.6)+"px "+(butHeightVal*.3)+"px "+(-butHeightVal*.4)+"px hsl("+butColVal+",100%,44%)," +
		"inset 0 "+(-butHeightVal*.8)+"px "+(butHeightVal*.3)+"px "+(-butHeightVal*.4)+"px hsl("+butColVal+",100%,40%)," +
		"inset 0 "+(-butHeightVal*.22)+"px "+(butHeightVal*.01)+"px "+(butHeightVal*.22)+"px hsl("+butColVal+",100%,36%)," +
		"inset 0 "+(butHeightVal*.2)+"px "+(butHeightVal*.8)+"px "+(-butHeightVal*.1)+"px white," +
		"0 0 "+(butHeightVal*.08)+"px "+(butHeightVal*.01)+"px rgba(0,0,0,.5)";
})

button.addEventListener("mouseup", function() {
	button.style.boxShadow = "inset 0 "+(-butHeightVal*0.06)+"px 0 0 hsl("+butColVal+",100%,48%)," +
		"inset 0 "+(-butHeightVal*.6)+"px "+(butHeightVal*.3)+"px "+(-butHeightVal*.4)+"px hsl("+butColVal+",100%,44%)," +
		"inset 0 "+(-butHeightVal*.8)+"px "+(butHeightVal*.3)+"px "+(-butHeightVal*.4)+"px hsl("+butColVal+",100%,40%)," +
		"inset 0 "+(-butHeightVal*.22)+"px "+(butHeightVal*.01)+"px "+(butHeightVal*.22)+"px hsl("+butColVal+",100%,36%)," +
		"inset 0 "+(butHeightVal*.2)+"px "+(butHeightVal*.8)+"px "+(-butHeightVal*.1)+"px white," +
		"0 "+(butHeightVal*.08)+"px "+(butHeightVal*.02)+"px 0 hsla("+butColVal+",100%,20%,.5)," +
		"0 0 "+(butHeightVal*.08)+"px "+(butHeightVal*.01)+"px rgba(0,0,0,.5)";
})
