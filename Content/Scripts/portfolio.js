
window.mylang = "eng";

function myChangeDisplay(mode) {
	//alert("display");
	var array = document.getElementsByClassName(window.mylang);
	for (i = 0; i < array.length; i++) {
		array[i].style.display = mode;
	};
	return;
};

function myChange(language) {
	//alert("language");
	myChangeDisplay("none");
	window.mylang = language;
	myChangeDisplay("inline");
	return;
};

function mySwitch(context) {
	myChangeDisplay("none");
	switch (mylang) {
		case "eng": mylang = "fin"; break;
		default: mylang = "eng"; break;
	}
	myChangeDisplay("block");
};
