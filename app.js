const apiKey = '73996550bbd24dca800016be1175f6a2';
const main = document.querySelector('main');
window.addEventListener('load', e => {
	updateNews();
});

if ('serviceWorker' in navigator){
	try{
		navigator.serviceWorker.register('/sw.js');
		console.log('SW registered')
	}
	catch{
		console.log('SW register failed')
	}
}

async function updateNews(){
	console.log('entered update');
	const result = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
	const json = await result.json();
	
	
	main.innerHTML = json.articles.map(createArticle).join('\n');
	
	
	
}

function createArticle(article){
	
	return `<div class ="article">
	<a href ="${article.url}">
	<h2>${article.title}</h2>
	<img src="${article.urlToImage}">
	<p>${article.description}</p>
	</a>
	</div>`;
	
}