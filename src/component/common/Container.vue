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

    <div class="app-draw-row" :class="roleInfoClass"><app-change-role @submit='hiddenBj' ref='systemChangeRole'/></div>
    <div class="app-draw-col" :class="userInfoClass"><app-user-info @submit= 'hiddenBj'/></div>
    <div class="app-draw-col" :class="menuInfoClass"><app-menu-info @submit= 'hiddenBj'/></div>
    <span class="app-bj" @click="hiddenBj" v-if="bjShow"/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import appChangeRole from '@com/system/ChangeRole.vue';
import appUserInfo from '@com/system/UserInfo.vue';
import appMenuInfo from '@com/system/MenuInfo.vue';
import { toMainPage } from '@router/routerHelper.js'
export default {
  components: {
    appChangeRole,appUserInfo,appMenuInfo
  },
  computed: {
    ...mapGetters('account',[
      'userName','roleName', 'system','roleSize'
    ]),
    roleInfoClass() {
      return `app-draw-row-bottom-${this.roleShow ? 'show':'hidden'}`
    },
    userInfoClass() {
      return `app-draw-col-left-${this.userInfoShow ? 'show':'hidden'}`
    },
    menuInfoClass() {
      return `app-draw-col-left-${this.menuInfoShow ? 'show':'hidden'}`
    }
  },
  data() {
    return {
      bjShow: false,
      roleShow: false,
      userInfoShow: false,
      menuInfoShow: false,
      inputa:'aaa'
    }
  },
  mounted() {
    this.accountInit().then(() => {}).catch(() => {})
  },
  methods: {
    ...mapActions('account',['accountInit']),
    hiddenBj () {
      this.bjShow = false
      this.roleShow = false
      this.userInfoShow = false
      this.menuInfoShow = false
    },
    showRoleInfo() {
      if(this.roleSize > 1) {
        this.$refs.systemChangeRole.initChecked()
        this.bjShow = true
        this.roleShow = true
      }
    },
    showUserInfo() {
      this.bjShow = true
      this.userInfoShow = true
    },
    showPageInfo() {
      this.bjShow = true
      this.menuInfoShow = true
    },
    toHome() {
      toMainPage()
    }
  }
}
</script>