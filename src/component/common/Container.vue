<template>
  <div class="app-container">
    <div class="container-header">
      <div class="info">
        {{userName}}
      </div>
      <div class="title">{{system['value']}}</div>
      <div class="info" @click="showRoleInfo">{{roleName}}</div>
    </div>
    <div class="container-main">
      
    </div>
    <div class="container-footer">
      footer
    </div>

    <div class="app-draw-row" :class="rowClass">
      <change-role ref='systemChangeRole'/>
    </div>
    <span class="app-bj" @click="hiddenBj()" v-if="bjShow"></span>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import ChangeRole from '@com/system/ChangeRole.vue';
export default {
  components: {
    ChangeRole
  },
  computed: {
    ...mapGetters('account',[
      'userName','roleName', 'system'
    ]),
    rowClass() {
      return `app-draw-row-bottom-${this.roleShow ? 'show':'hidden'}`
    }
  },
  data() {
    return {
      bjShow: false,
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
      this.roleShow = false
    },
    showRoleInfo() {
      this.$refs.systemChangeRole.initChecked()
      this.bjShow = true
      this.roleShow = true
    },
    getRoleInfo() { // 获取角色信息
      this.systemRole().then(() => {}).catch(() => {})
    }
  }
}
</script>