function cssText(){
	return ".button {\n" +
	"	position: relative;\n" +
	"	display: inline-block;\n" +
	"	user-select: none;\n" +
	"	color: rgb(255,255,255);\n" +
	"	font-family: Arial;\n" +
	"	font-size: " + val("fs") + ";\n" +
	"	font-weight: 700;\n" +
	"	text-align: center;\n" +
	"	vertical-align: middle;\n" +
	"	line-height:" + val("h") + ";\n" +
	"	height: " + val("h") + ";\n" +
	"	width: " + val("w") + ";\n" +
	"	margin: auto;\n" +
	"	border: 2px solid hsl(" + val("hu") + "," + val("st") + val("lg",.25) + ");\n" +
	"	border-radius: " + val("h",.5) + ";\n" +
	"	background: hsl(" + val("hu") + "," + val("st") + "," + val("lg") + ");\n" +
	"	box-sizing: border-box;\n" +
	"	box-shadow:\n" +
	"		inset 0 0 " + val("h",.025) + " " + val("h",.025) +
	" hsl(" + val("hu") + "," + val("st",.8) + "," + val("lg",.56) + "),\n" +
	"		inset 0 0 0 " + val("h",.05) +
	" hsl(" + val("hu") + "," + val("st",.8) + "," + val("lg",.81) + "),\n" +
	"		inset 0 0 0 " + val("h",.075) +
	" rgba(255,255,255,.5),\n" +
	"		inset 0 0 " + val("h",.25) + " " + val("h",.25) +
	" hsl(" + val("hu") + "," + val("st",.8) + "," + val("lg",.81) + "),\n" +
	"		0 0 " + val("h",.075) + " " + val("h",.01,1) +
	" rgba(0,0,0,.5),\n" +
	"		0 3px 3px 3px" +
	" rgba(255,255,255,.9),\n" +
	"		0 -3px 3px 3px" +
	" rgba(0,0,0,.5);\n" +
	"	text-shadow:\n" +
	"		.5px .5px .5px hsl(" + val("hu") + "," + val("st") + "," + val("lg") + "),\n" +
	"		0 -0.5px .5px hsl(" + val("hu") + "," + val("st") + "," + val("lg",.38) + "),\n" +
	"		0 .5px .5px rgba(255,255,255,0.5),\n" +
	"		0 0 2px hsl(" + val("hu") + "," + val("st") + "," + val("lg",.25) + ");\n" +
	"}\n" +
	".button:hover {\n" +
	"	cursor: pointer;\n" +
	"	text-shadow: 0 0 5px white;\n" +
	"}\n" +
	".button:active {\n" +
	"	box-shadow:\n" +
	"		inset 0 " + val("h",.15) +
	" hsla(" + val("hu") + "," + val("st",.8) + "," + val("lg",.3) + ",.5),\n" +
	"		inset 0 0 " + val("h",.8) +
	" hsla(" + val("hu") + "," + val("st",.6) + "," + val("lg",.3) + ",.5),\n" +
	"		inset 0 0 " + val("h",.025) + " " + val("h",.025) +
	" hsl(" + val("hu") + "," + val("st",.8) + "," + val("lg",.56) + "),\n" +
	"		inset 0 0 0 " + val("h",.05) +
	" hsl(" + val("hu") + "," + val("st",.8) + "," + val("lg",.81) + "),\n" +
	"		inset 0 0 0 " + val("h",.075) +
	" rgba(255,255,255,.5),\n" +
	"		inset 0 0 " + val("h",.25) + " " + val("h",.25) +
	" hsl(" + val("hu") + "," + val("st",.8) + "," + val("lg",.81) + "),\n" +
	"		0 0 " + val("h",.075) + " " + val("h",.01,1) +
	" rgba(0,0,0,.5),\n" +
	"		0 3px 3px 3px" +
	" rgba(255,255,255,.9),\n" +
	"		0 -3px 3px 3px" +
	" rgba(0,0,0,.5);\n" +
	"}\n"
}
