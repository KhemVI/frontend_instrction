<template>
  <div class="4-final-playground">
    <h1>This is an about page</h1>
    <HelloWorld />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue"

export default {
  components: {
    HelloWorld,
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
