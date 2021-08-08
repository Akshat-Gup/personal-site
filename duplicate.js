let code = document.querySelector('.code');
let input = document.querySelector('input');
console.log(code, input);
const initialHtml = `
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
input.addEventListener('keyup', (event)=> {
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
	if (event.key === "Enter") {
		location.href = document.querySelector('a').href;
	}
	if (input.value == "") {
		code.classList.add('height');
		code.innerHTML = initialHtml;
	}
})