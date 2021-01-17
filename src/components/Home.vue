<template>
  <div>
      home
      <el-button type="info" @click="logout">注销</el-button>
  </div>
</template>

<script>
export default {
    methods:{
        logout(){
            sessionStorage.clear();
            this.$router.push("/login")
        }
    }
}
</script>

<style>

</style>