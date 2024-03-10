<template >
<div id="project"></div>
<h2 class="mb-5">我的作品</h2>
  <div class="row row-cols-md-2 row-cols-lg-3 gy-2 gy-md-3 gx-3">
    <div   v-for="Project in ProjectList" :key="Project.title">
      <div>
        <div class="card text-center" >
          <img :src="Project.src" class="card-img-top" :alt="Project.title" />
          <div class="card-body">
            <h5 class="card-title">{{ Project.title }}</h5>
            <p class="card-text">
              {{ Project.content }}
            </p>
            <a :href="Project.github" target="_blank" class="btn btn-dark">Github</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ProjectList = [
  {
    title: '高雄景點資訊',
    src: import.meta.env.VITE_PROJECTURL,
    skill: '利用 Vite 建立專案、使用 AJAX 撈取 API 資料、Bootstrap 格線系統排版',
    content:
      '在這個專案中，我運用了 Vite 作為建立前端專案的工具，同時透過 AJAX 技術從外部 API 撈取資料,並使用了 Bootstrap 的格線系統來實現簡單且響應式的網頁排版',
    github:'https://github.com/cgx871220/KaohSiung-Travel'  
  },{
    title: '高雄景點資訊',
    src: import.meta.env.VITE_PROJECTURL,
    skill: '利用 Vite 建立專案、使用 AJAX 撈取 API 資料、Bootstrap 格線系統排版',
    content:
      '在這個專案中，我運用了 Vite 作為建立前端專案的工具，同時透過 AJAX 技術從外部 API 撈取資料,並使用了 Bootstrap 的格線系統來實現簡單且響應式的網頁排版',
    github:'https://github.com/cgx871220/KaohSiung-Travel'  
  },{
    title: '高雄景點資訊',
    src: import.meta.env.VITE_PROJECTURL,
    skill: '利用 Vite 建立專案、使用 AJAX 撈取 API 資料、Bootstrap 格線系統排版',
    content:
      '在這個專案中，我運用了 Vite 作為建立前端專案的工具，同時透過 AJAX 技術從外部 API 撈取資料,並使用了 Bootstrap 的格線系統來實現簡單且響應式的網頁排版',
    github:'https://github.com/cgx871220/KaohSiung-Travel'  
  },{
    title: '高雄景點資訊',
    src: import.meta.env.VITE_PROJECTURL,
    skill: '利用 Vite 建立專案、使用 AJAX 撈取 API 資料、Bootstrap 格線系統排版',
    content:
      '在這個專案中，我運用了 Vite 作為建立前端專案的工具，同時透過 AJAX 技術從外部 API 撈取資料,並使用了 Bootstrap 的格線系統來實現簡單且響應式的網頁排版',
    github:'https://github.com/cgx871220/KaohSiung-Travel'  
  },{
    title: '高雄景點資訊',
    src: import.meta.env.VITE_PROJECTURL,
    skill: '利用 Vite 建立專案、使用 AJAX 撈取 API 資料、Bootstrap 格線系統排版',
    content:
      '在這個專案中，我運用了 Vite 作為建立前端專案的工具，同時透過 AJAX 技術從外部 API 撈取資料,並使用了 Bootstrap 的格線系統來實現簡單且響應式的網頁排版',
    github:'https://github.com/cgx871220/KaohSiung-Travel'  
  },
]
</script>

<style scoped lang="scss">
.card{
  box-shadow: 0 0 10px;
  transition: all .5s;
}
.card:hover{
  transform: translateY(-20px);
}
</style>