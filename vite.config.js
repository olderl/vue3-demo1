import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:[
    // 是否开启 $ref ,vue3.2的语法糖
    vue({
      refTransform:true,
      reactivityTransform:true
    }),
    ],
    server:{
      port:8080
    },
    base:'./',
})
