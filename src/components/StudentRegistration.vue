<template>
    <initial-header></initial-header>
    <div class="wrapper" v-if="!classroomDisplayIsActive">
        <div class="formWrapper">
            <h2>Student Registration</h2>
            <form @submit.prevent="onSubmitForm()">
                <label for="name" class="form-label">Name: </label>
                <input v-model="name" type="text" :class="{ 'form-control': true, 'is-invalid': !nameIsValid }" id="name"
                    required>
                <div v-if="!nameIsValid" id="emailInvalidError" class="invalid-feedback">
                    Please enter a valid name.
                </div>

                <label for="surname" class="form-label">Surname: </label>
                <input v-model="surname" type="text" :class="{ 'form-control': true, 'is-invalid': !surnameIsValid }"
                    id="surname" required>
                <div v-if="!surnameIsValid" id="emailInvalidError" class="invalid-feedback">
                    Please enter a valid surname.
                </div>

                <label for="email" class="form-label">Class Identification Number: </label>
                <input v-model="idLessonTime" type="text" :class="{ 'form-control': true, 'is-invalid': !idIsValid }"
                    id="classroomId" required>

                <div class="center">
                    <input type="submit" value="Select Seat" class="btn btn-primary submitButton">
                </div>
            </form>
        </div>
    </div>
    <div class="graphicWrapper" v-else>
        <classroom-display ref="ClassroomDisplay" :DatabaseLoadDisabled="false" :limitedLoad="true" @studentSelected="onSeatSelected"></classroom-display>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';
import initialHeader from '../subcomponents/initialHeader.vue';
import ClassroomDisplay from './ClassroomDisplay.vue';
import * as StudentRegistrationLogic from '../logic/studentRegistrationLogic.js';
import { mapActions } from 'vuex';

export default defineComponent({
    name: 'StudentRegistration',
    components: {
        'initial-header': initialHeader,
        'classroom-display': ClassroomDisplay,
    },
    data() {
        return {
            classroomDisplayIsActive: false,
            name: '',
            surname: '',
            idLessonTime: '',
            nameIsValid: true,
            surnameIsValid: true,
            idIsValid: true,
        };
    },
    methods: {
        ...mapActions('moduleName', ['updateIdLessonTimeOnly']),        
        async onSubmitForm() {
            console.log("submitted");

            if (!StudentRegistrationLogic.validateName(this.name)) {
                this.nameIsValid = false;
                return;
            }
            else this.nameIsValid = true;

            if (!StudentRegistrationLogic.validateName(this.surname)) {
                this.surnameIsValid = false;
                return;
            }
            else this.surnameIsValid = true;
                        
            this.$store.dispatch('updateIdLessonTimeOnly', this.idLessonTime);

            this.classroomDisplayIsActive = true;
            // temporary
            //console.log(await StudentRegistrationLogic.registerStudent(this.name, this.surname, this.idLessonTime));
        },
        onSeatSelected(seat){
            if(seat.appearance == "empty" && !seat.isTeachersDesk){
                StudentRegistrationLogic.registerStudent(seat, this.name, this.surname, this.idLessonTime);
            }
        }
    },
});
</script>
  
<style scoped>
@import '../assets/forms.css';
</style>
  