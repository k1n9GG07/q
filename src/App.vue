<template>
  <div id="app">
    <header>
      <div class="container">
        <nav>
          <ul class="nav-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/works">Works</router-link></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <div class="container">
        <div class="social-links">
          <a href="https://github.com/k1n9GG07/q" target="_blank" title="GitHub Repository"><i class="fa-brands fa-github"></i></a>
          <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <p class="copyright">Copyright ©2020 All rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
/* App specific styles if any */
header {
  padding-top: 27px;
}
.nav-links {
  justify-content: flex-end;
}
/* Ensure the active link logic works correctly */
.router-link-active {
  color: #FF6464 !important;
}
</style>
