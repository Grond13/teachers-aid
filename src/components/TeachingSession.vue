<template>
    <div>
        <main-header></main-header>
        <div class="graphicWrapper">
            <classroom-display ref="ClassroomDisplay" v-if="ViewIsVisible"
                 :DatabaseLoadDisabled="false" @studentSelected="onStudentSelected"></classroom-display>
            <sidebar v-if="sideBarIsActive" :header="this.selectedStudentInfo.surname + ' ' + this.selectedStudentInfo.name" @closeSidebar="onCloseSidebar">
                <student-detail :studentInfo="this.selectedStudentInfo"></student-detail>
            </sidebar>
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';
import MainHeader from './MainHeader.vue';
import SideBar from '../subcomponents/SideBar.vue';
import ClassroomDisplay from './ClassroomDisplay.vue';
import StudentDetail from '../subcomponents/StudentDetail.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
    name: 'TeachingSession',
    components: {
        'main-header': MainHeader,
        'sidebar': SideBar,        
        'classroom-display': ClassroomDisplay,
        'student-detail': StudentDetail,
        FontAwesomeIcon,
    },
    data() {
        return {
            sideBarIsActive: false,
            ViewIsVisible: true,
            faArrowRight: faArrowRight,
            selectedStudentInfo: Object,
        };
    },
    methods: {
        onCloseSidebar() {
            this.sideBarIsActive = false;
        },
        onStudentSelected(studentInfo){
            this.selectedStudentInfo = studentInfo;
            this.sideBarIsActive = true;            
        }
    },
    
});
</script>
  
<style scoped></style>
  