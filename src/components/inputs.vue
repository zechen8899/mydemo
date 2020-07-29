<template>
  <div id="boxs">
    <input class="left" type="text" placeholder="输入书名后搜索"  />
    <div class="search"></div>
  </div>
</template>

<script>


export default {
  name: "inputs",
 
  methods: {
    // search() {
      // Axios({
      //   url: "http://localhost:3001/lists",
      //   params: {
      //     name: this.bookname
      //   }
      // }).then(res=>{
      // this.$router.push("/search/" + this.bookname);
      // })
    //    this.$router.push("/search/" + this.bookname);

    }
  }

</script>

<style lang="stylus" scoped>
#boxs {
  margin: 0.1rem 0.06rem;
  width: 96%;
  height: 0.31rem;
  background: #ffffff;
  display: flex;
  border: 1px solid #cccccc;
  justify-content: space-between;
  align-items: center;
}

.left {
  width: 80%;
  height: 0.3rem;
  border: none;
}

.search {
  width: 10%;
  height: 0.32rem;
  background-image: url('../assets/img/ia_100000022.png');
  background-color: #0080c0;
  background-repeat: no-repeat;
}
</style>>

