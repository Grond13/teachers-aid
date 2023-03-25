<template>
<table id="timetable">
    <thead>
      <tr>
        <th>Day</th>
        <th v-for="time in times">{{ time }}</th>
      </tr>
    </thead>
    
  </table>
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