<script>
	import ClientPicker from '../../components/client-picker.svelte';
	import Weekselector from '../../components/WeekSelector.svelte';
</script>

<div>
	<h1>Pattern page</h1>
	<ClientPicker />
	<Weekselector />
	<Weekselector pattern={[2, 3, 4, 5, 6]} />
</div>
