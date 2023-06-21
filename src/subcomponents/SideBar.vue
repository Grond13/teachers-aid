<template>
  <div class="sidebar">
    <header class="sidebar-header">
      <h3 v-text="header"></h3>
      <h4>{{ subheader }}</h4>
      <button @click="onCrossClicked">
        <font-awesome-icon :icon="faTimes" />
      </button>
    </header>
    <div class="sidebar-body">
      <slot></slot>
    </div>
    <footer class="sidebar-footer">
      <div v-html="footerContent"></div>
    </footer>
  </div>
</template>
  
<script>
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "SideBar",
  components: { FontAwesomeIcon },
  props: {
    header: {
      type: String,
      required: false
    },
    subheader: {
      type: String,
      required: false
    },
    footerContent: {
      type: String,
      required: false
    },
  },
  data() {
    return {
      faTimes: faTimes
    }
  },
  methods: {
    onCrossClicked() {
      this.$emit('closeSidebar');
    }
  },
}
</script>
  
<style>
@import '../assets/base.css';

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 20%;
  max-width: 300px;
  background-color: #f0f0f0;
  z-index: 999;
  overflow-x: hidden;
  padding-top: 10vh;
}

.sidebar-header,
.sidebar-footer {
  position: absolute;
  width: 100%;
  text-align: center;
  background-color: var(--bg-darker-green);
  color: var(--vt-c-white-soft);
}

.sidebar-header {
  top: 0;
  height: 10vh;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-footer {
  bottom: 0;
  padding: 10px;
  background-color: var(--bg-darker-green);
}

.sidebar-header button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--bg-darker-green);
  color: var(--vt-c-white-soft);
  border: none;
  font-size: 30px;
  padding: 0 10px;
  cursor: pointer;
}

.sidebar-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
}
</style>
  