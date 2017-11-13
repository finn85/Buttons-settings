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
	"	border: 2px solid hsl(" + val("hu") + "," + val("st") + "," + val("lg",.25) + ");\n" +
	"	border-radius: " + val("h",.5) + ";\n" +
	"	background: hsl(" + val("hu") + "," + val("st") + "," + val("lg") + ");\n" +
	"	box-sizing: border-box;\n" +
	"	box-shadow:\n" +
	"		inset 0 " + val("h",-.06) +
	" hsl(" + val("hu") + "," + val("st") + "," + val("lg",1.2) + "),\n" +
	"		inset 0 " + val("h",-.6) + " " + val("h",.3) + " " + val("h",-.4) +
	" hsl(" + val("hu") + "," + val("st") + "," + val("lg",1.1) + "),\n" +
	"		inset 0 " + val("h",-.8) + " " + val("h",.3) + " " + val("h",-.4) +
	" hsl(" + val("hu") + "," + val("st") + "," + val("lg") + "),\n" +
	"		inset 0 " + val("h",-.22) + " " + val("h",.01) + " " + val("h",.22) +
	" hsl(" + val("hu") + "," + val("st") + "," + val("lg",.9) + "),\n" +
	"		inset 0 " + val("h",.2) + " " + val("h",.8) + " " + val("h",-.1) +
	" white,\n" +
	"		0 " + val("h",.08) + " " + val("h",.02,1) + " " + 
	"hsla(" + val("hu") + "," + val("st") + "," + val("lg",.5) + ",.5),\n" +
	"		0 0 " + val("h",.08) + " " + val("h",.01,1) +
	" rgba(0,0,0,.5);\n" + 
	"	text-shadow:\n" +
	"		.5px .5px .5px hsl(" + val("hu") + "," + val("st") + "," + val("lg") + "),\n" +
	"		0 -0.5px .5px hsl(" + val("hu") + "," + val("st") + "," + val("lg",.38) + "),\n" +
	"		0 .5px .5px rgba(255,255,255,0.5),\n" +
	"		0 0 2px hsl(" + val("hu") + "," + val("st") + "," + val("lg",.25) + ");\n" +
	"}\n" +
	".button:hover {\n" +
	"	cursor: pointer;\n" +
	"	color: white;\n" +
	"	text-shadow: 0 0 10px white;\n" +
	"}\n" +
	".button:active {\n" +
	"	height: " + val("h",.95) + ";\n" +
	"	line-height: " + val("h",.95) + ";\n" +
	"	box-shadow:\n" +
	"		inset 0 " + val("h",.04) + " " + val("h",.2) +
	" hsla(" + val("hu") + "," + val("st") + "," + val("lg",.5) + ",.5),\n" +
	"		inset 0 0 " + val("h",.4) + " " + val("h",.4) +
	" hsla(" + val("hu") + "," + val("st") + "," + val("lg") + ",.2),\n" +
	"		inset 0 " + val("h",-.06) +
	" hsl(" + val("hu") + "," + val("st") + "," + val("lg",1.2) + "),\n" +
	"		inset 0 " + val("h",.6) + " " + val("h",.3) + " " + val("h",-.4) +
	" hsl(" + val("hu") + "," + val("st") + "," + val("lg",1.1) + "),\n" +
	"		inset 0 " + val("h",-.8) + " " + val("h",.3) + " " + val("h",-.4) +
	" hsl(" + val("hu") + "," + val("st") + "," + val("lg") + "),\n" +
	"		inset 0 " + val("h",-.22) + " " + val("h",.01) + " " + val("h",.22) +
	" hsl(" + val("hu") + "," + val("st") + "," + val("lg",.9) + "),\n" +
	"		inset 0 " + val("h",.2) +" " + val("h",.8) + " " + val("h",-.1) +
	" white,\n" +
	"		0 " + val("h",.03) + " .5px " +
	"rgba(255,255,255,.8),\n" +
	"		0 " + val("h",-.03) + " .5px " +
	"rgba(0,0,0,.5),\n" +
	"		0 0 " + val("h",.15) +
	" rgba(0,0,0,.9);\n" +
	"}";
}