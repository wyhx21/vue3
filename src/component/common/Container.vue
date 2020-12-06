<template>
  <div class="app-container">
    <div class="container-header app-one-row">
      <div class="info">
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

    <div class="app-draw-row" :class="rowClass">
      <change-role @submit='hiddenChangeRole' ref='systemChangeRole'/>
    </div>
    <span class="app-bj" @click="hiddenChangeRole" v-if="bjShow"></span>
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
      'userName','roleName', 'system','roleSize'
    ]),
    rowClass() {
      return `app-draw-row-bottom-${this.roleShow ? 'show':'hidden'}`
    }
  },
  data() {
    return {
      bjShow: false,
      roleShow: false,
      inputa:'aaa'
    }
  },
  mounted() {
    this.accountInit().then(() => {}).catch(() => {})
  },
  methods: {
    ...mapActions('account',['accountInit']),
    hiddenChangeRole () {
      this.bjShow = false
      this.roleShow = false
    },
    showRoleInfo() {
      if(this.roleSize > 1) {
        this.$refs.systemChangeRole.initChecked()
        this.bjShow = true
        this.roleShow = true
      }
    }
  }
}
</script>