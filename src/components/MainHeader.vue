<template>
    <header>
        <h1>Teacher's Aid</h1>
    </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MainHeader",

})
</script>

<style scoped>
@import '../assets/base.css';
@import 'https://fonts.googleapis.com/css?family=Quicksand';

h1 {
    text-align: center;
    padding-top: 15px;
    font-family: Quicksand;
    font-weight: 800;
}

header {
    background-color: var(--bg-dark-green);
    height: 10vh;
    padding: 10px 0;
}
</style>