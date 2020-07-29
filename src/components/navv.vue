<template>
  <div id="boxs">
    <!-- 根据名称加载路由 -->
    <!-- 点击对应按钮进入对应路由 -->
    <div class="fl" v-for="(items,index) in fl" :key="index" @click="fn(items.src)">{{items.name}}</div>
    
  </div>
</template>

<script>
export default {
  name:'navv',
  data(){
    return{
      fl:[{name:"首页",src:"/index"},
          {name:"分类",src:"/Mycategory"},
          {name:"全本",src:"/Mycomplete"},
          {name:"排行",src:"/Myranking"},
          {name:"书架",src:""}
      ]
    }
  },
  methods:{
    fn(i){
        console.log(i)
        this.$router.push(i)
    }
  }
      
}
</script>

<style lang="stylus" scoped>
#boxs {
  width: 100%;
  height: 0.34rem;
  display: flex;
  align-items: center;
}

.fl {
  width: 25%;
  height: 0.34rem;
  background: #ecf0f0;
  color: #000000;
  font-size: 0.14rem;
  font-weight: 600;
  line-height: 0.34rem;
  text-align: center;
}
</style>>