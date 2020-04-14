module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  // 你的脚本运行在什么地方 ?
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true
  },
  // 额外的全局变量
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  // rules：开启规则和发生错误时报告的等级
  // 0或'off'：关闭规则。
  // 1或'warn'：打开规则，并且作为一个警告（并不会导致检查不通过）。
  // 2或'error'：打开规则，并且作为一个错误 (退出码为1，检查不通过)。
  rules: {
    // 添加自定义规则
    'prettier/prettier': 1,
    // 是否能使用console.log
    'no-console':2,
    // 必须使用全等
    eqeqeq: ['warn', 'always'],
    // 首选const
    'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
    // 缩进
    '@typescript-eslint/indent': ['error', 2, { VariableDeclarator: 2, SwitchCase: 2 }],
    // 是否允许定义没有引用的变量
    '@typescript-eslint/no-unused-vars': 0,
    // 估计是驼峰命名
    '@typescript-eslint/interface-name-prefix': 0,
    // 显示成员的可访问性
    '@typescript-eslint/explicit-member-accessibility': 0,
    // 无三重斜杠引用
    '@typescript-eslint/no-triple-slash-reference': 0,
    // 函数是否一定要返回什么东西
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    // 禁止tsigore目录 ?
    '@typescript-eslint/ban-ts-ignore': 0,
    // 不允许this的引用？
    '@typescript-eslint/no-this-alias': 0,
    // 设置三斜杠指令与ES6样式导入声明的首选级别
    // 关于@typescript-eslint的设置可以在 https://www.npmjs.com/package/@typescript-eslint/eslint-plugin 看到
    '@typescript-eslint/triple-slash-reference': ['error', { path: 'always', types: 'never', lib: 'never' }]
  }
}
