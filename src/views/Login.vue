<template>
  <div class="h-100 pt-5 box bg-light">
    <div class="text-center font-cc font-weight">登录系统</div>
    <el-form class="d-flex flex-column j-center a-center mt-5">
      <el-form-item>
        <el-input v-model="username" style="width: 500px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="password" style="width: 500px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          style="width: 500px"
          :loading="loading"
          @click="submit"
          >登 录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { RootState } from "@/store";
import { useRouter } from "vue-router";
export default {
  setup() {
    // 前期准备操作
    const store = useStore<RootState>();
    const router = useRouter();
    const { ctx } = getCurrentInstance();
    // 登录逻辑
    const username = ref("bingxin");
    const password = ref("123456");
    const loading = ref(false);

    const submit = async () => {
      loading.value = true;
      await store.dispatch("loginIn", {
        username: username.value,
        password: password.value
      });
      loading.value = false;
      ctx.$message.success("登录成功");
      router.push({ name: "Home" });
    };
    return {
      username,
      password,
      loading,
      submit
    };
  }
};
</script>

<style lang="scss" scoped></style>
