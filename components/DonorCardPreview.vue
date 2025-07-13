<template>
  <div class="card h-100">
    <img v-if="donor.images && donor.images[0]" :src="donor.images[0]" class="card-img-top" />
    <div class="card-body">
      <h6 class="card-title mb-2">ID: {{ donor.id }}</h6>
      <p class="mb-1">年龄: {{ donor.age }}</p>
      <p class="mb-1">身高: {{ donor.height }} cm</p>
      <p class="mb-0">学历: {{ donor.education }}</p>
    </div>
    <div class="card-footer bg-transparent border-0 text-center">
      <NuxtLink :to="`/donor/${donor.id}`" class="btn btn-sm btn-primary">查看详情</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ donor: any }>()
</script>

<style scoped>
.card {
  min-height: 100%;
}
</style>
