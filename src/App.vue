<template>
  <div class="table-box">
    <div class="title">
      <h2>简单的 CRUD Demo</h2>
    </div>
    <!-- qurey -->
    <div class="qurey-box">
      <el-input class="el-input" v-model="queryInput" placeholder="请输入姓名搜索" />
      <div class="btn-List">
        <el-button type="danger" @click="handleDelList" v-if="multipleSelection.length > 0">多选删除</el-button>
        <el-button type="primary" @click="handleAdd">增加</el-button>
      </div>
    </div>
    <!-- table -->
    <div class="table">
      <el-table 
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      border>
      <el-table-column type="selection" width="55" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="email" label="Email" width="200" />
      <el-table-column prop="phone" label="Phone" width="150" />
      <el-table-column prop="state" label="State" width="100" />
      <el-table-column prop="address" label="Address" width="200" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleRowDel(scope.row)" style="color: #F56C6c;">删除
            </el-button>
          <el-button link type="primary" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
     <!-- dialog -->
     <el-dialog v-model="dialogFormVisible" :title="dialogType === 'add' ? '新增' : '编辑'">
      <el-form :model="tableForm">
        <el-form-item label="Promotion name" :label-width="150">
          <el-input v-model="tableForm.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Promotion email" :label-width="150">
          <el-input v-model="tableForm.email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Promotion phone" :label-width="150">
          <el-input v-model="tableForm.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Promotion state" :label-width="150">
          <el-input v-model="tableForm.state" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Promotion address" :label-width="150">
          <el-input v-model="tableForm.address" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogConfirm">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>

  import { ref } from 'vue';

  let queryInput = $ref("")

  let tableData = $ref([
  {
    id:'1',
    name:'wanglong',
    email:'2297202784@qq.com',
    phone:'1231231234567',
    state:'yes',
    address:'hebei',
    tag: 'Home',
  },
  {
    id:'2',
    name:'wanglong',
    email:'2297202784@qq.com',
    phone:'1231231234567',
    state:'yes',
    address:'hebei',
    tag: 'Home',
  },
  {
    id:'3',
    name:'wanglong',
    email:'2297202784@qq.com',
    phone:'1231231234567',
    state:'yes',
    address:'hebei',
    tag: 'Home',
  },
  {
    id:'4',
    name:'wanglong',
    email:'2297202784@qq.com',
    phone:'1231231234567',
    state:'yes',
    address:'hebei',
    tag: 'Home',
  },
])

let multipleSelection = $ref([])

let dialogFormVisible = $ref(false)

let tableForm = $ref({
  name:'wanglong',
  email:'2297202784@qq.com',
  phone:'1231231234567',
  state:'yes',
  address:'hebei'
})

let dialogType = $ref('add')

const handleRowDel = ({id}) => {
  console.log(id);
  let index = tableData.findIndex(item=>item.id === id)
  tableData.splice(index,1)
}

const handleSelectionChange = (val) => {
  multipleSelection = []
  val.forEach(item => {
    multipleSelection.push(item.id)
  })
}

const handleDelList = () => {
  multipleSelection.forEach(id => {
    handleRowDel({id})
  })
  multipleSelection = []
}

const handleAdd = () => {
  dialogFormVisible = true;
  tableForm={};
}

const dialogConfirm = () => {
  dialogFormVisible = false;
  tableData.push({
    id:tableData.length + 1,
    ...tableForm
  })
}

</script>

<style scoped>
.table-box {
  margin: 200px auto;
  width: 800px;
}
.qurey-box{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.el-input{
  width: 200px;
}
.title{
  text-align: center;
}
</style>
