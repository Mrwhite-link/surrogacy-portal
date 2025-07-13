<!-- pages/payment.vue -->
<script setup lang="ts">
const { data: session } = await useFetch('/api/checkout')   // server 端生成 sessionId
if (session?.url) {
  // 直接跳转至 Stripe 托管收银台
  if (process.client) window.location.href = session.url
}
</script>

<template>
  <div class="container py-5 text-center">
    <h2>正在跳转到安全支付页面…</h2>
  </div>
</template>
