<template>
  <div class="2-playground">
    <div style="margin: 10px;">
      <input type="text" placeholder="Fullname" id="fullname" />
      <input type="text" placeholder="Phone number" id="mobile" />
      <button>Save</button>
    </div>
    <Contract fullname="John Doe" mobile="0812345678" />
    <Contract fullname="Nitinun Mana" mobile="0801911150" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import Contract from "@/components/Contract.vue";

export default {
  components: {
    HelloWorld,
    Contract
  },
  
  data() {
    return {
      boughtAmount: this.minAmountPerOrder
    };
  },
  computed: {
    leftAmount() {
      return this.maxAmountPerDay - this.sumAmount;
    }
  },
  methods: {
    onClickBuyBtn() {
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
