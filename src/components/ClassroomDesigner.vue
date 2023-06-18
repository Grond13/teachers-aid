<template>
    <div>
      <main-header-view></main-header-view>  
      <div class="graphicWrapper">
        <classroom-view ref="ClassroomDisplay" v-if="ViewIsVisible" :ClassroomSpecifications="ClassroomSpecifications" :DatabaseLoadDisabled="true"></classroom-view>
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
  import MainHeader from './MainHeader.vue';
  import SideBar from '../subcomponents/SideBar.vue';
  import ClassroomSpecificationsForm from '../subcomponents/ClassroomSpecificationsForm.vue';
  import ClassroomDisplay from './ClassroomDisplay.vue';
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  export default defineComponent({
    name: 'ClassroomDesigner',
    components: {
      'main-header-view': MainHeader,
      'sidebar': SideBar,
      'classroom-specifications-form': ClassroomSpecificationsForm,
      'classroom-view': ClassroomDisplay,
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
        console.log(this.ClassroomSpecifications);
        this.sideBarIsActive = false;
        if(this.ViewIsVisible)
          this.$refs.ClassroomDisplay.getDesks();
        else
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
  