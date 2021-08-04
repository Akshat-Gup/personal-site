let heading = document.querySelector('.headingclass');
let main = document.querySelector('main');
setTimeout(() => {
	heading.classList.add('fadeOut');
	
},600);
setTimeout(()=> {
	main.classList.remove('d-none');
	main.classList.add('fadeIn');
	heading.classList.add('d-none');
}, 700)


let projects = ['chess', 'guitar', 'eightball'];
let lookupTable = {
	'chess': 'https://akshat-gup.github.io/Chess-Board/',
	'guitar': 'https://practinstrument.herokuapp.com/', 
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