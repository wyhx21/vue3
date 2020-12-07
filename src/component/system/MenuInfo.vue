<template>
  <div class="app-draw-container">
    <!-- <vxe-table
      :tree-config="treeConfig"
      :row-id='id'
      :data="roleMenu">
      <vxe-table-column title="菜单" tree-node>
        <template #default="{ row }">
          <span v-if="row['menuType'] != 2">{{row['menuName']}}</span>
          <span v-else class="app-link" :class="row['id'] == currentPage ? 'app-current-menu' : '' " @click="consoleRow(row)">{{row['menuName']}}</span>
        </template>
      </vxe-table-column>
    </vxe-table> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('account',['roleMenu']),
  },
  data() {
    return {
      treeConfig: {
        children:'children',
        indent:10,
        line:true,
        trigger: 'row',
        accordion: true,
        showIcon: true
      },
      currentPage: null
    }
  },
  methods: {
    consoleRow(row) {
      this.currentPage = row['id']
      console.log(row)
    }
  }
}
</script>