<script>
	import '@event-calendar/core/index.css';
	import Weekselector from '../../components/WeekSelector.svelte';
</script>

<div>
	<h1>Pattern page</h1>
	<Weekselector />
	<Weekselector pattern={[2, 3, 4, 5, 6]} />
</div>
