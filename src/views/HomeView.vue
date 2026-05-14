<template>
  <div class="home">
    <section class="hero">
      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Hi, I am John,<br>Creative Technologist</h1>
          <p class="hero-description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button class="btn">Download Resume</button>
        </div>
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300" alt="John">
        </div>
      </div>
    </section>

    <section class="recent-posts">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Recent posts</h2>
          <a href="#" class="view-all">View all</a>
        </div>
        <div class="posts-grid">
          <div class="post-card">
            <h3 class="post-title">Making a design system from scratch</h3>
            <div class="post-meta">
              <span>12 Feb 2020</span>
              <div class="post-divider"></div>
              <span>Design, Pattern</span>
            </div>
            <p class="post-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div class="post-card">
            <h3 class="post-title">Creating pixel perfect icons in Figma</h3>
            <div class="post-meta">
              <span>12 Feb 2020</span>
              <div class="post-divider"></div>
              <span>Figma, Icon Design</span>
            </div>
            <p class="post-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-works">
      <div class="container">
        <h2 class="section-title">Featured works</h2>
        <div class="works-list">
          <div v-for="work in featuredWorks" :key="work.id" class="work-item" @click="$router.push(`/works/${work.id}`)">
            <div class="work-image">
              <img :src="work.image" :alt="work.title">
            </div>
            <div class="work-content">
              <h3 class="work-title">{{ work.title }}</h3>
              <div class="work-meta">
                <span class="work-year">{{ work.year }}</span>
                <span class="work-category">{{ work.category }}</span>
              </div>
              <p class="work-description">{{ work.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { works } from '@/data/works'
import { computed } from 'vue'

const featuredWorks = computed(() => works.slice(0, 3))
</script>

<style scoped>
.hero {
  padding: 140px 0 71px;
}
.hero-container {
  display: flex;
  align-items: center;
  gap: 115px;
}
.hero-content {
  flex: 1;
}
.hero-title {
  font-size: 44px;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 40px;
}
.hero-description {
  font-size: 16px;
  margin-bottom: 38px;
}
.hero-image {
  flex: 0 0 243px;
  height: 243px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: -5px 13px 0 0 #EDF7FA;
}
.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recent-posts {
  background: #EDF7FA;
  padding: 32px 0;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
}
.section-title {
  font-size: 22px;
  font-weight: 400;
}
.view-all {
  color: #00A8CC;
  font-size: 16px;
}
.posts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.post-card {
  background: white;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(187, 225, 250, 0.25);
}
.post-title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 17px;
}
.post-meta {
  display: flex;
  gap: 26px;
  margin-bottom: 11px;
  font-size: 18px;
}
.post-divider {
  width: 1px;
  height: 21px;
  background: #000;
}
.post-description {
  font-size: 16px;
}

.featured-works {
  padding: 30px 0 83px;
}
.works-list {
  display: flex;
  flex-direction: column;
  gap: 31px;
  margin-top: 22px;
}
.work-item {
  display: flex;
  gap: 18px;
  padding-bottom: 15px;
  border-bottom: 1px solid #E0E0E0;
  cursor: pointer;
}
.work-image {
  flex: 0 0 246px;
  height: 180px;
  border-radius: 6px;
  overflow: hidden;
}
.work-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.work-content {
  flex: 1;
}
.work-title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 16px;
}
.work-meta {
  display: flex;
  align-items: center;
  gap: 26px;
  margin-bottom: 17px;
}
.work-year {
  background: #142850;
  color: white;
  font-size: 18px;
  font-weight: 900;
  padding: 2px 12px;
  border-radius: 16px;
}
.work-category {
  font-size: 20px;
  color: #8695A4;
}

@media (max-width: 768px) {
  .hero-container {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
    padding: 40px 0;
  }
  .posts-grid {
    grid-template-columns: 1fr;
  }
  .work-item {
    flex-direction: column;
  }
  .work-image {
    flex: none;
    width: 100%;
  }
}
</style>
