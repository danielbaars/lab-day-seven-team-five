<script>
	import hourglass from '$lib/images/hourglass-at-about-halfway-1600px.jpg';
	import HeadTitle from '../components/HeadTitle.svelte';
	const pageTitle = 'Home';
</script>

<HeadTitle {pageTitle} />

<svelte:head>
	<meta name="description" content="Time tracking for the 21st century" />
</svelte:head>

<h1 class="page-title">{pageTitle}</h1>

<div class="home__image-container">
	<img src={hourglass} alt="Zandlopertje" />
</div>

<style lang="scss">
	.home__image-container {
		img {
			max-width: 100%;
		}
	}
</style>
