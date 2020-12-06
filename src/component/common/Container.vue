<template>
  <div class="app-container">
    <div class="container-header app-one-row">
      <div class="info" @click="showUserInfo">
        {{userName}}
      </div>
      <div class="title">{{system['value']}}</div>
      <div class="info" @click="showRoleInfo">{{roleName}}</div>
    </div>
    <div class="container-main">
      <vxe-input v-model="inputa" placeholder="请输入用户名" clearable/>
    </div>
    <div class="container-footer app-one-row">
      footer
    </div>

    <div class="app-draw-row" :class="roleInfoClass">
      <app-change-role @submit='hiddenBj' ref='systemChangeRole'/>
    </div>

    <div class="app-draw-col" :class="userInfoClass">
      <app-user-info @submit= 'hiddenBj'/>
    </div>
    <span class="app-bj" @click="hiddenBj" v-if="bjShow"></span>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import appChangeRole from '@com/system/ChangeRole.vue';
import appUserInfo from '@com/system/UserInfo.vue';
export default {
  components: {
    appChangeRole,appUserInfo
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
    }
  },
  data() {
    return {
      bjShow: false,
      roleShow: false,
      userInfoShow: false,
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
    }
  }
}
</script>