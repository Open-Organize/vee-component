# vee-component 为vue2+开发的一些常用组件库！

<p>
  <a href="https://yelloxing.gitee.io/npm-downloads?interval=7&packages=vee-component"><img src="https://img.shields.io/npm/dm/vee-component.svg" alt="downloads"></a>
  <a href="https://packagephobia.now.sh/result?p=vee-component"><img src="https://packagephobia.now.sh/badge?p=vee-component" alt="install size"></a>
  <a href="https://www.jsdelivr.com/package/npm/vee-component"><img src="https://data.jsdelivr.com/v1/package/npm/vee-component/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/vee-component"><img src="https://img.shields.io/npm/v/vee-component.svg" alt="Version"></a>
  <a href="https://github.com/Open-Organize/vee-component/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/vee-component.svg" alt="License"></a>
</p>

- 如何引入和使用，包括具体的组件等请查看[接口文档](http://yelloxing.gitee.io/vee-component/)

如何启动测试用例？
-----------------------------

首先安装并启动用例项目:

```bash
npm start
```

然后在浏览器中打开下列地址：

http://localhost:20000/index.html

开发需知
----------------------------

本项目基本的DOM操作基于[xhtml.js](https://github.com/yelloxing/xhtml.js)，开发中你需要查阅[xhtml.js接口文档](http://yelloxing.gitee.io/xhtml.js/)，如果在使用过程中遇到任何问题请在[Issue](https://github.com/yelloxing/xhtml.js/issues)中提问，包括新增接口等。

> 特别需要注意的是，如果你认为xhtml.js中需要增加的方法可能只会在当前项目中有益，请直接在[此处](https://github.com/Open-Organize/vee-component/blob/master/packages/xhtml/index.js)进行扩展即可！

任何一个新的组件的开发或旧组件的维护，除了在代码中添加良好的备注和[测试用例](https://github.com/Open-Organize/vee-component/tree/master/examples)中进行测试外，还应该同步[文档](https://github.com/Open-Organize/vee-component/tree/master/docs)到中。

## License

[MIT](https://github.com/Open-Organize/vee-component/blob/master/LICENSE)

Copyright (c) 2020 Open-Organize
