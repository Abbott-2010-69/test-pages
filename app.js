const apiKey = '73996550bbd24dca800016be1175f6a2';
const main = document.queryselector('main');
window.addEventListener('load', e ==> {
	updateNews();
});

async function updateNews(){
	
	const result = await fetch(`https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${apiKey}`);
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