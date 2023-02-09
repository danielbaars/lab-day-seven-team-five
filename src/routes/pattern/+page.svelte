<script>
	import ClientPicker from '../../components/client-picker.svelte';
	import HeadTitle from '../../components/HeadTitle.svelte';
	const pageTitle = 'Pattern Builder';
</script>

<HeadTitle {pageTitle} />

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content="Build your time tracking patterns here" />
</svelte:head>

<h1 class="page-title">{pageTitle}</h1>
<ClientPicker />
