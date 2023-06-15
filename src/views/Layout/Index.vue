<template>
  <div>
    <!-- 左侧菜单 -->
    <div class="menu">
       <menuss :is-collapse="isCollapse"></menuss>
    </div>
<!-- <router-view></router-view> -->
    <!-- 右侧 -->
    <div :class="{Content:true,Content1:isCollapse}">
        <Content :isCollapse="isCollapse" @chengeCollapse="chengeCollapse"></Content>
    </div>
  </div>
</template>

<script>
import Menuss from "./Menu/Index.vue";
import Content from "./Content/Index.vue";

export default {
    data() {
        return {
        isCollapse:false
       } 
    },
    components: {
        Content,
        Menuss
    },
      methods: {
          chengeCollapse() {
            this.isCollapse = !this.isCollapse
        }
    }
}
</script>

<style lang="less" scoped>
.Content{
  transition: ease .4s;
}
.Content1{
 margin-left: -136px;
 height: 100%;

}
</style>