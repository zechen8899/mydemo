<template>
  <div class="box2">
    <div class="list">
      <span class="type"></span>
      <span class="name"></span>
      <span class="au"></span>
    </div>
  </div>
</template>

<script>
export default {
    name:"complete",
   
    
}



</script>
<style lang='stylus' scoped>
.box2 {
  box-sizing: border-box;
  width: 100%;
  min-height: 6rem;
}

.list {
  font-size: 0.16rem;
  width: 100%;
  height: 0.2rem;
  line-height: 0.2rem;
  border-bottom: 1px solid #ecf0f0;
  padding: 0.1rem;
}

.name {
  font-size: 0.18rem;
  color: #007bb1;
  font-weight: 600;
}
</style>
