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
	"	line-height:" + butHeightVal/*65*/ + "px;\n" +
	"	height: " + butHeightVal + "px;\n" +
	"	width: " + butWidthVal + "px;\n" +
	"	margin: auto;\n" +
	"	border: 1px solid hsl(" + butHueVal + "," + Math.round(butSatVal*.5)/*50%*/ + "%," + Math.round(butLightVal*0.28)/*20%*/ + "%);\n" +
	"	border-radius: " + Math.round(butHeightVal*.5) + "px;\n" +
	"	background-image: linear-gradient(to bottom,hsl(" + butHueVal + "," + butSatVal/*100%*/ + "%," + butLightVal/*70%*/ + "%)," +
		"hsl(" + butHueVal + "," + Math.round(butSatVal*.5)/*50%*/ + "%," + Math.round(butLightVal*.57)/*40%*/ + "%));\n" + /*100%,70%*/
	"	box-sizing: border-box;\n" +
	"	box-shadow: \n" +
	"		inset 0 " + Math.round(butHeightVal*.03)/*2*/ + "px .5px " +
	"hsl(" + butHueVal + "," + Math.round(butSatVal*.95)/*95%*/ + "%," + Math.round(butLightVal*1.29)/*90%*/ + "%),\n" +
	"		inset 0 " + Math.round(-butHeightVal*.03)/*-2*/ + "px .5px " +
	"hsl(" + butHueVal + "," + Math.round(butSatVal*.95)/*95%*/ + "%," + Math.round(butLightVal*.29)/*20%*/ + "%),\n" +
	"		0 " + Math.round(butHeightVal*.03)/*2*/ + "px " + Math.round(butHeightVal*.15)/*10*/ + "px " +
	"rgba(0,0,0,.9),\n" +
	"		0 " + Math.round(butHeightVal*.23)/*15*/ + "px " + Math.round(butHeightVal*.23)/*15*/ + "px " + Math.round(-butHeightVal*.08)/*-5*/ + "px " +
	"rgba(30,30,30,.3),\n" +
	"		0 " + Math.round(butHeightVal*.23)/*15*/ + "px " + Math.round(butHeightVal*.23)/*15*/ + "px " + Math.round(-butHeightVal*.08)/*-5*/ + "px " +
	"rgba(0,0,0,.5);\n" +
	"	text-shadow: \n" +
	"		1px 1px .5px hsl(" + butHueVal + "," + Math.round(butSatVal*.95)/*95%*/ + "%," + Math.round(butLightVal*1.29)/*90%*/ + "%),\n" +
	"		-1px 1px .5px hsl(" + butHueVal + "," + Math.round(butSatVal*.95)/*95%*/ + "%," + Math.round(butLightVal*1.29)/*90%*/ + "%),\n" +
	"		1px -1px .5px hsl(" + butHueVal + "," + Math.round(butSatVal*.95)/*95%*/ + "%," + Math.round(butLightVal*.29)/*20%*/ + "%),\n" +
	"		-1px -1px .5px hsl(" + butHueVal + "," + Math.round(butSatVal*.95)/*95%*/ + "%," + Math.round(butLightVal*.29)/*20%*/ + "%);\n" +
	"}\n" +
	".button:hover {\n" +
	"	cursor: pointer;\n" +
	"	background-image: linear-gradient(to bottom,hsl(" + butHueVal + "," + butSatVal/*100%*/ + "%," + Math.round(butLightVal*1.14)/*80%*/ + "%)," +
	"hsl(" + butHueVal + "," + Math.round(butSatVal*.5)/*50%*/ + "%," + Math.round(butLightVal*.64)/*45%*/ + "%));\n" +
	"}\n" +
	".button:active {\n" +
	"	box-shadow:\n" +
	"		inset 0 " + Math.round(butHeightVal*.03)/*2*/ + "px .5px hsl(" + butHueVal + "," + Math.round(butSatVal*.95)/*95%*/ + "%," + Math.round(butLightVal*1.29)/*90%*/ + "%),\n" +
	"		inset 0 " + Math.round(-butHeightVal*.03)/*-2*/ + "px .5px hsl(" + butHueVal + "," + Math.round(butSatVal*.95)/*95%*/ + "%," + Math.round(butLightVal*.29)/*20%*/ + "%),\n" +
	"		0 0 " + Math.round(butHeightVal*.15)/*10*/ + "px rgba(0,0,0,.9),\n" +
	"		0 " + Math.round(butHeightVal*.15)/*10*/ + "px " + Math.round(butHeightVal*.15)/*10*/ + "px " + Math.round(-butHeightVal*.08)/*-5*/ + "px " +
	"rgba(0,0,0,.5);\n" +
	"	background-image: linear-gradient(to top,hsl(" + butHueVal + "," + butSatVal/*100%*/ + "%," + Math.round(butLightVal*1.14)/*80%*/ + "%)," +
	"hsl(" + butHueVal + "," + Math.round(butSatVal*.5)/*50%*/ + "%," + Math.round(butLightVal*.71)/*50%*/ + "%));\n" +
	"}";
}
