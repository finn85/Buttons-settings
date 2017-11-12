function cssText(){
	return ".button {\n" +
	"	position: relative;\n" +
	"	display: inline-block;\n" +
	"	user-select: none;\n" +
	"	color: rgb(255,255,255);\n" +
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
	"	background: hsl(" + butHueVal + "," + butSatVal/*100*/ + "%," + butLightVal/*80*/ + "%);\n" +
	"	box-sizing: border-box;\n" +
	"	box-shadow:\n" +
	"		inset 0 0" + Math.round(butHeightVal*.025*10)/10 + "px " + Math.round(butHeightVal*.025*10)/10 + "px " +
	"hsl(" + butHueVal + "," + Math.round(butSatVal*.8) + "%," + Math.round(butLightVal*.56) + "%),\n" +
	"		inset 0 0 0 " + Math.round(butHeightVal*.05*10)/10 + "px " +
	"hsl(" + butHueVal + "," + Math.round(butSatVal*.8) + "%," + Math.round(butLightVal*.81) + "%),\n" +
	"		inset 0 0 0 " + Math.round(butHeightVal*.075*10)/10 + "px " +
	"rgba(255,255,255,.5),\n" +
	"		inset 0 0 " + Math.round(butHeightVal*.25) + "px " + Math.round(butHeightVal*.25) + "px " +
	"hsl(" + butHueVal + "," + Math.round(butSatVal*.8) + "%," + Math.round(butLightVal*.81) + "%),\n" +
	"		0 0 " + Math.round(butHeightVal*.075*10)/10 + "px " + Math.round(butHeightVal*.01*10)/10 + "px " +
	"rgba(0,0,0,.5),\n" +
	"		0 3px 3px 3px " +
	"rgba(255,255,255,.9),\n" +
	"		0 -3px 3px 3px " +
	"rgba(0,0,0,.5);\n" +
	"	text-shadow:\n" +
	"		.5px .5px .5px hsl(" + butHueVal + "," + butSatVal + "%," + butLightVal + "%),\n" +
	"		0 -0.5px .5px hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*.38) + "%),\n" +
	"		0 .5px .5px rgba(255,255,255,0.5),\n" +
	"		0 0 2px hsl(" + butHueVal + "," + butSatVal + "%," + Math.round(butLightVal*.25) + "%);\n" +
	"}\n" +
	".button:hover {\n" +
	"	cursor: pointer;\n" +
	"	text-shadow: 0 0 5px white;\n" +
	"}\n" +
	".button:active {\n" +
	"	box-shadow:\n" +
	"		inset 0 " + Math.round(butHeightVal*.15) + "px " +
	"hsla(" + butHueVal + "," + Math.round(butSatVal*.8) + "%," + Math.round(butLightVal*.3) + "%,.5),\n" +
	"		inset 0 0 " + Math.round(butHeightVal*.8) + "px " +
	"hsla(" + butHueVal + "," + Math.round(butSatVal*.6) + "%," + Math.round(butLightVal*.3) + "%,.5),\n" +
	"		inset 0 0" + Math.round(butHeightVal*.025*10)/10 + "px " + Math.round(butHeightVal*.025*10)/10 + "px " +
	"hsl(" + butHueVal + "," + Math.round(butSatVal*.8) + "%," + Math.round(butLightVal*.56) + "%),\n" +
	"		inset 0 0 0 " + Math.round(butHeightVal*.05*10)/10 + "px " +
	"hsl(" + butHueVal + "," + Math.round(butSatVal*.8) + "%," + Math.round(butLightVal*.81) + "%),\n" +
	"		inset 0 0 0 " + Math.round(butHeightVal*.075*10)/10 + "px " +
	"rgba(255,255,255,.5),\n" +
	"		inset 0 0 " + Math.round(butHeightVal*.25) + "px " + Math.round(butHeightVal*.25) + "px " +
	"hsl(" + butHueVal + "," + Math.round(butSatVal*.8) + "%," + Math.round(butLightVal*.81) + "%),\n" +
	"		0 0 " + Math.round(butHeightVal*.075*10)/10 + "px " + Math.round(butHeightVal*.01*10)/10 + "px " +
	"rgba(0,0,0,.5),\n" +
	"		0 3px 3px 3px " +
	"rgba(255,255,255,.9),\n" +
	"		0 -3px 3px 3px " +
	"rgba(0,0,0,.5);\n" +
	"}\n"
}
