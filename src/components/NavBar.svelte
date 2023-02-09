<nav class="nav-bar">
	<ul class="nav-bar__list">
		<li class="nav-bar__item">
			<a class="nav-bar__link" href="/">Home</a>
		</li>
		<li class="nav-bar__item">
			<a class="nav-bar__link" href="/pattern">Pattern Builder</a>
		</li>
		<li class="nav-bar__item">
			<a class="nav-bar__link" href="/calendar">Calendar</a>
		</li>
		<li class="nav-bar__item">
			<a class="nav-bar__link" href="/faq">FAQ</a>
		</li>
		<li class="nav-bar__item">
			<a class="nav-bar__link" href="/account">
				<i class="bi bi-person-circle" />
			</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	.nav-bar__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		gap: 44px;
	}

	.nav-bar__link {
		font-size: 20px;
		color: white;
		font-weight: 400;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
			text-underline-offset: 7px;
		}
	}
</style>
