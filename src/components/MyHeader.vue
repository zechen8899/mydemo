<template>
  
      <div class="box">
        
          <input class="btn" type="button" value="返回" @click="$router.back(-1)">
          <p >{{type}}</p>
          <input class="btn" type="button" value="首页" @click="jumpindex">
          
      </div>

</template>

<script>
export default {
    props:["type"],
    name:"MyHeader",
    methods:{
        jumpindex(){
            this.$router.push({path:"/index"})
        }
    },
        
}
    
</script>

<style scoped>
   
    .box{
        width: 100%;
        height: .5rem;
        background-color: #007bb1;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .btn{
        width: .5rem;
        height: .26rem;
        background-color: #65bbec;
        color: #ffffff;
        border: none;
        border-radius: .05rem;
        margin: 0 .1rem;
        outline: none;
       
    }
    .box>p{
        font-size:.18rem ;
        color: #ffffff;
    }


</style>>

