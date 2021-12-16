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
      <Button @click="login" type="primary" :loading="btnLoading" class="login-btn">登录</Button>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { initRoutes } from '@/utils/route';

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        username: 'zhongpeng.wang',
        password: '123456'
      },
      rules: {
        username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
      },
      btnLoading: false
    }
  },
  methods: {
    /**
     * 登录
     */
    login() {
      this.$refs.form.validate(valid=> {
        if (!valid) { return }
        const params = {
          ...this.formData
        }

        this.btnLoading = true
        // 登录
        this.$store.dispatch('userModule/login', params).then(({ userInfo, menuData }) => {
          // 设置cookie
          Cookies.set('username', userInfo.username, { expires: 1 })
          return menuData
        }).then(menuData => {
          // 初始化菜单和动态路由
          initRoutes(menuData)

          this.$router.replace({
            path: '/'
          })
        }).finally(() => {
          this.btnLoading = false
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
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
