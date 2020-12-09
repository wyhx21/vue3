<template>
  <div :style="{height: 'calc(100% - 56px)'}">
    <van-divider dashed :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">用户</van-divider>
    <div class="app-one-row">{{userName}}</div>
    <van-divider dashed :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">系统</van-divider>
    <div class="app-one-row">{{system['value']}}</div>
    <van-divider dashed :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">角色</van-divider>
    <div class="app-one-row">{{roleName}}</div>
  </div>
  <van-button @click="exitLogin" plain hairline type="primary" class="app-one-row" :loading='loading'>退出登录</van-button>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { Confirm } from '@utils/messagerUtil.js'
import { toLogin } from '@router/routerHelper.js'
export default {
  computed: {
    ...mapGetters('account',['userName']),
    ...mapGetters('userRoleAuth',['system','roleName']),
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions('account',['logOut']),
    exitLogin() {
      Confirm({message:'您确定退出登录?'}).then(res => {
        this.loading = true
        this.logOut().then(res => {
          toLogin()
          this.loading = false
        }).catch(err => {
          this.loading = false
        })
      }).catch(err => {})
    }
  }
}
</script>