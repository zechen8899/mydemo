<template>
  <div class="box">
    <div class="box1">
      账号:
      <input type="text" class="text1" :name="username" />
    </div>
    <div class="box1">
      密码:
      <input type="password" class="text1" :name="userpwd" />
    </div>
    <div class="box1">
      邮箱:
      <input type="password" class="text1" />
    </div>
    <div class="box1">
      验证码:
      <input type="password" class="text1" />
      <br />
      <p></p>
    </div>
    <div class="box2">
      <input type="button" value="确认注册" @click="btn" />
      <br />
      <input type="button" value="已有账号，点击登录" />
    </div>
  </div>
</template>

<script>
// import MyHeaderVue from './MyHeader.vue';
import Axios from "axios";
export default {
  data(){
    return {
      username:"",
      userpwd:"",
    }
  },
  name: "Register",
  methods: {
    btn() {
      let params = new URLSearchParams(); //创建一个url传输的实例
      params.append("username", this.username); //添加一个key/value
      params.append("userpwd", this.userpwd); //添加一个key/value
      Axios({
        url: "reg.php",
        method: "POST", //提交姿势
        data: params, //URLSearchParams类型
      }).then((res) => {
        if(res.data == 1){
          alert("注册成功")
          this.$router.push({path:"/"});
        }else{
          alert("注册失败")
        }
      });
    },
  },
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
.box2 {
  width: 100%;
  height: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box2 > input {
  width: 3.5rem;
  height: 0.4rem;
  background-color: #0080c0;
  color: #ffffff;
  font-size: 0.17rem;
  outline: none;
  border: none;
}
</style>>

