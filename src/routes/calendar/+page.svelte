<script>
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import DayGrid from '@event-calendar/day-grid';
	import '@event-calendar/core/index.css';

	const pageTitle = 'Calendar';

	let plugins = [TimeGrid, DayGrid];
	let options = {
		view: 'dayGridMonth',
		events: [
			// your list of events
		]
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content="Build your time tracking patterns here" />
</svelte:head>

<h1 class="page-title">{pageTitle}</h1>

<Calendar {plugins} {options} />
