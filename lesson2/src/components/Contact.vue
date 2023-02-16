<template>
  <div class="contact">
    <div class="contact-info">
      <h4><b>{{ fullname }}</b></h4>
      <p>{{ mobile }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: ["fullname", "mobile"]
};
</script>

<style scoped>
  .contact-info {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 20px 16px;
  }
  .contact-info:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
</style>
