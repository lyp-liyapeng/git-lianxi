<template>
  <div>
    <div class="fenye">
        <el-pagination 
          cell-class-name="cell"
          
          @current-change="handleCurrentChange"
          :current-page="currentPage1"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        total: {
            type: Number,
            default:1
        },
        pageSize: {
            type: Number,
            default:1
        }
    },
    data() {
        return {
            currentPage1: 1,
    }
    },
    methods: {

    handleCurrentChange(val) {
     this.$emit('chengePage',val)
    },
}
}
</script>

<style lang="less" scoped>
 .fenye {
    background-color: #fff;
    // height: 50px;
    // line-height: 50px;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    padding: 10px;
  }
</style>