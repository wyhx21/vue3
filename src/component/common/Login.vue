<template>
  <div class="app-login">
    <div class="login-form">
      <p/>
      <div>
        <vxe-input v-model="userCode" placeholder="请输入用户名" clearable/>
      </div>
      <p/><p/>
      <div>
        <vxe-input v-model="passWord" type="password" placeholder="请输入密码" clearable/>
      </div>
      <p/><p/>
      <div>
        <vxe-button class="app-row" @click="login" type="submit" status="primary" :loading='loading'>登录</vxe-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      userCode: 'admin',
      passWord: 'admin',
      loading: false
    }
  },
  methods: {
    ...mapActions('account',['loginSubmit']),
    login(){
      this.loading = true
      this.loginSubmit({
        userCode: this.userCode,
        passWord: this.passWord
      }).then(res => {
        this.loading = false
        this.$router.push('/container')
      })
      .catch(error => {
        this.loading = false
      })
    }
  }
}
</script>