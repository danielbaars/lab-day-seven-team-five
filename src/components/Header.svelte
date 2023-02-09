<script>
	import NavBar from '../components/NavBar.svelte';
</script>

<header class="header">
	<div class="header__inner container py-4">
		<h1 class="header__site-name">
			<div class="header__icon">
				<i class="bi bi-brightness-alt-high" />
			</div>
			Better Clarity
		</h1>
		<NavBar />
	</div>
</header>

<style lang="scss">
	.header {
		background-color: var(--capgemini-blue);
		color: white;
	}

	.header__inner {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.header__site-name {
		display: grid;
		grid-template-columns: min-content 1fr;
		gap: 16px;
		margin-block-end: 0;
		font-size: 48px;
		line-height: 1.1;
	}

	.header__icon {
		font-size: 1.2em;
		line-height: 1.1;
		font-weight: 600;
	}
</style>
