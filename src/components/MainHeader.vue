<template>
    <header>
      <div class="logout-button">
        <FontAwesomeIcon :icon="faSignOutAlt" />
      </div>
      <h1>Teacher's Aid</h1>
    </header>
  </template>
  
<script>
import { defineComponent } from 'vue';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: "MainHeader",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      faSignOutAlt: faSignOutAlt
    };
  }
});
</script>
  
<style scoped>
@import '../assets/base.css';
@import 'https://fonts.googleapis.com/css?family=Quicksand';

h1 {
  text-align: center;  
  font-family: Quicksand;
  font-weight: 800;
  margin: 0; /* Remove default margin */
}

header {
  background-color: var(--bg-dark-green);
  height: 10vh;
  padding: 10px 0;
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: center;  
}

.logout-button {
  position: absolute; 
  top: 50%;
  left: 20px; 
  transform: translateY(-50%); 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
  background-color: var(--bg-medium-green);
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.logout-button:hover {
  background-color: var(--bg-darker-green);
  color: white;
}
</style>
  