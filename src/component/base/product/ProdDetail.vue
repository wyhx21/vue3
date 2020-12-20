<template>
  <app-page-container>
    <div class="app-data-detail">
      <table style="width:100%">
        <tr>
          <td class="app-table-lable4">商品名称</td>
          <td><span>{{currentProduct['prodName']}}</span></td>
        </tr>
        <tr>
          <td class="app-table-lable4">商品编码</td>
          <td><span>{{currentProduct['prodCode']}}</span></td>
        </tr>
        <tr>
          <td class="app-table-lable4">商品类型</td>
          <td><span>{{currentProduct['prodTypeName']}}</span></td>
        </tr>
        <tr>
          <td class="app-table-lable4">商品单位</td>
          <td><span>{{currentProduct['prodUnit']}}</span></td>
        </tr>
        <tr>
          <td class="app-table-lable4">采购单价</td>
          <td><app-fiance-num :value="currentProduct['purchPrice']"></app-fiance-num></td>
        </tr>
        <tr>
          <td class="app-table-lable4">销售单价</td>
          <td><app-fiance-num :value="currentProduct['salePrice']"></app-fiance-num></td>
        </tr>
        <tr>
          <td class="app-table-lable4">是否有效</td>
          <td><span>{{currentProduct['enable']}}</span></td>
        </tr>
        <tr>
          <td class="app-table-lable4">备注信息</td>
          <td><span>{{currentProduct['remark']}}</span></td>
        </tr>
      </table>
    </div>
    <span class="app-data-editor" @click="editorProd">编辑</span>
  </app-page-container>
</template>
<script>
import AppPageContainer from '@com/common/PageContainer.vue';
import AppFianceNum from '@com/common/FianceNum.vue';
import {mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  components: {
    AppPageContainer,AppFianceNum
  },
  computed: {
    ...mapGetters('page/product',['currentProduct']),
  },
  methods: {
    editorProd() {
      this.$router.replace('/base/productEditor')
    }
  }
}
</script>