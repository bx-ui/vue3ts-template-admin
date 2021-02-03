<template>
  <div class="h-100 p-2 box">
    <el-form label-width="80px">
      <el-row>
        <el-col :span="4">
          <el-form-item label="节点名称">
            <el-input
              size="small"
              v-model="name"
              placeholder="请输入节点名称"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label-width="20px">
            <el-button size="small" type="primary" @click="selected"
              >查询</el-button
            >
            <el-button size="small" type="primary" @click="add">新增</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData" class="w-100" height="calc(100% - 120px)">
    </el-table>
    <div class="mt-2 text-right">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <MaintainDialog v-model="addShow" @colse="closeMaintain" />
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import MaintainDialog from "@/views/bigPlatform/components/MaintainDialog.vue";
export default {
  components: { MaintainDialog },
  setup() {
    // 列表逻辑开始
    const listQuery = reactive({
      name: "",
      pageIndex: 1,
      pageSize: 10
    });
    const total = ref(0);
    const tableData = ref([]);
    const getList = () => {
      console.log(111);
    };
    const selected = () => {
      getList();
    };
    const handleSizeChange = val => {
      listQuery.pageSize = val;
      getList();
    };
    const handleCurrentChange = val => {
      listQuery.pageIndex = val;
      getList();
    };
    // 列表逻辑结束
    // 新增逻辑开始
    const addShow = ref(false);
    const add = () => {
      addShow.value = true;
    };
    const closeMaintain = () => {
      addShow.value = false;
    };
    // 新增逻辑结束
    return {
      ...toRefs(listQuery),
      tableData,
      handleSizeChange,
      handleCurrentChange,
      total,
      selected,
      add,
      addShow,
      closeMaintain
    };
  }
};
</script>

<style lang="scss" scoped></style>
