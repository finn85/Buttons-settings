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
	"	border-radius: " + val("h",.5) + ";\n" +
	"	background-image: linear-gradient(to bottom,hsl(" + val("hu") + "," + val("st") + "," + val("lg") + ")," + //75 70
	"hsl(" + val("hu") + "," + val("st",.67) + "," + val("lg",.57) + "));\n" + 
	"	box-sizing: border-box;\n" +
	"	box-shadow:\n" +
	"		inset 0 0 1px 5px rgb(230,230,230),\n" +
	"	inset 0 8px 10px 2px rgb(150,150,150),\n" +
	"	inset 0 -8px 7px 3px white,\n" +
	"	inset 0 0 0 12px rgb(220,220,220),\n" +
	"	inset 0 2px 2px 12px hsl(" + val("hu") + "," + val("st") + "," + val("lg",1.2) + "),\n" +
	"	inset 0 -2px 2px 12px hsl(" + val("hu") + "," + val("st",.67) + "," + val("lg",.4) + "),\n" +
	"	0 1px 4px rgba(0,0,0,.5);\n" +
	"	text-shadow:\n" +
	"		1px 1px .5px hsl(" + val("hu") + "," + val("st",1.2) + "," + val("lg",1.29) + "),\n" +
	"		-1px 1px .5px hsl(" + val("hu") + "," + val("st",1.2) + "," + val("lg",1.29) + "),\n" +
	"		1px -1px .5px hsl(" + val("hu") + "," + val("st",1.2) + "," + val("lg",.28) + "),\n" +
	"		-1px -1px .5px hsl(" + val("hu") + "," + val("st",1.2) + "," + val("lg",.28) + ");\n" +
	"}\n" +
	".button:hover {\n" +
	"	cursor: pointer;\n" +
	"	background-image: linear-gradient(to bottom,hsl(" + val("hu") + "," + val("st") + "," + val("lg",1.07) + ")," +
	"hsl(" + val("hu") + "," + val("st",.67) + "," + val("lg",.64) + "));\n" +
	"}\n" +
	".button:active {\n" +
	"	background-image: linear-gradient(to top,hsl(" + val("hu") + "," + val("st") + "," + val("lg",1.07) + ")," +
	"hsl(" + val("hu") + "," + val("st",.67) + "," + val("lg",.64) + "));\n" +
	"}";
}