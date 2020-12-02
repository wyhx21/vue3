<template>
  <div class="app-demo">
    {{`name: ${name}, sysId: ${sysId}, count: ${count}`}}
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('account',{
      name: 'getName',
      sysId: 'getSysId',
      count: 'getCount'
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@style/public/app.scss';
</style>