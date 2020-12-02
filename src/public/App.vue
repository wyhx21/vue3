<template>
  {{basePath}}
  <div @click="increment" class="app-demo">hello</div>
  <app-store/>
</template>

<script>
import { mapActions } from 'vuex';
import vStore from '@com/store.vue'

export default {
  components: {
    appStore: vStore
  },
  data() {
    return {
      basePath: BASE_PATH
    }
  },
  methods: {
    ...mapActions('account',{
      login: 'login'
    }),
    increment() {
      this.login({
        name: 'zhangsanns',
        sysId: 9
      })
      console.log(`${BASE_PATH}`)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@style/public/app.scss';
</style>