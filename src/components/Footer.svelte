<script>
	import logo from '$lib/images/capgemini-logo.svg';
</script>

<footer class="footer">
	<div class="footer__inner container py-5">
		<a
			href="https://www.capgemini.com/nl-nl/"
			target="_blank"
			rel="noreferrer"
			class="footer__logo-link"
		>
			<img src={logo} alt="Capgemini logo" /></a
		>
		<h2 class="footer__tagline">Better Clarity | Time tracking for the 21st century</h2>
	</div>
</footer>

<style lang="scss">
	.footer {
		background-color: var(--capgemini-grey);
	}

	.footer__inner {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.footer__tagline {
		font-size: 20px;
		color: var(--capgemini-blue);
		font-weight: 300;
	}
</style>
