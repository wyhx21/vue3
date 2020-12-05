<template>
  <div class="app-container">
    <div class="container-header">
      <div class="info" @click="showUserInfo">
        {{userName}}
      </div>
      <div class="title">后台管理系统</div>
      <div class="info" @click="showRoleInfo">{{roleName}}</div>
    </div>
    <div class="container-main">
      
    </div>
    <div class="container-footer">
      footer
    </div>

    <div class="app-draw-left" :class="userShow ? 'app-draw-left-show' : 'app-draw-left-hidden'">

    </div>
    <div class="app-draw-bottom" :class="roleShow ? 'app-draw-bottom-show' : 'app-draw-bottom-hidden'">

    </div>
    <span class="app-bj" @click="hiddenBj()" v-if="bjShow"></span>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('account',[
      'userName','roleName'
    ])
  },
  data() {
    return {
      bjShow: false,
      userShow: false,
      roleShow: false
    }
  },
  mounted() {
    this.getRoleInfo()
  },
  methods: {
    ...mapActions('account',['systemRole']),
    hiddenBj () {
      this.bjShow = false
      this.userShow = false
      this.roleShow = false
    },
    showUserInfo() {
      this.bjShow = true
      this.userShow = true
    },
    showRoleInfo() {
      this.bjShow = true
      this.roleShow = true
    },
    getRoleInfo() { // 获取角色信息
      this.systemRole().then(() => {}).catch(() => {})
    }
  }
}
</script>