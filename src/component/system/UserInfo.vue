<template>
  <div class="app-draw-container">
    <div class="app-ext-row">
      <vxe-table
        :data="roleInfoList">
        <vxe-table-column title="用户信息">
          <template #default="{ row }">{{row}}</template>
        </vxe-table-column>
      </vxe-table>
    </div>
    <vxe-button @click="exitLogin" type="submit" status="primary" class="app-one-row" :loading='loading'>退出登录</vxe-button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { Confirm } from '@utils/messagerUtil.js'
import { toLogin } from '@router/routerHelper.js'
export default {
  computed: {
    ...mapGetters('account',[
      'roleInfoList'
    ]),
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
          this.$emit('submit')
          toLogin()
        }).catch(err ={})
      }).catch(err => {})
    }
  }
}
</script>