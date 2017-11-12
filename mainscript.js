var butTextVal,
	butFontSizeVal,
	butHueVal,
	butSatVal,
	butLightVal,
	butHeightVal,
	butWidthVal;
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
window.onload = function() {
	upWrWr();
}

buttonText.addEventListener("keyup",changeButText);

buttonHue.addEventListener("input",upWrWr);
buttonSaturation.addEventListener("input",upWrWr);
buttonLightness.addEventListener("input",upWrWr);
buttonFontSize.addEventListener("input",upWrWr);
buttonHeight.addEventListener("input",upWrWr);
buttonWidth.addEventListener("input",upWrWr);

buttonType1.addEventListener("mousedown", function(){
	changeButStyle(1);
});
buttonType1.addEventListener("mouseup", upWrWr);

buttonType2.addEventListener("mousedown", function(){
	changeButStyle(2);
});
buttonType2.addEventListener("mouseup", upWrWr);

buttonType3.addEventListener("mousedown", function(){
	changeButStyle(3);
});
buttonType3.addEventListener("mouseup", upWrWr);

buttonType4.addEventListener("mousedown", function(){
	changeButStyle(4);
});
buttonType4.addEventListener("mouseup", upWrWr);

selectText.addEventListener("click", selectCssText);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
function changeButText() {
	butTextVal = document.getElementById("buttonText").value;
	button.innerHTML = butTextVal;
}
function updateVars() {
	butFontSizeVal = document.getElementById("buttonFontSize").value;
	butHueVal = document.getElementById("buttonHue").value;
	butSatVal = document.getElementById("buttonSaturation").value;
	butLightVal = document.getElementById("buttonLightness").value;
	butHeightVal = document.getElementById("buttonHeight").value;
	butWidthVal = document.getElementById("buttonWidth").value;
}
function writeCssPreview() {
	cssCode.innerHTML = cssText();;
}
function writeStyleInHead() {
	var headEl = document.getElementsByTagName("head")[0],
		oldStyleEl = document.getElementsByTagName("style")[0],
		newStyleEl = document.createElement("style");
	newStyleEl.innerHTML = cssText();
	if(oldStyleEl){
		oldStyleEl.remove();
	}
	headEl.appendChild(newStyleEl);
}
function upWrWr() {
	updateVars();
	writeCssPreview();
	writeStyleInHead();
}
function changeButStyle(num) {
	var body = document.getElementsByTagName("body")[0],
		oldelem = document.getElementsByTagName("script")[1],
		newElem = document.createElement("script");
	newElem.setAttribute("src", "button0" + num + ".js");
	body.replaceChild(newElem,oldelem);
}
function selectCssText() {
	var rng, sel;
	rng = document.createRange(); //создаем объект область
	rng.selectNode(cssCode); //выберем текущий узел
	sel = window.getSelection(); //Получаем объект текущее выделение
	sel.removeAllRanges(); //Очистим все выделения (на всякий случай) 
	sel.addRange(rng); //Выделим текущий узел
}
