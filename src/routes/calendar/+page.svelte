<script>
	// @ts-nocheck

<<<<<<< HEAD
    import Calendar from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';
    import DayGrid from '@event-calendar/day-grid';
    import rawData, { dates } from './data.js';
=======
	import Calendar from '@event-calendar/core';
	import TimeGrid from '@event-calendar/time-grid';
	import DayGrid from '@event-calendar/day-grid';
	import rawData from './data.js';
>>>>>>> 5be31d6c7e60b84168e77fe72230b1d4388d654e

	import HeadTitle from '../../components/HeadTitle.svelte';

	const data = rawData.pattern;
	let plugins = [TimeGrid, DayGrid];
	let options = {
		view: 'dayGridMonth',
		events: setEvents(),
		dayMaxEvents: true,
		nowIndicator: true,
		selectable: true
	};

	let createEvents = () => {
		options.dateClick = function (info) {
			console.log(info.allDay);
			info.allDay = true;
		};
	};

	function setEvents(patternDate) {
		let days = [];
		data.forEach((week) => {
			for (const day in week) {
				// console.log(week[day]);
				week[day].forEach((part) => {
					console.log(part);
					for (let i = 0; i < 90; i++) {
						let date = new Date();
						let diff = i - date.getDay();
						date.setDate(date.getDate() + diff);

						days.push({
							start: '2019-1-1',
							end: '2019-1-1',
							resourceId: 1,
							title: 'All-day events can be displayed at the top',
							color: '#B29DD9',
							allDay: true
						});
					}
				});
			}
		});
		return days;
	}

	function formatDate(day) {
		return day.getFullYear() + '-' + _pad(day.getMonth() + 1) + '-' + _pad(day.getDate());
	}

	function _pad(num) {
		let norm = Math.floor(Math.abs(num));
		return (norm < 10 ? '0' : '') + norm;
	}

	const pageTitle = 'Calendar';
</script>

<HeadTitle {pageTitle} />

<svelte:head>
	<meta name="description" content="The most commonly asked questions about Better Clarity" />
</svelte:head>

<h1 class="page-title">{pageTitle}</h1>

<!-- <button on:click={setEvents}>Change slot duration</button> -->
<Calendar {plugins} {options} />
