<template>
  <footer>
    <p>COPYRIGHT © {{ getYear() }}, VIVEK</p>
  </footer>
</template>
<script>
  export default {
    methods: {
      getYear() {
        let date = new Date();
        return date.getFullYear();
      },
    },
  }
</script>
<style scoped>

</style>
