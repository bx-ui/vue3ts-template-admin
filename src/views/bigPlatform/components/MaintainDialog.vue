<template>
  <el-dialog title="提示" v-model="prop" width="30%">
    <span>这是一段信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    prop: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const dialogVisible = ref(true);
    const close = () => {
      console.log(context);
      context.emit("colse");
    };
    return {
      dialogVisible,
      close
    };
  }
});
</script>

<style scoped></style>
