<template>
  <div class="gradeContainer" v-if="studentInfo.idStudent">
    <button class="minusGrade" @click="onMinusClicked($event, 'classwork')">-</button>
    <div class="descriptionOptions minusOptions">
      <div class="option" @click="onMinusClicked($event, 'classwork')">Práce v hodině</div>
      <div class="option" @click="onMinusClicked($event, 'homework')">Domácí úkol</div>
      <div class="option" @click="onMinusClicked($event, 'oral exam')">Ústní zkoušení</div>
      <div class="option" @click="onMinusClicked($event, 'late arrival')">Pozdní příchod</div>
    </div>
    <div class="gradeValue">{{ calculateGradeValue() }}</div>
    <button class="plusGrade" @click="onPlusClicked($event, 'classwork')">+</button>
    <div class="descriptionOptions plusOptions">
      <div class="option" @click="onPlusClicked($event, 'classwork')">Práce v hodině</div>
      <div class="option" @click="onPlusClicked($event, 'homework')">Domácí úkol</div>
      <div class="option" @click="onPlusClicked($event, 'oral exam')">Ústní zkoušení</div>
    </div>
  </div>

  <section class="gradeList">
    <div class="gradeLine" v-for="grade in studentInfo.smallGrades">
      <span class="gradeDate">
        {{ grade.date }}
      </span>
      <span class="gradeValue">
        {{ grade.isPlus == true ? " + " : " - " }}
      </span>
      <span class="gradeDesc">
        {{ grade.description }}
      </span>
    </div>
  </section>
  <section class="notes">
    <h5>Notes</h5>
    <textarea v-model="noteInput" @input="onNoteInput"></textarea>
    <button v-if="isNoteModified" class="submitNote" @click="onSubmitNote">Submit</button>
  </section>
</template>
        
<script>
export default {
  name: "StudentDetail",
  props: {
    studentInfo: {
      type: Object
    },
  },
  data() {
    return {
      noteInput: "",
      originalNote: "",
    };
  },
  computed: {
    isNoteModified() {
      return this.noteInput !== this.originalNote;
    },
  },
  watch: {
    'studentInfo.note': {
      handler(newVal) {
        this.noteInput = newVal;
        this.originalNote = newVal;
      },
      immediate: true,
    },
  },
  methods: {
    calculateGradeValue() {
      const isPlus1 = this.studentInfo.smallGrades.filter((grade) => grade.isPlus == '1').length;
      const isPlus0 = this.studentInfo.smallGrades.filter((grade) => grade.isPlus == '0').length;
      return isPlus1 - isPlus0;
    },
    onMinusClicked(event, description) {
      this.$emit('insertSmallGrade', this.studentInfo.idStudent, false, description);
      console.log("minus clicked");
      event.stopPropagation();
    },
    onPlusClicked(event, description) {
      this.$emit('insertSmallGrade', this.studentInfo.idStudent, true, description);
      event.stopPropagation();
    },    
    onSubmitNote() {
      this.$emit('submitNote', this.studentInfo.idStudent, this.noteInput);
    },
  },
};
</script>
    
<style scoped>
@import '../assets/base.css';

div.gradeContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 5px;
  width: 100%;
  height: 30%;
}

button.minusGrade,
button.plusGrade {
  height: 30px;
  width: 30px;
  border: 1px solid #ccc;
  color: #fff;
  font-size: 1.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  margin: 0;
  position: relative;
}

button.plusGrade {
  border-left: none;
  background-color: green;
}

button.minusGrade {
  border-right: none;
  background-color: red;
}

div.descriptionOptions {
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0px;
  width: 200px;
  z-index: 1;
}

div.descriptionOptions div {
  padding: 5px;
}

div.plusOptions div:hover {
  background-color: var(--bg-medium-green);
  cursor: pointer;
  font-weight: bold;
}

div.minusOptions div:hover {
  background-color: rgb(252, 176, 176);
  cursor: pointer;
  font-weight: bold;
}

.minusOptions {
  top: 30px;
  right: 8%;
}

.plusOptions {
  top: 30px;
  left: 8%;
}

button.plusGrade:hover+.plusOptions,
button.minusGrade:hover+.minusOptions,
.plusOptions:hover,
.minusOptions:hover {
  display: block;
}

div.gradeValue {
  height: 30px;
  width: 25%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
}

section.gradeList {
  width: 100%;
  height: 60%;
}

div.gradeLine {
  width: 100%;
  display: flex;
  align-items: space-around;
  padding: 5px 0;
  border: solid 1px #ccc;
  border-top: none;
  /* Remove top border from all instances by default */
}

div.gradeLine:first-child {
  border-top: solid 1px #ccc;
  /* Add top border to the first instance */
}

span {
  text-align: center;
}

span.gradeDate {
  width: 45%;
}

span.gradeValue {
  width: 10%;
}

span.gradeDesc {
  width: 45%;
}

section.notes {
  margin: 30px;
  padding: 0 5px;
  width: 100%;
}

section.notes h5 {
  padding: 5px 0;
  text-align: center;
}

section.notes textarea {
  width: 100%;
  min-height: 80px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

section.notes button.submitNote {
  margin-top: 5px;
  padding: 5px 10px;
  background-color: #007bff;
  /* Blue color, you can change this */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>