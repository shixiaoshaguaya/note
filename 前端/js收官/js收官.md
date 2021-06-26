# 01. 快速掌握BOM对象核心技能
## 1、DOM与BOM的区别
DOM 文档对象模型  js操作文档的中介
BOM 浏览器对象模型  js操作浏览器的中介


## 2、window对象属性
innerHeight  可视区高度
innerWidth  可视区宽度
pageYoffset  纵向滚动条的滚动的距离
pageXoffset  横向滚动条的滚动的距离
screenX || screenLeft 浏览器左边距离屏幕左边的距离
screenY || screenTop  浏览器上边距离屏幕上边的距离
parent  父窗口
top 最顶层窗口
self 当前窗口引用
name 取窗口名字


## 3、window对象方法
alert()  警告框
confirm()  选择弹窗
prompt()  输入弹窗
onbeforeunload()
setInterval(fun, 1000) 计时器
setTimeout()  多久后执行
open('https://www.baidu.com', 'duyi', 'width=200, height=200')
close() 关闭窗口


## 4、Navigator对象属性
onLine 离线缓存


## 5、History对象属性
length


## 6、History对象方法
bark()  前一个URL
forward()  下一个URL
go()  前往某个页面


## 7、Screen(显示屏幕信息)


## 8、Location对象属性（url）
hash  锚点
host  主机名和端口号
hostname  主机名
href  完整url
pathname  路径
port  端口号
protocol  协议
search  查询部分(?号后)


## 9、location对象方法
assign()  加载新文档
reload()  刷新
replace()  替换

---

# 02. JavaScript必会常用知识点
## 1、浏览器的组成
用户界面
浏览器引擎
渲染引擎
网络
UI后端
Js引擎
数据存储


## 2、渲染引擎-渲染模式
过程：解析html从而构建DOM数->CSS Rule树->构建Render树->布局Render树->绘制Render树
#####控制渲染模式
```html
<!DOCTYPE html>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```


## 3、Label标签
```html
<p>
  <!-- 点击username会聚焦到输入框 -->
  <label for="demo">username</label>
  <input type="text" id="demo">
</p>
```
```JavaScript
var oLabel = document.getElementsByTagName('label')[0];
var oInput = document.getElementsById('demo');
// 点击username会执行以下两段代码
oLabel.onclick = function () {
  console.log(this);
}

oInput.onclick = function () {
  console.log(this);
}
```


## 4、属性和特性
属性包含特性
特性 DOM对象 === input 一一对应 映射关系

setAttribute() 添加属性
getAttribute() 查询属性值


## 5、 图片预加载和懒加载
### 1、预加载
```html
<style>
  div {
    width: 400px;
    height: 200px;
    border: 2px solid black;
  }
  img {
    height: 100%;
    width: 100%;
  }
</style>
<div id="demo"></div>
<script>
  var oImg = new Image();
  oImg.onload = function () {
    var  oDiv = document.getElementById('demo');
    oDiv.appendChild(this);
  }
  oImg.srv = 'https://image.baidu.com/search/detail?tn=baiduimagedetail&word=%E5%AE%A0%E7%89%A9%E5%9B%BE%E7%89%87&album_tab=%E5%8A%A8%E7%89%A9&album_id=688&ie=utf-8&fr=albumsdetail&cs=1951548898,3927145&pi=227260&pn=1&ic=0&objurl=https%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D1951548898%2C3927145%26fm%3D193%26f%3DGIF';
</script>
```
### 2、懒加载
监控滑轮事件
不断判断当前div的位置
采取预加载
把图片正式的添加到页面之中


## 6、Match.random()应用
范围：[0,1)

---

# 03. 各种运动
具体看运动文件夹

---

# 04. 数组方法
forEach(函数, this指向) => 遍历
函数(元素, 索引, 数组本身)
源码：
```JavaScript
Array.prototype.myForEach = function (func) {
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    func.apply(_this, [this[i], i, this]);
  }
}
```

filter(函数, this指向) => 过滤 => false删除(true保留) => 返回新的数组
函数(元素, 索引, 数组本身)
源码：
```JavaScript
Array.prototype.myFilter = function (func) {
  var arr = [];
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    func.apply(_this, [this[i], i, this]) && arr.push(this[i]);
  }
  return arr;
}
```

map(函数, this指向) => 修改数组的值 => 返回新数组(映射) 
函数(元素, 索引, 数组本身)
源码：
```JavaScript
Array.prototype.myMap = function (func) {
  var arr = [];
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    arr.push(func.apply(_this, [this[i], i, this]) );
  }
  return arr;
}
```

every(函数, this指向)判断数组中的元素是否都符合条件 true false
函数(元素, 索引, 数组本身)
源码：
```JavaScript
Array.prototype.myEvery = function (func) {
  var flag = true;
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    if(func.apply(_this, [this[i], i, this]) == false) {
      flag = false;
      break;
    }
  }
  return flag;
}
```

some(函数, this指向)判断数组中的元素是否都符合条件
函数(元素, 索引, 数组本身)
源码：
```JavaScript
Array.prototype.mySome = function (func) {
  var flag = false;
  var len = this.length;
  var _this = arguments[1] || window;
  for (var i = 0; i < len; i++) {
    if(func.apply(_this, [this[i], i, this]) == true) {
      flag = true;
    }
  }
  return flag;
}
```

reduce(函数, 初始化的值)
函数(前一个值，当前值, 索引, 数组本身)
源码：
```JavaScript
Array.prototype.myReduce = function (func, initialValue) {
  var len = this.length,
      _this = arguments[2] || window,
      nextValue = initialValue;
  for (var i = 0; i < len; i++) {
    nextValue = func.apply(_this, [nextValue ,this[i], i, this])
  }
  return nextValue;
}
```

reduceRight()与reduce()遍历方向相反

---