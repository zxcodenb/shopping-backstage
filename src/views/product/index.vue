<template>
  <div>
    <el-table :data="productList" border style="width: 100%" >
      <el-table-column fixed prop="productId" label="id" width="50">
      </el-table-column>
      <el-table-column prop="productName" label="商品名称" width="120">
      </el-table-column>
      <el-table-column prop="soldNum" label="商品销量" width="50">
      </el-table-column>
      <el-table-column prop="productStatus" label="商品状态" width="50">
      </el-table-column>

      <el-table-column label="评论管理" width="120"></el-table-column>
      <el-table-column label="规格管理" width="120"></el-table-column>
      <el-table-column label="参数管理" width="120"></el-table-column>
      <el-table-column label="图片管理" width="120"></el-table-column>

      <el-table-column prop="createTime" label="商品创建时间" width="120">
      </el-table-column>
      <el-table-column prop="updateTime" label="商品更新时间" width="120">
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getList } from "@/api/product";

export default {
  data() {
    return {
      productList: [],
      pageNum:1,
      pageSize:5,
      total:100
    };
  },
  methods: {

    handleSizeChange(val) {


     
        this.getProdct(this.pageNum,val);
      },
      handleCurrentChange(val) {
     

        this.getProdct(val,this.pageSize);
      },
    



    getProdct: function (pageNum,pageSize) {
      let _this = this;
      
      console.log("fun",pageNum,pageSize);
      getList(pageNum, pageSize).then((res) => {

     


        console.log(res);
        _this.productList = res.data.records;
        _this.pageNum = res.data.current; 
        _this.pageSize = res.data.size;
        _this.total = res.data.total;
      });
    },
  },
  //页面加载就获取商品数据
  mounted: function () {
    this.getProdct(this.pageNum,this.pageSize);
  }
};
</script>

<style>
</style>