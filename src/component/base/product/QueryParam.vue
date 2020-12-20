<template>
  <van-form @submit="onSubmit" class="app-product-form">

    <van-divider dashed :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">编号</van-divider>
    <van-field v-model="prodCode" name="prodCode" placeholder="商品编号" clearable/>

    <van-divider dashed :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">名称</van-divider>
    <van-field v-model="productName" name="productName" placeholder="商品名称" clearable/>

    <van-divider dashed :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">类型</van-divider>
    <van-dropdown-menu>
      <van-dropdown-item v-model="prodType" :options="prodTypeList" />
    </van-dropdown-menu>

    <van-divider dashed :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">是否有效</van-divider>
    <van-radio-group v-model="deleted" direction="horizontal">
      <van-radio name="1">有效</van-radio>
      <van-radio name="0">无效</van-radio>
    </van-radio-group>
    
    <div class="app-button">
      <van-button block plain type="primary" @click="resetParam">重置</van-button>
      <van-button block type="primary" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex';
export default {
  computed: {
    ...mapGetters('page/product',['prodTypeList']),
  },
  data() {
    return {
      prodType: null,
      deleted: '',
      prodCode: '',
      productName: '',
    }
  },
  methods: {
    ...mapMutations('page/product',['queryParam']),
    onSubmit(val) {
      val.prodType = this.prodType
      val.deleted = this.deleted
      this.queryParam(val)
      this.$emit('refreshData')
    },
    resetParam() {
      this.queryParam()
      this.prodType = null
      this.prodCode = ''
      this.productName = ''
      this.deleted = ''
    }
  }
}
</script>