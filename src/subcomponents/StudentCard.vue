<template>
  <div class="card" :class="studentInfo.activityValue ? 'activity' + studentInfo.activityValue : 'empty'"
    @click="onCardClicked($event)">
    <div class="ratingContainer" v-if="studentInfo.appearance == 'full'">
      <button class="ratingMinus" @click="onMinusRatingClicked($event)">
        <font-awesome-icon icon="fa-regular fa-thumbs-down" />
      </button>
      <button class="ratingPlus" @click="onPlusRatingClicked($event)">
        <font-awesome-icon icon="fa-regular fa-thumbs-up" />
      </button>
    </div>
    <div class="nameContainer">
      <b v-if="studentInfo.appearance == 'full' || studentInfo.appearance == 'limited'">{{ studentInfo.surname }} </b>
      {{ studentInfo.name }}
    </div>
    <div class="gradeContainer" v-if="studentInfo.appearance == 'full'">
      <button class="minusGrade" @click="onMinusClicked($event, 'classwork')">-</button>
      <div class="descriptionOptions minusOptions">
        <div class="option" @click="onMinusClicked($event, 'classwork')">Práce v hodině</div>
        <div class="option" @click="onMinusClicked($event, 'homework')">Domácí úkol</div>
        <div class="option" @click="onMinusClicked($event, 'oral exam')">Ústní zkoušení</div>
        <div class="option" @click="onMinusClicked($event, 'late arrival')">Pozdní příchod</div>
      </div>
      <div class="gradeValue">{{ calculateGradeValue() }}</div>
      <button class="plusGrade" @click="onPlusClicked($event, 'classwork')">+</button>
      <div class="descriptionOptions plusOptions">
        <div class="option" @click="onPlusClicked($event, 'classwork')">Práce v hodině</div>
        <div class="option" @click="onPlusClicked($event, 'homework')">Domácí úkol</div>
        <div class="option" @click="onPlusClicked($event, 'oral exam')">Ústní zkoušení</div>
      </div>
    </div>
  </div>
</template>
  
  
<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faThumbsUp, faThumbsDown);

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
  data() {
    return {
      showDescriptionOptions: false,
    };
  },
  mounted() {
    this.setCardSize();
    //console.log(this.studentInfo);
  },
  methods: {
    setCardSize() {
      const cardElements = document.getElementsByClassName('card');
      for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.style.height = this.cardHeight + 'px';
        card.style.width = this.cardWidth + 'px';
      }
    },
    calculateGradeValue() {
      const isPlus1 = this.studentInfo.smallGrades.filter((grade) => grade.isPlus == '1').length;
      const isPlus0 = this.studentInfo.smallGrades.filter((grade) => grade.isPlus == '0').length;
      return isPlus1 - isPlus0;
    },
    onCardClicked(event) {
      if (event.target.tagName !== 'button' && event.target.className !== 'option') {
        this.$emit('studentSelected', this.studentInfo);
      }
      else {

      }
    },
    onMinusRatingClicked(event) {
      //console.log('Minus rating clicked');
      //this.studentInfo.activityValue--;
      this.$emit('updateRating', this.studentInfo.idStudent, this.studentInfo.activityValue - 1);
      event.stopPropagation();
    },
    onPlusRatingClicked(event) {
      //console.log('Plus rating clicked');
      //this.studentInfo.activityValue++;
      this.$emit('updateRating', this.studentInfo.idStudent, this.studentInfo.activityValue + 1);

      event.stopPropagation();
    },
    onMinusClicked(event, description) {
      //console.log('Minus clicked');
      this.$emit('insertSmallGrade', this.studentInfo.idStudent, 0, description);
      event.stopPropagation();
    },
    onPlusClicked(event, description) {
      this.$emit('insertSmallGrade', this.studentInfo.idStudent, 1, description);
      event.stopPropagation();
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
  
<style scoped>
div.card {
  max-width: 300px;
  min-width: 115px;
  max-height: 175px;
  min-height: 70px;
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

/* Define the colors for activityValue */
div.card.activity1 {
  background-color: #ff0000a1; 
}

div.card.activity2 {
  background-color: #ff5100a1; 
}

div.card.activity3 {
  background-color: #ffa100a1; 
}

div.card.activity4 {
  background-color: #ffc400a1; 
}

div.card.activity5 {
  background-color: #ffff00a1; 
}

div.card.activity6 {
  background-color: #b8ff14a1; 
}

div.card.activity7 {
  background-color: #75cf00a1;
}

div.card.activity8 {
  background-color: #4dd632a1; 
}

div.card.activity9 {
  background-color: #3cd83ca1; 
}

div.card.activity10 {
  background-color: #00bb00a1; 
}

div.card.empty {
  display: flex;
  align-items: center;
  justify-content: center;
}
div.gradeContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  width: 100%;
  height: 30%;
}

button.minusGrade,
button.plusGrade {
  height: 30px;
  width: 30px;
  border: 1px solid #ccc;
  color: #fff;
  font-size: 1.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  margin: 0;
  position: relative;
}

button.plusGrade {
  border-left: none;
  background-color: green;
}

button.minusGrade {
  border-right: none;
  background-color: red;
}

div.descriptionOptions {
  display: none;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  width: 200px;
  z-index: 1;
}

div.descriptionOptions div {
  padding: 5px;
}

div.plusOptions div:hover {
  background-color: var(--bg-medium-green);
  cursor: pointer;
  font-weight: bold;
}

div.minusOptions div:hover {
  background-color: rgb(252, 176, 176);
  cursor: pointer;
  font-weight: bold;
}

.minusOptions {
  top: 7px;
  right: 72%;
}

.plusOptions {
  top: 7px;
  left: 72%;
}

button.plusGrade:hover+.plusOptions,
button.minusGrade:hover+.minusOptions,
.plusOptions:hover,
.minusOptions:hover {
  display: block;
}

div.gradeValue {
  height: 30px;
  width: 25%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  background-color: white;
}

div.nameContainer {
  font-size: 1.2em;
  height: 40%;
  display: flex;
  align-items: center;
}

div.nameContainer b {
  margin-right: 6px;
}

.ratingContainer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30%;
}

.ratingContainer button {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  margin: 10px 10px 0;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ratingContainer .ratingMinus {
  background-color: rgb(250, 66, 66);
}

.ratingContainer .ratingPlus {
  background-color: rgb(72, 145, 72);
}
</style>


  