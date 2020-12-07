<template>
  <div class="app-login">
    <div class="app-login-head"></div>
    <van-form @submit="onSubmit">
      <van-field v-model="userCode" name="userCode" label="用户名" placeholder="用户名" :rules="rules.userCode" />
      <van-field v-model="passWord" type="password" name="passWord" label="密码" placeholder="密码" :rules="rules.passWord" />
      <div style="margin: 16px;">
        <van-button round block type="primary" loading-text="登录中..." native-type="submit" :loading='loading'>登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { toMainPage } from '@router/routerHelper.js'
export default {
  data() {
    return {
      userCode: 'admin',
      passWord: 'admin',
      loading: false,
      rules: {
        userCode: [{
          required: true,
          message: '请填写用户名'
        }],
        passWord: [{
          required: true,
          message: '请填写密码'
        }]
      }
    }
  },
  methods: {
    ...mapActions('account',['loginSubmit']),
    onSubmit(values) {
      this.loading = true
      this.loginSubmit(values)
      .then(res => {
        this.loading = false
        toMainPage()
      })
      .catch(error => {
        this.loading = false
      })
    }
  }
}
</script>