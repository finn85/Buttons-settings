function cssText(){
	return ".button {\n" +
	"	position: relative;\n" +
	"	display: inline-block;\n" +
	"	user-select: none;\n" +
	"	color: white;\n" +
	"	font-family: Arial;\n" +
	"	font-size: " + butFontSizeVal + "px;\n" +
	"	font-weight: 700;\n" +
	"	text-align: center;\n" +
	"	vertical-align: middle;\n" +
	"	line-height:" + butHeightVal + "px;\n" +
	"	height: " + butHeightVal + "px;\n" +
	"	width: " + butWidthVal + "px;\n" +
	"	margin: auto;\n" +
	"	border: " + Math.round(butHeightVal*.025*10)/10 + "px solid hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*0.25) + "%);\n" +
	"	border-radius: " + Math.round(butHeightVal*.5) + "px;\n" +
	"	background: hsl(" + butHueVal + "," + butSatVal + "%," + butLightVal + "%);\n" +
	"	box-sizing: border-box;\n" +
	"	box-shadow:\n" +
	"		inset 0 " + Math.round(-butHeightVal*.06*10)/10 + "px " + 
	"hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*1.2) + "%),\n" +
	"		inset 0 " + Math.round(-butHeightVal*.6) + "px " + Math.round(butHeightVal*.3) + "px " + Math.round(-butHeightVal*.4) + "px " + 
	"hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*1.1) + "%),\n" +
	"		inset 0 " + Math.round(-butHeightVal*.8) + "px " + Math.round(butHeightVal*.3) + "px " + Math.round(-butHeightVal*.4) + "px " + 
	"hsl(" + butHueVal + "," + butSatVal + "%," + butLightVal + "%),\n" +
	"		inset 0 " + Math.round(-butHeightVal*.22) + "px " + Math.round(butHeightVal*.01*10)/10 + "px " + Math.round(butHeightVal*.22) + "px " + 
	"hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*.9) + "%),\n" +
	"		inset 0 " + Math.round(butHeightVal*.2) + "px " + Math.round(butHeightVal*.8) + "px " + Math.round(-butHeightVal*.1) + "px " + 
	"white,\n" +
	"		0 " + Math.round(butHeightVal*.08) + "px " + Math.round(butHeightVal*.02*10)/10 + "px " + 
	"hsla(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*.5) + "%,.5),\n" +
	"		0 0 " + Math.round(butHeightVal*.08) + "px " + Math.round(butHeightVal*.01*10)/10 + "px " + 
	"rgba(0,0,0,.5);\n" + 
	"	text-shadow:\n" +
	"		.5px .5px .5px hsl(" + butHueVal + "," + butSatVal + "%," + butLightVal + "%),\n" +
	"		0 -0.5px .5px hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*.38) + "%),\n" +
	"		0 .5px .5px rgba(255,255,255,0.5),\n" +
	"		0 0 2px hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*.25) + "%);\n" +
	"}\n" +
	".button:hover {\n" +
	"	cursor: pointer;\n" +
	"	color: white;\n" +
	"	text-shadow: 0 0 10px white;\n" +
	"}\n" +
	".button:active {\n" +
	"	box-shadow:\n" +
	"		inset 0 " + Math.round(butHeightVal*.04*10)/10 + "px " + Math.round(butHeightVal*.02*10)/10 + "px " +
	"hsla(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*.5) + "%,.5),\n" +
	"		inset 0 0 " + Math.round(butHeightVal*.4) + "px " + Math.round(butHeightVal*.4) + "px " +
	"hsla(" + butHueVal + "," + butSatVal + "%," + butLightVal + "%,.2),\n" +
	"		inset 0 " + Math.round(-butHeightVal*.06*10)/10 + "px " +
	"hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*1.2) + "%),\n" +
	"		inset 0 " + Math.round(-butHeightVal*.6) + "px " + Math.round(butHeightVal*.3) + "px " + Math.round(-butHeightVal*.4) + "px " +
	"hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*1.1) + "%),\n" +
	"		inset 0 " + Math.round(-butHeightVal*.8) + "px " + Math.round(butHeightVal*.3) + "px " + Math.round(-butHeightVal*.4) + "px " +
	"hsl(" + butHueVal + "," + butSatVal + "%," + butLightVal + "%),\n" +
	"		inset 0 " + Math.round(-butHeightVal*.22) + "px " + Math.round(butHeightVal*.01*10)/10 + "px " + Math.round(butHeightVal*.22) + "px " +
	"hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*.9) + "%),\n" +
	"		inset 0 " + Math.round(butHeightVal*.2) +"px " + Math.round(butHeightVal*.8) + "px " + Math.round(-butHeightVal*.1*10)/10 + "px " +
	"white,\n" +
	"		0 0 " + Math.round(butHeightVal*.08*10)/10 + "px " + Math.round(butHeightVal*.01*10)/10 + "px " +
	"rgba(0,0,0,.5);\n" + 
	"}";
}