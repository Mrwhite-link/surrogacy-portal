<!-- pages/login.vue -->
<script setup lang="ts">
import { signIn } from '#auth'

const creds = reactive({ email: '', password: '' })
const error = ref('')

async function doLogin () {
  error.value = ''
  const res = await signIn('credentials', { ...creds, redirect: false })
  if (res?.ok) navigateTo('/')
  else error.value = '邮箱或密码错误'
}
</script>

<template>
  <div class="container py-5" style="max-width:420px">
    <h2 class="mb-4 text-center">登录</h2>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <form @submit.prevent="doLogin">
      <div class="mb-3">
        <label class="form-label">邮箱</label>
        <input v-model="creds.email" type="email" required class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <input v-model="creds.password" type="password" required class="form-control" />
      </div>
      <button class="btn btn-primary w-100">登录</button>
    </form>
  </div>
</template>
