<template>
  <div id="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "listheader",
  methods:{
  }
};
</script>

<style scoped lang="stylus" >
#box {
  display flex
  width: 100%;
  height: 0.5rem;
  background: #007bb1;
  align-items center
  justify-content space-between

}

.left{
  font-size .2rem
  color #ffffff
  margin-left .15rem
}
.right{
  display flex
  width 25%
  height .5rem
  font-size .16rem
  align-items center
  justify-content space-between
  margin-right .2rem
  
}

.lo{
  width .4rem
  height .3rem
  line-height .3rem
  text-align center
  background #65bbec
  color #ffffff
  border-radius .03rem
}
</style>>

