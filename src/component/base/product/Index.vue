<template>
  <app-page-container>
    <div class="app-product-search">
      <span class="app-link" @click="showQueryInfo">筛选</span> <span class="app-link">新增</span>
    </div>
    <div class="app-product-container">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list v-model:loading="listLoading" :finished="listFinished" :finished-text="finishedText" @load="loadList" >
          <div v-for="prod of productList" :key="prod['id']" class="app-data-item">
            <table>
              <tr>
                <td><span class="app-prod-name">{{prod['prodCode']}}</span></td>
                <td><span class="app-prod-name">{{prod['prodName']}}</span></td>
                <td><span>{{prod['prodUnit']}}</span></td>
              </tr>
              <tr>
                <td><span>{{prod['prodTypeName']}}</span></td>
                <td><span>{{prod['enable']}}</span></td>
                <td><span class="app-link" @click="gotoDetail(prod)">详情</span></td>
              </tr>
            </table>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>

    <van-popup v-model:show="queryInfoShow" position="right" round :style="{ height: '100%',width:'70%'}">
      <app-query-param @refreshData = 'onRefresh'/>
    </van-popup>

  </app-page-container>
</template>

<script>
import AppPageContainer from '@com/common/PageContainer.vue'
import AppFianceNum from '@com/common/FianceNum.vue'
import AppQueryParam from './QueryParam.vue'
import {mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  components: {
    AppPageContainer,AppFianceNum,AppQueryParam
  },
  computed: {
    ...mapGetters('page/product',['productList']),
  },
  data() {
    return {
      isLoading:true,
      listLoading: true,
      listFinished: false,
      finishedText: '我也是有底线的...',
      queryInfoShow: false,
    }
  },
  mounted() {
    this.queryParam()
    this.onRefresh()
    this.queryProdType()
  },
  methods: {
    ...mapActions('page/product',['queryPage','addNextPage','queryProdType']),
    ...mapMutations('page/product',['queryParam','currentProduct']),
    onRefresh() {
      this.listLoading = true
      this.queryPage(true)
        .then(res => {
          this.queryInfoShow = false
          this.listFinished = !res
          this.isLoading = false
          this.listLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.listLoading = false
        })
    },
    loadList() {
      this.addNextPage().then(res => {
        this.listLoading = false
        this.listFinished = !res
      }).catch(() => {
        this.listLoading = false
      })
    },
    showQueryInfo () {
      this.queryInfoShow = true
    },
    gotoDetail (row) {
      this.currentProduct(row)
      this.$router.push('/base/productDetail')
    }
  }
}
</script>

<style lang="scss">
  @import '@style/component/base/product.scss';
</style>