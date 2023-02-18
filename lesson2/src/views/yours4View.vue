<template>
<!-- 
  ASSIGNMENT
  
  1. Router - 
  FILE: yours2View.vue
  PATH: http://localhost:5173/yours2

  2. Navbar - link in app.vue

  3. Add file in @/components/MyComponent.vue BY COPY from Contact.vue

  4. Assign Props to ['subject', 'grade']

  5. Use <MyComponent subject="Math" grade="1234" /> in this file
-->
  <div class="yours3">
    <Contact fullname="Nitinun Mana" mobile="0801911150" />
    <!-- <MyComponent subject="Math" grade="1234" /> -->
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  components: {
    Contact,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style>
  button {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
</style>
