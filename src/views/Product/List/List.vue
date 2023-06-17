<template>
  <div>

    <div class="form">
      <!-- 顶部 -->
      
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="产品名称">
          <el-input
            v-model="formInline.name"
            placeholder="产品名称"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="添加时间">
          <el-date-picker
            size="small"
            v-model="value1"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="small"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
      <div class="form-btn">
        <el-button type="warning" size="small" icon="el-icon-plus" @click="redact"
          >添加商品</el-button
        >
        <el-button type="danger" icon="el-icon-delete" size="small"
          >批量删除</el-button
        >
      </div>
  
      <!-- 表格 -->
  
      <!-- 3. 表格 -->
      <!-- 
              el-table：表格
                  data	显示的数据	array
                  stripe	是否为斑马纹 table	boolean	—	false
                  border	是否带有纵向边框	boolean	—	false
                  size	Table 的尺寸	string	medium / small / mini
  
              el-table-column：列
                  prop	对应列内容的字段名，也可以使用 property 属性	string
                  label	显示的标题	string
                  实现多选非常简单: 手动添加一个el-table-column，设type属性为selection即可
                  show-overflow-tooltip	当内容过长被隐藏时显示 tooltip	Boolean	—	false
  
           -->
      <div class="table">
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          cell-class-name="cell"
          :cell-style="cellstyle"
          :header-cell-style="headerrowstyle"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="id" label="商品编号" width="100"  >
          </el-table-column>
          <el-table-column prop="title" label="商品名称" show-overflow-tooltip width="150">
          </el-table-column>
          <el-table-column
            prop="price"
            label="商品价格"
            show-overflow-tooltip
            width="100"
          >
          </el-table-column>
          <el-table-column prop="category" label="商品类目" show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="create_time"
            label="添加时间"
            show-overflow-tooltip
          >
            <template slot-scope="scope">
              {{ moment(scope.row.create_time).format("YYYY-MM-DD kk:mm:SS") }}
            </template>
          </el-table-column>
          <el-table-column
            prop="sellPoint"
            label="商品卖点"
            show-overflow-tooltip
          >
          </el-table-column>
          <el-table-column prop="descs" label="商品描述" show-overflow-tooltip>
            <template slot-scope="scope">
              <span v-html="scope.row.descs"></span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <!-- scope.row：获取这一行的数据 -->
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                icon="el-icon-plus"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <Fenye
          :total="total"
          :pageSize="pageSize"
          @chengePage="chengePage"
        ></Fenye>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Fenye from "@/components/fenye.vue";
export default {
  components: {
    Fenye,
  },
  data() {
    return {
      total: 1,
      pageSize: 1,
      value1: "",
      formInline: {
        name: "",
        region: "",
      },
      tableData: [],
      yema:1
    };
  },
  created() {
    this.getprojectList(1);

    console.log(this.$route);
  },
  methods: {
    //修改表头字体颜色
    headerrowstyle({row, rowIndex}) {
      // console.log(row, rowIndex);
      if (row.index!==0) {
        return {color:'#000'}
      }
    },
    //修改商品名称字体颜色
    cellstyle({row, column, rowIndex, columnIndex}) {
      // console.log(row, column, rowIndex, columnIndex);
      if (columnIndex === 2){ return {color:'blue'}}
      else {return ''}
    },
    moment,
    // 获取查询表格数据
    async getSearch(search) {
      let res = await this.$api.getSearch({ search });
      // console.log(res.data.status,search);

      if (res.data.status === 200) {
        this.tableData = res.data.result;
        this.total = res.data.result.length;
      } else {
        this.tableData = [];
        this.total = 0;
      }
    },
    //点击查询触发事件，执行getSearch方法
    onSubmit() {
      if (this.formInline.name) {
        this.getSearch(this.formInline.name);
      } else {
        this.getprojectList(1)
        this.$message({
          message: '请输入信息再去查询哦~',
          type: 'warning'
        });
      }
      // console.log();
    },

    handleEdit(a, b) {
      console.log(a, b);
    },
    //删除按钮 删除整行内容
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.getDelete(row.id)
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
        
    },
    //获取删除的数据
    async getDelete(id) {
      let res = await this.$api.getDelete({ id });
      console.log(res.data);
      if (res.data.status ===200) {
        this.$message({
            type: "success",
            message: "删除成功!",
        });
        this.getprojectList(this.yema)
        
      }
    },
    //获取表格数据
    async getprojectList(page) {
      let res = await this.$api.getProjectList({ page });
      // console.log(res);
      this.tableData = res.data.data;
      

      //获取分页器数据
      this.total = res.data.total;
      this.pageSize = res.data.pageSize;
    },
    //点击分页器 重新渲染表格
    chengePage(val) {
      this.getprojectList(val);
      // console.log(val, "val");
      this.yema = val;
    },
    //点击编辑跳转
    redact() {
      this.$router.push('/product/redact')
    }
  },
};
</script>

<style lang="less" scoped>
.form {
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  height: 103px;
  // width: 100%;
  .el-form--inline {
    height: 50px;
  }
  .form-btn {
    // width: 100%;
    height: 40px;
    border: 1px solid #ececec;
    padding: 10px 10px 0 10px;
    // margin-bottom: 10px;
  }
  .table {
    width: 100%;
    margin-top: 20px;
    //  text-align: center;
    //  padding: 10px;
    height: 600px;
    /deep/ .cell {
      text-align: center;
      padding-left: 0;
      padding-right: 0;
    }
  }
}
/deep/.el-popper {
  top: 110px !important;
}
/deep/.el-picker-panel {
  top: 110px !important;
}
// el-date-picker el-popper
</style>