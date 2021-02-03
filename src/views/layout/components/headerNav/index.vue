<template>
  <div class="header-nav">
    <div class="font-cc text-white d-flex a-center">智慧城市底层操作系统</div>
    <div class="font-mini text-white d-flex a-center" style="cursor: pointer;">
      退出登录
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped lang="scss">
.header-nav {
  box-sizing: border-box;
  width: 100%;
  background: $top-background;
  height: $top-navHeight;
  padding: 0px 50px;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
</style>
