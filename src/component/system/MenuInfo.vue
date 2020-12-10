<template>
  <div>
    <div v-for="item1 of roleMenu" :key="item1['id']">
      <van-divider :style="style.divider" dashed>{{item1.menuName}}</van-divider>
      <div v-for="item2 of item1['children']" :key="item2['id']">
        <span class="app-one-row app-font-color-1">{{item2['menuName']}}</span>
        <van-grid :column-num="3" :gutter="10">
          <van-grid-item v-for="item3 of item2['children']" :key="item3['id']" icon="photo-o" :text="item3['menuName']" @click='menuClick' />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters('userRoleAuth',['roleMenu']),
  },
  data() {
    return {
      style: {
        divider: {
          color: '#ccc',
          borderColor: '#ccc',
          fontSize:'.9em' 
        }
      }
    }
  },
  mounted() {

  },
  methods: {
    menuClick(event) {
      console.log(event)
    }
  }
}
</script>