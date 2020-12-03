<template>
  <div class='app-demo'>
    this is home
    <div>
      {{routerInfo}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    routerInfo() {
      return this.$router
    }
  }
}
</script>