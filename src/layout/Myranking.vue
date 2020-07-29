<template>
    <div>
        <MyHeader :type="this.msg"></MyHeader>
        <navv/>
        <inputs/>
        <ranking @zz="fun">
        </ranking>
    </div>
</template>

<script>
import MyHeader from "../components/MyHeader"
import inputs from "../components/inputs"
import navv from "../components/navv"
import ranking from "../components/ranking"


export default {
    name:"Myranking",
    components:{
    MyHeader,inputs,navv,ranking
    },
    data(){
        return{
            msg:""
        }
    },
    methods:{
        fun(i){
            this.msg = i
            // console.log(this.msg)
        }
    }
}
</script>

<style>

</style>