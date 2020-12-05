<template>
  <div class="app-draw-container">
    <vxe-table
      ref="systemChangeRoleTable"
      highlight-current-row
      @cell-click ='changeChecked'
      :row-style = 'rowStyleSet'
      :data="sysRoleList">
      <vxe-table-column type="radio" width="60">
        <template #header>
          <vxe-button type="text" @click="changeRole">切换</vxe-button>
        </template>
      </vxe-table-column>
      <vxe-table-column field="sysName" title="系统名称"></vxe-table-column>
      <vxe-table-column field="roleName" title="角色名称"></vxe-table-column>
    </vxe-table>
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
      }
    }
  },
  methods: {
    ...mapActions('account',['roleChange']),
    changeRole() {
      let row = this.$refs.systemChangeRoleTable.getRadioRecord();
      this.roleChange(row)
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