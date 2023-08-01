<template>
  <tr>
    <td>{{ day }}</td>
    <td v-for="lesson in lessons" :key="lesson.uuid" v-bind:class="lesson.name ? 'non-empty' : 'empty'"
        v-on:click="onCellClicked(lesson)">
      <div v-if="lesson.name" class="lesson-name">{{ lesson.name }}</div>
      <div v-if="lesson.classroom" class="lesson-classroom">{{ lesson.classroom }}</div>
      <div v-if="lesson.note !== null && lesson.note" class="lesson-note">{{ lesson.note }}</div>
      <button v-if="lesson.name" class="editButton" @click="onEditClicked(lesson, $event)">
        <font-awesome-icon :icon="['fas', 'edit']" class="icon" />
      </button>
      <button v-if="!lesson.name" class="plusButton">
        <font-awesome-icon :icon="['fas', 'plus']" />
      </button>
    </td>
  </tr>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlus, faEdit);

export default {
  props: {
    day: {
      type: String,
      required: true,
    },
    lessons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    onCellClicked(cell) {
      this.$emit('cellClicked', cell);
    },
    onEditClicked(lesson, event) {
      event.stopPropagation(); 
      this.$emit('editClicked', lesson);
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
  td {
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  td.empty {
    background-color: #ffffff;
  }
  
  td.non-empty {
    background-color: #b6fcd9;
  }
  
  td.non-empty:hover {
    cursor: pointer;
    background-color: #86fdc2;
  }
  
  .lesson-name {
    font-weight: bold;
  }
  
  .lesson-classroom {
    font-size: 0.8em;
    color: #666;
  }
  
  .lesson-note {
    display: none;
    position: absolute;
    background-color: yellow;
    padding: 10px;
    z-index: 1;
  }
  
  td.non-empty:hover .lesson-note {
    display: block;
  }
  
  td:first-child {
    font-weight: bold;
    background-color: #d1ffe8;
  }
  
  .plusButton {
    opacity: 0;
    transition: opacity 0.3s;
    background-color: transparent;
    color: rgb(180, 180, 180);
    border-radius: 50%;
    border: none;
    font-size: 20px;
  }
  
  td.empty:hover > .plusButton {
    opacity: 1;
  }
  
  td.empty:hover {
    cursor: pointer;
  }
  
  button.editButton{
    display: none;
  }

  .editButton {
    display: none;
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    background-color: #ccc;
    color: #fff;
    border-radius: 50%;
    border: none;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  td:hover > .editButton {
    display: block;
  }
    
  .icon {
    font-size: 14px;
  }
  </style>
  