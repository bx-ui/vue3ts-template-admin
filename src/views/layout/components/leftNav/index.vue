<template>
  <div class="h-100">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="#000"
      active-text-color="#577cff"
    >
      <el-submenu
        :index="`${index} + 1`"
        v-for="(item, index) in hasChildRoute"
        :key="index"
      >
        <template v-slot:title>
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.name }}</span>
        </template>
        <el-menu-item
          :index="`${index}-${b}`"
          v-for="(a, b) in item.children"
          :key="b"
          @click="jumpRoute(a)"
        >
          <i class="el-icon-menu"></i>
          <template v-slot:title>{{ a.meta.name }}</template>
        </el-menu-item>
      </el-submenu>
      <el-menu-item
        index="id"
        v-for="(route, id) in noChildRoute"
        :key="id"
        @click="jumpRoute(route)"
      >
        <i :class="route.meta.icon"></i>
        <!-- <span slot="title">{{ route.meta.name }}</span> -->
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const filterRoute = ref([]);
    const hasChildRoute = computed(() =>
      filterRoute.value.filter((route: any) => route.children)
    );
    const noChildRoute = computed(() =>
      filterRoute.value.filter((route: any) => !route.children)
    );
    const getMeun = (routerArr: any) => {
      filterRoute.value = routerArr.find(
        (route: any) => route.name == "Layout"
      ).children;
      console.log(filterRoute.value);
    };
    const jumpRoute = (obj: any) => {
      if (obj.name === "DataChart") {
        const routerData = router.resolve({
          name: "OutDataChart"
        });
        window.open(routerData.href, "_blank");
        return false;
      }
      router.push({ name: obj.name });
    };

    getMeun(router.options.routes);
    return {
      hasChildRoute,
      noChildRoute,
      jumpRoute
    };
  }
});
</script>

<style scoped lang="scss">
.el-menu {
  box-sizing: border-box;
  //   height: calc(100% - $top-navHeight);
  // width: $left-menuWidth;
  height: 100%;
  border-radius: 10px !important;
  padding-top: 10px;
}
</style>
