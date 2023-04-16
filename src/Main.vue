<template>
  <main-header-view></main-header-view>
  <div class="wrapper">
    <main-timetable-view v-on:editClass="onEditClass"></main-timetable-view>
    <sidebar v-if="sideBarIsActive" :header="editedClass.name ? 'Edit class' : 'Add class'" @closeSidebar="onCloseSidebar">
      <class-form :lesson="this.editedClass" @closeSidebar="onCloseSidebar"></class-form>
    </sidebar>
  </div>
</template>
  
<script>
import { defineComponent } from 'vue';
import MainHeaderView from './views/MainHeaderView.vue';
import MainTimetableView from './views/MainTimetableView.vue';
import SideBar from './components/SideBar.vue';
import ClassForm from './components/classForm.vue';

export default defineComponent({
  name: 'Main',
  data() {
    return {
      timetableItems: [],
      sideBarIsActive: false,
      editedClass: null,
    }
  },
  methods: {
    onEditClass(cell) {
      console.log(cell);
      this.editedClass = cell;
      this.sideBarIsActive = true;
    },
    onCloseSidebar(){
      this.sideBarIsActive = false;
    }
  },
  components: {
    'main-header-view': MainHeaderView,
    'main-timetable-view': MainTimetableView,
    'sidebar': SideBar,
    'class-form': ClassForm,
  }
})

</script>
  
<style></style>