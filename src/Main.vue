<template>
  <main-header-view></main-header-view>
  <div class="wrapper">
    <main-timetable-view
      ref="mainTimetableView"
      v-on:editClass="onEditClass"
      :selectedCell="editedClass"
    ></main-timetable-view>
    <sidebar
      v-if="sideBarIsActive"
      :header="editedClass.name ? 'Edit class' : 'Add class'"
      @closeSidebar="onCloseSidebar"
    >
      <class-form
        :lesson="this.editedClass"
        @closeSidebar="onCloseSidebar"
        @submit="onSubmit"
        @update:lesson="onUpdateLesson"
      ></class-form>
    </sidebar>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MainHeaderView from './views/MainHeaderView.vue';
import MainTimetableView from './views/MainTimetableView.vue';
import SideBar from './components/SideBar.vue';
import ClassForm from './components/ClassForm.vue';
import * as mainViewModel from './viewmodels/mainViewModel.js';

export default defineComponent({
  name: 'Main',
  data() {
    return {
      timetableItems: [],
      sideBarIsActive: false,
      editedClass: null,
      editedClassCopy: null,
      lessons: []
    };
  },
  methods: {
    onEditClass(cell) {
      this.editedClass = cell;
      this.editedClassCopy = { ...cell };
      this.sideBarIsActive = true;
    },
    onCloseSidebar() {
      this.sideBarIsActive = false;
      this.editedClass = this.editedClassCopy;
    },
    async onSubmit() {
      console.log(this.editedClass);
      this.sideBarIsActive = false;
      if (await mainViewModel.submitClass(this.editedClass)) {
        this.$refs.mainTimetableView.getTimetable();
      }
      else console.log("ERROR");
    },
    onUpdateLesson(updatedLesson) {
      this.editedClass = updatedLesson;
    }
  },
  mounted() {
    
  },
  components: {
    'main-header-view': MainHeaderView,
    'main-timetable-view': MainTimetableView,
    sidebar: SideBar,
    'class-form': ClassForm
  }
});
</script>

<style></style>
