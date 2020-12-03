<template>
  <div class="app-demo">
    <span @click="loginRequest">登录</span>
    <div>{{`roleId:${roleId}`}}</div>
    <div>{{`roleType:${roleType}`}}</div>
    <div>{{`sysId:${sysId}`}}</div>
    <div>{{`userName:${userName}`}}</div>
    <div>{{`token:${token}`}}</div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('account',[
      'userName','roleId','roleType','sysId','token'
    ])
  },
  methods: {
    ...mapActions('account',['login']),
    loginRequest() {
      this.login({
        userCode: 'admin',
        passWord: 'admin'
      }).then(res => console.log(res))
      .catch(error => console.log(error))
    }
  },
}
</script>