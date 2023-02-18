<template>
<!-- 
  ASSIGNMENT
  
  1. Router - 
  FILE: yours2View.vue
  PATH: http://localhost:5173/yours2

  2. Navbar - link in app.vue

  3. Loop myArray state on html

  4. Add component <HelloWorld /> on html
-->
  <div class="yours3">
    <Contact fullname="Nitinun Mana" mobile="0801911150" />
    <p>
      Search "vue2 loop" on google
    </p>
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
      myState: 1,
      myArray: [0, 10, 20, 30, 40, 50]
    };
  },
  mounted() {
    alert("Nono");
    console.log("myState", this.myState);
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
