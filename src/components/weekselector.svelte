<script>
	export let pattern = [8, 8, 4, 0, 0];
</script>

<div class="week-selector">
	<div class="week-selector__days">
		<p class="week-selector__days-day">maandag</p>
		<p class="week-selector__days-day">dinsdag</p>
		<p class="week-selector__days-day">woensdag</p>
		<p class="week-selector__days-day">donderdag</p>
		<p class="week-selector__days-day">vrijdag</p>
	</div>
	<ul class="week-selector__container">
		<li class="week-selector__day" style="--theme-height: {(100 / 8) * pattern[0]}%">
			<div
				class="week-selector__day-number"
				contenteditable="true"
				on:blur={(e) => {
					pattern[0] = e.target.innerHTML;
				}}
			>
				{pattern[0]}
			</div>
		</li>
		<li class="week-selector__day" style="--theme-height: {(100 / 8) * pattern[1]}%">
			<div
				class="week-selector__day-number"
				contenteditable="true"
				on:blur={(e) => {
					pattern[1] = e.target.innerHTML;
				}}
			>
				{pattern[1]}
			</div>
		</li>
		<li class="week-selector__day" style="--theme-height: {(100 / 8) * pattern[2]}%">
			<div
				class="week-selector__day-number"
				contenteditable="true"
				on:blur={(e) => {
					pattern[2] = e.target.innerHTML;
				}}
			>
				{pattern[2]}
			</div>
		</li>
		<li class="week-selector__day" style="--theme-height: {(100 / 8) * pattern[3]}%">
			<div
				class="week-selector__day-number"
				contenteditable="true"
				on:blur={(e) => {
					pattern[3] = e.target.innerHTML;
				}}
			>
				{pattern[3]}
			</div>
		</li>
		<li class="week-selector__day" style="--theme-height: {(100 / 8) * pattern[4]}%">
			<div
				class="week-selector__day-number"
				contenteditable="true"
				on:blur={(e) => {
					pattern[4] = e.target.innerHTML;
				}}
			>
				{pattern[4]}
			</div>
		</li>
	</ul>
</div>

<style lang="scss">
	.week-selector__container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		list-style: none;
		border-color: grey;
		border-style: solid;
		border-width: 1px;
		padding-left: 0;
		border-radius: 1rem;
		overflow: hidden;
	}
	.week-selector__days {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
	.week-selector__days-day {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.week-selector__day {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 80px;
		position: relative;
	}
	.week-selector__day:not(:nth-child(1)) {
		border-color: grey;
		border-left-style: solid;
		border-width: 1px;
	}

	.week-selector__day-number {
		position: relative;
		padding: 1rem;
	}
	.week-selector__day:after {
		content: '\A';
		position: absolute;
		background: rgba(56, 142, 255, 0.37);
		top: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: var(--theme-height);
	}
</style>
