function butBackgrVal() {
	return "hsl(" + butHueVal + "," + butSatVal + "%," + butLightVal + "%)";
}
function butBordColVal() {
	return "hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*0.5) + "%)";
}
function butBordWidthVal() {
	return Math.round(butHeightVal*.025*10)/10 + "px";
}
function butBordRadVal() {
	return Math.round(butHeightVal*.5) + "px";
}
function butBoxShadVal() {
	return "\t\tinset 0 " + Math.round(-butHeightVal*.06*10)/10 + "px " + 
	"hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*1.2) + "%),\n" +
	"\t\tinset 0 " + Math.round(-butHeightVal*.6) + "px " + Math.round(butHeightVal*.3) + "px " + Math.round(-butHeightVal*.4) + "px " + 
	"hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*1.1) + "%),\n" +
	"\t\tinset 0 " + Math.round(-butHeightVal*.8) + "px " + Math.round(butHeightVal*.3) + "px " + Math.round(-butHeightVal*.4) + "px " + 
	"hsl(" + butHueVal + "," + butSatVal + "%," + butLightVal + "%),\n" +
	"\t\tinset 0 " + Math.round(-butHeightVal*.22) + "px " + Math.round(butHeightVal*.01*10)/10 + "px " + Math.round(butHeightVal*.22) + "px " + 
	"hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*.9) + "%),\n" +
	"\t\tinset 0 " + Math.round(butHeightVal*.2) + "px " + Math.round(butHeightVal*.8) + "px " + Math.round(-butHeightVal*.1) + "px " + 
	"white,\n" +
	"\t\t0 " + Math.round(butHeightVal*.08*10)/10 + "px " + Math.round(butHeightVal*.02*10)/10 + "px " + 
	"hsla(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*.5) + "%,.5),\n" +
	"\t\t0 0 " + Math.round(butHeightVal*.08*10)/10 + "px " + Math.round(butHeightVal*.01*10)/10 + "px " + 
	"rgba(0,0,0,.5)";
}
function butBoxShadValClick() {
	return "\t\tinset 0 " + Math.round(butHeightVal*.04*10)/10 + "px " + Math.round(butHeightVal*.02*10)/10 + "px " +
	"hsla(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*.5) + "%,.5),\n" +
	"\t\tinset 0 0 " + Math.round(butHeightVal*.4) + "px " + Math.round(butHeightVal*.4) + "px " +
	"hsla(" + butHueVal + "," + butSatVal + "%," + butLightVal + "%,.2),\n" +
	"\t\tinset 0 " + Math.round(-butHeightVal*.06*10)/10 + "px " +
	"hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*1.2) + "%),\n" +
	"\t\tinset 0 " + Math.round(-butHeightVal*.6) + "px " + Math.round(butHeightVal*.3) + "px " + Math.round(-butHeightVal*.4) + "px " +
	"hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*1.1) + "%),\n" +
	"\t\tinset 0 " + Math.round(-butHeightVal*.8) + "px " + Math.round(butHeightVal*.3) + "px " + Math.round(-butHeightVal*.4) + "px " +
	"hsl(" + butHueVal + "," + butSatVal + "%," + butLightVal + "%),\n" +
	"\t\tinset 0 " + Math.round(-butHeightVal*.22) + "px " + Math.round(butHeightVal*.01*10)/10 + "px " + Math.round(butHeightVal*.22) + "px " +
	"hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*.9) + "%),\n" +
	"\t\tinset 0 " + Math.round(butHeightVal*.2) +"px " + Math.round(butHeightVal*.8) + "px " + Math.round(-butHeightVal*.1*10)/10 + "px " +
	"white,\n" +
	"\t\t0 0 " + Math.round(butHeightVal*.08*10)/10 + "px " + Math.round(butHeightVal*.01*10)/10 + "px " +
	"rgba(0,0,0,.5)";
}
function cssText(){
	return ".button {\n" +
	"	position: relative;\n" +
	"	display: inline-block;\n" +
	"	user-select: none;\n" +
	"	color: rgb(230,230,230);\n" +
	"	font-family: Arial;\n" +
	"	font-size: " + butFontSizeVal + "px;\n" +
	"	font-weight: 700;\n" +
	"	text-align: center;\n" +
	"	vertical-align: middle;\n" +
	"	line-height:" + butHeightVal + "px;\n" +
	"	height: " + butHeightVal + "px;\n" +
	"	width: " + butWidthVal + "px;\n" +
	"	margin: auto;\n" +
	"	border: " + butBordWidthVal() + " solid " + butBordColVal() + ";\n" +
	"	border-radius: " + butBordRadVal() + ";\n" +
	"	background: " + butBackgrVal() + ";\n" +
	"	box-sizing: border-box;\n" +
	"	box-shadow:\n" + butBoxShadVal() + ";\n" + 
	"	text-shadow: 0 -1px black,\n" + 
	"		0 1px white;\n" +
	"}\n" +
	".button:hover {\n" +
	"	cursor: pointer;\n" +
	"	color: white;\n" +
	"	text-shadow: 0 0 10px white;\n" +
	"}\n" +
	".button:active {\n" +
	"	box-shadow:\n" + butBoxShadValClick() + ";\n" + 
	"}";
}