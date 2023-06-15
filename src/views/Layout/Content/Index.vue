<template>
  <div class="nav">
    <header class="header">
      <i class="el-icon-s-fold" @click="chenge" v-if="!isCollapse"></i>
      <i class="el-icon-s-unfold" @click="chenge" v-else></i>
    </header>

    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  props: ['isCollapse'],
  data() {
    return {
      
    }
  },
  methods: {
    chenge() {
      this.$emit('chengeCollapse')
    }
  }
}
</script>

<style lang="less" scoped>
body{

}
.nav{
  margin-left: 200px;
}
.header{
  width: 100%;
  height: 56px;
  background-color: #112f80;
  // margin-left: 200px;
  i{
    font-size: 28px;
    color: #fff;
    line-height: 56px;
  }
}
</style>