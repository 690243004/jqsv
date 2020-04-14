# 滑动验证

canvas滑动验证码 仅仅依赖jquery

[体验地址](https://www.zdxhyangyan.cn/example/react_redux/#/biz/ValidScroller)

> 你可以在网址查看需要 接口返回的相关数据格式 

# 项目特色
- 使用typescript搭建
- 已在线上运行
- 使用mocha作为测试套件，代码覆盖率99%，放心使用
- 完美支持移动端与PC端

# 使用方法

```js
import Jqsv from "../src/index";
app!.addEventListener("click", async function() {
  if (instance) {
    if (instance.state === "loaded") {
      instance.show();
    } 
  } else {
    instance = await Jqsv(JqsvConfig, el!);
  }
});
```


# 使用效果

![](./img01.png)


# 实现思路

![](./img02.png)

# 打包心得

## 了解常见的打包模式
- commonjs : node环境的commonjs规范，commonjs仅仅定义了exports，而module.export 是 nodejs对commonjs的实现。commonjs2就是满足规范的同时进一步扩展
- amd : amd规范，适合requirejs
- this  : 通过this访问
- window : 通过window访问，适合在浏览器中
- UMD : 将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量
- jsonp ： 这是一种比较特殊的模式，适用于有extrnals依赖的时候(splitChunks)。将把入口起点的返回值，包裹到一个 jsonp 包装容器中

而对于webpack，你可以在target处设置不同的模式 : 
- node commonjs模式
- web 浏览器模式
- ...

## 构建多个目标

我在重构axios的时候，发现他们是构建两份js文件，一份 用于es模块，一份用于 commonjs模块。

查看webpack文档发现，可以这样构建多个目标

作为导出一个配置对象/配置函数的替代，你可能需要导出多个配置对象（从 webpack 3.1.0 开始支持导出多个函数）。当运行 webpack 时，所有的配置对象都会构建。例如，导出多个配置对象，对于针对多个构建目标（例如 AMD 和 CommonJS）打包一个 library 非常有用。

```js
module.exports = [{
  output: {
    filename: './dist-amd.js',
    libraryTarget: 'amd'
  },
  entry: './app.js',
  mode: 'production',
}, {
  output: {
    filename: './dist-commonjs.js',
    libraryTarget: 'commonjs'
  },
  entry: './app.js',
  mode: 'production',
}]
```


# 关于eslint 

由于typescript 力推eslint，所以决定使用eslint统一代码风格

同时，我们需要`prettier`来格式化文件，我们希望每个成员的代码格式化工具都是统一的，而不是你的编译器里面设置一个，他的编译器设置另一个.

```
cnpm i prettier -D
```

在根目录下创建 `.prettierrc.js`
```js
module.exports = {
  // 缩进格数 默认为2
  tabWidth: 2,
  // 使用tab缩进，默认false
  useTabs: false,
  // 使用分号, 默认true
  semi: false,
  // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  singleQuote: true,
  // 行尾逗号,默认none,可选 none|es5|all
  // es5 包括es5中的数组、对象
  // all 包括函数对象等所有可选
  trailingComma: 'none',
  // 对象中的空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'always',
  // 每行最多多少个字符换行
  printWidth: 120,
  // JSX标签闭合位置 默认false
  // false: <div
  //          className=""
  //          style={{}}
  //       >
  // true: <div
  //          className=""
  //          style={{}} >
  jsxBracketSameLine: true,
  parser: 'typescript'
}

```

另外，我们需要安装 :

```
cnpm i  eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint -D
```

```
cnpm install eslint eslint-config-prettier eslint-plugin-prettier babel-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

同时，在根目录下创建`.eslintrc.js`

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  plugins: ['@typescript-eslint', 'jsx-control-statements', 'prettier'],
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
    'no-console': ['warn', { allow: ['warn', 'error'] }],
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
    // 禁止tsigore目录 ?
    '@typescript-eslint/ban-ts-ignore': 0,
    // 不允许this的引用？
    '@typescript-eslint/no-this-alias': 0,
    // 设置三斜杠指令与ES6样式导入声明的首选级别
    // 关于@typescript-eslint的设置可以在 https://www.npmjs.com/package/@typescript-eslint/eslint-plugin 看到
    '@typescript-eslint/triple-slash-reference': ['error', { path: 'always', types: 'never', lib: 'never' }]
  }
}
```

> 注意 : 如果eslint检查控制台出现错误，但是编译器上没有，你需要修改vs code 的setting，将typescript 添加到`"eslint.validate" : ["typescript"]`

# 添加提交钩子

除了设置 eslint与prettier外，还需要在提交git的时候，触发eslint的检查行为。

在package.json中，设置
```json
{
  "scripts": {
    "eslint": "eslint --ext .tsx,.ts --fix ./src" 
  },
  "husky": {
    "hooks": {
      // git commit 前强制代码格式化和代码校验
      "pre-commit": "lint-staged"
    }
  },
   "lint-staged": {
    "*.{ts,tsx}": [
      "npm run eslint",
      "prettier .prettierrc.js --write",
      "git add"
    ]
  }
}
```

此外，还需要安装 

```
cnpm i husky lint-staged -D
```
- husky：在 .git/hooks 中写入 pre-commit 等脚本激活钩子，在 Git 操作时触发；
- lint-staged：参考 Git 中 staged 暂存区概念，在每次提交时只检查本次提交的文件。

# 关于prettier
prettier是一个流行的代码格式化工具的名称，它能够解析代码，使用你自己设定的规则来重新打印出格式规范的代码。

Prettier具有以下几个有优点：
- 可配置化
- 支持多种语言
- 集成多数的编辑器
- 简洁的配置项

它支持的语言有：
- JavaScript, including ES2017
- JSX
- Angular
- Vue
- Flow
- TypeScript
- CSS, Less, and SCSS
- HTML
- JSON
- GraphQL
- Markdown, including GFM and MDX
- YAML

# 发布版本

npm version patch/minor/major
npm publish

- patch：小变动，比如修复bug等，版本号变动 v1.0.0->v1.0.1
- minor：增加新功能，不影响现有功能,版本号变动 v1.0.0->v1.1.0
- major：破坏模块对向后的兼容性，版本号变动 v1.0.0->v2.0.0
