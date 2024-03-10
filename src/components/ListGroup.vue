<template>
  <div class="list-group">
    <RouterLink
      :to="{ query: {title:Skill.title,context:Skill.context} }"
      class="list-group-item list-group-item-action list-group-item-dark"
      aria-current="true"
      v-for="Skill in SkillArray"
      :key="Skill.title"
    >
      {{ Skill.title }}
    </RouterLink>
  </div>
</template>

<script  setup lang="ts">


import {RouterLink} from 'vue-router'

const SkillArray = [
  {
    'title':'Html',
    'context':['熟悉 HTML5 標籤及其用法','具備良好的結構化網頁能力','熟悉表單處理和多媒體內容嵌入']
  },
  {
    'title':'CSS',
    'context':['理解 CSS 盒模型與排版概念',' 能夠設計響應式網頁佈局','掌握 CSS 選擇器和層級樣式']
  },
  {
    'title':'JavaScript',
    'context':['理解 JavaScript 基本語法和概念','能夠處理事件處理和互動性程式設計','懂得使用 AJAX 和 API 與後端進行互動']
  },
  {
    'title':'Vue',
    'context':['掌握 Vue.js 框架的基本原理和用法','理解元件化開發和單頁應用概念','能夠使用 Vite 建立專案和開發應用']
  },
  {
    'title':'Bootstrap',
    'context':['熟悉 Bootstrap 的網格系統和元件','能夠運用 Bootstrap 快速建立響應式網頁','知曉如何自訂樣式並擴充套件 Bootstrap 功能']
  },
  {
    'title':'Git',
    'context':['熟悉Git的基本概念','能夠透過Git進行版本控制及管理','具備Git基本指令操作']
  }
]
</script>
