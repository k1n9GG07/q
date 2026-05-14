<template>
  <div class="not-found">
    <div class="container">
      <h1>404 - Страница не найдена</h1>
      <p>К сожалению, запрашиваемая вами страница не существует.</p>
      <router-link to="/" class="btn">Вернуться на главную</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  padding: 100px 0;
  text-align: center;
}
h1 {
  font-size: 44px;
  margin-bottom: 20px;
}
p {
  font-size: 18px;
  margin-bottom: 30px;
}
</style>
