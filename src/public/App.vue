<template>
  {{basePath}}
  <div @click="increment" class="app-demo">hello</div>
</template>

<script>
export default {
  data() {
    return {
      basePath: BASE_PATH
    }
  },
  methods: {
    increment() {
      console.log(`${BASE_PATH}`)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@style/public/app.scss';
</style>