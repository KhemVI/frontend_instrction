<template>
  <div class="4-final-playground">
    <div style="margin: 10px;">
      <input type="text" placeholder="Fullname" v-model="inputFullname" /> 
      <input type="text" placeholder="Phone number" v-model="inputMobile" /> 
      <button v-on:click="onClickSave()">Save</button>
    </div>
    <Contact
      :fullname="contact.fullname" 
      :mobile="contact.mobile" 
      v-for="(contact, index) in contacts"
      :key="index"
    />
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
      inputFullname: '',
      inputMobile: '',
      contacts: [],
    };
  },
  mounted() {
    this.getContacts();
  },
  methods: {
    onClickSave() {
      fetch("http://localhost:3000/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "fullname": this.inputFullname,
          "mobile": this.inputMobile
        }),
      })
      .then(response => response.json())
      .then(data => {
        this.inputFullname = '';
        this.inputMobile = '';
        this.getContacts();
      })
      .catch((error) => {
        console.error(error);
      });
    },
    getContacts() {
      fetch("http://localhost:3000/contact", {
        method: 'GET'
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.contacts = data;
      })
      .catch((error) => {
        console.error(error);
      });
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
