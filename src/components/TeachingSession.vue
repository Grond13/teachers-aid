<template>
    <div>
        <main-header></main-header>
        <div class="graphicWrapper">
            <classroom-display ref="ClassroomDisplay" v-if="ViewIsVisible"
                :ClassroomSpecifications="ClassroomSpecifications" :DatabaseLoadDisabled="false"></classroom-display>
            <sidebar v-if="sideBarIsActive" :header="'Classroom Specifications'" @closeSidebar="onCloseSidebar">
            </sidebar>
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';
import MainHeader from './MainHeader.vue';
import SideBar from '../subcomponents/SideBar.vue';
import ClassroomDisplay from './ClassroomDisplay.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
    name: 'ClassroomDesigner',
    components: {
        'main-header': MainHeader,
        'sidebar': SideBar,
        'classroom-specifications-form': ClassroomSpecificationsForm,
        'classroom-display': ClassroomDisplay,
        FontAwesomeIcon
    },
    data() {
        return {
            sideBarIsActive: false,
            ViewIsVisible: false,
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
            if (this.ViewIsVisible)
                this.$refs.ClassroomDisplay.getDesks();
            else
                this.ViewIsVisible = true;
        },
        onConfirm() {

        }
    },
});
</script>
  
<style scoped></style>
  