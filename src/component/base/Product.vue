<template>
  <div class="app-product">
    <div v-for="prod of productList" :key="prod['id']" class="prod-item">
      <div>商品归类:{{prod['prodTypeName']}}</div>
      <div>商品名称:{{prod['prodName']}} 编码：{{prod['prodCode']}}</div>
      
      
      
      {{prod['purchPrice']}}
      {{prod['salePrice']}}
      {{prod['prodUnit']}}
      {{prod['remark']}}
      <hr/>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  components: {

  },
  computed: {
    ...mapGetters('page/product',['productList']),
  },
  data() {
    return {

    }
  },
  mounted() {
    this.queryPage()
  },
  methods: {
    ...mapActions('page/product',['queryPage'])
  }
}
</script>

<style lang="scss">
  
</style>