<template>
  <div class="left-title">
    <div class="main">
      <img
        src="@/assets/logo.png"
        alt=""
        style="width: 30px; height: 30px; margin-right: 6px"
      />
      <span>vue通用框架</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.left-title {
  box-sizing: border-box;
  width: 220px;
  height: $top-navHeight;
  background: $top-background;
  padding: 10px 0px;
  .main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #ffffff;
  }
}
</style>
