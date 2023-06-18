<template>
  <main-header></main-header>
  <div class="wrapper">
    <main-timetable
      ref="MainTimetable"
      v-on:editClass="onEditClass"
      :selectedCell="editedClass"
    ></main-timetable>
    <sidebar
      v-if="sideBarIsActive"
      :header="editedClass.name ? 'Edit class' : 'Add class'"
      @closeSidebar="onCloseSidebar"
    >
      <class-form
        :lesson="this.editedClass"
        :LessonNames = "this.lessons"
        :ClassroomNames = "this.classrooms"
        @closeSidebar="onCloseSidebar"
        @submit="onSubmit"
        @update:lesson="onUpdateLesson"
        @delete="onDelete"
      ></class-form>
    </sidebar>
    <div>
    <button class="navigate" @click.prevent="onNewClassroomClicked()">New Classroom</button>        
  </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MainHeader from './MainHeader.vue';
import MainTimetable from './MainTimetable.vue';
import SideBar from '../subcomponents/SideBar.vue';
import ClassForm from '../subcomponents/ClassForm.vue';
import * as mainLogic from '../logic/mainLogic.js';
import router from "../router";

export default defineComponent({
  name: 'Main',
  data() {
    return {
      timetableItems: [],
      sideBarIsActive: false,
      editedClass: null,
      editedClassCopy: null,
      lessons: [],
      classrooms: [],
    };
  },
  methods: {
    onEditClass(cell) {
      this.editedClass = cell;
      this.editedClassCopy = { ...cell };
      console.log(this.editedClass);
      this.sideBarIsActive = true;
    },
    onCloseSidebar() {
      this.sideBarIsActive = false;
      this.editedClass = this.editedClassCopy;
    },
    async onSubmit() {
      //console.log(this.editedClass);
      this.sideBarIsActive = false;
      if (await mainLogic.submitClass(this.editedClass)) {
        this.$refs.MainTimetable.getTimetable();
      }
      else console.log("ERROR");
    },
    onUpdateLesson(updatedLesson) {
      this.editedClass = updatedLesson;
    },
    async onDelete(){
      this.sideBarIsActive = false;
      if (await mainLogic.deleteClass(this.editedClass)) {
        this.$refs.MainTimetable.getTimetable();
      }
      else console.log("ERROR");
    },
    onNewClassroomClicked(){
      router.push({name: 'classroom'});
    },
  },
  async mounted() {        
    this.lessons = await mainLogic.getLessonNames();
    this.classrooms = await mainLogic.getClassroomNames();        
  },
  components: {
    'main-header': MainHeader,
    'main-timetable': MainTimetable,
    sidebar: SideBar,
    'class-form': ClassForm
  }
});
</script>

<style scoped>
button.navigate {
  width: 150px;
  min-width: fit-content;
  border: 2px solid;
  border-radius: 8px;
  background-color: transparent;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: bold;
  margin: 30px 0; 
}

div.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh; 
}

</style>