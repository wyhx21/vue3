<template>
  <div class="app-fiance-num">
    <span class="app-fiance_currency">{{currency}}</span>
    <span class="app_fiance_integer">{{numInteger}}</span>
    <span>.</span>
    <span class="app_fiance_decimal">{{numDecimal}}</span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    currency: {
      default: '¥'
    },
    value: {
      default: 0
    }
  },
  computed: {
    numInteger() {
      return `${this.value}.00`.split(/\./g)[0]
    },
    numDecimal() {
      return `${this.value}.00`.split(/\./g)[1].padEnd(2,'00')
    }
  }
}
</script>
<style lang="scss">
  @import '@style/component/common/fianceNum.scss';
</style>