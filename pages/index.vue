<!-- pages/index.vue -->
<script setup lang="ts">
const { data: donors } = await useFetch('/api/donors', { params: { limit: 24 } })
</script>

<template>
  <section class="py-5 bg-light" id="donor-preview">
    <div class="container">
      <h2 class="mb-4 text-center">卵子捐献者（部分公开信息）</h2>

      <div class="row g-4">
        <DonorCardPreview
          v-for="d in donors"
          :key="d.id"
          :donor="d"
          class="col-xl-2 col-lg-3 col-md-4 col-sm-6"
        />
      </div>

      <div class="text-center mt-4">
        <NuxtLink to="/search" class="btn btn-primary px-4">查看更多 &raquo;</NuxtLink>
      </div>
    </div>
  </section>
</template>
