let code = document.querySelector('.code');
let music = document.querySelector('.music');
let chess = document.querySelector('.chess');
let eightball = document.querySelector('.eightball');
music.addEventListener('click', ()=> {
	code.classList.remove('height');
	code.innerHTML = "<a href='https://practinstrument.herokuapp.com/'><img src='guitar-app.png'/></a>";
})
chess.addEventListener('click', ()=> {
	code.classList.remove('height');
	code.innerHTML = "<a href='https://akshat-gup.github.io/Chess-Board/'><img src='chessboard.png'/></a>";
})
eightball.addEventListener('click', ()=> {
	code.classList.remove('height');
	code.innerHTML = "<a href='https://akshat-gup.github.io/8-Ball/'><img src='8-Ball.png'/></a>";
})
let input = document.querySelector('input');
console.log(input)
input.addEventListener('keyup', ()=> {
	if (input.value.includes('music')) {
		code.classList.remove('height');
		code.innerHTML = "<a href='https://practinstrument.herokuapp.com/'><img src='guitar-app.png'/></a>";
	}
	if (input.value.includes('chess')) {
		code.classList.remove('height');
		code.innerHTML = "<a href='https://akshat-gup.github.io/Chess-Board/'><img src='chessboard.png'/></a>";
	}
	if (input.value.includes('eight') || input.value.includes('8')) {
		code.classList.remove('height');
		code.innerHTML = "<a href='https://akshat-gup.github.io/8-Ball/'><img src='8-Ball.png'/></a>";
	}
})