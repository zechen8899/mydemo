<template>
  <div>
      <!-- 头部 -->
     <listheader>
    <div class="left">书趣阁</div>
    <div class=right>
      <div class="lo" @click="JumpMyRegister">注册</div>
      <div class="lo" @click="JumpMyLogin">登录</div>
    </div></listheader>
      <navv/>
      <inputs/>
      <list/>
      <listmore v-for="(item,index) in listt" :key="index" :types="item"></listmore>
  </div>
</template>

<script>
import listheader from "../components/listheader"
import navv from "../components/navv"
import inputs from "../components/inputs"
import list from "../components/list"
import listmore from "../components/listmore"
export default {
    data(){
      return{
        listt:[
          "玄幻魔法",
          "武侠修真",
          "都市言情",
          "历史军事",
          "侦探推理",
          "网游动漫",
          "科幻灵异",
          "其他类型",
        ]
      }
    },

    components:{
        listheader,navv,inputs,list,listmore
    },
    methods:{
      JumpMyRegister(){
        this.$router.push({path:"/MyRegister"})
      },
      JumpMyLogin(){
        this.$router.push({path:"/MyLogin"})
      }
    }
}
</script>

<style>

</style>