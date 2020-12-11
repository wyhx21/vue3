<template>
  <div class="app-container">
    <slot name="head">
      <div>
        <van-nav-bar left-arrow :title="system['value']" @click-left="goPrePage">
          <template #left> <van-icon name="arrow-left" size="20"/>返回</template>
          <template #right> {{roleName}} </template>
        </van-nav-bar>
      </div>
    </slot>
    <div class="container-main">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { toMainPage,goBack } from '@router/routerHelper.js';
export default {
  components: {
  },
  computed: {
    ...mapGetters('account',['userName']),
    ...mapGetters('userRoleAuth',['roleName', 'system']),
  },
  methods: {
    goPrePage() {
      goBack()
    }
  }
}
</script>

<style lang="scss">
  @import '@style/component/common/container.scss';
</style>