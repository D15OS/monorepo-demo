import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // 产物输出目录，默认为 dist。
    // outDir: 'dist',
    lib: {
      // 构建的入口文件
      entry: './index.ts',
      // 产物的生成格式，默认为 ['es', 'umd']。
      // formats: ['es', 'umd'],
      // 当产物为 umd、iife 格式时，该模块暴露的全局变量名称
      name: 'core',
      // 产物文件名称
      fileName: 'core',
    },
    // TODO:不要混淆产物代码
    minify: false,
    rollupOptions: {
      // 不对以下模块进行打包
      // external: [],
      // output: {
      //   // 在 UMD 构建模式下为这些外部化的依赖提供全局变量。？？？
      //   globals: {
      //   },
      // },
    },
  },
})
