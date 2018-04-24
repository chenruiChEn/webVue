<template>
  <ul>
    <li v-for="item in list" >
      <router-link v-bind:to="item.routeName">{{item.name}}</router-link>
    </li>
  </ul>
</template>

<script>
    export default {    //v-bind:title  语法  给标签绑定title属性
        name: 'index',
        data() {
            return {
                list:[
                  {
                    name:'title',
                    routeName:'/vBindTitle'
                  }
                ]
            }
        }
    }
</script>

<style lang="less" >
  .hello{
    h1{
      color: yellow;
    }
  }

</style>
