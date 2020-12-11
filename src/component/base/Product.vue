<template>
  <app-page-container>
    <div v-for="prod of productList" :key="prod['id']" class="app-data-item app-base-product">
      <span class="app-prod-name">{{prod['prodName']}}({{prod['prodCode']}})</span>
      <span>
        {{prod['prodUnit']}}<van-tag plain type="primary">单位</van-tag>
        {{prod['prodTypeName']}}<van-tag plain type="primary">类型</van-tag>
      </span>
      <app-fiance-num :value="prod['purchPrice']" class="app-prod-price"><van-tag plain type="primary">采购单价</van-tag></app-fiance-num>
      <app-fiance-num :value="prod['salePrice']" class="app-prod-price"><van-tag plain type="primary">销售单价</van-tag></app-fiance-num>
      <div class="app-prod-remark">{{prod['remark']}}</div>
    </div>
  </app-page-container>
</template>

<script>
import AppPageContainer from '@com/common/PageContainer.vue'
import AppFianceNum from '@com/common/FianceNum.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  components: {
    AppPageContainer,AppFianceNum
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
  @import '@style/component/base/product.scss';
</style>