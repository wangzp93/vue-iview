<template>
  <div @click="toView">1-1</div>
</template>

<script>
  export default {
    name: "Menu1-1",
    methods: {
      toView() {
        this.$router.push({
          name: 'menu1-2'
        })
      }
    }
  }
</script>

<style scoped>

</style>