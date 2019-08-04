const menu = document.querySelector('.menu');
const ipad = window.matchMedia('screen and (max-width: 767px)');
const burguerButton = document.querySelector('#burguer-menu');

ipad.addListener(validation)

function validation(event) {
	if (event.matches) {
		burguerButton.addEventListener('click', hideShow);
	} 
	else {
		burguerButton.removeEventListener('click', hideShow);
	}
}
validation(ipad);

function hideShow() {
	if (menu.classList.contains('is-active')){
		menu.classList.remove('is-active');
	}
	else{
		menu.classList.add('is-active');
	}
}