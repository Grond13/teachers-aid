<template>
  <form>
    <label for="inputClassroomName">
      Name of the Classroom:
      <input type="text" name="classroomName" id="inputNote" v-model="this.classroomSpecifications.classroomName">
    </label>
    <label for="inputColumns">
      Number of students next to one another:
      <input type="number" name="columns" id="inputColumns" :min="this.classroomSpecifications.deskSize" :max="12" :step="stepSize" v-model="classroomSpecifications.columns">
    </label>
    <label for="inputRows">
      Number of students behind one another:
      <input type="number" name="rows" id="inputRows" min="1" max="7" v-model="classroomSpecifications.rows">
    </label>
    <label for="inputDeskSize">
      Number of students sitting behind one desk:
      <input type="number" name="deskSize" id="inputDeskSize" min="1" max="12" v-model="classroomSpecifications.deskSize">
    </label>
    <label for="inputTeacherDeskRow">
      Position of the Teacher's desk:
      <input type="number" name="teacherDeskRow" id="inputTeacherDeskRow" min="1" :max="classroomSpecifications.columns"
        v-model="classroomSpecifications.teachersDeskRow">
    </label>

    <div class="buttonBox">
      <button class="cancel" @click.prevent="onCancelClicked()">Cancel</button>
      <button class="submit" @click.prevent="onSubmitClicked()">Generate</button>
    </div>
  </form>
</template>
      
<script>
export default {
  name: "ClassroomSpecificationsForm",
  props: {
    classroomSpecifications: {
      type: Object
    },
  },
  computed: {
    stepSize() {
      return this.classroomSpecifications.deskSize || 1;
    },
  },
  watch: {
    'classroomSpecifications.deskSize': function(newDeskSize) {
      if (newDeskSize) {
        this.classroomSpecifications.columns = this.classroomSpecifications.deskSize;
      }
    },
  },
  methods: {
    onCancelClicked() {
      this.$emit('closeSidebar');
    },
    onSubmitClicked() {
      this.$emit("submitSpecifications", this.classroomSpecifications);
    },
  },
};
</script>
  
<style scoped>
@import '../assets/base.css';

form {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: 70%;
  padding: 20px;
}

label {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.buttonBox {
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px;
}

button {
  width: 40%;
  min-width: fit-content;
  border: 2px solid;
  border-radius: 8px;
  background-color: transparent;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: bold;
}

button.cancel {
  color: var(--cancel-red);
  border-color: var(--cancel-red);
}

button.submit {
  color: var(--submit-green);
  border-color: var(--submit-green);
}

button.cancel:hover {
  background-color: var(--cancel-red);
  color: var(--vt-c-white-soft);
}

button.submit:hover {
  background-color: var(--submit-green);
  color: var(--vt-c-white-soft);
}
</style>