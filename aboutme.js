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
