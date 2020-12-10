<template>
  <div class="app-container">
    <div>
      <van-nav-bar left-arrow :title="system['value']" @click-left="goPrePage">
        <template #left> <van-icon name="arrow-left" size="20"/>返回</template>
        <template #right> {{roleName}} </template>
      </van-nav-bar>
      <van-notice-bar left-icon="volume-o" v-if="showNoticeMsg" :text="noticeMsg"/>
    </div>

    <div class="container-main">
      <router-view/>
    </div>

    <div class="container-footer">
      <van-tabbar v-model="activeTab">
        <van-tabbar-item icon="chat-o" @click="toHome">主页</van-tabbar-item>
        <van-tabbar-item icon="fire-o" to="/container/menu">功能</van-tabbar-item>
        <van-tabbar-item icon="setting-o" @click="showRoleInfo">角色</van-tabbar-item>
        <van-tabbar-item @click="showUserInfo" icon="friends-o">用户</van-tabbar-item>
      </van-tabbar>
    </div>

    <van-action-sheet v-model:show="roleShow" :actions="sysRoleList" cancel-text='取消' description='点击切换角色' 
      @select="changeRole"/>
    <van-popup v-model:show="userInfoShow" position="left" round :style="{ height: '100%',width:'50%'}">
      <app-user-info/>
    </van-popup>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import appUserInfo from '@com/system/UserInfo.vue';
import { toMainPage,goBack } from '@router/routerHelper.js';
import { Confirm } from '@utils/messagerUtil.js';
export default {
  components: {
    appUserInfo
  },
  computed: {
    ...mapGetters('account',['userName']),
    ...mapGetters('userRoleAuth',['roleName', 'system','roleSize','sysRoleList']),
    showNoticeMsg(){
      return this.noticeMsg && this.noticeMsg.length > 0
    }
  },
  data() {
    return {
      roleShow: false,
      userInfoShow: false,
      menuInfoShow: false,
      activeTab:0,
      noticeMsg: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
    }
  },
  mounted() {
    this.accountInit().then(() => {}).catch(() => {})
  },
  methods: {
    ...mapActions('userRoleAuth',['accountInit','roleChange']),
    showRoleInfo() {
      if(this.roleSize > 1) {
        this.roleShow = true
      }
    },
    showUserInfo() {
      this.userInfoShow = true
    },
    showPageInfo() {
      this.menuInfoShow = true
    },
    changeRole (row) {
      Confirm({message:'您确定切换该角色?'}).then(res => {
        this.roleChange(row).then(res => {
          this.roleShow = false
        }).catch(err => {
          this.roleShow = false
        })
      }).catch(err=> {
        this.roleShow = false
      })
    },
    toHome() {
      toMainPage()
    },
    goPrePage() {
      goBack()
    }
  }
}
</script>