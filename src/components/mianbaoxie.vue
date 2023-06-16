<template>
  <div>
    <!-- 面包屑头部 -->
    <el-breadcrumb separator="/" style="padding: 10px 0 0 10px">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: sss }">产品管理</el-breadcrumb-item>
      <el-breadcrumb-item>产品列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  methods: {
    sss() {
      this.$route.matched.map((item) => {
        return item.path;
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>