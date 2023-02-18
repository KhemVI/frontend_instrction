<template>
<!-- 
  ASSIGNMENT
  
  1. Router - 
  FILE: yours2View.vue
  PATH: http://localhost:5173/yours2

  2. Navbar - link in app.vue

  3. assign state named
     3.1 yourname = "khem (yourname)"
     3.2 polarBear = "white"
-->
  <div class="yours2">
    <div style="margin: 10px;">
      {{ yourname }}
    </div>
    <div style="margin: 10px;">
      {{ polarBear }}
    </div>
    <button v-on:click="onClickButton()" style="margin: 10px;">
      Click me please
    </button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      a: [1, 2, 3, 4],
      b: "this is state, inside data() IS STATE",
      c: "CHANGED ME"
    };
  },
  methods: {
    onClickButton() {
      this.polarBear = "polarBear state has been clicked";
    }
  }
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
</style>
