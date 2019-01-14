# 混合App中的前端架构

### 安装

```
npm install 
```

建议使用npm，如果你偏要用 yarn 的话，可能会遇到无法热更新的问题（包括但不仅限于热更新问题），对于热更新问题暂时可以在 package.json 里增加 resolutions 字段锁版本解决：

```json
"resolutions": {
  "webpack-dev-server": "3.1.10"
}
```

### 启动

```html
npm run dev
```

### 格式化

> 使用eslint，规则详见.eslintrc.js

````html
npm run lint
````

### 打包

````html
npm run build
````

### 注意

[基于vue风格指南](https://cn.vuejs.org/v2/style-guide/)

##### 1.  总是用 key 配合 v-for。

##### 2.  永远不要把 v-if 和 v-for 同时用在同一个元素上

##### 3.  为组件样式设置作用域，样式使用 `scoped` 特性，并且在样式中避免使用元素选择器。

##### 	在 `scoped` 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。

### 开发规范

[基于vue风格指南](https://cn.vuejs.org/v2/style-guide/)

##### 1. 组件数据

```js
// bad 不建议使用
export default {
  data: {
    foo: 'bar'
  }
}

// good 建议使用
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```

##### 2. 单文件组件文件名称

单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。

```
// bad 不建议使用
mycomponent.vue
myComponent.vue

// good 建议使用
my-component.vue
MyComponent.vue

// used 项目中统一使用
MyComponent.vue
```

##### 3. 紧密耦合的组件名

和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

```
// bad
components/
|- TodoList.vue
|- TodoItem.vue
└─ TodoButton.vue

// good
components/
|- TodoList.vue
|- TodoListItem.vue
└─ TodoListItemButton.vue
```

##### 4. 组件名中的单词顺序

组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。

```
// bad
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
└─ TermsCheckbox.vue

// good
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
└─ SettingsCheckboxLaunchOnStartup.vue
```

##### 5. 自闭合组件

在单文件组件中没有内容的组件应该是自闭合的。

```html
<!-- bad -->
<my-component></my-component>

<!-- good -->
<my-component />
```

##### 6. Prop 名大小写

在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case，但是为了开发方便搜索，项目中在模板中使用 camelCase。

```js
// bad
export default {
  props: {
    'greeting-text': String
  }
};

// good
export default {
  props: {
     greetingText: String
  }
}

<!-- good -->
<welcome-message greeting-text="hi" />
// 或者
<welcome-message greetingText="hi" />
    
<!-- used -->
<welcome-message greetingText="hi" />
```

##### 7. Props 换行

多个 Props 的元素应该分多行撰写，每个 Props 一行，闭合标签单起一行。

```html
<!-- bad -->
<my-component foo="a" bar="b" baz="c" />

<!-- good -->
<my-component
  foo="a"
  bar="b"
  baz="c"
/>
```

##### 8. Prop 定义

Prop 定义应该尽量详细， 至少需要指定其类型。

````js
// bad
export default {
  props: {
    'greeting-text': String
  }
};

// good
export default {
  props: {
     greetingText: {
        type: String,
        required: true,
        validator: function (value) {
          return [
            'syncing',
            'synced',
            'version-conflict',
            'error'
          ].indexOf(value) !== -1
        }
     }
  }
}
````

##### 9. 指令缩写

指令缩写，用 `:` 表示 `v-bind:` ，用 `@` 表示 `v-on:`

```html
<!-- bad -->
<input
  v-bind:value="value"
  v-on:input="onInput"
>

<!-- good -->
<input
  :value="value"
  @input="onInput"
>
```

##### 10. Props 顺序

标签的 Props 应该有统一的顺序，依次为指令、属性和事件。

```html
<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  slot="slotName"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>
```

##### 11. 组件选项的顺序

组件选项应该有统一的顺序。

```js
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data() {},

  computed: {},

  watch: {},

  beforeCreate () {},
    
  created() {},

  beforeMount () {},
    
  mounted() {},

  beforeUpdate () {},
  
  updated () {},

  activated () {},
    
  deactivated () {},
    
  beforeDestroy () {},

  destroyed() {},

  methods: {}
};
```

##### 12. 组件选项中的空行

组件选项较多时，建议在属性之间添加空行。

```js
export default {
  computed: {
    formattedValue() {
      // ...
    },

    styles() {
      // ...
    }
  },

  methods: {
    onInput() {
      // ...
    },

    onChange() {
      // ...
    }
  }
};
```

##### 13. 单文件组件顶级标签的顺序

单文件组件应该总是让顶级标签的顺序保持一致，且标签之间留有空行。

```html
<template>
...
</template>

<script>
/* ... */
</script>

<style>
/* ... */
</style>
```

### 约定规范

##### 1.路由全小写

````
// bad 
http://localhost:8080/goodDetail

// bad
http://localhost:8080/good/detail
````

##### 2. 路由与views文件名对应，一级路由对应index.vue

````
http://localhost:8080/good/detail

views/Good
|- index.vue
|- Detail.vue
└─ children/GoodItem.vue
````

##### 3. 公共可复用的组件统一放在`components`文件中

##### 4. 公共样式以`g-`开头

### 待完善

1. SSR
2. 页面切换动画transition, 页面会从下往上顶一下
3. 自定义单例模式Toast
4. 运行环境随时检查代码； Ctrl+S保存时自动格式化eslintrc风格代码；indent-style: tab；

### 说明

##### 1.不用rem

为了与样式库与ui组件库保持一致，开发中尽量使用flex和百分比布局，在开发中实际大小是设计稿的一半，
eg：设计稿某图片宽30，实际写15px，设计稿某图片宽15，实际写8px（注意！向上取整）

2 建议使用npm按照