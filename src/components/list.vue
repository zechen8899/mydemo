<template>
  <div id="boxx">
    <div class="tit">封面推荐</div>
    <div class="list">
      <div class="listt" v-for="(item,index) in lists" :key="index" v-if="index < 3">
        <img :src="item.imgs"/>
        <div class="right">
          <div class="name">{{item.name}}</div>
          <div class="au">作者：{{item.au}}</div>
          <div class="conf">{{item.det}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default{
  name:"list",
  created(){
    
    Axios({
      url:"http://localhost:3001/lists",
      params:{

      },
    }).then((res)=>{
      // console.log(res.data)
      this.lists = res.data
    })
  },
  data(){
    return{
      lists:[
        {
          imgs: "./img/ia_100000000.jpg",
          id: "001",
          name: "三寸人间",
          au: "耳根",
          det:
            "举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。",
        },
        {
          imgs: "./img/ia_100000002.jpg",
          id: "001",
          name: "三寸人间",
          au: "耳根",
          det:
            "举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。",
        },
        {
          imgs: "./img/ia_100000003.jpg",
          id: "001",
          name: "三寸人间",
          au: "耳根",
          det:
            "举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。",
        },
      ]
    }
  }

}
// import Axios from "axios";
// export default {
//   name: "list",
//   created() {
//     Axios({
//       url: "http://localhost:3001/lists",
//       params: {
//         ishot: 1,
//       },
//     }).then((res) => {
//       console.log(res.data);
//       this.lists = res.data;
//     });
//   },
//   methods: {
//     xq(i) {
//       this.$router.push("/xq/" + i);
//       console.log();
//     },
//   },

//   data() {
//     return {
//       lists: [
//         {
//           imgs: "./img/ia_100000000.jpg",
//           id: "001",
//           name: "三寸人间",
//           au: "耳根",
//           det:
//             "举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。",
//         },
//         {
//           imgs: "./img/ia_100000002.jpg",
//           id: "002",
//           name: "三寸人间",
//           au: "耳根",
//           det:
//             "举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。",
//         },
//         {
//           imgs: "./img/ia_100000003.jpg",
//           id: "003",
//           name: "三寸人间",
//           au: "耳根",
//           det:
//             "举头三尺无神明，掌心三寸是人间。这是耳根继《仙逆》《求魔》《我欲封天》《一念永恒》后，创作的第五部长篇小说《三寸人间》。",
//         },
//       ],
//     };
//   },
// };
</script>

<style lang="stylus" scoped>
#boxx {
  width: 100%;
}

.tit {
  box-sizing: border-box;
  width: 100%;
  height: 0.34rem;
  font-size: 0.16rem;
  background: #ecf0f0;
  font-weight: 600;
  padding-left: 0.1rem;
  line-height: 0.34rem;
  border-bottom: 1px solid #007bb1;
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

.listt img {
  display: flex;
  width: 0.8rem;
  height: 100%;
}

.right {
  width: 75%;
  height: 100%;
  font-size: 0.12rem;
  margin-left: 0.12rem;
}

.name {
  font-size: 0.16rem;
  font-weight: 600;
}

.au {
  color: #999999;
}

.conf {
  font-size: 0.13rem;
  overflow: hidden;
}
</style>>

