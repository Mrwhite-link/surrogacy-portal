<!-- pages/search.vue -->
<script setup lang="ts">
import DonorFilters from '~/components/DonorFilters.vue'

const filters = reactive({
  ageMin: 18,
  ageMax: 35,
  education: '',
  heightMin: 150,
  heightMax: 185
})

const { data: donors, refresh } = await useFetch('/api/donors', {
  params: filters,
  watch: false
})

watch(filters, () => refresh())
</script>

<template>
  <section class="container py-5">
    <h2 class="mb-4 text-center">搜索 / 筛选卵子捐献者</h2>

    <DonorFilters v-model="filters" />

    <hr class="my-4" />

    <div v-if="!donors?.length" class="alert alert-warning">未找到符合条件的捐献者</div>

    <div class="row g-4">
      <DonorCardPreview
        v-for="d in donors"
        :key="d.id"
        :donor="d"
        class="col-xl-2 col-lg-3 col-md-4 col-sm-6"
      />
    </div>
  </section>
</template>
