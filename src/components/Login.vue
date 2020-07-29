<template>
  <div class="box">
    <div class="box1">
      账号:
      <input type="text" class="text1" v-model="name"/>
    </div>
    <div class="box1">
      密码:
      <input type="password" class="text1" v-model="pwd"/>
    </div>
    <div class="box2">
      <input type="button" value="登录" @click="loginbtn"/>
      <br />
      <input type="button" value="没有账号？点击注册" @click="jumps"/>
    </div>
  </div>
</template>

<script>
// import MyHeaderVue from './MyHeader.vue';
export default {
    name:'Login',
    data(){
      return{
              name:"",
              pwd:""
      }
    },
    methods:{
      loginbtn(){
       if(this.name=="王泽晨" && this.pwd=="123456"){
         localStorage.setItem("name",this.name);
          // this.$router.push();
         
       }
      },
      jumps(){
       this.$router.push('/MyRegister')
      }
    }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 1.3rem;
  font-size: 0.2rem;
}
.box1 {
  width: 100%;
  height: 0.66rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.17rem;
  color: #999999;
}
.text1 {
  width: 2.66rem;
  height: 0.3rem;
  border: 2px solid #b7f3f9;
  border-radius: 0.05rem;
  margin-left: 0.2rem;
}
.box2{
  width: 100%;
  height: 1.2rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
}

.box2>input{
  width: 3.5rem;
  height: .4rem;
  background-color: #0080c0;
  color: #ffffff;
  font-size: 0.17rem;
  outline: none;
  border: none;


}
</style>>

