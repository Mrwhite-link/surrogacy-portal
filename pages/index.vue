<template>
  <main class="main">

    <!-- Hero section -->
    <section id="hero" class="hero section">
      <img src="/img/hero-bg.jpg" class="bg-img" alt="" data-aos="fade-in" />

      <div class="container position-relative">
        <!-- Welcome text -->
        <div class="welcome position-relative z-3" data-aos="fade-down" data-aos-delay="100">
          <h2>Welcome to Medilab</h2>
          <p>We are a team of talented designers making websites with Bootstrap</p>
        </div>

        <!-- Why & icon boxes -->
        <div class="row gy-4" data-aos="zoom-out" data-aos-delay="200">
          <!-- Why choose -->
          <div class="col-lg-4">
            <div class="why-box">
              <h3>Why Choose Medilab?</h3>
              <p>Ut aut reiciendis voluptatem maiores alias consectetur.</p>
              <div class="text-center">
                <a href="#about" class="more-btn">
                  Learn More <i class="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Icon boxes -->
          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="row gy-4 icon-boxes w-100">
              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box">
                  <i class="bi bi-card-checklist"></i>
                  <h4>Corporis voluptates sit</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur</p>
                </div>
              </div>

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div class="icon-box">
                  <i class="bi bi-gem"></i>
                  <h4>Labore consequatur</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis...</p>
                </div>
              </div>

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="500">
                <div class="icon-box">
                  <i class="bi bi-inboxes"></i>
                  <h4>Ullamco laboris nisi</h4>
                  <p>Quis consequat saepe culpa velit eveniet</p>
                </div>
              </div>
            </div>
          </div><!-- /col-lg-8 -->
        </div><!-- /row gy-4 -->

      </div><!-- /container -->
    </section>

    <!-- 其余 About / Services / Contact 区块可照旧保留 -->
  </main>
</template>

<script setup>
// 纯展示页，无需脚本
</script>
