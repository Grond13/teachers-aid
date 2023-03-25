<template>
  <main-header-view></main-header-view>
  <main-timetable-view></main-timetable-view>
</template>
  
<script>
import { defineComponent } from 'vue';
import MainHeaderView from './views/MainHeaderView.vue';
import MainTimetableView from './views/MainTimetableView.vue';

export default defineComponent({
  name: 'Main',
  data() {
    return {
      timetableItems: [],
    }
  },
  methods: {    
    
  },
  components: {
    'main-header-view': MainHeaderView,
    'main-timetable-view': MainTimetableView,
    
  }
})

</script>
  
<style></style>