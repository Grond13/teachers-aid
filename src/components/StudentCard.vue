<template>
    <div class="card" :class="studentInfo.activityValue ? studentInfo.activityValue : 'empty'">
        <div class="ratingContainer">

        </div>
        <div class="nameContainer">
            <b v-if="studentInfo.idStudent">{{ studentInfo.surname }} </b>
            {{ studentInfo.name }}
        </div>
        <div class="gradeContainer" v-if="studentInfo.idStudent">
            <button class="minusGrade">-</button>
            <div class="gradeValue">{{ studentInfo.gradeValue }}</div>
            <button class="plusGrade">+</button>
        </div>
    </div>
</template>
  
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)

export default {
    props: {
        studentInfo: {
            type: Object,
            required: true,
        },
        cardHeight: {
            required: true,
        },
        cardWidth: {
            required: true,
        },
    },
    mounted() {        
        this.setCardSize();
    },
    methods: {
        setCardSize() {
            const cardElements = document.getElementsByClassName('card');
            for (let i = 0; i < cardElements.length; i++) {
                const card = cardElements[i];
                card.style.height = this.cardHeight + 'px';
                card.style.width = this.cardWidth + 'px';
            }
            
        }
    },
    components: {
        FontAwesomeIcon
    }
};
</script>

<style scoped>
div.card {
    max-width: 300px;
    min-width: 115px;
    max-height: 175px;
    min-height: 70px;
    margin: 2px;
}

div.card.empty {
    display: flex;
    align-items: center;
    justify-content: center;
}

/*
.plusButton {
    opacity: 0;
    transition: opacity 0.3s;
    background-color: transparent;
    color: rgb(180, 180, 180);
    border-radius: 50%;
    border: none;
    font-size: 20px;
}
*/
</style>