<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import GiscusComment from './components/GiscusComment.vue'
import HomeMotion from './components/HomeMotion.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <ClientOnly>
        <HomeMotion />
      </ClientOnly>
      <!-- 官方明月浩空播放器脚本 -->
      <script type="text/javascript" id="myhk" src="https://myhkw.cn/api/player/177994784754" key="177994784754" m="1"></script>
    </template>

    <template #doc-footer-before>
      <GiscusComment />
    </template>
  </Layout>
</template>
