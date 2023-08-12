import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './index.ts',
      name: 'vueComponent',
      fileName: 'vueComponent',
    },
    minify: false,
    rollupOptions: {
      external: [
        // 不对以下模块进行打包
        /@demo.*/,
        'vue',
      ],
    },
  },
})
