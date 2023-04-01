<template>
    <div class="wrapper">
        <table id="timetable">
            <thead>
                <tr>
                    <th>Day</th>
                    <th v-for="time in times">{{ time }}</th>
                </tr>
            </thead>

        </table>
    </div>
</template>
<script>
import * as mainTimetableViewmodel from '../viewmodels/mainTimetableViewmodel.js'

export default {
    data() {
        return {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            times: ["8:00-8:45", "8:55-9:40", "10:00-10:45", "10:55-11:40", "11:50-12:35", "12:45-13:30", "13:40-14:25", "14:35-15:20", "15:30-16:15"]
        }
    },
    methods: {
        async getTimetable() {
            const table = document.getElementById("timetable");
            table.innerHTML += await mainTimetableViewmodel.GetTimetable();
        }
    },
    mounted() {
        console.log("mounted");
        this.getTimetable();
    },
}
</script>

<style>

#timetable {
    width: 100%;
    border-collapse: collapse;
}

#timetable th {
    background-color: #eee;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
}

#timetable td {
    padding: 10px;
    border: 1px solid #ccc;
}

td:hover:not(:first-child):not(:empty) {
  cursor: pointer;
  background-color: white;
}

#timetable td>div {
    margin-bottom: 5px;
}

.lesson-name {
    font-weight: bold;
}

.lesson-classroom {
    font-size: 0.8em;
    color: #666;
}

.lesson-note {
    display: none;
    position: absolute;
    background-color: yellow;
    padding: 10px;
    z-index: 1;
}

td:hover .lesson-note {
    display: block;
}

td:first-child {
  font-weight: bold;
}

tbody{
    background-color: #d1ffe8; 
    text-align: center;
}

</style>