<template>
  <h1>hello world</h1>
</template>

<script setup>
import { onMounted } from 'vue'
import { invoke } from '@tauri-apps/api/tauri'
import { useAuthStore } from '@/store'

const authStore = useAuthStore()
console.log(authStore.token);

onMounted(() => {
  // 添加监听函数，监听 DOM 内容加载完成事件
  document.addEventListener('DOMContentLoaded', () => {
    // DOM 内容加载完成之后，通过 invoke 调用 在 Rust 中已经注册的命令
    setTimeout(() => {
      invoke('close_splashscreen')
    }, 1000)
  })
})

</script>

<style scoped>

</style>