<template>
<div>
  <MyHeader :type="this.msg"></MyHeader>
  <navv/>
  <inputs/>
  <category @cc="fun"></category>

</div>
</template>

<script>
import MyHeader from "../components/MyHeader"
import inputs from "../components/inputs"
import navv from "../components/navv"
import category from "../components/category"

export default {
 
    components:{
        MyHeader,inputs,navv,category
    },
    data(){
      return {
        msg:"",
      }

    },
    methods:{
      fun(i){
          this.msg = i
          //  console.log(this.msg)
      }
    }


}
</script>

<style>

</style>