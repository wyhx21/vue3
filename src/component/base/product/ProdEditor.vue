<template>
  <app-page-container>
    <van-form @submit="onSubmit" class="app-data-detail">
      <van-field v-model="prodRow['prodName']" name="prodName" label="商品名称" :disabled = 'editable'/>
      <van-field v-model="prodRow['prodCode']" name="prodCode" label="商品编码" :disabled = 'editable'/>
      <van-field name="prodType" label="商品类型" :disabled='editable'>
        <template #input>
          <van-dropdown-menu>
            <van-dropdown-item v-model="prodRow['prodType']" :options="prodTypes" :disabled = 'editable'/>
          </van-dropdown-menu>
        </template>
      </van-field>
      <van-field v-model="prodRow['prodUnit']" name="prodUnit" label="商品单位" :disabled = 'editable'/>
      <van-field name="purchPrice" label="采购单价" :disabled='editable'>
        <template #input>
          <app-fiance-num :value="prodRow['purchPrice']"></app-fiance-num>
        </template>
      </van-field>
      <van-field name="salePrice" label="销售单价" :disabled='editable'>
        <template #input>
          <app-fiance-num :value="prodRow['salePrice']"></app-fiance-num>
        </template>
      </van-field>
      <van-field name="deleted" label="是否有效" :disabled='editable'>
        <template #input>
          <van-switch v-model="prodRow['deleted']" size="20" :disabled='editable'/>
        </template>
      </van-field>
      <van-field  v-model="prodRow['remark']"  rows="2"  autosize  label="备注信息"  type="textarea"  maxlength="50"  placeholder="备注信息"
        show-word-limit :disabled='editable'/>
    </van-form>
    
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
    ...mapGetters('page/product',['currentProduct','prodTypes']),
  },
  data () {
    return {
      editable: false,
      prodRow: {}
    }
  },
  watch: {
    currentProduct: {
      handler (val) {
        this.prodRow = {...val}
        this.prodRow.deleted = (val.deleted == 1)
      },
      immediate: true
    }
  },
  methods: {
    onSubmit(val) {

    }
  }
}
</script>