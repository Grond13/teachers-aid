<template>
    <div>
      <main-header-view></main-header-view>  
      <div class="graphicWrapper">
        <classroom-view v-if="ViewIsVisible" :ClassroomSpecifications="ClassroomSpecifications" :DatabaseLoadDisabled="true"></classroom-view>
        <sidebar v-if="sideBarIsActive" :header="'Classroom Specifications'" @closeSidebar="onCloseSidebar">
          <classroom-specifications-form :classroomSpecifications="ClassroomSpecifications" @closeSidebar="onCloseSidebar" @submitSpecifications="onSubmitSpecifications"></classroom-specifications-form>
        </sidebar>        
        <button v-if="!sideBarIsActive" class="round-button" @click="openSidebar">
          <font-awesome-icon :icon="faArrowRight" />
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import MainHeaderView from './MainHeaderView.vue';
  import SideBar from '../components/SideBar.vue';
  import ClassroomSpecificationsForm from '../components/ClassroomSpecificationsForm.vue';
  import ClassroomView from './ClassroomView.vue';
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  export default defineComponent({
    name: 'ClassroomDesigner',
    components: {
      'main-header-view': MainHeaderView,
      'sidebar': SideBar,
      'classroom-specifications-form': ClassroomSpecificationsForm,
      'classroom-view': ClassroomView,
      FontAwesomeIcon
    },
    data() {
      return {
        sideBarIsActive: true,
        ViewIsVisible: false,
        ClassroomSpecifications: {
          columns: 6,
          rows: 3,
          deskSize: 2,
          teachersDeskRow: 1,
        },
        faArrowRight: faArrowRight
      };
    },
    methods: {
      onCloseSidebar() {
        this.sideBarIsActive = false;
      },
      openSidebar() {
        this.sideBarIsActive = true;
      },
      onSubmitSpecifications(newSpecs) {
        this.ClassroomSpecifications = newSpecs;
        this.sideBarIsActive = false;
        this.ViewIsVisible = true;
      },
      onConfirm(){
        
      }
    },
  });
  </script>
  
  <style scoped>
  
  .round-button {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f0f0f0;
    color: #000;
    font-size: 24px;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  </style>
  