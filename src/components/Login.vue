<template>
  <div class="login_container">
      <div class="login_box">
          <!-- 头像区域 -->
          <div class="avatar_box">
              <img src="../assets/logo.png" >
          </div>
          <!-- 表单区域                绑定验证规则       绑定数据                  重置 相当于获取dom-->
          <el-form class="login_form" :rules="loginFromRules" :model="loginForm" ref="loginFromRef">
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" placeholder="请输入账号"  prefix-icon="iconfont icon-touxiang-"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"  prefix-icon="iconfont icon-112"></el-input>
            </el-form-item>
            <div class="btns">
                <el-button type="info" @click="resetLoginFrom">重置</el-button>
                <el-button type="primary" @click="login">登录</el-button>
            </div>
          </el-form> 
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            loginForm:{
                username:"admin",
                password:"123456"
            },
            loginFromRules:{
                username:[
                    { required: true, message: '请输入正确的账号', trigger: 'blur' },
                    { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '密码错误', trigger: 'blur' },
                    { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
                ]
            },

        }
    },
    methods:{
        // 重置登录表单
        resetLoginFrom(){
            console.log(this);
            // 这个函数来充值函数
            this.$refs.loginFromRef.resetFields();
            this.username = "";
            this.password = "";
        },
        login(){
            //这个函数来进行对表单验证的结果 valid就是验证结果
            this.$refs.loginFromRef.validate(async valid=>{
                if(!valid){
                    return;
                }
                let {data:res} = await this.$axios.post("/login",this.loginForm);
                if(res.meta.status !== 200){
                    this.$message.error('密码错误');
                }else{
                    this.$message({
                        message: '登陆成功',
                        type: 'success'
                    });
                    sessionStorage.setItem("token",res.data.token);
                    this.$router.push("/home")
                }
            })
        }
    }
};
</script>

<style>
.login_container {
  background: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.avatar_box > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #e8e8e8;
}
.btns{
    display: flex;
    justify-content: space-between;
}
.btns>button{
    margin: 0 15px;    
}
.login_form{
    position: absolute;
    bottom: 30px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
}
</style>