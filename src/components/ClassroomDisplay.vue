<template>
  <table>
    <tbody class="desksTableBody">
      <tr v-for="(row, rowIndex) in Desks" :key="rowIndex">
        <Desk v-for="(desk, deskIndex) in row" :key="desk.deskIndex" :cards="Desks[rowIndex][deskIndex]"
          :cardHeight="this.cardHeight" :cardWidth="this.cardWidth" @studentSelected="onStudentSelected" @insertSmallGrade="onInsertSmallGrade" @updateRating="onUpdateRating"/>
      </tr>
    </tbody>
  </table>
</template>
  
<script>
import * as classroomLogic from '../logic/classroomLogic.js';
import Desk from "@/subcomponents/Desk.vue";

export default {
  name: "ClassroomDisplay",
  data() {
    return {
      Desks: [],
      cardHeight: "75",
      cardWidth: "115",
      localClassroomSpecifications: null,
    };
  },
  props: {
    DatabaseLoadDisabled: {
      type: Boolean,
      default: false,
    },
    limitedLoad: {
      type: Boolean,
      default: false,
    },
    ClassroomSpecifications: {
      type: Object,
    },
  },
  components: { Desk },
  methods: {
    async getDesks() {
      if (!this.DatabaseLoadDisabled) {
        if (this.limitedLoad) {
          this.Desks = await classroomLogic.GetLimitedDesks();
        }
        else
          this.Desks = await classroomLogic.GetDesks();
      } else {
        this.Desks = classroomLogic.GetEmptyDesks(this.ClassroomSpecifications);
      }

      this.localClassroomSpecifications = {
        rows: this.Desks.length,
        columns: this.Desks[0].length * this.Desks[0][0].length,
      };

      this.cardHeight = this.calculateHeight(this.localClassroomSpecifications.rows, this.localClassroomSpecifications.columns);
      this.cardWidth = this.calculateWidth(this.localClassroomSpecifications.columns);
    },
    calculateHeight(rowCount, columnCount) {
      return classroomLogic.CalculateHeight(rowCount, columnCount);
    },
    calculateWidth(columnCount) {
      return classroomLogic.CalculateWidth(columnCount);
    },
    onStudentSelected(studentInfo) {
      this.$emit('studentSelected', studentInfo);
    },
    onInsertSmallGrade(idStudent, isPlus, description){
      this.$emit('insertSmallGrade', idStudent, isPlus, description);
    },
    onUpdateRating(idStudent, activityValue){
      this.$emit('updateRating', idStudent, activityValue);
    }
  },
  beforeMount() {
    this.getDesks();
  },
};

</script>
  
<style scoped>
tbody {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

tr {
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
  width: 100vw;
  margin-top: 5px;
}
</style>