<template>
  <div class="3-sexy">
    <div style="margin: 10px;">
      <input type="text" placeholder="Fullname" v-model="inputFullname" /> 
      <input type="text" placeholder="Phone number" v-model="inputMobile" /> 
      <button v-on:click="onClickSave()">Save</button>
    </div>
    <Contact fullname="Nitinun Mana" mobile="0801911150" />
    <Contact :fullname="inputFullname" :mobile="inputMobile" />
    <Contact
      :fullname="inputFullname" 
      :mobile="inputMobile" 
      v-if="inputFullname !== '' && inputMobile !== ''"
    />

<!-- ----------------------------------------------------------------------------------- -->

    <div style="color: blue; margin-top:50px; ">
      <p>
        inputFullname --> {{ inputFullname }}
      </p>
      <p>
        inputMobile -----> {{ inputMobile }}
      </p>
      <p>
        myState ---------> {{ myState }}
      </p>
    </div>
    <p style="color: red;">
      {{ computedContact }}
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
      inputFullname: '',
      inputMobile: '',
    };
  },
  mounted() {
    this.myState++;
  },
  computed: {
    computedContact() {
      return this.inputFullname + ' ' + this.inputMobile;
    }
  },
  methods: {
    onClickSave() {
      this.myState = this.myState + 5;
      alert(this.computedContact);
    }
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
