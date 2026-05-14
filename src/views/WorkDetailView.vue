<template>
  <div v-if="work" class="work-detail">
    <div class="container">
      <router-link to="/works" class="back-link">
        <i class="fa-solid fa-arrow-left"></i> Back to Works
      </router-link>
      
      <h1 class="work-detail-title">{{ work.title }}</h1>
      
      <div class="work-detail-meta">
        <span class="work-detail-year">{{ work.year }}</span>
        <span class="work-detail-category">{{ work.category }}</span>
      </div>
      
      <p class="work-detail-description">{{ work.fullDescription }}</p>
      
      <div class="work-content-blocks">
        <div v-for="(block, index) in work.content" :key="index" class="content-block">
          <p v-if="block.type === 'text'" class="content-text">{{ block.value }}</p>
          <div v-else-if="block.type === 'image'" class="content-image">
            <img :src="block.value" :alt="work.title">
          </div>
          <h2 v-else-if="block.type === 'subtitle'" class="content-subtitle">{{ block.value }}</h2>
          <h3 v-else-if="block.type === 'subtitle2'" class="content-subtitle-2">{{ block.value }}</h3>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container error-container">
    <h2>Работа не найдена</h2>
    <p>К сожалению, работа с ID "{{ $route.params.id }}" не найдена в нашей базе данных.</p>
    <router-link to="/works" class="btn">Вернуться к списку работ</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { works } from '@/data/works'
import { computed, watchEffect } from 'vue'

const route = useRoute()
const work = computed(() => works.find(w => w.id === route.params.id))

watchEffect(() => {
  if (!work.value && route.params.id) {
    console.error(`[WorkDetail] Ошибка: Работа с ID "${route.params.id}" не найдена.`)
  }
})
</script>

<style scoped>
.error-container {
  padding: 100px 0;
  text-align: center;
}
.error-container h2 {
  margin-bottom: 20px;
}
.error-container p {
  margin-bottom: 30px;
}
.work-detail {
  padding: 80px 0;
}
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  color: #21243D;
  font-weight: 500;
}
.back-link:hover {
  color: #FF6464;
}
.work-detail-title {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 30px;
}
.work-detail-meta {
  display: flex;
  align-items: center;
  gap: 17px;
  margin-bottom: 23px;
}
.work-detail-year {
  background: #FF7C7C;
  color: white;
  font-size: 18px;
  font-weight: 900;
  padding: 0 10px;
  border-radius: 16px;
}
.work-detail-category {
  font-size: 20px;
}
.work-detail-description {
  font-size: 16px;
  margin-bottom: 46px;
}
.content-block {
  margin-bottom: 30px;
}
.content-text {
  font-size: 16px;
  margin-bottom: 20px;
}
.content-image {
  width: 100%;
  margin: 30px 0;
  border-radius: 6px;
  overflow: hidden;
}
.content-image img {
  width: 100%;
  height: auto;
}
.content-subtitle {
  font-size: 30px;
  font-weight: 500;
  margin: 40px 0 20px;
}
.content-subtitle-2 {
  font-size: 24px;
  font-weight: 500;
  margin: 30px 0 15px;
}
</style>
