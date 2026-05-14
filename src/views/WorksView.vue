<template>
  <div class="works">
    <div class="container">
      <header class="works-header">
        <h1 class="section-title">Work</h1>
      </header>
      <div class="works-list">
        <div v-for="work in works" :key="work.id" class="work-item" @click="$router.push(`/works/${work.id}`)">
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
  </div>
</template>

<script setup>
import { works } from '@/data/works'
</script>

<style scoped>
.works {
  padding: 80px 0;
}
.section-title {
  font-size: 44px;
  font-weight: 900;
  margin-bottom: 55px;
}
.works-list {
  display: flex;
  flex-direction: column;
}
.work-item {
  display: flex;
  gap: 18px;
  padding: 30px 0;
  border-bottom: 1px solid #E0E0E0;
  cursor: pointer;
  transition: background-color 0.3s;
}
.work-item:hover {
  background-color: #f8f8f8;
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
.work-description {
  font-size: 16px;
}

@media (max-width: 768px) {
  .work-item {
    flex-direction: column;
  }
  .work-image {
    width: 100%;
    flex: none;
  }
}
</style>
