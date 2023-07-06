  <template>
  <table id="timetable">
    <thead>
      <tr>
        <th>Day</th>
        <th v-for="time in times">{{ time }}</th>
      </tr>
    </thead>
    <tbody v-if="days.length">
      <TableRow
        v-for="(day, index) in days"
        :key="index"
        v-bind:day="day['day']"
        :lessons="day['classes']"
        v-on:cellClicked="onCellClicked"
        v-on:editClicked="onEditClicked"
      />
    </tbody>
  </table>
</template>
  
  <script>
import * as mainTimetableLogic from "../logic/mainTimetableLogic.js";
import TableRow from "@/subcomponents/TableRow.vue";

export default {
  name: "MainTimetable",
  data() {
    return {
      days: [],
      times: [
        "8:00 - 8:45",
        "8:55 - 9:40",
        "10:00 - 10:45",
        "10:55 - 11:40",
        "11:50 - 12:35",
        "12:45 - 13:30",
        "13:40 - 14:25",
        "14:35 - 15:20",
        "15:30 - 16:15",
      ],
      selectedCell: null,
    };
  },
  components: { TableRow },
  methods: {
    async getTimetable() {
      this.days = await mainTimetableLogic.GetTimetable();
    },
    onCellClicked(cell) {
      //this.$emit("editClass", cell);
    },
    onEditClicked(cell) {
      this.$emit("editClass", cell);
    },
  },
  mounted() {
    this.getTimetable();
  },
};
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

tbody {
  text-align: center;
}

#timetable td {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
  