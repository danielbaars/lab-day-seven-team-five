<script>
	const dateSettings = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const navLang = 'nl-NL';

	let clients = [
		{
			id: 1,
			name: `Politie`,
			dateFrom: new Date(),
			dateTill: addWeeks(new Date(), 13),
			pattern: [[8, 8, 8, 8, 0], [8, 8, 8, 8, 8]]
		},
		{
			id: 2,
			name: `Ministerie van Buitenlandse Zaken`,
			dateFrom: new Date(),
			dateTill: addWeeks(new Date(), 10),
			pattern: [[0,0,0,0, 8], [0, 0, 0, 0, 0]]
		},
		{
			id: 3,
			name: `Mediq`,
			dateFrom: new Date(),
			dateTill: addWeeks(new Date(), 8),
			pattern: [[0, 8, 4, 8, 8]]
		}
	];
	function addWeeks(date, weeks) {
		date.setDate(date.getDate() + 7 * weeks);
		return date;
	}
	let selected = { id: null, name: '' };

	function handleChange() {
		// Push selected client to store
		console.log(selected);
	}
</script>

<div class="container">
	<div class="wrap mb-4">
		<label for="">Client name</label>
		<select class="form-select" bind:value={selected} on:change={handleChange}>
			{#each clients as client}
				<option value={client}>
					{client.name}
				</option>
			{/each}
		</select>
	</div>
	{#if selected.id > 0}
		<h4>Client name:</h4>
		<p>{selected.name}</p>
		<h4>Project duration:</h4>
		<p>
			{selected.dateFrom.toLocaleDateString(navLang, dateSettings)} till {selected.dateTill.toLocaleDateString(
				navLang,
				dateSettings
			)}
		</p>
	{/if}
</div>

<style>
</style>
