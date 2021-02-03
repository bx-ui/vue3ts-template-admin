<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in matched" :key="index">
      <span @click.prevent="handleLink(item)" class="redirect-class">{{
        item.meta.name
      }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  created() {
    this.getBreadcurmb();
  },
  watch: {
    $route() {
      this.getBreadcurmb();
    }
  },
  data() {
    return {
      matched: []
    };
  },
  methods: {
    getBreadcurmb() {
      // console.log(this.$route);
      if (this.$route.meta.name != "首页") {
        const home = [
          { meta: { name: "首页" }, redirect: "/indexPage", name: "layout" }
        ];
        this.matched = home.concat(this.$route.matched.splice(1));
        console.log(this.matched);
      } else {
        this.matched = this.$route.matched.splice(1);
      }
    },
    handleLink({ redirect, path, name }) {
      console.log(redirect, path);
      if (redirect) {
        this.$router.push({ name });
        return;
      }
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.redirect-class {
  color: #fff;
  cursor: pointer;
}
.redirect-class:hover {
  color: red;
}
</style>
