<template>
  <div class="content-bread">
    <Breadcrumb>
      <BreadcrumbItem v-for="item in breadList"
                      :key="item.name"
                      :to="item.name"
      >
        {{ item.text }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from 'view-design';

export default {
  name: 'ContentBread',
  components: {
    Breadcrumb,
    BreadcrumbItem,
  },
  computed: {
    breadList() {
      return this.$store.getters['menuModule/getBreadList']
    }
  }
}
</script>

<style scoped>
.content-bread {
  padding: 10px 0;
}
</style>