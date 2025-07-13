<!-- pages/apply.vue -->
<script setup lang="ts">
definePageMeta({ layout: 'blank' })

const route = useRoute()
const type = route.query.type === 'surrogate' ? 'SURROGATE' : 'DONOR'

const form = reactive({
  fullName: '',
  age: '',
  height: '',
  education: '',
  contact: '',
  // …其余字段
})

const submitting = ref(false)
const submitted = ref(false)

async function submit () {
  submitting.value = true
  await $fetch('/api/applications', { method: 'POST', body: { type, ...form } })
  submitting.value = false
  submitted.value = true
}
</script>

<template>
  <div class="container py-5" style="max-width:720px">
    <h2 class="mb-4 text-center">
      {{ type === 'DONOR' ? '卵子捐献者申请表' : '孕妈申请表' }}
    </h2>

    <form v-if="!submitted" @submit.prevent="submit" class="needs-validation" novalidate>
      <!-- 这里只给出几个字段示例，其余自己补 -->
      <div class="mb-3">
        <label class="form-label">姓名</label>
        <input v-model="form.fullName" required class="form-control" />
      </div>

      <div class="row">
        <div class="col mb-3">
          <label class="form-label">年龄</label>
          <input v-model.number="form.age" type="number" min="18" class="form-control" required />
        </div>
        <div class="col mb-3">
          <label class="form-label">身高 (cm)</label>
          <input v-model.number="form.height" type="number" class="form-control" required />
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label">学历</label>
        <input v-model="form.education" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">联系方式（邮箱 / 电话）</label>
        <input v-model="form.contact" class="form-control" required />
      </div>

      <button :disabled="submitting" class="btn btn-primary w-100">
        {{ submitting ? '提交中…' : '提交' }}
      </button>
    </form>

    <div v-else class="alert alert-success text-center">
      提交成功！<br />我们将在 3 个工作日内与您联系。
    </div>
  </div>
</template>
