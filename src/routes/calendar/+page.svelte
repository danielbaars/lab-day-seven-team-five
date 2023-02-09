<script>
// @ts-nocheck

    import Calendar from '@event-calendar/core';
    import TimeGrid from '@event-calendar/time-grid';
    import DayGrid from '@event-calendar/day-grid';
    import rawData, { dates } from './data.js';

    const data = rawData.pattern
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
        let date = new Date()
        for (let i = 0; i < 10; i++) {
            data.forEach(week => {
                for (const day in week) {
                    week[day].forEach(part => {
                            
                            let diff = date.getDay();
                            date.setDate(date.getDate() + diff);
                            let finalDate = formatDate(date)
                            console.log(finalDate)
                            days.push({start: finalDate, end: finalDate, resourceId: 1, title: part.klantnaam, color: "#B29DD9"})
                    })
                }
            });
        }
//        let days2 = dates.map((day, i) => {
//     return {
//         start: day,
//         end: day,
//         title: data.pattern[0][Object.keys(data.pattern[0])[i]].name,
//         color: data.pattern[0][Object.keys(data.pattern[0])[i]].color
//     }
// })

        return days
    }
    
    function formatDate(day) {
       return (day.getFullYear() + "-" + _pad(day.getMonth()+1) + "-" + _pad(day.getDate()))
    }

    function _pad(num) {
        let norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
    }

</script>


<!-- <button on:click={setEvents}>Change slot duration</button> -->
<Calendar {plugins} {options} />
