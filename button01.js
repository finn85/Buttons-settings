function cssText(){
	return ".button {\n" +
	"	position: relative;\n" +
	"	display: inline-block;\n" +
	"	user-select: none;\n" +
	"	color: white;\n" +
	"	font-family: Arial;\n" +
	"	font-size: " + val("fs") + ";\n" +
	"	font-weight: 700;\n" +
	"	text-align: center;\n" +
	"	vertical-align: middle;\n" +
	"	line-height: " + val("h") + ";\n" +
	"	height: " + val("h") + ";\n" +
	"	width: " + val("w") + ";\n" +
	"	margin: auto;\n" +
	"	border: 1px solid hsl(" + val("hu") + "," + val("st",.5) + "," + val("lg",.28) + ");\n" +
	"	border-radius: " + val("h",.5) + ";\n" +
	"	background-image: linear-gradient(to bottom,hsl(" + val("hu") + "," + val("st") + "," + val("lg") + ")," +
	"hsl(" + val("hu") + "," + val("st",.5) + "," + val("lg",.57) + "));\n" + 
	"	box-sizing: border-box;\n" +
	"	box-shadow: \n" +
	"		inset 0 " + val("h",.03) + " .5px " +
	"hsl(" + val("hu") + "," + val("st",.95) + "," + val("lg",1.29) + "),\n" +
	"		inset 0 " + val("h",-.03) + " .5px " +
	"hsl(" + val("hu") + "," + val("st",.95) + "," + val("lg",.29) + "),\n" +
	"		0 " + val("h",.03) + " " + val("h",.15) + " " +
	"rgba(0,0,0,.9),\n" +
	"		0 " + val("h",.23) + " " + val("h",.23) + " " +val("h",-.08) +
	" rgba(30,30,30,.3),\n" +
	"		0 " + val("h",.23) + " " + val("h",.23) + " " +val("h",-.08) +
	" rgba(0,0,0,.5);\n" +
	"	text-shadow: \n" +
	"		.5px .5px .3px hsl(" + val("hu") + "," + val("st",.95) + "," + val("lg",1.29) + "),\n" +
	"		-.5px .5px .3px hsl(" + val("hu") + "," + val("st",.95) + "," + val("lg",1.29) + "),\n" +
	"		.5px -.5px .3px hsl(" + val("hu") + "," + val("st",.95) + "," + val("lg",.29) + "),\n" +
	"		-.5px -.5px .3px hsl(" + val("hu") + "," + val("st",.95) + "," + val("lg",.29) + ");\n" +
	"}\n" +
	".button:hover {\n" +
	"	cursor: pointer;\n" +
	"	background-image: linear-gradient(to bottom,hsl(" + val("hu") + "," + val("st") + "," + val("lg",1.14) + ")," +
	"hsl(" + val("hu") + "," + val("st",.5) + "," + val("lg",.64) + "));\n" +
	"}\n" +
	".button:active {\n" +
	"	height: " + val("h",.95) + ";\n" +
	"	line-height: " + val("h",.95) + ";\n" +
	"	box-shadow:\n" +
	"		inset 0 " + val("h",.03) + " .5px " +
	"hsl(" + val("hu") + "," + val("st",.95) + "," + val("lg",1.29) + "),\n" +
	"		inset 0 " + val("h",-.03) + " .5px " +
	"hsl(" + val("hu") + "," + val("st",.95) + "," + val("lg",.29) + "),\n" +
	"		0 " + val("h",.03) + " .5px " +
	"rgba(255,255,255,.8),\n" +
	"		0 " + val("h",-.03) + " .5px " +
	"rgba(0,0,0,.5),\n" +
	"		0 0 " + val("h",.15) +
	" rgba(0,0,0,.9);\n" +
	"}";
}
