var butTextVal,
	butFontSizeVal,
	butHueVal,
	butSatVal,
	butLightVal,
	butHeightVal,
	butWidthVal;
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
window.onload = function() {
	writeStyleInHtml();
}

buttonText.addEventListener("keyup",changeButText);

buttonHue.addEventListener("input",writeStyleInHtml);
buttonSaturation.addEventListener("input",writeStyleInHtml);
buttonLightness.addEventListener("input",writeStyleInHtml);
buttonFontSize.addEventListener("input",writeStyleInHtml);
buttonHeight.addEventListener("input",writeStyleInHtml);
buttonWidth.addEventListener("input",writeStyleInHtml);

buttonType1.addEventListener("mousedown", function(){
	changeButStyle(1);
	setTimeout(writeStyleInHtml,300);
});

buttonType2.addEventListener("mousedown", function(){
	changeButStyle(2);
	setTimeout(writeStyleInHtml,300);
});

buttonType3.addEventListener("mousedown", function(){
	changeButStyle(3);
	setTimeout(writeStyleInHtml,300);
});

buttonType4.addEventListener("mousedown", function(){
	changeButStyle(4);
	setTimeout(writeStyleInHtml,300);
});

selectText.addEventListener("click", selectCssText);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
function changeButText() {
	butTextVal = document.getElementById("buttonText").value;
	button.innerHTML = butTextVal;
}
function writeStyleInHtml() {
	butFontSizeVal = document.getElementById("buttonFontSize").value;
	butHueVal = document.getElementById("buttonHue").value;
	butSatVal = document.getElementById("buttonSaturation").value;
	butLightVal = document.getElementById("buttonLightness").value;
	butHeightVal = document.getElementById("buttonHeight").value;
	butWidthVal = document.getElementById("buttonWidth").value;
	cssCode.innerHTML = cssText();
	var headEl = document.getElementsByTagName("head")[0],
		oldStyleEl = document.getElementsByTagName("style")[0],
		newStyleEl = document.createElement("style");
	newStyleEl.innerHTML = cssText();
	if(oldStyleEl){
		oldStyleEl.remove();
	}
	headEl.appendChild(newStyleEl);
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
function val(par,mult,acc){ 
	var result;
	switch (par){
		case "fs":
			result = calculate(butFontSizeVal) + "px";
		break;
		case "h":
			result = calculate(butHeightVal) + "px";
		break;
		case "w":
			result = calculate(butWidthVal) + "px";
		break;
		case "hu":
			result = calculate(butHueVal);
		break;
		case "st":
			result = calculate(butSatVal) + "%";
			if (parseInt(result) > 100) {
				result = "100%";
			}
		break;
		case "lg":
			result = calculate(butLightVal) + "%";
			if (parseInt(result) > 100) {
				result = "100%";
			}
		break;

	}
	function calculate(p){
		if (acc) {
			if(mult) {
				return Math.round(p*mult*10)/10;
			} else {
				return p;
			}
		}
		if(mult) {
			return Math.round(p*mult);
		} else {
			return p;
		}
	}
	return result;
}
