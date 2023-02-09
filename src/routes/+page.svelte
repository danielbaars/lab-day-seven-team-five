<script>
	import { page } from '$app/stores';
	import HeadTitle from '../components/HeadTitle.svelte';
	const pageTitle = 'Home';
</script>

<HeadTitle {pageTitle} />

<svelte:head>
	<meta name="description" content="Time tracking for the 21st century" />
</svelte:head>

<h1 class="page-title">{pageTitle}</h1>
