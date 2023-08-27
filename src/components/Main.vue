<template>
  <main-header></main-header>
  <div class="wrapper">
    <main-timetable ref="MainTimetable" v-on:editClass="onEditClass" :selectedCell="editedClass"></main-timetable>
    <sidebar v-if="sidebarIsActive" :header="editedClass.name ? 'Edit class' : 'Add class'"
      @closeSidebar="onCloseSidebar">
      <class-form :lesson="this.editedClass" :LessonNames="this.lessons" :ClassroomNames="this.classrooms"
        @closeSidebar="onCloseSidebar" @submit="onSubmit" @update:lesson="onUpdateLesson" @delete="onDelete"></class-form>
    </sidebar>    
      <form @submit.prevent="onNewLessonSubmit()" class="form">
        <label>
          <input type="text" name="name" class="form-input" placeholder="Name of the Lesson" v-model="newLessonName">
        </label>        
        <input type="submit" value="Add Lesson" class="form-submit">
      </form>
      <button class="navigate" @click.prevent="onNewClassroomClicked()">New Classroom</button>    
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MainHeader from './MainHeader.vue' ;
import MainTimetable from './MainTimetable.vue';
import Sidebar from '../subcomponents/SideBar.vue';
import ClassForm from '../subcomponents/ClassForm.vue';
import * as mainLogic from '../logic/mainLogic.js';
import router from "../router";

export default defineComponent({
  name: 'Main',
  data() {
    return {
      sidebarIsActive: false,
      editedClass: null,
      editedClassCopy: null,
      lessons: [],
      classrooms: [],
      newLessonName: null,
    };
  },
  methods: {
    onEditClass(cell) {
      this.editedClass = cell;
      this.editedClassCopy = { ...cell };      
      this.sidebarIsActive = true;
    },
    onCloseSidebar() {
      this.sidebarIsActive = false;
      this.editedClass = this.editedClassCopy;
    },
    async onSubmit() {
      this.sidebarIsActive = false;
      if (await mainLogic.submitClass(this.editedClass)) {
        this.$refs.MainTimetable.getTimetable();
      }
      else console.log("ERROR");
    },
    onUpdateLesson(updatedLesson) {
      this.editedClass = updatedLesson;
    },
    async onDelete() {
      this.sidebarIsActive = false;
      if (await mainLogic.deleteClass(this.editedClass)) {
        this.$refs.MainTimetable.getTimetable();
      }
      else console.log("ERROR: problem with class deletion");
    },
    onNewClassroomClicked() {
      router.push({ name: 'classroom' });
    },
    async onNewLessonSubmit(){
      //console.log(this.newLessonName);
      await mainLogic.insertLesson(this.newLessonName);      
      this.lessons = await mainLogic.getLessonNames();
    },
  },
  async mounted() {
    this.lessons = await mainLogic.getLessonNames();
    this.classrooms = await mainLogic.getClassroomNames();
  },
  components: {
    'main-header': MainHeader,
    'main-timetable': MainTimetable,
    sidebar: Sidebar,
    'class-form': ClassForm
  }
});
</script>


<style scoped>
button.navigate,
.form-input,
.form-submit {
  
  min-width: fit-content;
  border: 2px solid;
  border-radius: 8px;
  background-color: transparent;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: bold;
  margin: 10px 0;
}

.form {
  display: flex;
  align-items: center;
  margin-top: 30px;
}

.form-input {
  margin-right: 10px;
}

div.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
}
</style>