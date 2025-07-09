<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import { useHead } from '#imports'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

useHead({
  link: [
    /* Bootstrap 5 核心样式 */
    { rel:'stylesheet',
      href:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },

    /* Medilab 主样式 */
    { rel:'stylesheet', href:'/css/style.css' },

    /* 插件样式（如用到） */
    { rel:'stylesheet', href:'/vendor/aos/aos.css' },
    { rel:'stylesheet', href:'/vendor/glightbox/css/glightbox.min.css' },
    { rel:'stylesheet', href:'/vendor/swiper/swiper-bundle.min.css' }
  ],
  script: [
    /* Bootstrap 5 JS（含 Popper） */
    { src:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' },

    /* 插件 JS */
    { src:'/vendor/aos/aos.js', defer:true },
    { src:'/vendor/glightbox/js/glightbox.min.js', defer:true },
    { src:'/vendor/purecounter/purecounter_vanilla.js', defer:true },
    { src:'/vendor/swiper/swiper-bundle.min.js', defer:true },

    /* Medilab 主脚本 */
    { src:'/js/main.js', defer:true }
  ]
})
</script>
