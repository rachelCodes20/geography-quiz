<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    
    <div class="quiz-container">
     <h1>Geo-Quiz!</h1>
      <button>North America</button>
      <button>Africa</button>
      <button>Europe</button>
      <button>South America</button>
    </div>
</template>

<style scoped>
body {
  display: flex;
    align-items: center;
    justify-content: center;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.app {
  text-align: center;
}

.quiz-container {
  text-align: center;
}

button {
  padding: 10px;
  width: 100px;
  background-color: teal;
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
