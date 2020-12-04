<template>
  <div>{{`roleId:${roleId}`}}</div>
    <div>{{`roleType:${roleType}`}}</div>
    <div>{{`sysId:${sysId}`}}</div>
    <div>{{`userName:${userName}`}}</div>
    <div>{{`token:${token}`}}</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('account',[
      'userName','roleId','roleType','sysId','token'
    ])
  },
  methods: {

  }
}
</script>