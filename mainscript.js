var butTextVal,
	butFontSizeVal = document.getElementById("buttonFontSize").value,
	butHueVal = document.getElementById("buttonHue").value,
	butSatVal = document.getElementById("buttonSaturation").value,
	butLightVal = document.getElementById("buttonLightness").value,
	butHeightVal = document.getElementById("buttonHeight").value,
	butWidthVal = document.getElementById("buttonWidth").value;
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
window.onload = function() {
	writeCSS();
	loadPreviewStyle();
}

buttonText.addEventListener("keyup",changeButText);

buttonHue.addEventListener("input",changeButHue);
buttonHue.addEventListener("input",writeCSS);

buttonSaturation.addEventListener("input",changeButSat);
buttonSaturation.addEventListener("input",writeCSS);

buttonLightness.addEventListener("input",changeButLight);
buttonLightness.addEventListener("input",writeCSS);

buttonFontSize.addEventListener("input",changeFontSize);
buttonFontSize.addEventListener("input",writeCSS);

buttonHeight.addEventListener("input",changeHeight);
buttonHeight.addEventListener("input",writeCSS);

buttonWidth.addEventListener("input",changeWidth);
buttonWidth.addEventListener("input",writeCSS);

button.addEventListener("mousedown", function () {
	button.style.boxShadow = butBoxShadValClick();
})
button.addEventListener("mouseup", function() {
	button.style.boxShadow = butBoxShadVal();
})

selectText.addEventListener("click", selectCssText);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
function changeButText() {
	butTextVal = document.getElementById("buttonText").value;
	button.innerHTML = butTextVal;
}
function changeFontSize(argument) {
	butFontSizeVal = document.getElementById("buttonFontSize").value;
	button.style.fontSize = butFontSizeVal + "px";
}
function changeButHue() {
	butHueVal = document.getElementById("buttonHue").value;
	button.style.background = butBackgrVal();
	button.style.borderColor = butBordColVal();
	button.style.boxShadow = butBoxShadVal();
}
function changeButSat() {
	butSatVal = document.getElementById("buttonSaturation").value;
	button.style.background = butBackgrVal();
	button.style.borderColor = butBordColVal();
	button.style.boxShadow = butBoxShadVal();
}
function changeButLight() {
	butLightVal = document.getElementById("buttonLightness").value;
	button.style.background = butBackgrVal();
	button.style.borderColor = butBordColVal();
	button.style.boxShadow = butBoxShadVal();
}
function changeHeight() {
	butHeightVal = document.getElementById("buttonHeight").value;
	button.style.height = butHeightVal + "px";
	button.style.lineHeight = butHeightVal + "px";
	button.style.borderWidth = butBordWidthVal();
	button.style.borderRadius = butBordRadVal();
	button.style.boxShadow = butBoxShadVal();
}
function changeWidth() {
	butWidthVal = document.getElementById("buttonWidth").value;
	button.style.width = butWidthVal + "px";
}
function writeCSS() {
	cssCode.innerHTML = cssText();
}
function loadPreviewStyle() {
	var headEl = document.getElementsByTagName("head")[0],
		newStyleEl = document.createElement("style");
	newStyleEl.innerHTML = cssText();
	headEl.appendChild(newStyleEl);
}
function selectCssText() {
	var rng, sel;
	rng = document.createRange(); //создаем объект область
	rng.selectNode(cssCode); //выберем текущий узел
	sel = window.getSelection(); //Получаем объект текущее выделение
	sel.removeAllRanges(); //Очистим все выделения (на всякий случай) 
	sel.addRange(rng); //Выделим текущий узел
}