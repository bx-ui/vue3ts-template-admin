<template>
  <div class="h-100" style="background: rgba(0,0,0,0.1)">
    <el-container>
      <el-header><header-nav /></el-header>
      <el-container>
        <el-aside width="220px"><left-nav /></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderNav from "./components/headerNav/index.vue";
import LeftNav from "./components/leftNav/index.vue";
export default defineComponent({
  components: { HeaderNav, LeftNav },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header {
  padding: 0;
  height: 80px !important;
}
.el-main {
  padding: 0px !important;
  background: #f3f7fa;
}
.el-aside {
  padding: 13px !important;
  border-radius: 10px !important;
  background: #f3f7fa;
}
</style>
