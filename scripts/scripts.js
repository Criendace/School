/*
John Martin
Scripts
April 13th 2024
*/

//Hamburgermenu function

function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}