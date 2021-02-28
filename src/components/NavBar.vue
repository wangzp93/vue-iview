<template>
  <Menu mode="horizontal" theme="light"
        :active-name="activeNav"
        @on-select="selectNav"
  >
    <MenuItem v-for="(nav, index) in navList" :name="index" :key="nav.name">
      <Icon :type="nav.icon"/>
      {{ nav.meta.title }}
    </MenuItem>
  </Menu>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    activeNav: {
      type: Number,
      required: true
    },
    navList: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectNav() {

    }
  }
}
</script>

<style scoped>

</style>