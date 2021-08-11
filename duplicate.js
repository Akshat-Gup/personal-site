let code = document.querySelector('.code');
let input = document.querySelector('input');
console.log(code, input);
let initialHtml = `
<h1>// Akshat's site</h1>
<div class="pre-wrapper">
				<pre>
	<span class="grey"> 1</span> 	<span class="purple">class</span> <span class="yellow">WebDev</span> <span class="purple">extends</span> <span class="yellow">Human</span> {
	<span class="grey"> 2</span> 		<span class="yellow">String[]</span> <span class="red">skills</span>;
	<span class="grey"> 3</span> 		<span class="yellow">String[]</span> <span class="red">sites</span>;
	<span class="grey"> 4</span> 
	<span class="grey"> 5</span> 		<span class="purple">public</span> <span class="blue">WebDev</span>(<span class="yellow">String[]</span> <span class="purple">skills</span>, <span class="yellow">String[]</span> <span class="purple">sites</span>){
	<span class="grey"> 6</span> 			<span class="yellow">this.skills</span> = skills;
	<span class="grey"> 7</span> 			<span class="yellow">this.sites</span> = sites;
	<span class="grey"> 8</span> 		}
	<span class="grey"> 9</span> 
	<span class="grey">10</span> 		<span class="purple">public static void</span> <span class="blue">main</span>(<span class="yellow">String[]</span> args) {
	<span class="grey">11</span> 			<span class="yellow">String[]</span> skills = <span class="green">{"Django", "HTML / CSS / JS"}</span>;
	<span class="grey">12</span> 			<span class="yellow">String[]</span> sites = <span class="green">{"8-Ball", "ChessBoard", "Music App"}</span>;
	<span class="grey">13</span> 			<div class="typewriter"><span class="yellow">WebDev</span> <span class="red">akshat</span> = <span class="purple">new</span> <span class="blue">WebDev</span>(skills, sites);</div>
	<span class="grey">14</span> 		}
	<span class="grey">15</span> 	}
				</pre>
</div>
`;
if(window.innerWidth <= 600) {
	initialHtml = `
	<h1 style="margin-left: 30px;">// Akshat's site</h1>
	<div class="pre-wrapper">
		<pre style="font-size: 1.5em; white-space: pre-wrap;">
<span class="yellow">String[]</span> skills = <span class="green">{"Django", "HTML / CSS / JS"}</span>;
<span class="yellow">String[]</span> sites = <span class="green">{"8-Ball", "ChessBoard", "Music App"}</span>;
<div class="typewriter"><span class="yellow">WebDev</span> <span class="red">akshat</span> = <span class="purple">new</span> <span class="blue">WebDev</span>(skills, sites);</div>
	</pre>
</div>
	`;
	code.innerHTML = initialHtml;
	code.maxWidth = `${window.innerWidth}px !important`;
	console.log(code.maxWidth)
}

input.addEventListener('keyup', (event)=> {
	if (input.value.includes('music')) {
		code.classList.remove('height');
		code.innerHTML = "<a href='https://practinstrument.herokuapp.com/'><img src='guitar-app.png'/></a>";
	}
	if (input.value.includes('chess')) {
		code.classList.remove('height');
		code.innerHTML = "<a href='https://akshat-gup.github.io/new-chess-board/'><img src='chessboard.png'/></a>";
	}
	if (input.value.includes('eight') || input.value.includes('8')) {
		code.classList.remove('height');
		code.innerHTML = "<a href='https://akshat-gup.github.io/8-Ball/'><img src='8-Ball.png'/></a>";
	}
	if (event.key === "Enter") {
		location.href = document.querySelector('a').href;
	}
	if (input.value == "") {
		code.classList.add('height');
		code.innerHTML = initialHtml;
	}
});

var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
	console.log(content.style.display);
    if (content.style.display == "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}
let openeditorswrapper = document.querySelector('.open-editors-wrapper');
let alleditors = document.querySelector('.alleditors');
let addToOpenEditors = vartype => {
	if (openeditorswrapper.childElementCount == 0) {
		openeditorswrapper.innerHTML = '<ul class="alleditors"></ul>';
		openeditorswrapper.firstChild.innerHTML += vartype.outerHTML;
		if (String(alleditors.innerHTML).includes(vartype.outerHTML)) {
			alleditors.removeChild(vartype);
		}
	} else {
		if (!String(openeditorswrapper.innerHTML).includes(vartype.outerHTML)) {
			openeditorswrapper.firstChild.innerHTML += vartype.outerHTML;
		}
		if (String(alleditors.innerHTML).includes(vartype.outerHTML)) {
			alleditors.removeChild(vartype);
		}
	}
}


let musicFunc = () => {
	let music = document.querySelector('.music');
	code.classList.remove('height');
	code.innerHTML = "<a href='https://practinstrument.herokuapp.com/'><img src='guitar-app.png'/></a>";
	addToOpenEditors(music);
}
let chessFunc = () => {
	var chess = document.querySelector('.chess');
	code.classList.remove('height');
	code.innerHTML = "<a href='https://akshat-gup.github.io/new-chess-board/'><img src='chessboard.png'/></a>";
	addToOpenEditors(chess);
}
let eightBallFunc = () => {
		var eightball = document.querySelector('.eightball');
		code.classList.remove('height');
		code.innerHTML = "<a href='https://akshat-gup.github.io/8-Ball/'><img src='8-Ball.png'/></a>";
		addToOpenEditors(eightball);
}
let jscriptFunc = () => {
	let jscript = document.querySelector('.js');
	code.classList.add('height');
	code.innerHTML = `
	<h1>// Akshat's site</h1>
	<div class="pre-wrapper">
					<pre>
	input.addEventListener('keyup', (event)=> {
		if (input.value.includes('music')) {
			code.classList.remove('height');
			code.innerHTML = "a href='https://practinstrument.herokuapp.com/'img src='guitar-app.png'/a";
		}
		if (input.value.includes('chess')) {
			code.classList.remove('height');
			code.innerHTML = "a href='https://akshat-gup.github.io/new-chess-board/' img src='chessboard.png'/a";
		}
		if (input.value.includes('eight') || input.value.includes('8')) {
			code.classList.remove('height');
			code.innerHTML = " a href='https://akshat-gup.github.io/8-Ball/' img src='8-Ball.png'/a";
		}
		if (event.key === "Enter") {
			location.href = document.querySelector('a').href;
		}
		if (input.value == "") {
			code.classList.add('height');
			code.innerHTML = initialHtml;
		}
	});
					</pre>
	</div>
	`;
	addToOpenEditors(jscript);
}
let cssFunc = () => {
	let css = document.querySelector('.css');
	code.classList.add('height');
	code.innerHTML = `
	<h1>// Akshat's site</h1>
	<div class="pre-wrapper">
					<pre>
		.code-wrapper {
			display: flex;
			flex-direction: row;
			width: 100vw;
			max-height: 75vh;
		}
		.filepath {
			background-color: rgb(36, 36, 36);
			color: white;
			padding-top: 65px;
			font-family: "Atkinson Hyperlegible";
			width: 15vw;
		}
					</pre>
	</div>
	`;
	addToOpenEditors(css);
}

let indexhtmlFunc = () => {
	let indexhtml = document.querySelector('.indexhtml');
	code.classList.add('height');
	code.innerHTML = initialHtml;
	addToOpenEditors(indexhtml);
}
let navhtmlFunc = () => {
	let navhtml = document.querySelector('.navhtml');
	code.classList.add('height');
	code.innerHTML = `
	<h1>// Akshat's site</h1>
	<div class="pre-wrapper">
					<pre>
	nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100"
		a class="navbar-brand font-weight-bold" href="#">Akshat Gupta/a
		button class="navbar-toggler" type="button" data-toggle="collapse" aria-label="Toggle navigation"
		span class="navbar-toggler-icon"/span
		/button
		div class="collapse navbar-collapse" id="navbarSupportedContent"
			ul class="navbar-nav mr-auto"
			i class="nav-item dropdown bg-dark"
				a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
				Quick Access
				/a
				div class="dropdown-menu bg-dark text-light" aria-labelledby="navbarDropdown"
		/div
	/nav
					</pre>
	</div>
	`;
	addToOpenEditors(navhtml);
}

