<script>
	import AppDataStore from '../../Store.js';
	const pageTitle = 'FAQ';
	let siteName;
	AppDataStore.subscribe((data) => {
		siteName = data.siteName;
	});
</script>

<svelte:head>
	<title>{pageTitle} | {siteName}</title>
	<meta name="description" content="The most commonly asked questions about Better Clarity" />
</svelte:head>

<h1 class="page-title">{pageTitle}</h1>
