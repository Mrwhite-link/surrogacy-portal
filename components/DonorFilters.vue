<!-- components/DonorFilters.vue -->
<script setup lang="ts">
/**
 * v-model 用来双向绑定父组件的 filters 对象
 * 在父层 <DonorFilters v-model="filters" />
 */
const modelValue = defineModel<any>({ required: true })
</script>

<template>
  <div class="row g-3">
    <div class="col-md-2">
      <label class="form-label">年龄 ≥</label>
      <input v-model.number="modelValue.ageMin" type="number" class="form-control"/>
    </div>
    <div class="col-md-2">
      <label class="form-label">年龄 ≤</label>
      <input v-model.number="modelValue.ageMax" type="number" class="form-control"/>
    </div>
    <div class="col-md-2">
      <label class="form-label">身高 ≥</label>
      <input v-model.number="modelValue.heightMin" type="number" class="form-control"/>
    </div>
    <div class="col-md-2">
      <label class="form-label">身高 ≤</label>
      <input v-model.number="modelValue.heightMax" type="number" class="form-control"/>
    </div>
    <div class="col-md-4">
      <label class="form-label">学历</label>
      <input v-model="modelValue.education" class="form-control"/>
    </div>
  </div>
</template>
