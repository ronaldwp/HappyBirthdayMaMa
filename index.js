const textNode = document.getElementById('text-node');
const para = document.getElementById('para');
const img = document.getElementById('img');
const btn = document.getElementById('btn');
const page = document.getElementById('front-page');


function pageOpener(e) {
	img.classList.toggle('hidden');
	textNode.classList.toggle('hidden');
	para.classList.toggle('hidden');
	btn.classList.toggle('hidden');
}

page.addEventListener('click', pageOpener);