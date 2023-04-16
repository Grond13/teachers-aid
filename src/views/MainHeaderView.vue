<template>
    <header>
        <h1>Teacher's Aid</h1>
    </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MainHeaderView",
     
})
</script>

<style scoped>
@import '../assets/base.css';

h1 {
    text-align: center;
}

header {
    background-color: var(--bg-dark-green);
    height: 7.5vh;
    padding: 10px 0;
}
</style>