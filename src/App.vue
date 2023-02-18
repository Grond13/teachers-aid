<template>
  <header>
    <div>{{ this.name }}</div>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <button v-on:click="test()">Test</button>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent } from 'vue';
import axios from 'axios';


export default defineComponent({
  name: "Don't know yet.",
  data() {
    return {
      name: 'AJAX test',
      surname: 'testtest',
      email: 'ajax@test.com',
      password: 'User123',
    }
  },
  methods: {
    async test() {
      const data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password
      };
      console.log(data);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost/teachers-aid-api/View/InsertTeacher.php", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
        }
      };

      xhr.send(JSON.stringify(data));
    }
  },
  async mounted() {
    await this.test();
  }
})

</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
