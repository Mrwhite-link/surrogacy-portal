<script setup>
import Topbar from '~/components/Topbar.vue'
</script>

<template>
  <header id="header" class="header sticky-top">
    <!-- 顶部蓝条 -->
    <Topbar />

    <div class="branding d-flex align-items-center">
      <div class="container position-relative d-flex align-items-center justify-content-between">

        <!-- Logo -->
        <NuxtLink to="/" class="logo d-flex align-items-center me-auto">
          <h1 class="sitename">Medilab</h1>
        </NuxtLink>

        <!-- 主导航 -->
        <nav id="navmenu" class="navmenu">
          <ul>
            <li><a href="#hero" class="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><NuxtLink to="/search">Search</NuxtLink></li>
            <li><NuxtLink to="/apply">Apply</NuxtLink></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <!-- 预约按钮 -->
        <NuxtLink to="/apply" class="cta-btn d-none d-sm-block">
          Make an Appointment
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
