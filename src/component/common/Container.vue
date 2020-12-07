<template>
  <div class="app-container">
    <div class="container-header app-one-row">
      <div class="app-link info" @click="showUserInfo">
        {{userName}}
      </div>
      <div class="title">{{system['value']}}</div>
      <div class="info" :class="roleSize > 1 ? 'app-link' : ''" @click="showRoleInfo">{{roleName}}</div>
    </div>
    <div class="container-main">
      <router-view/>
    </div>
    <div class="container-footer app-one-row">
      <div class="app-link item" @click="toHome()">返回主页</div>
      <div class="app-link item" @click ='showPageInfo'>选择页面</div>
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
// import appMenuInfo from '@com/system/MenuInfo.vue';
import { toMainPage } from '@router/routerHelper.js';
import { Confirm } from '@utils/messagerUtil.js';
export default {
  components: {
    appUserInfo
  },
  computed: {
    ...mapGetters('account',[
      'userName','roleName', 'system','roleSize','sysRoleList'
    ]),
  },
  data() {
    return {
      roleShow: false,
      userInfoShow: false,
      menuInfoShow: false
    }
  },
  mounted() {
    this.accountInit().then(() => {}).catch(() => {})
  },
  methods: {
    ...mapActions('account',['accountInit','roleChange']),
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
    }
  }
}
</script>