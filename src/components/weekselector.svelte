<script>
	export let pattern = [8, 8, 4, 0, 0];
</script>

<div class="week-selector">
	<ul class="week-selector__container">
		<li class="week-selector__day">
			<div class="week-selector__day-text">Maandag</div>
			<div class="week-selector__day-number">{pattern[0]}</div>
		</li>
		<li class="week-selector__day">
			<div class="week-selector__day-text">Dinsdag</div>
			<div class="week-selector__day-number">{pattern[1]}</div>
		</li>
		<li class="week-selector__day">
			<div class="week-selector__day-text">Woensdag</div>
			<div class="week-selector__day-number">{pattern[2]}</div>
		</li>
		<li class="week-selector__day">
			<div class="week-selector__day-text">Donderdag</div>
			<div class="week-selector__day-number">{pattern[3]}</div>
		</li>
		<li class="week-selector__day">
			<div class="week-selector__day-text">Vrijdag</div>
			<div class="week-selector__day-number">{pattern[4]}</div>
		</li>
	</ul>
</div>

<style lang="scss">
</style>
