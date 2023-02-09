<script>
// @ts-nocheck

    import Calendar from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';
    import DayGrid from '@event-calendar/day-grid';
    import rawData from './data.js';

    console.log(rawData)
    let plugins = [TimeGrid, DayGrid];
    let options = {
        view: 'dayGridMonth',
        events: setEvents(),
        dayMaxEvents: true,
        nowIndicator: true,
        selectable: true,
    };

    let createEvents = () => {
        options.dateClick = function (info) {
            console.log(info.allDay);
            info.allDay = true
        }
    }

    function setEvents(patternDate) {
      let days = [];
        for (let i = 0; i < 7; ++i) {
            let day = new Date();
            let diff = i - day.getDay();
            day.setDate(day.getDate() + diff);
            days[i] = formatDate(day);
        }
        
        return [
            // {start: , end: days[3], resourceId: 1, title: "All-day events can be displayed at the top", color: "#B29DD9", allDay: true}
        ];
    }
    
    function formatDate(day) {
       return (day.getFullYear() + "-" + _pad(day.getMonth()+1) + "-" + _pad(day.getDate()))
    }

    function _pad(num) {
        let norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
    }

</script>


<button on:click={setEvents}>Change slot duration</button>
<Calendar {plugins} {options} />