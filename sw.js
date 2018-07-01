const testURL ='http://free.currencyconverterapi.com/api/v5/convert?q=USD_PHP';
const staticAssets =[
	'./',
	'./styles.css',
	'./app.js',
	'./CSS/',
	'./JS/'
];
self.addEventListener('install', async event => {
	const cache = await caches.open('currcon-static');
	cache.addAll(staticAssets);
});

self.addEventListener('fetch',event => {
	const req = event.request;
	console.log(req.url);
	
	if(req.url.includes(testURL)){
		console.log('caught');
		console.log(presentresp(req));
	}
	event.respondWith(cacheFirst(req));
});

async function cacheFirst(req){
	const cachedResponse = await caches.match(req);
	return cachedResponse || fetch(req);
	
	
}
async function presentresp(req){
	const resp = await fetch(req);
	return resp.json;
}