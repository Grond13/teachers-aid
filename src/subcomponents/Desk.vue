<template>
  <td class="desk">
    <student-card v-for="(studentInfo, cardIndex) in cards" :key="cardIndex" :studentInfo="studentInfo"
      :cardHeight="cardHeight" :cardWidth="cardWidth" @studentSelected="onStudentCardClicked" @insertSmallGrade="onInsertSmallGrade" @updateRating="onUpdateRating"></student-card>
  </td>
</template>

<script>
import StudentCard from './StudentCard.vue';

export default {
  props: {
    cards: {
      required: true,
    },
    cardHeight: {
      required: true,
    },
    cardWidth: {
      required: true,
    },
  },
  components: {
    'student-card': StudentCard,
  },
  methods: {
    onStudentCardClicked(studentInfo) {
      console.log(studentInfo);
      this.$emit('studentSelected', studentInfo);
    },
    onInsertSmallGrade(idStudent, isPlus, description){      
      this.$emit('insertSmallGrade', idStudent, isPlus, description)
    },
    onUpdateRating(idStudent, activityValue){
      this.$emit('updateRating', idStudent, activityValue);
    }
  },
};
</script>

<style>
td.desk {
  display: flex;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 6px;
}

td.desk .student-card {
  flex: 1;
  margin-right: 10px;
}

td.desk .student-card:last-child {
  margin-right: 0;
}
</style>