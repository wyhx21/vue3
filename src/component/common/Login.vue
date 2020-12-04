<template>
  <div class="app-login">
    <div class="login-header"></div>
    <div class="login-contain">
      <div class="login-form">
        <div><span>用户名</span><input v-model="userCode"/></div>
        <div><span>密  码</span><input type="password" v-model="passWord"/></div>
        <div><div @click="login">登录</div></div>
      </div>
    </div>
    <div class="login-fotter"></div>
  </div>
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
    ...mapActions('account',['loginSubmit']),
    login(){
      this.loginSubmit({
        userCode: this.userCode,
        passWord: this.passWord
      }).then(res => {
        this.$router.push('/container')
      })
      .catch(error => console.log(error))
    }
  }
}
</script>