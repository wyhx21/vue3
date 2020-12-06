<template>
  <div class="app-draw-container">
    <div class="app-ext-row">
      <vxe-table
        ref="systemChangeRoleTable"
        @cell-click ='changeChecked'
        :row-style = 'rowStyleSet'
        :data="sysRoleList">
        <vxe-table-column type="radio" width="40"></vxe-table-column>
        <vxe-table-column field="sysName" title="系统名称"></vxe-table-column>
        <vxe-table-column field="roleName" title="角色名称"></vxe-table-column>
      </vxe-table>
    </div>
    <vxe-button @click="changeRole" type="submit" status="primary" class="app-one-row" :loading='loading'>切换角色</vxe-button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('account',[
      'sysRoleList','roleId'
    ]),
  },
  data () {
    return {
      hightLightStyle: {
        color: 'red'
      },
      loading: false
    }
  },
  methods: {
    ...mapActions('account',['roleChange']),
    changeRole() {
      let row = this.$refs.systemChangeRoleTable.getRadioRecord();
      this.loading = true
      this.roleChange(row).then(res => {
        this.loading = false
        this.$emit('submit')
      }).catch(err => {
        this.loading = false
      })
    },
    initChecked() {
      let checkedRow = this.sysRoleList.filter(item => item['roleId'] == this.roleId)[0]
      this.$refs.systemChangeRoleTable.setRadioRow(checkedRow)
    },
    changeChecked({row}) {
      this.$refs.systemChangeRoleTable.setRadioRow(row)
    },
    rowStyleSet({row}) {
      if(row.roleId == this.roleId) {
        return this.hightLightStyle
      }
    }
  }
}
</script>