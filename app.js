let projects = ['chess', 'guitar', 'eightball'];
let lookupTable = {
	'chess': 'https://akshat-gup.github.io/Chess-Board/',
	'guitar': 'https://akshat-gup.github.io/8-Ball/', 
	'eightball': 'https://akshat-gup.github.io/8-Ball/'
}
let carousel = document.querySelectorAll('.carousel-item');
carousel.forEach(curr => {
	curr.addEventListener('click', ()=> {
		for (item of projects) {
			if (curr.classList.contains(item)) {
				window.location.href = lookupTable[item];
			}
		}
	})
})