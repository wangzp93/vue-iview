<template>
  <div class="wrap">
    <div class="content">
      <Form ref="form" :model="formData" :rules="rules">
        <FormItem prop="username">
          <Input type="text" v-model="formData.username" placeholder="请输入用户名">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formData.password" placeholder="请输入密码">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </Form>
      <Button @click="login" type="primary" class="login-btn">登录</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        formData: {
          username: '',
          password: ''
        },
        rules: {
          username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
          password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
        }
      }
    },
    methods: {
      login() {
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>

<style lang="less">
  .wrap {
    height: 100%;
    background: #001529;
    display: flex;
    align-items: center;

    .content {
      margin: 0 auto;
      width: 300px;
    }

    .login-btn {
      width: 100%;
    }
  }
</style>
