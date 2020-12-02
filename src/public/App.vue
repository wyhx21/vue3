<template>
  <div @click="loginRequest" class="app-demo">hello</div>
  <app-store/>
</template>

<script>
import { mapActions } from 'vuex';
import appStore from '@com/store.vue'

export default {
  components: {
    appStore
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions('account',{
      login: 'login'
    }),
    loginRequest() {
      this.login({
        userCode: 'admin',
        passWord: 'admin'
      }).then(res => console.log(res))
      .catch(error => console.log(error))
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@style/public/app.scss';
</style>