<template>
  <div class="login-header"></div>
  <div class="login-contain">
    <div class="login-form">
      <div><span>用户名</span><input v-model="userCode"/></div>
      <div><span>密  码</span><input type="password" v-model="passWord"/></div>
      <div><div @click="loginSubmit">登录</div></div>
    </div>
  </div>
  <div class="login-fotter"></div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      userCode: 'admin',
      passWord: 'admin'
    }
  },
  methods: {
    ...mapActions('account',['login']),
    loginSubmit(){
      this.login({
        userCode: this.userCode,
        passWord: this.passWord
      }).then(res => console.log(res))
      .catch(error => console.log(error))
    }
  }
}
</script>