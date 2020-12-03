<template>
  <div @click="loginRequest" class="app-demo">
    <router-link to="/">Go to Home</router-link> |
    <router-link to="/store">Go to Store</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>