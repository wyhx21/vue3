<template>
  <div class="app-demo">
    <div>{{`roleId:       ${roleId}`}}</div>
    <div>{{`roleType:     ${roleType}`}}</div>
    <div>{{`sysId:        ${sysId}`}}</div>
    <div>{{`userName:     ${userName}`}}</div>
    <div>{{`token:        ${token}`}}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('account',[
      'userName','roleId','roleType','sysId','token'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import '@style/public/app.scss';
</style>