<!-- layouts/default.vue -->
<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</template>
