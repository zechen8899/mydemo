<template>
<div>
    <div id="boxxx">
    <div id="typebox" v-for="(item,index) in lists" :key="index" @click="btn(index,item)" :class="{'active':item==isActive}">{{item}}</div>
  </div>
 <div class="box">
    <div class="list">
      <span class="type"></span>
      <span class="name"></span>
      <span class="au"></span>
    </div>
  </div>
</div>
</template>

<script>
import Axios from "axios"
export default {
    name:"ranking",
    data(){
      return{
        isActive : "",
        lists:[
          "日点击榜",
          "周点击榜",
          "月点击榜",
          "总点击榜",
          "总收藏榜",
          "字数排行",
          "日推荐榜",
          "周推荐榜",
          "月推荐榜",
          "总推荐榜",
          "最新入库",
          "最新更新",
        ]
      }
    },
    created(){
      Axios({
        url:"http://localhost:3001/lists"
      })
    },
    methods:{
      btn(index,item){
      this.isActive =item;
      // console.log(item);
      this.$emit("zz",item)

     }
    }
}
</script>

<style lang="stylus" scoped>
#boxxx {
    display flex
  width: 100%;
  font-size: 0.12rem;
  flex-wrap wrap
  justify-content space-around
}


#typebox{
    width 30%
    height .32rem
    text-align center
    line-height .32rem
    border 1px solid #cccccc
    margin-bottom  .08rem
}
.xz{
    background #cccccc
}

.tit {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 0.34rem;
  font-size: 0.16rem;
  background: #ecf0f0;
  font-weight: 600;
  padding-left: 0.1rem;
  line-height: 0.34rem;
  border-bottom: 1px solid #007bb1;
  justify-content: space-between;
}

.list {
  box-sizing: border-box;
  width: 100%;
  height: 4.2rem;
  padding: 0.1rem 0.1rem 0.2rem 0.1rem;
}

.listt {
  box-sizing: border-box;
  width: 100%;
  height: 1rem;
  margin-bottom: 0.2rem;
  display: flex;
}

.right {
  width: 75%;
  height: 100%;
  font-size: 0.12rem;
  margin-left: 0.12rem;
}

.listts {
  width: 100%;
  height: 0.4rem;
  border-bottom: 1px solid #ececec;
  font-size: 0.14rem;
  line-height: 0.4rem;
}


.box {
  box-sizing: border-box;
  width: 100%;
  min-height: 6rem;

}

.list {
  font-size: 0.16rem;
  width: 100%;
  height: 0.2rem;
  line-height: 0.2rem;
  border-bottom 1px solid #ecf0f0
  padding .1rem
}

.name {
  font-size: 0.18rem;
  color: #007bb1;
  font-weight: 600;
}
.active{
  background-color:#cccccc
}

</style>>

