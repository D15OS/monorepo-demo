const path = require('path');

module.exports = {
  // 将浏览器 API、ES API 和 Node API 看做全局变量，不会被特定的规则(如 no-undef)限制。
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parserOptions: {
    // 配置 TypeScript 解析器
    parser: '@typescript-eslint/parser',
    // 通过 tsconfig 文件确定解析范围，这里需要绝对路径，否则子模块中 eslint 会出现异常
    project: path.resolve(__dirname, 'tsconfig.eslint.json'),
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    // typescript
    '@typescript-eslint/semi': 'off',
    // eslint
    'linebreak-style': 'off',
  },
};
