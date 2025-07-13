<!-- pages/donor/[id].vue -->
<script setup lang="ts">
definePageMeta({ middleware: 'auth' })

const route = useRoute()
const { data: donor } = await useFetch(`/api/donor/${route.params.id}`)
</script>

<template>
  <div class="container py-5" v-if="donor">
    <h2 class="mb-4">捐献者详细信息</h2>

    <table class="table table-bordered">
      <tbody>
        <tr><th>ID</th><td>{{ donor.id }}</td></tr>
        <tr><th>年龄</th><td>{{ donor.age }}</td></tr>
        <tr><th>身高</th><td>{{ donor.height }} cm</td></tr>
        <tr><th>学历</th><td>{{ donor.education }}</td></tr>
        <tr><th>血型</th><td>{{ donor.bloodType }}</td></tr>
        <tr><th>民族</th><td>{{ donor.ethnicity }}</td></tr>
        <tr><th>病史</th><td>{{ donor.medicalHist }}</td></tr>
      </tbody>
    </table>

    <div v-if="donor.images?.length" class="row g-3">
      <div v-for="(img, i) in donor.images" :key="i" class="col-6 col-md-4">
        <img :src="img" class="img-fluid rounded" />
      </div>
    </div>
  </div>
</template>
