const btnNavToggler = document.getElementById('open-nav');
const mainNav = document.getElementById('main-nav');

btnNavToggler.onclick = function(){
	
	mainNav.classList.toggle("show");

	if(mainNav.classList.contains('show')){
		btnNavToggler.innerHTML = 'menu';
	} else {
		btnNavToggler.innerHTML = 'close'
	}

};


function changeView() {
	document.getElementById('switcher').classList.toggle("on");
	document.getElementById('cards-holder').classList.toggle("list");
}

function sortAlpha() {
	const cards = document.querySelectorAll('.card');
	[].slice.call(cards).sort(function(a,b){
		if(a.dataset.partner < b.dataset.partner){
			return -1;
		} 
		return 1;
	}).forEach(function(el){
		el.parentNode.appendChild(el);
	});
}