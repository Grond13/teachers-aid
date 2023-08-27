<template>
    <div>
        <main-header></main-header>
        <div class="graphicWrapper">
            <classroom-display ref="ClassroomDisplay" v-if="ViewIsVisible" :DatabaseLoadDisabled="false"
                @studentSelected="onStudentSelected" @insertSmallGrade="onInsertSmallGrade"
                @updateRating="onUpdateRating"></classroom-display>
            <sidebar v-if="sideBarIsActive" :header="this.selectedStudentInfo.surname + ' ' + this.selectedStudentInfo.name"
                @closeSidebar="onCloseSidebar">
                <student-detail :studentInfo="this.selectedStudentInfo" @insertSmallGrade="onInsertSmallGrade"
                    @submitNote="onSubmitNote"></student-detail>
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
import * as TeachingSessionLogic from '../logic/teachingSessionLogic';

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
        onStudentSelected(studentInfo) {
            this.selectedStudentInfo = studentInfo;
            this.sideBarIsActive = true;
        },
        async onInsertSmallGrade(idStudent, isPlus, description) {
            const newGrades = await TeachingSessionLogic.insertSmallGrade(idStudent, isPlus, description);
            this.selectedStudentInfo['smallGrades'] = newGrades;

            this.$refs.ClassroomDisplay.getDesks();
        },
        async onUpdateRating(idStudent, activityValue) {
            
            await TeachingSessionLogic.updateRating(idStudent, activityValue);

            this.$refs.ClassroomDisplay.getDesks();
        },
        async onSubmitNote(idStudent, note) {
            await TeachingSessionLogic.updateNote(idStudent, note);
        }
    },

});
</script>
  
<style scoped></style>
  