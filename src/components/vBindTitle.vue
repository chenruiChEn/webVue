<template>
    <div class="hello">
      <DataTable
        @select="selectCheckBox"
        @select-all="selectCheckBoxAll"
        :loading="tableList.loading"
        :columns="tableList.columns"
        :options="tableList.options"
        :pagination="tableList.pagination"
        :change = "changeTable"
        :changTableRadio = "changTableRadio"
        :list="tableList.list">
        <template slot="money-slot" >
          <!--<span>{{scope.row.chaMoney}}¥</span>-->
        </template>
        <el-table-column slot="append" width="100" label="操作">
          <template slot-scope="scope">
            <div>
              <i class="el-icon-edit" @click="editRow(scope.row)"></i>
              <i class="el-icon-delete"></i>
            </div>
          </template>
        </el-table-column>

      </DataTable>
    </div>


</template>

<script>
  import DataTable from "@/components/dataTable";

  export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your myVue',
              tableList:{
                loading:false,
                list:[
                  {
                    id:'1',
                    plaChargeMainNum: 1201,
                    chaStuName: '小李',
                    chaClaName: '一班',
                    createDate:'2012-12-22',
                    chaMoney: 22,
                    tag:'家'
                  },
                  {
                    id:'2',
                    plaChargeMainNum: 1201,
                    chaStuName: '小李',
                    chaClaName: '一班',
                    createDate:'2012-12-22',
                    chaMoney: 22,
                    tag:'公司'
                  }
                ],
                columns: [
                  {
                    prop: 'plaChargeMainNum',
                    label: '单号',
                    width: '200'
                  },
                  {
                    prop: 'tag',
                    label: '类型',
                    width: '120',
                    filters:[{ text: '家', value: '家' }, { text: '公司', value: '公司' }],
                    filterMethod: this.filterTag,
                    filterPlacement:"bottom-end"
                  },
                  {
                    prop: 'chaStuName',
                    label: '学生'
                  },
                  {
                    prop: 'chaClaName',
                    label: '班级'
                  },
                  {
                    prop: 'createDate',
                    label: '日期',
                    // formatter: (r, b) => this.mixin_table_formatDate(r, '-')
                  },
                  {
                    prop: 'chaMoney',
                    label: '金额',
                    slotName: 'money-slot'//此处需要注意，此字段是新增属性，后边做详细解释
                  }
                ],
                pagination: {
                  page:1,
                  pageSize: 10,
                  total: 20
                },
                options: {
                  border: true,
                  checkbox: true,
                  radio: false,
                  radioSelect: '1',
                  selectionWidth:'55'
                }
              }
            }
        },
      mounted: function () {  //挂载结束状态
        console.log(this);
        console.log(this.$route.name);
      },
      methods:{
        changeTable(page,pageSize){
          //page,pageSize改变事件
          console.log(page,pageSize);
        },
        changTableRadio(v){
          //table radio选中事件
          this.tableList.options.radioSelect = v;
        },
        selectCheckBox(selection, row){
          //table checkbox选中事件
          console.log(selection, row);
        },
        selectCheckBoxAll(selection, row){
          //table checkbox全选中事件
          console.log(selection, row);
        },
        editRow(row){
          //编辑table row
          alert(row.id)
        },
        filterTag(){

        }
      },
    components:{ DataTable },

  }
</script>

<style lang="less" >
  @import "../style/commen";
  .hello{
    position: relative;
    height: auto;
    span{
      width: 300px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      height: 20rem;
      line-height:20rem;
      color: @icoachuColor;
    }
  }
</style>
