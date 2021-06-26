## 1、引入css
```html
<div style="css代码"></div>  <!-- 行间样式 -->
<!-- 页面css -->
<head>
    <style type="text/css"> <!--type="text/css" 告诉浏览器这里面是css -->
    <!-- css代码 -->
    </style>
</head>
<!-- 外部css -->
<head>
    <link rel="stylesheet" type="text/css" href="css文件位置">
</head>
```



## 2、css权重
| css | 权重 |
| --- | --- |
| !important | infinity正无穷 |
| 行间样式 | 1000 |
| id | 100 |
| class \| 属性 \| 伪类 | 10 |
| 标签 \| 伪元素 | 1 |
| 通配符 | 0 |



## 3、css代码块
``` css
font-size: 12px; /* 字体大小 */
font-weight: bold; /* 加粗 */
font-style: italic; /* 斜体 */
font-family: arial; /* 字体包 */
color: #fff; /* 字体颜色 */
color: transparent; /* 透明色 */

border: 1px solid black; /* 外边框 */
border-width: 1px;
border-style: dashed; /* 虚线 */  /* solid实线 dotted点 */
border-color: red;

/* 写出一个三角形 */
div{
    width: 0px;
    height: 0px;
    border:100 solid black;
    border-left-color: red; /* 可以改为transparent透明色 */
    border-top-color: green; /* 可以改为transparent透明色 */
    border-right-color: blue; /* 可以改为transparent透明色 */
}

text-align: center; /* 水平居中 */

/* 设置垂直居中 */
height: 200px;
line-height: 200px; /* 行高 */

text-indent: 2em; /* 空两格 */ /* 1em=1*font-size */

text-decoration: line-through; /* 中划线 */
text-decoration: none; /* 没有文本装饰（一般用于设置清除超链接的默认下划线） */
text-decoration: underline; /* 下划线 */
text-decoration: overline; /* 上划线 */

cursor: pointer; /* 光标 */ /* pointer 鼠标变成一个小手 */

a:hover {}  /* 伪类选择器 */

display: inline;/* 行级元素 */ 
```



## 4、元素类型
### 1、行级元素、内联元素 ==inline==
#### 特点:
内容决定元素所占位置
不可以通过css改变宽高
##### 例:
span   strong   em   a   del

### 2、块级元素 ==block==
#### 特点: 
读占一行
可以通过css改变宽高
##### 例:
div   p   ul   li   ol   form   address

### 3、行级块元素 ==inline-block==
#### 特点: 
内容决定大小
可以改变宽高
##### 例:
img

#### ==凡是带有inline的元素,都带有文字特性==



## 5、盒子模型
```css
padding: 1px 1px 1px 1px; /* 上  右  下  左  (顺时针) */
padding: 1px 1px; /* 上下  左右 */
padding: 1px 1px 1px; /* 上  左右  下 (中间代表左右) */
padding: 1px; /* 四个方向 */
/* margin和border-width的设置方法和padding一样 */
```

## 6、定位
```css
position: absolute; /* 绝对定位 */
/* 脱离原来位置进行定位 */
/* 相当于最近的有定位的父级进行定位，如果没有那么相对文档进行定位 */

position: relative; /* 相对定位 */
/* 保留原来位置进行定位 */
/* 相对自己原来的位置进行定位 */

/* 一般用relative作为参照物（不用relative进行定位），用absolute进行定位 */

position: fixed;/* 固定定位 */
/* 不管滚动条怎么动，它都在一个固定的位置上面 */
```

####div居中
```css
position: absolute;
left: 50%;
top: 50%;
```

---

## 7、两个经典bug

#### 1、margin塌陷
==margin塌陷用bfs解决==
#####如何触发一个盒子的bfc:(任意一个)
```css
div{
    position: absolute; /* 定位 */
    display: inline-block; /* 行级块元素 */
    float: left; /* 浮动 */
    float: right; /* 浮动 */
    overflow: hidden; /* 溢出盒子部分隐藏 */
}
```
##### 例
html代码
```html
<div class="wrapper">
    <div class="content"></div>
</div>
```
css代码
```css
.wrapper {
    margin-left: 100px;
    margin-top:100px;
    width: 100px;
    height: 100px;
    background-color: black;
    /* 解决margin塌陷 */
    overflow: hidden; /*溢出隐藏*/
}
.content {
    margin-left: 50px;
    margin-top:150px;
    width: 50px;
    height: 50px;
    background-color: green;
}
```

#### 2、margin合并
==margin合并依然用bfs解决==

---

## 8、文本处理
```css
/* 单行文本溢出隐藏 */
white-space: nowrap; /* 不换行 */
overflow: hidden; /* 溢出盒子部分隐藏 */
text-overflow: ellipsis; /* 溢出部分打点 */

/* 多行文本（做截断） */
/* 展示两行 */
height: 40px;
line-height: 20px;
overflow: hidden; /* 溢出盒子部分隐藏 */

background-image: url(); /* 背景 */

vertical-align: 1px; /* 文本对其方式 */
```