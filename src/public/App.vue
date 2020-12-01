<template>
  {{count}}
  <div @click="increment" class="app-demo">hello</div>
</template>

<script>
export default {
  computed: {
    count() {
      
    }
  },
  methods: {
    increment() {
      
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../style/style';

.app-demo {
  color: $main-yello;
  font-size: 200px;
}
</style>